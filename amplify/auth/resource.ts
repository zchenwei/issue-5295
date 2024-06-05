import { defineAuth, secret } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
    externalProviders: {
      oidc: [
        {
          name: 'Auth0',
          clientId: secret('client-id'),
          clientSecret: secret('client-secret'),
          issuerUrl: 'https://dev-p5wf8g1cx6105qim.us.auth0.com',
        },
      ],
      logoutUrls: ['http://localhost:3000/', 'https://mywebsite.com'],
      callbackUrls: [
        'http://localhost:3000/profile',
        'https://mywebsite.com/profile',
      ],
    },
  },
});
