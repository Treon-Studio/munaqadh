# Development Prompt Templates

This document contains reusable prompt templates for AI-assisted or team-automated development tasks in this project. Copy, adapt, and use these as needed for code generation, review, or onboarding.

---

## 1. Add a New API Endpoint

```
Prompt: Create a new API endpoint for [RESOURCE] with the following requirements:
- HTTP Method: [GET/POST/PUT/DELETE]
- Route: [e.g., /api/[resource]]
- Request fields: [list fields]
- Response: [describe response]

Follow the project structure:
- Model: models/[resource].go
- Store: database/[resource]Store.go
- Handler: api/app/[resource].go or api/admin/[resource].go
- Router: api/app/api.go or api/admin/api.go
- Test: api/app/[resource]_test.go or api/admin/[resource]_test.go

Include:
- Input validation
- Proper error handling
- Unit tests
- Update routes.md documentation
```

---

## 2. Add or Update a Database Table

```
Prompt: Add or update a database table for [RESOURCE].
- Create/modify model struct in models/[resource].go
- Create/modify migration file in database/migrations/
- Update store logic in database/[resource]Store.go
- Ensure all changes are reflected in CRUD handlers and tests
```

---

## 3. Add Business Logic or Service

```
Prompt: Implement business logic for [FEATURE] in the appropriate service layer.
- Place reusable logic in auth/, database/, or email/
- Ensure handlers call this logic, not duplicate it
- Add/modify tests for the service
```

---

## 4. Update Project Configuration

```
Prompt: Add or update configuration for [FEATURE].
- Use viper for config management
- Update config files as needed
- Document any new config in README or a dedicated config doc
```

---

## 5. Debugging/Testing Prompt

```
Prompt: Debug [DESCRIBE ISSUE] in [FILE/PACKAGE].
- Add logging using logging/ helpers
- Write or update tests in *_test.go
- Suggest how to reproduce and verify the fix
```

---

## 6. Documentation Prompt

```
Prompt: Update documentation for [FEATURE/ENDPOINT].
- Update routes.md for API changes
- Add or update markdown docs as needed
```

---

**How to Use:**
- Replace bracketed sections (e.g., [RESOURCE]) with your actual resource or feature.
- Copy the template into your AI prompt or code review checklist.
- Adjust as needed for your specific use case.
