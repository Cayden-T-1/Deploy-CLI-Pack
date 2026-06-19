# Auth0 Deploy CLI Setup Runbook

## Purpose
Set up Auth0 Deploy CLI to export, review, back up, and promote tenant configuration.

## Required Access
- Auth0 Dashboard access
- Permission to create Machine-to-Machine application
- Management API permissions for managed resources
- Secure secret storage access

## Setup Steps
1. Create a dedicated Machine-to-Machine application named "Deploy CLI".
2. Authorize it for the Auth0 Management API.
3. Grant only required scopes for the resources being managed.
4. Install Auth0 Deploy CLI.
5. Create local configuration file.
6. Test export from development tenant.
7. Store exported configuration in Git.
8. Review diff before importing to another tenant.

Auth0's Deploy CLI setup requires a dedicated Machine-to-Machine application authorized against the Management API.
