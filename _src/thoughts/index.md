---
title: Thoughts - Jeana Clark Blog
description: Portfolio of Designer, Developer, Accessibility Advocate, Jeana Clark
layout: free-form.njk
sectionHeader: Thoughts
permalink: /thoughts/
eleventyNavigation:
  key: Thoughts
  order: 6
---


<ul> 
 {% for post in collections.thoughts | reverse %}
   <li>
     <a class="post-link" href="{{ post.url }}">{{ post.data.title }}</a>
     <time class="posted-on" datetime="{{ post.date.toISOString() }}">
       {{ post.date | readableDate }}
     </time>
   </li>
 {% endfor %}
</ul>
