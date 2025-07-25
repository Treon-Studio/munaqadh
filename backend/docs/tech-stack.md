# Tech Stack

This project uses the following main technologies and libraries:

- **Go (>= 1.23)** — Main programming language for backend development.
- **go-chi/chi** — Lightweight HTTP router and middleware for building RESTful APIs.
- **uptrace/bun** — SQL ORM for Go, used for PostgreSQL database access and migrations.
- **spf13/viper** — Configuration management library for environment variables and config files.
- **sirupsen/logrus** — Structured logging for debugging and monitoring.
- **wneessen/go-mail** — Email sending utility for notifications and user flows.
- **lestrrat-go/jwx** — Handling JWT authentication and authorization.
- **ozzo-validation** — Input validation for request payloads and models.
- **Docker & docker-compose** — Containerization and local development orchestration.
- **Go built-in testing** — Unit and integration tests using Go’s standard `testing` package (`*_test.go`).

Additional libraries are listed in `go.mod` as dependencies for specific features (e.g., CORS, HTML parsing, etc.).
