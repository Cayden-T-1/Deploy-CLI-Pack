# Tenant Backup Runbook

## Purpose
Export current Auth0 tenant configuration before making changes.

## When to Run
- Before production deployment
- Before modifying Actions
- Before changing applications or connections
- Before enabling MFA policy changes
- Before go-live cutover
- Weekly or monthly for managed services clients

## Steps
1. Confirm tenant name and environment.
2. Confirm backup destination.
3. Run export command.
4. Commit exported files to Git.
5. Tag backup with date and purpose.
6. Attach backup evidence to change ticket.

## Naming Convention
backup-{client}-{environment}-{YYYY-MM-DD}-{change-ticket}
