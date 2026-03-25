---
title: Research and design
order: 7
---
{% from "govuk/components/warning-text/macro.njk" import govukWarningText %}

{{ govukWarningText({
  text: "This page is under construction",
  iconFallbackText: "Warning"
}) }}

<ul class="govuk-list govuk-list--bullet">
  {% for key, guide in collections.nestedPages['research-and-design'].children %}
    <li><a class="govuk-link" href="{{ guide.url }}">{{ guide.title }}</a></li>
  {% endfor %}
</ul>