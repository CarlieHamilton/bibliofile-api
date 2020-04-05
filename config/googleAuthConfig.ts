import { baseURL } from '../app';

// Credentials and Info for OAuth2
export const oauth2Credentials = {
    client_id: process.env.GOOGLE_OAUTH_CLIENT_ID,
    project_id: "BiblioFile Web Client", //The name of your project
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_secret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
    redirect_uris: [
        `${baseURL}/auth_callback`
    ],
    scopes: [
        ``
    ]
}