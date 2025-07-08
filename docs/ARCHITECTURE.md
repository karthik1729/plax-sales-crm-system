# System Architecture

## Overview

The Sales & CRM system follows a microservices-oriented architecture with clear separation of concerns.

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                         Client Layer                             │
├─────────────────┬────────────────┬──────────────────────────────┤
│   Web App       │  Mobile App    │     Call Center Portal       │
│  (Next.js)      │   (Flutter)    │       (Next.js)              │
└────────┬────────┴───────┬────────┴────────┬─────────────────────┘
         │                │                 │
         └────────────────┴─────────────────┘
                          │
                    Load Balancer
                          │
         ┌────────────────┴─────────────────┐
         │          API Gateway             │
         │         (Express.js)             │
         └────────────────┬─────────────────┘
                          │
    ┌─────────────────────┴─────────────────────────┐
    │                                               │
    ├──────────────┬────────────┬──────────────────┤
    │   Auth       │    Core    │   Integration    │
    │  Service     │  Business  │    Service       │
    │              │   Logic    │                  │
    └──────┬───────┴─────┬──────┴────────┬─────────┘
           │             │               │
    ┌──────┴───────┬─────┴────┬─────────┴─────────┐
    │   MongoDB    │  Redis   │   External APIs   │
    │              │          │  (SAP, GenNext)   │
    └──────────────┴──────────┴───────────────────┘
```

## Components

### 1. Client Layer
- **Web Application**: Next.js-based responsive web app
- **Mobile Application**: Flutter-based native mobile apps
- **Call Center Portal**: Specialized interface for call center operations

### 2. API Gateway
- Single entry point for all client requests
- Authentication and authorization
- Request routing
- Rate limiting
- API versioning

### 3. Backend Services

#### Auth Service
- OTP-based authentication
- JWT token management
- Role-based access control
- Session management with Redis

#### Core Business Service
- Order management
- User management
- Credit limit processing
- Performance tracking
- Reporting

#### Integration Service
- SAP S4 HANA integration
- GenNext ERP integration
- SMS gateway for OTP
- Email services

### 4. Data Layer
- **MongoDB**: Primary database for transactional data
- **Redis**: Session store and caching
- **File Storage**: For documents and media

## Security Architecture

### Authentication Flow
1. User requests OTP via mobile number
2. OTP sent via SMS gateway
3. User submits OTP for verification
4. JWT token issued on successful verification
5. Token used for subsequent API requests

### Authorization
- Role-based access control (RBAC)
- Resource-level permissions
- API endpoint protection

## Scalability

### Horizontal Scaling
- Stateless API servers
- MongoDB replica sets
- Redis clustering
- Load balancer for traffic distribution

### Caching Strategy
- Redis for session data
- API response caching
- Database query result caching

## Integration Architecture

### ERP Integration
```
CRM System <--> Integration Layer <--> ERP Systems
                      │
                ┌─────┴─────┐
                │  Adapter  │
                │  Pattern  │
                └───────────┘
```

### Integration Patterns
- Request-Reply for real-time data
- Event-driven for updates
- Batch processing for bulk operations

## Deployment Architecture

### Development
- Docker Compose for local development
- Hot reloading for all services
- Shared volumes for code synchronization

### Production
- Kubernetes for orchestration
- Auto-scaling based on load
- Blue-green deployments
- Health checks and monitoring

## Data Flow

### Order Creation Flow
1. Client submits order request
2. API Gateway validates request
3. Auth service verifies user permissions
4. Business logic processes order
5. Integration service syncs with ERP
6. Database updated
7. Response sent to client
8. Notifications triggered

## Technology Decisions

### Why MongoDB?
- Flexible schema for evolving requirements
- Good performance for read-heavy operations
- Built-in replication and sharding
- Rich query capabilities

### Why Next.js?
- Server-side rendering for SEO
- Excellent developer experience
- Built-in optimization
- TypeScript support

### Why Flutter?
- Single codebase for iOS and Android
- Native performance
- Rich UI components
- Strong typing with Dart

## Monitoring & Observability

### Logging
- Centralized logging with Winston
- Log aggregation
- Error tracking

### Metrics
- API response times
- Database query performance
- Business metrics dashboards

### Alerts
- System health alerts
- Business rule violations
- Integration failures