# Development Guidelines: Adding or Modifying APIs and Database

This guide provides a clear, step-by-step process for adding a new API endpoint or making database changes. Each step is mapped to the relevant file and directory in the project for easy onboarding and AI automation.

---

## 1. Step-by-Step: Adding a New API Endpoint

### 1.1. Define or Update the Data Model
- **Location:** `models/`
- **Example:** `models/account.go`
- **Purpose:** Define the Go struct representing your resource (e.g., `Account`).

### 1.2. Create or Update the Database Store
- **Location:** `database/`
- **Example:** `database/accountStore.go`
- **Purpose:** Implement CRUD logic using Bun ORM for the model.

### 1.3. Write/Update Database Migration (if schema changes)
- **Location:** `database/migrations/`
- **Example:** `20250725_create_accounts_table.sql`
- **Purpose:** Define SQL for new tables/columns. Run with `make migrate` or `go run cmd/migrate.go`.

### 1.4. Implement the Handler Function
- **Location:** `api/admin/` or `api/app/`
- **Example:** `api/admin/accounts.go`
- **Purpose:** HTTP handler to process requests, validate, call store, and respond.

### 1.5. Register the Route
- **Location:** `api/admin/api.go` or `api/app/api.go`
- **Purpose:** Add your handler to the router (e.g., `r.Post("/accounts", CreateAccountHandler(accountStore))`).
- **Main router:** Ensure subrouter is mounted in `api/api.go`.

### 1.6. Add Middleware (If Needed)
- Apply authentication, logging, or other middleware in the router file.

### 1.7. Write Tests
- **Location:** Same as handler (e.g., `api/admin/accounts_test.go`)
- **Purpose:** Unit/integration tests for the handler and store. Run with `go test ./...`.

### 1.8. Update Documentation
- **Location:** `routes.md`
- **Purpose:** Document the new endpoint, parameters, and responses.

---

## 2. Structure Mapping Table

| Component         | Directory / Example File               | Description                       |
|-------------------|----------------------------------------|-----------------------------------|
| Model             | `models/account.go`                    | Data structure                    |
| Store             | `database/accountStore.go`             | DB logic (CRUD)                   |
| Migration         | `database/migrations/20250725_...sql`  | DB schema changes                 |
| Handler           | `api/admin/accounts.go`                | HTTP handler                      |
| Router            | `api/admin/api.go`                     | Route registration                |
| Main Router       | `api/api.go`                           | Top-level mounting                |
| Test              | `api/admin/accounts_test.go`           | Unit/integration tests            |
| Docs              | `routes.md`                            | API documentation                 |

---

## 3. Other Adjustments
- **Business Logic:** Place service logic in `auth/`, `database/`, or other service directories.
- **Configuration:** Use `viper` for config, update config files as needed.
- **Static Files/Templates:** Add static assets to `public/`, templates to `templates/`.
- **Documentation:** Keep `routes.md` and other docs up to date with every change.

---

**Best Practices:**
- Always write tests for new features and database changes.
- Use clear, descriptive commit messages.
- Keep all documentation current.
