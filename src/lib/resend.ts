import { Resend } from 'resend';

let connectionSettings: any;

async function getCredentialsFromConnector() {
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY
    ? 'repl ' + process.env.REPL_IDENTITY
    : process.env.WEB_REPL_RENEWAL
    ? 'depl ' + process.env.WEB_REPL_RENEWAL
    : null;

  if (!hostname || !xReplitToken) {
    return null;
  }

  try {
    connectionSettings = await fetch(
      'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=resend',
      {
        headers: {
          'Accept': 'application/json',
          'X-Replit-Token': xReplitToken
        }
      }
    ).then(res => res.json()).then(data => data.items?.[0]);

    if (!connectionSettings || !connectionSettings.settings?.api_key) {
      return null;
    }
    return {
      apiKey: connectionSettings.settings.api_key,
      fromEmail: connectionSettings.settings.from_email
    };
  } catch {
    return null;
  }
}

export async function getUncachableResendClient() {
  const connectorCreds = await getCredentialsFromConnector();

  if (connectorCreds) {
    return {
      client: new Resend(connectorCreds.apiKey),
      fromEmail: connectorCreds.fromEmail || 'onboarding@resend.dev'
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('Resend not configured: no Replit connector or RESEND_API_KEY found');
  }

  const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
  return {
    client: new Resend(apiKey),
    fromEmail
  };
}
