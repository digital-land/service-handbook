<!-- Credits: This model and its principles were established by Steve (https://boringmagi.cc), and it was implemented and iterated by Charlie (@CharliePatterson) and team. -->

# Product operating model

> This was the product operating model for the Providers team, which is now part of Collecting & Managing Data. This model may be adopted by any other product team working on the platform.

[[toc]]

## What is a product operating model?

A product operating model describes how a team combines insights about users, expertise in design and technology, and a strategy to achieve outcomes for users and government.

It’s a model, not a process, because there is no one-size-fits-all process for how we work. The model is process agnostic, and there are many processes that could happen to create value at different stages of the model.

The model seeks to articulate three core aspects of how we work[^1]:

1. **How products are built:** the principles that guide our approach to delivery (e.g. small, frequent, reliable releases).

2. **How problems are solved:** the principles that guide our approach to product development as a whole (e.g. focusing on outcomes, giving teams ownership over solving problems).

3. **How we decide which problems to solve:** the things that guide our decisions around priorities.

Articulating and documenting our operating model allows us to put a clear line in the sand to aim for, and to measure progress against. It helps us to improve how we work, ensuring that we:

- Prioritise solving the right problems (aligned with our vision).

- Solve those problems in the best way possible.

- Reduce the time it takes to deliver value.


## Guiding principles

The way we do things will invariably change, as we figure out what works and what doesn’t. Although we might iterate on the processes and methods we use, the underlying principles that guide how we work should largely stay consistent.

1. **Data-driven and hypothesis-led**
Use data and research to inform decisions. Develop and test hypotheses.
2. **User outcomes** 
Focus on what users are trying to do: i.e. the specific outcomes they’re trying to achieve. Use research methods to gather insights and learn.

3. **Lean and iterative execution** 
Follow [lean principles](https://boringmagi.cc/2024/09/20/going-faster-with-lean-principles/). Reduce scope to minimise waste. Rapid experimentation. Avoid endless discovery loops: balance exploration with execution.

4. **Open-minded and exploratory** 
Be divergent: consider multiple solutions before converging. Don’t fall in love with a specific idea, focus on solving the right problem.

5. **Risk-aware and transparent** 
Identify key assumptions and risks early. Explore different technical approaches and surface trade-offs.

6. **Aligned and collaborative** 
Ensure a shared starting point and bring people along the journey. Maintain transparency and context across teams.

7. **Learning and adaptability** 
Increase learning velocity by doing, testing, and iterating.


## The dual-track approach

Our overall aim is to ensure that we’re solving the right problems in the right way, and as efficiently as possible:

- **Solving the right problems** 
Focusing on work that aligns with our overall vision and our OKRs. Ensuring that we solve problems that people who use the product/service genuinely face, and that those problems are ones that help move us towards our goals.

- **Solving them in the right way** 
Validating assumptions early, reducing the risk of building something that doesn’t make sense to users or entirely fails to help them achieve their intended outcomes.

- **Reducing time to value** 
Working iteratively and reducing waste, we want to ensure that the changes we make reach users faster, and that we’re being cost-effective and efficient.

This operating model integrates best practices, ideas, and frameworks from various sources, but at its core, it follows a [**dual-track agile approach**](https://jpattonassociates.com/dual-track-development/), where **discovery** and **delivery** run in parallel.


### Discovery: exploring and defining the right problem and solution

The discovery track is an iterative loop rather than a linear path[^2]. It blends elements of the [discovery](https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works) and [alpha](https://www.gov.uk/service-manual/agile-delivery/how-the-alpha-phase-works) phases from the service manual but operates on a much shorter timeframe.

This phase focuses on understanding the problems we aim to solve. It helps determine:

- whether a problem is worth solving
- what outcomes solving it would achieve, and
- how best to approach designing and developing a solution.

Through research, testing, and iteration, we validate assumptions about user needs, behaviours, and workflows before committing to development. This de-risks product decisions by ensuring that what we build aligns with real user needs and expectations.

Sometimes, solutions are low risk and might bypass the need for deeper discovery and proceed directly to development. There are potential reasons for this:

- They are small, low-cost changes that can be quickly tested in production.
- We have strong prior insights from user feedback.
- They are improvements to existing features with clear direction.
- There might be value in releasing something lean where users don't have an existing process so we can get quick insight rather than spend time on discovery.

During this phase we should involve internal stakeholders (engineers, folks from other teams) to help shape the solution, ensuring feasibility and alignment with technical constraints. The goal is to produce a **clear scope** of what needs to change and **well-defined acceptance criteria** for how the solution should work.

### Delivery: iteratively building validated solutions

The delivery track takes the outputs of discovery and turns them into tangible product changes. This is done through **small, iterative releases**, where we break work down into manageable chunks that can be deployed incrementally.

Sometimes individual features are released one by one. Other times a set of changes are wrapped in a **feature flag**, allowing for controlled rollout.

During this process we should evaluate different technical approaches, surfacing and weighing up trade-offs. In some cases, we may choose to take on **technical debt** deliberately, if it allows us to ship faster and get the value of the change in front of users faster (e.g. using [Datasette](https://datasette.planning.data.gov.uk/) to fetch data instead of building a custom API might enable us to build something quicker, though it’s not necessarily a robust, scalable, long-term solution).

There might also be instances where we have a low degree of confidence in the changes we’re making to the product, and so there’s uncertainty about whether those might exist in the product longer-term, meaning that it might not be worthwhile investing lots of time and effort in building a more robust thing. The goal should be reducing the time to delivery, so that we can collect data from real people using the thing in a live environment. However, such decisions should be made with a plan for addressing debt if the feature proves valuable long-term.

To ensure high-quality releases (minimising the potential of releasing bugs into production), we follow a structured **QA process** and we ensure that any changes have an appropriate level of test coverage. This safeguards against regressions and ensures that what we ship is stable, functional, and scalable.

## Essential workshops and meetings

The operating model has a series of recurring, structured workshops and meetings each sprint, to plan, align and coordinate the work that we’re doing. Some of these will be purely for the discovery team, some will be for the engineering team, and others will be cross-team or will include stakeholders from outside of the core team.

The bulk of the work each sprint though will be “doing the work” - e.g. coding, designing.

This diagram presents a simplified version of how the work flows from discovery to delivery, with all the relevant meetings adding structure to this:

![](/assets/images/product-operating-model-discovery-to-delivery.png)

### Discovery

The discovery phase runs in fortnightly cycles, and has a series of structured meetings that help us to coordinate our work and keep us on track. The bulk of the work is less structured, and will be determined on a case-by-case basis each sprint, depending on the specific needs of the work.

#### Sprint structure

The structured, recurring meetings in the discovery track are:

1. **Discovery planning** → Define what discovery work we need to do.
2. **Sprint alignment** → Playback of the goals to the wider team.
3. **Research planning** → Define research needs, plan recruitment and testing.
4. **Discovery activities** → Research, design, prototyping, testing.
5. **Standup** → Daily check-ins to share progress and raise issues and blockers.
6. **Design crit** → Playback of design explorations and gathering feedback.
7. **Tech refinement** → Handover between design and engineering, ensuring designs and scope are well-understood and technically feasible.

![](/assets/images/product-operating-model-discovery.png)

### Delivery

The delivery phase also runs in fortnightly cycles with a series of meetings to help identify which features or solutions to build and implement into the service. The majority of the work will be driven from outputs shared during design crit sessions and also bugs which need to be addressed.

#### Sprint structure summary

Each sprint follows a structured process of figuring out what we need to build and how we’ll build it.

1. **Design crit** → Opportunity for the engineering team to feed into in-flight discovery work.
2. **Tech refinement** → Handover between design and engineering, ensuring designs and scope are well-understood and technically feasible. 
3. **Sprint planning** → Define what we can achieve in the sprint based on our capacity and priorities.
4. **Sprint alignment** → Playback of the goals to the wider team.
5. **Building** → 
6. **QA & release** → 
7. **Standup** → Daily check-ins to share progress and raise issues and blockers.

![](/assets/images/product-operating-model-delivery.png)

## Facilitation guide

This section covers a detailed breakdown of each meeting and set of activities.

![](/assets/images/product-operating-model-discovery-to-delivery.png)

#### _1. Discovery planning_

**Purpose:**

- Share context on initiatives to make sure we’re all on the same page
- Align on what discovery work is needed for each in-flight initiative.
- Determine what’s achievable in the sprint.
- Coordinate the work (i.e. who’s doing what).

**Attendees:**

- Discovery team (design and research folks, product, delivery).
- Optional invite to tech lead for context.
- Product to facilitate/lead the session.

**Agenda/structure:**

- Run through [the discovery board](https://app.mural.co/t/mhclg2837/m/mhclg2837/1737126773003/dfda0a1153111ab3941b67f310de78c3b2440e7d?wid=0-1733304872744) to go through each in flight initiative and check in on progress. If there are new activities to consider, add those in, and figure out who’s doing what.
- If we’re starting a new initiative, then we should walk through the context of that and discuss the activities that are needed. Depending on the size of the initiative it might require a separate cross-team kick-off session, to share context and get alignment on the overall goals, and ensure that we’re all starting from the same place.

**Outputs:**

- Discovery backlog for the sprint, with tickets in GitHub.
- Defined research and design priorities.
- Shared goals (presented in sprint alignment session).


#### _2. Sprint alignment_

**Purpose:**

- Provide a structured playback of sprint goals and priorities to the wider team.
- Ensure alignment between the discovery and delivery phases.
- Highlight dependencies or cross-team collaboration needs.

**Attendees:**

- The whole team.
- Led by product.

**Agenda/structure:**

- Walkthrough of the sprint goal slides ([discovery](https://mhclg.sharepoint.com/:p:/s/DigitalPlanning/ERS_UXRT8LpKnhnPb7AKZxABOOz70IQ35cHrOGU4BkUQJg?e=TWrPeu) and [engineering](https://mhclg.sharepoint.com/:p:/s/DigitalPlanning/EUCdX71b7L9JhwhacOJNsZwBxgpknazOH9XWTpR1birPKA?e=Z5WuNu)).

- Providing context on what we’re doing and why.
- Giving the team space to ask questions.


#### _3. Research planning_

**Purpose:**

- Based on the outputs from the discovery work plan the upcoming research sessions, by aligning on the research goals.
- Brainstorm the specific research questions to try and answer through the research.
- Identify the specific research methods to use.
- Identify who to recruit.
- Plan timeline.

**Attendees:**

- User researchers, design and product folks.
- Led by user researcher.

**Agenda/structure:**

- tbd

**Outputs:**

- Research plans.


#### _4. Discovery activities_

**Purpose:**

- This phase is about figuring out questions and answering them, exploring, testing and iterating on solutions through design and other methods.

**Attendees:**

- All design, research and product folks.

**Activities:**

- Workshops.
- Design explorations.
- Analysis of qualitative and quantitative data.
- Prototyping.
- Usability testing.
- User interviews.

**Outputs:**

- Designs for playback in design crit.
- Prototypes.
- Presentations.
- User-story maps.
- Service blueprints / maps.


#### _5. Standup_

**Purpose:**

- Daily check-ins to keep the team up to date with progress.
- To raise issues and blockers and identify who’s responsible for resolving them.
- To ensure that we’re maintaining a sensible work-in-progress limit.
- To raise any cross-team collaboration needs.

**Attendees:**

- The whole team.
- Led by delivery.

**Agenda/structure:**

- Walk the wall / GitHub board.


#### _6. Design crit_

**Purpose:**

- Play back the outputs and findings from discovery to the team and core stakeholders. This can (and should) include in-progress and incomplete work.
- Gather feedback from stakeholders in a structured and constructive way.
- Keep people informed about next steps.

**Attendees:**

- The whole team.
- Stakeholders / representatives from other teams.
- Facilitated by Paris.

**Agenda/structure:**

- Give context of the problem we are trying to solve and our hypothesis. Set scope of what feedback we are asking for (5mins)
- Present designs / work in progress describing the intended user experience and highlighting any questions or feedback. (20 mins)
- Give the attendees time to comment on the designs using Mural (20 mins)
- Discuss feedback and further questions (15 mins)
- [Design crit Mural board](https://app.mural.co/t/mhclg2837/m/mhclg2837/1729841459350/3c903499841bd18b161b2a1c8a7c778ac461c85b)

**Outputs:**

- Iterated designs based on feedback from the session, and prototypes for testing.


#### _7. Tech refinement_

**Purpose:**

- Handover between discovery and delivery phases.
- Ensuring that the specifics and scope of the solutions is well-understood.
- Enabling the engineering team to help shape the proposed solutions by discussing the technical feasibility. It might be the case that the designs need further iterations based on the discussions in this session.

**Attendees:**

- Designers.
- Engineers.
- Facilitated by product and delivery.

**Agenda/structure:**

- Design folks to walk through the designs/prototype.
- Talk through the proposed scope (e.g. through the medium of a user-story map, or the acceptance criteria of tickets).
- Q\&A.

**Inputs:**

- Designs and prototypes.
- User story maps.
- Draft tickets in GitHub.

**Outputs:**

- A backlog of refined tickets in GitHub with breakdown of task/sub tasks and estimations.


#### _8. Sprint planning_

**Purpose:**

- Define the scope of work for the sprint based on the team’s capacity and the current set of priorities.

**Attendees:**

- Engineers
- Product
- BA
- Delivery
- Design lead
- Led by delivery and product

**Agenda/structure:**

- Review sprint goal objective
- Review product backlog 
- Assess team capacity/ availability
- Team discuss backlog items to select for sprint based on priority and capacity
- Identify dependencies/ risks
- Q\&A, confirm and finalise

**Inputs:**

Refined and prioritised list of:

- Bugs
- Tech debt
- Product changes

**Outputs:**

- A prioritised backlog of stories in GitHub.
- Updated sprint tracker.


#### _9. QA & release_

**Purpose:**

- To ensure that the changes we make to the product/service are of sufficient quality: i.e. the code is robust and scalable, the functionality works as expected, and the user-experience is bug-free.
- To ensure that internal stakeholders are aware of any key changes to how the product/service works.
- To ensure that significant changes are communicated to users.

**Activities:**

- Code review (ref doc).
- QA and product/design sign-off (ref doc).
- Some features might require a more structured release plan, including a communication plan (i.e. how do we communicate these changes to our users?), coordination with internal teams (if the changes impact their work).


## Artefacts

| Artefact                                                                                                                                               | Purpose                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [GitHub projects board](https://github.com/orgs/digital-land/projects/7/views/15)                                                                      | To manage the team’s work and ensure there’s visibility of what we’re working on and how things are progressing, both internally and externally.                                                 |
| [Sprint planning sheet](https://mhclg.sharepoint.com/:x:/s/DigitalPlanning/Ea_5VDCik2tKjmvPDyQ88RwBNcgxqM3vivUhi-fkjXfRiA?e=LUTdDR)          | To capture the details of which stories are in scope for the sprint, measuring the estimation against available time, and tracking what’s been added to the scope that wasn’t initially planned. |
| [Design and research planning board](https://app.mural.co/t/mhclg2837/m/mhclg2837/1737126773003/dfda0a1153111ab3941b67f310de78c3b2440e7d)              | To figure out what the focus of the design and research / discovery phase should be for each sprint, breaking down the work into the different activities and assigning owners for each.         |
| [Design and research sprint goals](https://mhclg.sharepoint.com/:p:/s/DigitalPlanning/ERS_UXRT8LpKnhnPb7AKZxABOOz70IQ35cHrOGU4BkUQJg?e=xAb7zH) | Capturing the sprint goals for the design and research team.                                                                                                                                     |
| [Engineering sprint goals](https://mhclg.sharepoint.com/:p:/s/DigitalPlanning/EUCdX71b7L9JhwhacOJNsZwBxgpknazOH9XWTpR1birPKA?e=XZVUy3)       | Capturing the sprint goals for the engineering team.                                                                                                                                             |
| [Design crit](https://app.mural.co/t/mhclg2837/m/mhclg2837/1729841459350/3c903499841bd18b161b2a1c8a7c778ac461c85b)                                     | For reviewing the designs with and getting feedback from stakeholders.                                                                                                                           |
| [Design history](https://submit-planning-data.designhistory.app/)                                                                                      | A write-up of each piece of work, to help people understand the process the team took to design and build the features of the service.                                                           |
| [User insights tracker](https://mhclg.sharepoint.com/:x:/s/DigitalPlanning/EWLjdkzW7NlNqLogAIX0xzYBQEdbOsxCTCa0rrDEGmgYpA?e=MBqHoD)                          | A spreadsheet tracking the outputs and insights from user research.                                                                                                                              |
| [Design board](https://app.mural.co/t/mhclg2837/m/mhclg2837/1728654025264/16e0efd10d44506f2e66e5b02de469a99692b024)                                    | A board to capture all the exploration and thinking in the design and research space.                                                                                                            |

[^1]: [The Product Operating Model: An Introduction](https://www.svpg.com/the-product-operating-model-an-introduction/), Silicon Valley Product Group
[^2]: [Alpha is discovery](https://visitmy.website/2022/04/09/alpha-is-discovery/), Steve Messer