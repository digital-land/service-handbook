---
title: Guides
order: 6
---

<ul class="govuk-list govuk-list--bullet">
	{% for key, guide in collections.nestedPages['guides'].children %}
		<li><a class="govuk-link" href="{{ guide.url }}">{{ guide.title }}</a></li>
	{% endfor %}
</ul>