# Aurelia PromptQL

A comprehensive Anti-Money Laundering (AML) analytics platform built with PromptQL and Hasura that integrates multiple data sources to detect financial crime patterns and provide real-time insights for compliance officers.

## 🎯 Overview

Aurelia is an intelligent AML monitoring system that leverages PromptQL to analyze financial transaction data, customer information, and sanctions lists to identify suspicious patterns and potential money laundering activities. The platform provides automated insights and real-time monitoring capabilities for financial institutions.

## 🏗️ Architecture

The platform consists of several key components:

- **PromptQL Engine**: Core analytics engine powered by Hasura
- **Data Connectors**: Integration with multiple data sources
- **SDN API**: Sanctions list lookup service
- **Analytics Dashboard**: Real-time AML exposure monitoring
- **Insight Engine**: Automated pattern detection and reporting

## 🔌 Data Sources

### Core AML Data
- **PostgreSQL AML Database** (`pg_aml`): Transaction records, customer data, and case management
- **MongoDB AML Database** (`mongo_aml`): Document-based AML case files and unstructured data
- **SDN API**: Real-time access to OFAC sanctions lists and designated nationals

### Public Data
- **Public Customers**: Customer information and risk profiles
- **Public Financial Transfers**: Cross-border transaction data
- **Public SARs**: Suspicious Activity Reports
- **Accounts**: Account-level transaction patterns
- **AML Cases**: Historical case data and investigations
- **Sanctions**: Sanctions list integration

## 🚀 Key Features

### Automated Insights
- **Layering Ring Detection**: Identifies accounts receiving funds from multiple sources in short timeframes
- **PEP Lifecycle Monitoring**: Tracks Politically Exposed Persons for behavioral changes
- **Cross-border Transaction Analysis**: Monitors international fund flows
- **Risk Amplifier Detection**: Identifies multiple risk factors in customer behavior

### Real-time Monitoring
- **14-Day AML Exposure KPIs**: Live dashboard for compliance monitoring

### Data Integration
- **Multi-source Connectors**: Seamless integration across different database systems
- **Real-time Updates**: Live data synchronization across all sources
- **API-first Architecture**: RESTful endpoints for external integrations

## 📊 Insight

### Insight 1: Layering Ring Finder
Detects receiver accounts that collect funds from 3+ distinct sender accounts within 7 days, with cross-border transfers and AML case linkages.

### Insight 2: PEP Lifecycle Drift & Risk Amplifiers
Monitors Politically Exposed Persons for behavioral deviations and risk factor coincidences, including structuring patterns and cross-border spikes.

## 🛠️ Technology Stack

- **Backend**: Hasura GraphQL Engine, PromptQL
- **Databases**: PostgreSQL, MongoDB
- **API**: FastAPI (SDN service), REST APIs
- **Containerization**: Docker, Docker Compose
- **Monitoring**: OpenTelemetry Collector
- **Deployment**: GCP VM with systemd services

## 🚀 Quick Start

### Prerequisites
- Docker and Docker Compose
- Python 3.11+ (for SDN API)
- Access to data source credentials

### 1. Clone the Repository
```bash
git clone https://github.com/eyaskot/aurelia.git
cd aurelia
```

### 2. Environment Setup
Update IP/URLs if your SDN API is hosted elsewhere (default = GCP VM: http://34.170.190.99:8000)
Copy the environment files and configure your data source connections:
```bash
cp .env.example .env
# Edit .env with your database credentials and API endpoints
```

### 3. Init project & connectors
```bash
# Project init
ddn project init --with-project eternal-hyena-9576

# Postgres
ddn connector init pg_aml -i
ddn connector introspect pg_aml
ddn model add pg_aml "*"
ddn command add pg_aml "*"
ddn relationship add pg_aml "*"

# Mongo
ddn connector init mongo_aml -i
ddn connector introspect mongo_aml
ddn model add mongo_aml "*"
ddn command add mongo_aml "*"

# SDN API
ddn connector init sdn_api -i
ddn connector introspect sdn_api
ddn command add sdn_api "*"
```

### 4. Build & apply the Supergraph
```bash
ddn supergraph build create
ddn supergraph build apply <BUILD_VERSION> --project eternal-hyena-9576
```

### 5. Access the Platform
- **PromptQL Engine**: http://localhost:3280
- **SDN API**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs

## 🔧 Configuration

### Environment Variables
The platform uses environment variables for configuration:

- `APP_MONGO_AML_*`: MongoDB AML database connection settings
- `APP_PG_AML_*`: PostgreSQL AML database connection settings  
- `APP_SDN_API_*`: SDN API service configuration
- `HASURA_DDN_PAT`: Hasura Data Delivery Network access token

### Data Source Configuration
Each connector has its own configuration file in the `app/connector/` directory:
- `pg_aml/configuration.json`: PostgreSQL connection settings
- `mongo_aml/configuration.json`: MongoDB connection settings
- `sdn_api/connector.yaml`: SDN API integration settings

## 📈 Usage

### API Integration
Integrate with external systems using the REST APIs:
```bash
# Health check
curl http://localhost:8000/healthz

# SDN lookup
curl "http://localhost:8000/getsdn?name=John"
```

## 📚 Documentation

- **API Documentation**: Available at `/docs` endpoint when services are running
- **PromptQL Guide**: Refer to Hasura PromptQL documentation
- **Connector Configuration**: See individual connector directories

## 🆘 Support

- **Project Console**: https://console.hasura.io/project/eternal-hyena-9576
- **GitHub Issues**: Report bugs and feature requests
- **Team Support**: Contact the Aurelia Bank development team

## 🔗 Related Projects

- **SDN API**: https://github.com/eyaskot/sdn-api
- **Hasura PromptQL**: https://hasura.io/docs/latest/promptql/
- **OpenSanctions**: https://data.opensanctions.org/

