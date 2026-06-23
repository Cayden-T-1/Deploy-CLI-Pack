# Security Policy

## Project Security Scope

This repository contains tooling, documentation, and supporting files for working with Auth0 Deploy CLI workflows, including tenant export, tenant import, validation, and configuration management.

Because this project may interact with Auth0 tenants and tenant configuration files, security-sensitive data must never be committed to this repository.

## Reporting a Security Issue

If you discover a security issue in this repository, do not open a public GitHub issue.

Report the issue privately to the repository owner or maintainer.

Please include:

- Repository name
- File or workflow affected
- Description of the issue
- Steps to reproduce, if applicable
- Whether Auth0 credentials, tenant configuration, tokens, secrets, or environment files may be exposed
- Recommended remediation, if known

## Sensitive Data That Must Not Be Committed

Do not commit:

- Auth0 client secrets
- Auth0 Management API credentials
- Auth0 Deploy CLI credential files
- `.env` files
- Access tokens or refresh tokens
- Tenant export files containing real production configuration
- Private keys or certificates
- Customer data
- Production tenant identifiers unless explicitly approved
- Screenshots or evidence files containing tenant details or secrets

## Local Configuration Files

The following files should be treated as local-only and should not be committed:

- `config.json`
- `config-source.json`
- `config-target.json`
- `config-*.json`
- `*.local.json`
- `*.secret.json`
- `.env`
- `.env.*`

Use safe example files such as `config-example.json` for documentation and onboarding.

## Auth0 Credential Handling

Auth0 credentials should be stored in one of the following approved locations:

- Local environment variables
- GitHub Actions secrets
- Enterprise secret manager
- Password vault approved by the project owner

Credentials should never be hardcoded in scripts, documentation, screenshots, or committed configuration files.

## If a Secret Is Accidentally Committed

If an Auth0 secret, token, credential, or sensitive tenant file is committed:

1. Treat the credential as compromised.
2. Rotate the exposed credential immediately in Auth0.
3. Remove the secret from the repository.
4. Review Git history to determine whether the secret is still present in previous commits.
5. Review Auth0 logs for suspicious use.
6. Update `.gitignore` or repository rules to prevent repeat exposure.
7. Notify the project owner or maintainer.

Redacting the file is not enough if the credential was already committed. The credential must be rotated.

## Security Expectations for Contributions

Before committing changes:

- Confirm no real credentials are included.
- Confirm no tenant export files with sensitive data are included.
- Confirm `.env` files are not staged.
- Confirm local system files such as `.DS_Store` are not staged.
- Review script changes for unsafe logging of secrets.
- Avoid printing tokens, secrets, or full tenant configuration to console output.

## Supported Use

This repository is intended for controlled internal use, training, and reusable Auth0 delivery workflows unless otherwise stated.

Security-sensitive changes should be reviewed before being merged.