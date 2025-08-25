# Aurelia Deliverables

## Project Links
- Project Console: https://console.hasura.io/project/eternal-hyena-9576 
- GitHub repository link: https://github.com/eyaskot/aurelia
- GitHub SDN API link: https://github.com/eyaskot/sdn-api

## Env Files
- .env file link: https://github.com/eyaskot/aurelia/blob/main/.env
- .env.cloud file link: https://github.com/eyaskot/aurelia/blob/main/.env.cloud

## High impact threads created for Aurelia Bank
- Insight 1 thread: https://promptql.console.hasura.io/share/c74ed0e1-3f83-4c0f-9dbf-c7e9eb92085f
- Insight 2 thread: https://promptql.console.hasura.io/share/39b8564d-3c2d-48e7-a5b4-ceb2e0c90e61

## promptql-config.hml 
- globals/metadata/promptql-config.hml link: https://github.com/eyaskot/aurelia/blob/main/globals/metadata/promptql-config.hml

## Dashboard chat (14 Days AML Exposure KPIs): https://promptql.console.hasura.io/share/3d4af231-5812-4dc2-ad9c-677da823b7af

## Repository Layout
.
├─ app/
│  ├─ metadata/
│  │  ├─ PublicCustomers.hml
│  │  ├─ PublicFinancialTransfers.hml
│  │  ├─ PublicSars.hml
│  │  ├─ Accounts.hml
│  │  ├─ AmlCases.hml
│  │  ├─ Sanctions.hml
│  │  ├─ pg_aml.hml
│  │  ├─ mongo_aml.hml
│  │  ├─ sdn_api.hml
│  │  ├─ pg_aml-types.hml
│  │  ├─ mongo_aml-types.hml
│  │  └─ relationships/
│  │     └─ cross_source.hml
├─ globals/
│  └─ metadata/
│     └─ promptql-config.hml
├─ prompts/
│  ├─ insight-1-layering-ring-finder.md
│  └─ insight-2-pep-lifecycle-drift.md
├─ sdn-api/
│  ├─ app/main.py
│  ├─ requirements.txt
│  └─ deploy/Dockerfile
├─ .env                
├─ .env.cloud
├─ README.md
└─ Deliverables.md

## Notes
- Secrets are scrubbed; endpoints remain for reproducibility.
- SDN API resolves to: http://34.170.190.99:8000


