// build-posts.js
// Parses /posts/*.md files and generates /posts.json for the Artimind landing.
//
// Usage: node build-posts.js
// Run after writing or editing any post in the /posts folder.
//
// Each post MD file should have YAML frontmatter like:
//
// ---
// slug: my-post
// title_b: "MY POST"
// title_it: "an italic subtitle"
// category: process
// categoryLabel: Process
// date: 2026-04-22
// readtime: "6 min read"
// excerpt: "A short summary that appears in the listing."
// coverFill: fill-1
// tags: [prompts, json, workflow]
// related: [other-post-slug]
// ---
//
// Body content goes here in markdown.

const fs = require('fs');
const path = require('path');

const POSTS_DIR = path.join(__dirname, 'posts');
const OUTPUT_FILE = path.join(__dirname, 'posts.json');

// --- Tiny frontmatter parser (no dependencies) ---
function parseFrontmatter(content) {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
  if (!match) return { meta: {}, body: content };

  const yamlBlock = match[1];
  const body = match[2];
  const meta = {};

  yamlBlock.split('\n').forEach(line => {
    if (!line.trim()) return;
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) return;

    const key = line.substring(0, colonIdx).trim();
    let value = line.substring(colonIdx + 1).trim();

    // Strip wrapping quotes
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    // Parse arrays — [a, b, c] or YAML list (next lines starting with "- ")
    if (value.startsWith('[') && value.endsWith(']')) {
      value = value.slice(1, -1).split(',').map(s => s.trim().replace(/^["']|["']$/g, '')).filter(Boolean);
    }

    meta[key] = value;
  });

  return { meta, body };
}

// --- Tiny markdown to HTML converter (sufficient for our needs) ---
function mdToHtml(md) {
  let html = md.trim();

  // Code blocks ```...```
  html = html.replace(/```([\s\S]*?)```/g, (_, code) => {
    // Highlight JSON keys/strings if it looks like JSON
    let highlighted = code.trim()
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    highlighted = highlighted.replace(/("[\w_]+")(\s*:)/g, '<span class="k">$1</span>$2');
    highlighted = highlighted.replace(/:\s*("[^"]*")/g, ': <span class="s">$1</span>');
    return `<pre><code>${highlighted}</code></pre>`;
  });

  // Headings
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');

  // Blockquotes
  html = html.replace(/^&gt; (.+)$/gm, '<blockquote>$1</blockquote>');
  html = html.replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>');

  // Bold + italic syntax (already raw HTML allowed in body if you write inline <strong>/<em>)
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '<em>$1</em>');

  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  // Horizontal rules
  html = html.replace(/^---$/gm, '<hr/>');

  // Lists — gather consecutive list items
  html = html.replace(/((?:^[*-] .+(?:\n|$))+)/gm, (block) => {
    const items = block.trim().split('\n').map(l => l.replace(/^[*-]\s+/, '').trim());
    return '<ul>' + items.map(i => `<li>${i}</li>`).join('') + '</ul>';
  });
  html = html.replace(/((?:^\d+\. .+(?:\n|$))+)/gm, (block) => {
    const items = block.trim().split('\n').map(l => l.replace(/^\d+\.\s+/, '').trim());
    return '<ol>' + items.map(i => `<li>${i}</li>`).join('') + '</ol>';
  });

  // Paragraphs — wrap remaining lines
  html = html.split(/\n\n+/).map(block => {
    const trimmed = block.trim();
    if (!trimmed) return '';
    if (trimmed.startsWith('<')) return trimmed;
    return `<p>${trimmed.replace(/\n/g, '<br/>')}</p>`;
  }).join('\n');

  return html;
}

// --- Format date as readable string ---
function formatDate(dateStr) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
                  'July', 'August', 'September', 'October', 'November', 'December'];
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

// --- Estimate reading time ---
function estimateReadtime(text) {
  const words = text.replace(/<[^>]+>/g, '').split(/\s+/).length;
  const min = Math.max(1, Math.round(words / 220));
  return `${min} min read`;
}

// --- Main build ---
function build() {
  if (!fs.existsSync(POSTS_DIR)) {
    console.error(`✗ Directory not found: ${POSTS_DIR}`);
    process.exit(1);
  }

  const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.md'));
  if (files.length === 0) {
    console.warn('⚠ No .md files in /posts. Generating empty posts.json.');
    fs.writeFileSync(OUTPUT_FILE, '[]');
    return;
  }

  const posts = [];
  files.forEach(file => {
    const filepath = path.join(POSTS_DIR, file);
    const content = fs.readFileSync(filepath, 'utf-8');
    const { meta, body } = parseFrontmatter(content);

    if (!meta.slug) {
      console.warn(`⚠ Skipping ${file} — missing required field "slug"`);
      return;
    }

    posts.push({
      slug: meta.slug,
      title_b: meta.title_b || meta.title || '',
      title_it: meta.title_it || '',
      category: meta.category || 'general',
      categoryLabel: meta.categoryLabel || meta.category || 'General',
      date: meta.date || '',
      dateFormatted: formatDate(meta.date),
      readtime: meta.readtime || estimateReadtime(body),
      excerpt: meta.excerpt || '',
      coverFill: meta.coverFill || 'fill-1',
      tags: Array.isArray(meta.tags) ? meta.tags : [],
      related: Array.isArray(meta.related) ? meta.related : [],
      body: mdToHtml(body)
    });

    console.log(`✓ ${file} → ${meta.slug}`);
  });

  // Sort by date desc
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(posts, null, 2));
  console.log(`\n✓ Generated ${posts.length} posts → posts.json`);
}

build();
