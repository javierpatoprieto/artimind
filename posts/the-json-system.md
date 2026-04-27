---
slug: the-json-system
title_b: "The JSON system"
title_it: "that 10x'd our editorial work"
category: process
categoryLabel: Process
date: 2026-04-22
readtime: "6 min read"
excerpt: "A structured prompt is the difference between a one-off lucky generation and a reproducible visual language. Here's the schema we've been refining for two years."
coverFill: fill-1
tags: [prompts, json, workflow, midjourney]
related: [last-train-breakdown, kling-3-deep-dive]
---

Most AI editorial work fails for a single reason: *the prompt is unstructured*. A loose paragraph, a few keywords, a couple of style references thrown in. The result is one lucky generation that nobody can reproduce — not even the person who wrote it.

At Artimind we treat every concept as a **structured object** before it touches a generation tool. The result: same model, same atmosphere, same color grade, frame after frame, season after season.

## The schema in seven fields

Every prompt fits in this JSON shape:

```
"subject": { primary, wardrobe, expression, pose, ethnicity_features, hair_makeup },
"environment": { location, time_of_day, weather_atmosphere, depth_layers },
"photography": { camera, lens, shutter_aperture, lighting, composition },
"cinema": { color_grade, film_stock_emulation, aspect_ratio, grain_texture },
"vibe": { mood_keywords, references, narrative_implication },
"constraints": { must_include, consistency_anchors },
"negative": ["plastic skin", "smiling", "centered composition", ...]
```

### Why seven and not five

The first version of this had five fields. We kept losing the cinematic grade between drops, so we split *cinema* from *photography*. Then we kept losing model consistency across a series, so we added *constraints* with explicit consistency anchors.

Five fields is enough for a single image. **Seven is what you need for a body of work.**

## The discipline of negation

> If you're not using a 6+ item negative prompt, you're leaving 30% of the result on the table.

The negative prompt is where most editorial AI fails. Default models love symmetric faces, soft uniform light, plastic skin and centered composition. *All of which is the opposite of editorial.*

Our standard negative list:

- plastic skin
- smiling
- centered composition
- soft uniform beauty lighting
- saturated colors
- warped hands
- frontal flash
- obvious AI tells

## From JSON to image

Once the JSON is locked, we ask Claude (or GPT) to compress it into a single Midjourney prompt under 100 words, prioritizing the *photography* and *cinema* fields. Why 100 words: longer prompts dilute attention. Why those two fields: they carry the visual signature.

From there: generate 6-8 variations, pick 1-2 keepers, upscale with Magnific, color grade in Photoshop. **~ 12-18 minutes per final image.**

---

*This is the system behind every editorial drop on the studio. The next post breaks down a single piece — Last Train, Tokyo 2089 — frame by frame using this exact JSON.*
