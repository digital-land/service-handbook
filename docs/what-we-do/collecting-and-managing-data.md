---
order: 3
---
{% from "govuk/components/warning-text/macro.njk" import govukWarningText %}

{{ govukWarningText({
  text: "This page is under construction",
  iconFallbackText: "Warning"
}) }}

This sub-service makes it easy for local planning authorities and other organisations to provide high quality, trustworthy data. It actively manages data to ensure completeness, uniqueness, consistency, timeliness, validity, and accuracy. 

Data providers can use the sub-service to [prepare, provide and maintain planning data](https://submit.planning.data.gov.uk/) with clear steps and actionable feedback provided along the way. The sub-service gives local authorities a view of data about their area from other sources, allowing them to ensure the most accurate and up-to-date data is available. 

The sub-service also maintains and operates data processing, providing live support for the wider service. 

## Capabilities

- Data management and operations
- Data governance
- Data engineering
- DevOps and reliability engineering
- Technical architecture and infrastructure
- Frontend development
- Service design
- Product management
- User support 

## Responsibilities

- Maintain the register of [projects](https://datasette.planning.data.gov.uk/digital-land/project) used to develop and pilot specifications
- Maintain the [register of the datasets needed to be provided by each organisation](https://datasette.planning.data.gov.uk/digital-land/provision)
- Add new sources of data to be collected to the platform
- Identify and deprecate broken links by marking them with an [end-date](https://digital-land.github.io/specification/field/end-date/)
- Mark invalid sources or resources added in error as [“old”](https://datasette.planning.data.gov.uk/digital-land/old_resource), so they are no longer processed
- Identify and merge duplicate entities, marking them as “old”
- Develop information checks to increase trust in the data on the platform, for example, [checking conservation areas match the boundaries in official PDFs](https://digital-land.github.io/barnet-conservation-areas/) 
- Provide feedback to LPAs based on issues arising from collecting and processing their data, presented through the [sub-service for data providers](https://submit.planning.data.gov.uk/)
- Responds to feedback on data issues from data consumers, passing it as feedback to data providers through [sub-service for data providers](https://submit.planning.data.gov.uk/)
- Operating our collection and data processing
- Scaling how many datasets we can process, meeting the challenge of collecting large datasets which change frequently

## Key performance indicators

1. **Average time taken to prepare and publish data**
Shows how long it takes for an expected provision to be met by an LPA, on average. Can also be used to calculate how long it may take for all datasets to be provided. The number may fall as the team and Open Digital Planning community managers make it easier for LPAs to onboard, prepare and provide data.

2. **Proportion of data issues resolved per week**
Shows how the quality of data is improving or not. Should count both 'internal' and 'external' issues. Can signal whether internal processes are being adapted to keep on top of issues efficiently. 

3. **Number of active data providers**
As a proportion of all data providers. A data provider is active if none of their datasets are out-of-date or have erroring endpoints. This encourages datasets to be kept up to date and for connection errors to be resolved.

4. **Percentage of data providers who fix data after issues raised**
Shows that data providers are being kept engaged and are keeping datasets up to date. Data providers not captured by this metric can be targeted via the community. 

5. **Number of datasets added per week**
Shows that data operations are running and a flow of data is being added to the platform. Can highlight when operations are getting faster or slower, whether processes are being made more efficient or not. 

6. **Data freshness (percentage of datasets not marked as old)**
Shows that data is being kept up to date. Each dataset has an expected update frequency, for example, brownfield land is updated annually, Article 4 Directions are updated every 6 months, planning applications are updated every hour. If a data provider does not update a dataset on the expected udpate frequency, it is marked as old. 

### Platform reliability KPIs

These KPIs show that the platform is reliable and available. These can be replaced with [service level indicators and objectives](https://gds-way.digital.cabinet-office.gov.uk/standards/slo.html) in future.

_Add KPIs from AWS Overwatch_