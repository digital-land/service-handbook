---
title: How we work
order: 5
---

<ul class="govuk-list govuk-list--bullet">
  {% for key, guide in collections.nestedPages['how-we-work'].children %}
    <li><a class="govuk-link" href="{{ guide.url }}">{{ guide.title }}</a></li>
  {% endfor %}
</ul>