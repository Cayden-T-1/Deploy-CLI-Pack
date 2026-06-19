# Tenant Restore Runbook

## Purpose
Restore a previous Auth0 tenant configuration export after an unsuccessful deployment, accidental configuration change, or approved rollback.

## When to Run
- Failed production deployment
- Accidental tenant configuration change
- Unapproved destructive import
- Post-cutover rollback
- Disaster recovery test

## Required Inputs
- Target tenant name and environment
- Approved backup export folder or Git tag
- Change ticket or incident ticket
- Technical approver
- Business approver, when production is affected

## Restore Steps
1. Confirm the restore is approved.
2. Confirm the target tenant and environment.
3. Check out the approved backup branch or Git tag.
4. Review the backup diff against the current target tenant export.
5. Confirm no environment-specific secrets are included.
6. Run import from the approved backup export folder.
7. Capture command output in `evidence/`.
8. Test login, callback, API token flow, and MFA behavior.
9. Check Auth0 logs for errors.
10. Update the change or incident ticket with evidence and validation results.

## Rollback Command
```bash
./import-tenant.sh ./exports/approved-backup-folder
```

## Validation
- Login succeeds for representative users.
- Application callbacks resolve correctly.
- API token requests succeed.
- MFA and Guardian behavior matches expected policy.
- Auth0 logs show no unexpected errors.
