# Code Structure

Below is the main directory structure of the backend project, with each folder’s purpose explained:

```
backend/
├── main.go                 # Application entry point (runs cmd.Execute())
├── cmd/                    # CLI commands (serve, migrate, generate docs, etc.)
├── api/
│   ├── api.go              # Main HTTP server and router setup
│   ├── server.go           # HTTP server runner
│   ├── admin/              # Admin API handlers and routes
│   └── app/                # Main app API handlers and routes
├── auth/
│   ├── authorize/          # Authorization logic
│   ├── jwt/                # JWT utilities and helpers
│   └── pwdless/            # Passwordless authentication logic
├── models/                 # Data models (e.g., profile.go)
├── database/               # Database access layer, stores, migrations
├── logging/                # Logging configuration and helpers
├── email/                  # Email sending utilities
├── public/                 # Static files (SPA frontend, assets)
├── templates/              # Email and other templates
├── routes.md               # API endpoint documentation
├── go.mod, go.sum          # Go dependencies
└── Dockerfile, docker-compose.yml  # Containerization and orchestration
```

| Folder/File     | Purpose                                                      |
|-----------------|--------------------------------------------------------------|
| main.go         | Application entry point                                      |
| cmd/            | CLI commands (serve, migrate, docs)                          |
| api/            | HTTP API handlers and routers                                |
| auth/           | Authentication and authorization logic                       |
| models/         | Data models and schema definitions                           |
| database/       | Database access, store patterns, migrations                  |
| logging/        | Logging configuration and helpers                            |
| email/          | Email utilities                                              |
| public/         | Static files (for SPA/frontend)                              |
| templates/      | Email and other templates                                    |
| routes.md       | API routes documentation                                     |
| go.mod, go.sum  | Go module dependencies                                       |
| Dockerfile, docker-compose.yml | Containerization and local development setup   |
