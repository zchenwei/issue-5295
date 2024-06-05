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
          name: 'MicrosoftEntraID',
          attributeRequestMethod: 'GET',
          clientId: secret('client-id'),
          clientSecret: secret('client-secret'),
          identifiers: ['company.com'],
          issuerUrl: 'https://login.microsoftonline.com/<tenant>c/v2.0',
          scopes: ['openid', 'email', 'profile'],
        },
      ],
      logoutUrls: [
        'http://localhost:4200',
        'https://app.productbycompany.com',
        'https://dev.productbycompany.com',
      ],
      callbackUrls: [
        'http://localhost:4200',
        'https://app.productbycompany.com',
        'https://dev.productbycompany.com',
      ],
    },
  },
});
