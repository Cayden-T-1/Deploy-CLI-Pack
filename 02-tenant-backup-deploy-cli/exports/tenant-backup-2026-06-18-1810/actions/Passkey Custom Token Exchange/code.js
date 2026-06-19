/**
* Handler to be executed while executing a custom token exchange request
* @param {Event} event - Details about the incoming token exchange request.
* @param {CustomTokenExchangeAPI} api - Methods and utilities to define token exchange process.
*/
exports.onExecuteCustomTokenExchange = async (event, api) => {
  const jwt = require('jsonwebtoken');
  let claims;

  try {
    claims = jwt.verify(
      event.transaction.subject_token,
      event.secrets.PASSKEY_ASSERTION_SECRET,
      {
        issuer: event.secrets.PASSKEY_ASSERTION_ISSUER,
        audience: event.secrets.PASSKEY_ASSERTION_AUDIENCE,
        algorithms: ['HS256']
      }
    );
  } catch (err) {
    api.access.rejectInvalidSubjectToken('Invalid passkey assertion');
    return;
  }

  if (claims.auth_method !== 'passkey') {
    api.access.deny('invalid_auth_method', 'Expected passkey authentication');
    return;
  }

  if (!Array.isArray(claims.amr) || !claims.amr.includes('webauthn')) {
    api.access.deny('invalid_amr', 'Expected WebAuthn AMR');
    return;
  }

  if (claims.acr !== 'phishing_resistant') {
    api.access.deny('invalid_acr', 'Expected phishing-resistant authentication');
    return;
  }

  api.authentication.setUserById(claims.sub);
};