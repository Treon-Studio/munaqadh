# Architecture

This backend uses a layered, modular architecture for maintainability and scalability.

## Main Layers
- **API Layer (`api/`)**: HTTP handlers, routing, request validation, response formatting.
- **Auth Layer (`auth/`)**: Authentication and authorization logic (JWT, passwordless, etc).
- **Model Layer (`models/`)**: Data structures representing business entities.
- **Data Layer (`database/`)**: Database access, CRUD operations, migrations, store patterns.
- **Service Layer (`email/`, `logging/`, etc)**: Supporting services (email sending, logging).
- **CLI Layer (`cmd/`)**: Command-line tools for serving, migration, docs, etc.

## Request/Response Flow
1. **Client** sends HTTP request to API endpoint.
2. **API Layer**: Route is matched, middleware applied (logging, CORS, auth, etc).
3. **Handler**: Parses/validates request, calls business logic/services as needed.
4. **Auth/Data/Service Layers**: Perform authentication, DB access, or other logic.
5. **Response**: Handler returns JSON response to client.

## Key Concepts
- **Dependency Injection**: Resources (DB, mailer, config) are injected into handlers/services for testability.
- **Middleware**: Used for logging, error recovery, CORS, timeouts, authentication, etc.
- **SPA Support**: Static frontend assets served via special handler (`SPAHandler`).

## Example Diagram
```
Client → [Router & Middleware] → [Handler] → [Service/Auth/DB] → Response
```
