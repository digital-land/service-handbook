---
title: What we do
order: 4
---
{% from "govuk/components/warning-text/macro.njk" import govukWarningText %}

{{ govukWarningText({
  text: "This page is under construction",
  iconFallbackText: "Warning"
}) }}

Lots of [planning](/what-we-do/key-concepts#planning) processes are slow and use old tools or paper-based information. MHCLG's [Digital Planning portfolio](https://media.localdigital.gov.uk/uploads/2023/10/17091341/DLUHC_Digital_Planning_Programme_Overview.pdf) thinks that innovative digital products and services can speed things up and make planning more efficient, leading to more property development. 

Those digital tools will need [data](/what-we-do/key-concepts#data) in order to function, and the Planning Data service makes planning data easy to find, use and trust.

[[toc]]

## Vision

Our aim is to make the planning system fit for the 21st century by making planning and housing data easier to find, use and trust. We make the data available, useful and trustworthy so that people can develop tools on top of the data.

![A diagram of the Planning Data flywheel, illustrating a cyclical process. It starts with changing places (depicted by buildings, trees, and a wind turbine), which are administered by organisations collecting and standardising data. This data is made available nationally (shown as layered maps) and enables planning services (represented by hands using digital devices). These services inform decisions made by communities (depicted as a group of people), which lead back to changing places, completing the loop and reinforcing the cycle.](../assets/images/planning-data-flywheel.jpg)
[Planning Data Flywheel](https://www.flickr.com/photos/psd/53561519291/in/album-72157703657907285) © psd

We believe this will lead to: 

- better planning decisions 
- fewer uncertainties and delays in the housing system 
- more new digital services for property and planning 
- better relationships between communities and developments

### The problem we’re solving

Here is a short video to describe the problem we're working on.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/UuugC3rV6QI?si=EkMoWgCYeAaX81fI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

You can also [view the video and transcript on YouTube](https://www.youtube.com/watch?v=UuugC3rV6QI).

Here is another video, showing how planning data can solve problems for planners.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/8TaVbZ-QF2g?si=NI9_0Tw52HOnO3C3&amp;start=2440" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

You can also [view the video and transcript on YouTube](https://youtu.be/8TaVbZ-QF2g?t=2440).

#### A story about planning applications

When people want to build a new property, add an extension to their home or do anything regulated by planning policy, they'll likely need to send a planning application to their [local planning authority](/what-we-do/key-concepts#local-planning-authority) (LPA). 

For some applicants it can take over 70 hours to prepare and submit a planning application. Up to 50% of planning applications are invalid and immediately rejected because people don't know which [planning considerations](/what-we-do/key-concepts#planning-consideration) affect the place they want to build. For example, they might not know their house is in a conservation area, an area of special architectural or historic interest which means the appearance or character must be preserved or enhanced.

But data about planning considerations can power digital planning services (like [PlanX](https://www.planx.uk/How-it-works)), which tell people the planning considerations that exist before they make an application. This can save planning officers (who process planning applications) up to 50% of their time manually processing applications and dealing with errors, which gives them more time to spend on other impactful work.

These kinds of services can reduce delays in [planning decisions](/what-we-do/key-concepts#planning-decision) and increase the success rate of planning applications, digitally transforming the system.

That's just one example of where innovative products and services – powered by planning data – can help speed up planning decisions.

#### The problems with existing data

Imagine you're a startup looking to build innovative planning products and services, like [Tract](https://buildwithtract.com/) or [Xylo](https://www.buildxylo.ai/). You might offer these to planning officers in local government or to property developers building new housing estates, for example.

Planning decisions are [devolved](/what-we-do/key-concepts#devolution) across the country, which means planning data is devolved too. It's in paper files, maps, back-office systems, spreadsheets, databases, and various other places. If you want national or regional planning data, you need to visit each local planning authority (LPA) and collect it. You'll also need to collect data from other organisations, like flood risk zones from the Environment Agency or public transport access nodes from Department for Transport. That takes a lot of time and a lot of effort!

When you try to gather the data together, you'll find that it's described differently. Authorities don't always use the same headings and fields to record their tree preservation orders, for example. Or the [coordinate reference systems](https://resource.esriuk.com/blog/2012-3-26-coordinate-systems-and-projections-for-beginners-html/) are different, with one organisation using OSGB36 and another using WGS84. The data is not standarised and may not be interoperable. It takes even more time and effort to clean it and standardise it.

The data is hard to build upon because its quality isn't managed consistently across the country. This means the data can be patchy, with invalid fields, and it may not be up-to-date. This means the data isn't reliable and it's hard to trust. 

You might find some data available elsewhere, on data.gov.uk, for example. But when you try to collect it, you may be asked to apply for a licence or pay for the data. Because planning data isn't openly available – as [open data](/what-we-do/key-concepts#open-data) – and can be expensive to procure from a private company, the market for digital planning services is squeezed, hampering innovation. 

This is a problem for researchers and analysts in government too, who find themselves paying for data that has been produced by government – a waste of public money.

#### How we solve it

The Planning Data service aims to solve this by

- designing data standards that work well for data providers _and_ data consumers
- collecting, indexing and managing data, helping improve its quality and trustworthiness, and
- providing a platform which makes it as easy and reliable as possible to use and re-use the data.

This will make it easier to find, use and trust planning and housing data in England.

## Mission

In 2024, we focused on speeding up and scaling our core capabilities: designing data specifications more quickly, working with data providers to improve data quantity and quality, and scaling our platform and processes to handle more data and users.

Our next goal is to continue growing momentum and proving the scale of the platform. We want to unlock data needed for an efficient planning and housing system so that we can see how the system is performing (getting things developed), enable faster planning decisions and plan-making, in pursuit of unlocking the development of more homes.    

## Our users

We're a data service. We work with data providers to sustain a supply of useful, trustworthy data. We work with data users and consumers to understand and meet their needs. 

![A diagram shows data providers and data consumers connected through a central platform, planning.data.gov.uk with text: 'Designing data, Managing data, Using data at national scale.' Arrows indicate a flow of data and value from providers to consumers and back, forming a continuous cycle.](../assets/images/planning-data-platform-model.png)

You can learn more about our users in the [research and design](research-and-design) section.

### Data providers

- Local planning authorities
- Development corporations
- Local waste authorities
- Central government departments
- Arms-length bodies

This isn't an exhaustive list.

### Data consumers

- Software developers
- Researchers
- Policy officers and analysts

This isn't an exhaustive list.

## Our service model

The Planning Data service has three main sub-services:

- Designing data standards that work well for data providers _and_ data consumers
- Collecting, indexing and managing data, helping improve its quality and trustworthiness
- A reliable platform which makes it as easy as possible to use and re-use the data

You can read more about [designing data](/what-we-do/designing-data/), [collecting data](/what-we-do/collecting-data/) and [using data](/what-we-do/using-data/).

## What success looks like

The Planning Data service will be achieving its aim if

- there is a healthy supply of useful, trustworthy data that is feasible for organisations to provide, and
- the data is utilised in a wide range of scenarios, in both the public and private sectors.
<!-- This list is unfinished
If we're successful in achieving our mission, there will be

- a healthy pipeline of data standards moving from the backlog to co-design and through to legislation
- continued participation from software providers, government bodies, LPAs and other interest groups in the data design process
- a clear picture of which data specifications will meet the needs of the planning system as a whole
- a growing supply of data, for more planning considerations, provided by local planning authorities
- more trustworthy data provided over time, with minimal datasets meeting immediate needs
- useful and actionable feedback provided to data providers, helping them improve data quality and processes iteratively
- and more -->

### Key performance indicators

Our North Star is the supply utilisation rate: how much of the data is being used. This helps ensure we're meeting the needs of data users in a way that maximises benefits for the public sector.

We also track availability, quality and coverage. You can see our key performance indicators on our [performance dashboard](https://www.planning.data.gov.uk/about/performance). Each sub-service has its own key performance indicators.

## Links to other materials

Here's a list of videos, blog posts, presentations and other materials that tell you what we're doing and why.

- [Introducing the planning data platform (blog post)](https://mhclgdigital.blog.gov.uk/2022/09/28/introducing-the-planning-data-platform/)