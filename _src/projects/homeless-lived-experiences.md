---
title: Centering lived experiences - Jeana Clark Portfolio
description: Portfolio of Designer, Developer, Accessibility Advocate, Jeana Clark

layout: free-form.njk
modifier: Projects
sectionHeader: Projects
---


<h2 class="case-study--title">Designing a housing-risk question around lived experience—not labels</h2>

<p class="case-study--impact">I identified a gap between how a system defines homelessness and how people actually experience it—and redesigned the question to close that gap.</p>

## Background

A critical eligibility question in a form that would speed up processing asked:

“Are you currently homeless?” (Yes / No)

<figure>

  <img class="projects--img-sm" src="/assets/img/homeless-before.png" alt="Screenshot of form question showing yes or no answers to the question are you currently homeless">

  <figcaption> 
      Screenshot of the initial homeless question question.
  </figcaption>

</figure>


Answering this question requires users to interpret a policy definition and apply it to their situation.

That’s a high burden for a single question—and creates a real risk that people exclude themselves from services they qualify for.

While doing desk research, I came across an online post from someone living in their truck. They answered “No” to this question because they did not consider themselves homeless—despite meeting the system's definition.

Their comment exposed a core issue:

The form depended on users to translate their lived experience into institutional language, relying on definitions and criteria they didn’t know and didn’t have time to research.

## My work

My work wasn’t just changing the language in a question. I reframed the problem as a system design issue.

Instead of asking users to determine whether they “are homeless,” I proposed a model where users describe their situation and the system determines eligibility based on their input.

I validated this direction through additional desk research and collaboration with content and policy stakeholders. That work confirmed the issue wasn’t the definition. The definition itself was already broad, but it still relied on users to interpret it. The burden of interpretation was in the wrong place.

I redesigned the interaction to remove that burden from the user. The question became a single, multi-select input with plain-language scenarios that reflect real living conditions. At the same time, I eliminated conditional branching, simplifying both the experience and the underlying logic.

There was initial resistance to changing the established form language. Alignment came from clearly framing the risk: the existing approach prioritized policy clarity over response accuracy. Shifting to a situation-based model better supported both.

**What I changed:**

- Before: “Are you currently homeless?” Yes/No, with follow-up branching  
- After: “Which of these statements best describes your living situation?” (Select all that apply)

<figure aria-describedby="living-situation-transcript">

  <img  class="projects--img"  src="/assets/img/homeless-after.png" alt="Screenshot of form question asking users to describe their housing situation">

  <figcaption> 
      Screenshot of the revised living situation question.
  </figcaption>

</figure>

  <details id="living-situation-transcript">
    <summary>Show full text from screenshot</summary>

    <p>Which of these statements best describes your living situation? (Select all that apply).</p>

    <ul>
      <li>I live or sleep overnight in a place that is not meant for regular sleeping (e.g., a car, park, abandoned building, bus station, train station, airport, or camp ground)</li>
    
      <li>I live in a shelter (e.g., a hotel or motel that is meant for temporary stays).</li>
    
      <li>I am staying with a friend or family member, because I am unable to own a home right now.</li>
    
      <li>In the next 30 days, I will have to leave a facility, like a homeless shelter.</li>
      
      <li>In the next 30 days, I will lose my home (Note: This selection includes any house, apartment, trailer, or other living space that you own, rent, or live in without paying rent, any hotels or motels that are meant for temporary stays, or a living space that you share with others.)</li> 
    
      <li>None of these situations apply to me. (Note: We understand that you may have other housing risks not listed here. If you feel comfortable sharing more about your situation, you can check 'other' and specify in the space provided. Or you can check 'other' and not include any details. We will use this information only to prioritize your request.) </li>
    
      <li>Other (specify)</li>
    </ul>
  </details>



## Outcome

This change extended beyond the original form. Form stakeholders made these updates in other paper forms. And the organization's design system formalized the housing situation questions as a reusable pattern—aligning how housing risk is captured across systems.

- Reduced the risk of people excluding themselves from services they qualify for 
- Removed the need for users to interpret policy language
- Simplified the form by eliminating conditional branching  
- Improved clarity in a sensitive interaction 

## Pattern across my work

I look for places where systems rely on users to resolve ambiguity—and redesign them so the system carries that responsibility instead.