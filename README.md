# Sales & CRM System

A comprehensive Sales and Customer Relationship Management system for cement and steel business operations.

## Overview

This system is designed to manage sales operations for multiple stakeholders including:
- In-house Sales Field Team
- Call Center
- Distributors
- Dealers
- Retailers
- Influencers

## Tech Stack

### Backend
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js
- **Database**: MongoDB
- **Authentication**: JWT
- **API Integration**: SAP S4 HANA, GenNext ERP

### Frontend
- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **API Client**: Axios with React Query
- **Forms**: React Hook Form with Zod validation

### Mobile
- **Framework**: Flutter
- **Platform**: iOS & Android

### Infrastructure
- **Containerization**: Docker & Docker Compose
- **Session Store**: Redis
- **Cloud**: AWS/Azure/GCP ready

## Project Structure

```
sales-crm-system/
├── backend/          # Node.js API server
├── frontend/         # Next.js web application
├── mobile/          # Flutter mobile app
├── scripts/         # Utility scripts
├── infrastructure/  # IaC and deployment configs
├── docs/           # Documentation
├── docker-compose.yml
├── Taskfile.yml    # Task automation
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 20+
- pnpm
- Docker & Docker Compose
- Task (go-task)
- Flutter SDK (for mobile development)

### Quick Start

1. Clone the repository
```bash
cd ~/dev/sales-crm-system
```

2. Initial setup
```bash
task setup
```

3. Start development servers
```bash
task dev
```

This will start:
- MongoDB on port 27017
- Redis on port 6379
- Backend API on port 5000
- Frontend on port 3000
- Mongo Express on port 8081

### Using Docker

To run everything in Docker:
```bash
task dev:docker
```

## Available Commands

```bash
# Development
task dev              # Start all services
task dev:backend      # Start only backend
task dev:frontend     # Start only frontend

# Building
task build           # Build all services
task build:backend   # Build backend
task build:frontend  # Build frontend

# Testing
task test            # Run all tests
task lint            # Run linters

# Database
task db:seed         # Seed database
task db:reset        # Reset database

# Docker
task docker:up       # Start Docker services
task docker:down     # Stop Docker services
task docker:logs     # View logs
```

## Key Features

### Phase 1 - Cement Business
- Employee management and attendance
- Sales order management
- Credit limit management
- Performance tracking
- Travel allowance management
- Integration with GenNext ERP

### Phase 2 - Steel Business
- Integration with SAP S4 HANA
- Extended product catalog
- Advanced reporting

## API Endpoints

### Authentication
- `POST /api/auth/login` - Mobile OTP login
- `POST /api/auth/verify-otp` - Verify OTP
- `POST /api/auth/refresh` - Refresh token

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update profile

### Orders
- `GET /api/orders` - List orders
- `POST /api/orders` - Create order
- `GET /api/orders/:id` - Get order details

## Environment Variables

Copy `.env.example` files in backend and frontend directories and update with your values:

### Backend
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret for JWT tokens
- `GENNEXT_API_URL` - GenNext ERP API endpoint
- `SAP_API_URL` - SAP API endpoint

### Frontend
- `NEXT_PUBLIC_API_URL` - Backend API URL
- `NEXTAUTH_SECRET` - NextAuth secret

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Submit a pull request

## Security

- All API endpoints are protected with JWT authentication
- Role-based access control (RBAC)
- Data encryption in transit and at rest
- Regular security audits

## Performance

- Designed for 2000+ concurrent users
- 99.9% uptime target
- Horizontal scaling capability
- Caching with Redis

## License

Proprietary - All rights reserved