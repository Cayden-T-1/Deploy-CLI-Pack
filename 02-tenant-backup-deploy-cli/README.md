# Tenant Backup / Deploy CLI Pack

This artifact helps the team back up, compare, promote, and restore Auth0 tenant configuration using Auth0 Deploy CLI.

Auth0 Deploy CLI can manage tenant configuration resources such as Actions, branding, clients/applications, connections, custom domains, email templates, Guardian, log streams, organizations, resource servers/APIs, roles, tenant settings, and related configuration. Treat imports as change-controlled operations: the tool can be destructive when configuration differs from the target tenant.

## Contents

- `deploy-cli-setup-runbook.md` - Setup steps for Auth0 Deploy CLI access and local configuration.
- `tenant-backup-runbook.md` - Export procedure for tenant backups.
- `tenant-restore-runbook.md` - Restore procedure for a previous exported tenant configuration.
- `tenant-promotion-checklist.md` - Pre-import, import, and post-import controls.
- `config-example.json` - Example Deploy CLI configuration file.
- `export-tenant.sh` - Exports tenant configuration to a timestamped folder.
- `import-tenant.sh` - Imports tenant configuration from an approved export folder.
- `change-review-template.md` - Standard review template for tenant changes.
- `evidence/` - Store command output, screenshots, approvals, and change-ticket evidence.

## Standard Workflow

1. Set up Auth0 Deploy CLI with a dedicated Machine-to-Machine application.
2. Fill in `config-source.json` and `config-target.json` with tenant-specific values.
3. Change config to target using `cp config-target.json config.json` and run `./export-tenant.sh` before making changes.
4. Commit the export to Git and tag it with the backup naming convention using `git add .` and `git commit -m "Backup target Auth0 tenant before config transfer"`
5. Run `config-source.json` and perform steps 3 and 4 again.
6. Review tenant configuration diffs before importing.
7. Run `cp config-target.json config.json` and perform a dry run using `a0deploy import --config_file ./config.json --input_file ./exports/YOUR-SOURCE-EXPORT-FOLDER/tenant.yaml --dry-run`
8. Complete `tenant-promotion-checklist.md`.
9. Run `./import-tenant.sh ./exports/YOUR-SOURCE-EXPORT-FOLDER` from an approved branch or tag.
10. Capture evidence and complete post-import validation.

## Safety Notes

- Test import behavior in development tenants before production use.
- Grant only the Management API scopes required for managed resources.
- Never commit client secrets, private keys, or environment-specific secrets.
- Review deletes, custom domains, Actions, branding, and production tenant settings with extra care.
