---
title: Design and engineering solve different problems; AI initiatives are forgetting that 
description: When using AI, designers are adapting to engineering workflows because they're often the only ones available.
sectionHeader: Thoughts
layout: blog.njk
date: 2026-04-15
categories: ["ai","design","engineering"]
tags: thoughts
---

When organizations adopt AI through engineering workflows, design work gets pulled into the pipeline, turned into a prompt generator for code, or just another way to produce artifacts faster. Designers adapt to those workflows because they’re often the only ones available, but that adaptation shifts the focus away from the kind of decision-making design is supposed to do.

The overlap between design and engineering is important, and it can improve decision-making on both sides. When designers understand how engineers build, code, and test, they make better design decisions. When engineers understand design thinking, they build more thoughtfully. But that overlap isn’t the same as doing the same work, or using the same workflows.

The earliest gains from AI have shown up in engineering through faster code generation, automated pipelines, and improved system efficiency. That’s not surprising. Engineering work already optimizes for **speed** and **output**, and AI accelerates both.

When engineering leads AI exploration across an organization, their workflows, and their optimization targets, shape the entire process:

* Organizations choose tools based on how well they fit into engineering pipelines  
* Teams measure success through speed and output  
* Developers design workflows around shipping code

When designers adopt those tools, the focus shifts toward speed and deliverability, and away from the decisions design is supposed to be making:

* Should we build this feature at all?
* Who will this exclude?
* What breaks when the happy path fails?

That’s the work these workflows don’t leave space for.

## Design work doesn’t start where engineering workflows do

When organizations ask designers to adopt CLI tools, git-based workflows, and code-generation pipelines, the work gets treated as modernization—mostly about learning new tools and moving faster.

But design work doesn't start where those tools start. 

It starts earlier, in ambiguity, competing constraints, and questions that don't have clear answers yet. It makes sense of a problem space before committing to a solution. That requires a different process, not a faster version of an engineering one.

When designers are handed engineering workflows, the work starts to change:

* More time goes into learning tools instead of doing the work  
* Teams start optimizing for output over decision quality  
* The value design creates (risk reduction, problem framing, shared understanding) gets harder to see and easier to cut

This doesn't happen because organizations explicitly decide that design should work like engineering. The system produces that outcome on its own when only one discipline shapes the tools and workflows.

## What design work is actually doing

Design work makes better decisions before anything is built.

It identifies what not to build, surfaces risks before they become expensive, and creates a shared understanding so teams can build confidently in the right direction. The same holds true whether designers are choosing navigation patterns that work for unfamiliar users, structuring content hierarchy for screen readers, or determining which research questions to ask before designing a new feature. Slowing down these early decisions often speeds up delivery overall, by preventing rework and late-stage failures.

You can see this most clearly in accessibility work.

Teams can generate a UI quickly. They can generate something that passes automated checks and scans. Passing a test is not the same as being functional for someone using a screen reader, a switch device, or voice control in a context that the tool never modeled or coded for.

Those failures don’t show up as code errors. They show up later as broken experiences for real people.

Finding those failures requires judgment, pattern recognition, and domain knowledge. It requires understanding both the interaction and the person on the other side. Faster output doesn’t solve that problem.

Speeding up the wrong part doesn't help; it just gets you to the wrong place faster.

## A different kind of use

This isn’t an argument against using AI in design. It’s an argument for using AI in ways that match how design actually works.

Using AI to generate code faster doesn't make the result more accessible. Using AI to pressure-test an interaction does. That questioning, *What breaks for keyboard-only users? Where does focus order fall apart? What will a screen reader announce?*, extends the thinking already happening.

That’s AI acting as a thinking partner, not a production tool.

When used well, AI can support the kind of thinking that design requires by:

* surfacing risks earlier  
* challenging assumptions  
* exploring edge cases  
* synthesizing research

In accessibility work, a decision made early in the process about interaction patterns, component structure, and content hierarchy, can prevent failures that no downstream tooling will catch. Used that way, AI supports judgment instead of replacing it.

The more important question for any AI initiative isn’t just *“How do we go faster?”* It’s *“Which parts of the work improve with AI—and which parts need to remain slow?”*

Design and accessibility practitioners are well-positioned to answer that. But only if they're in the room when the questions are asked.

What's missing in many organizations is recognition that designers bring a different approach, one that surfaces risks around usability, comprehension, and accessibility, and measures success through decision quality rather than output speed alone.

That's not a soft skill. It's infrastructure. It's the foundational thinking that prevents costly failures and ensures what gets built actually works for people.

## What shared work actually requires

The goal isn’t to shift AI from being engineering-led to design-led. That would create a different kind of imbalance. Engineering-only approaches over-optimize for speed; design-only approaches can over-index on open-ended exploration.

Product development is a shared system of decisions, not just execution. AI adoption needs to be **co-led across engineering, design, and product**.

In practice, that means:

* **Evaluate AI tools across engineering, design, and product workflows:** Does this tool help engineers code faster •and* support designers in exploring alternatives, pressure-testing decisions, and surfacing edge cases?
* **Define success in a way that includes decision quality:** Look at rework, whether accessibility issues are caught early or late, and whether research actually changes direction
* **Be explicit about which kinds of thinking need protection:** Call out which parts of the process should stay slow and exploratory, and why that slowness matters
* **Involve both disciplines when selecting tools and defining workflows:** Don’t bring designers in after decisions are made, include them in defining how tools are evaluated and selected

AI shouldn’t just make teams faster. It should help them make better decisions. That only happens when design, engineering, and product shape how AI is used together, not when one is left adapting to how the others work.
