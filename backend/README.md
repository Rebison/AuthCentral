# Authentication System

## Project Motive

## Run Project

1. Clone the repository

    ```code
    git clone https://github.com/Rebison/AuthCentral.git/
    ```

2. Install dependencies

    ```code
    npm install
    ```

## Development phase

### Phase 1 (Core Authentication)

- User registration
- Email verification
- Login
- Logout
- Refresh token rotation
- JWT (RS256 via jose)
- JWKS endpoint
- Password reset
- Account locking

### Phase 2 (Identity Management)

- Session management
- Device management
- Audit logs
- Admin dashboard
- Client registration
- Role management
- Permission management

### Phase 3 (OAuth 2.1 / OIDC)

- Authorization Code Flow + PKCE
- Consent screen
- UserInfo endpoint
- Discovery document
- Dynamic client registration (optional)

### Phase 4 (Enterprise Features)

- MFA (TOTP/WebAuthn)
- Key rotation
- Redis caching
- Background workers
- Security notifications
- SSO across multiple applications
