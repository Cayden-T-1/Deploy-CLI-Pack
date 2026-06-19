# Tenant Promotion Checklist

## Before Import
- [ ] Confirm source tenant
- [ ] Confirm target tenant
- [ ] Confirm change ticket
- [ ] Review Git diff
- [ ] Confirm no unwanted deletes
- [ ] Confirm Actions were reviewed
- [ ] Confirm secrets are not committed
- [ ] Confirm custom domains are not accidentally overwritten
- [ ] Confirm production approval

## During Import
- [ ] Run import from approved branch/tag
- [ ] Capture command output
- [ ] Confirm no errors

## After Import
- [ ] Test login
- [ ] Test application callback
- [ ] Test API token
- [ ] Test MFA behavior
- [ ] Check Auth0 logs
- [ ] Update change ticket
