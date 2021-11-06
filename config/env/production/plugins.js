module.exports = ({env}) => ({
  upload: {
      provider: 'google-cloud-storage',
      providerOptions: {
          bucketName: 'eftglobal',
          publicFiles: true,
          uniform: false,
          serviceAccount: {
            "type": "service_account",
            "project_id": "modular-oven-287901",
            "private_key_id": env('GSC_PRIVATE_ID'),
            "private_key": env('GSC_PRIVATE_KEY'),
            "client_email": "strapi-easyhsc@modular-oven-287901.iam.gserviceaccount.com",
            "client_id": "106616263335355422394",
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/strapi-easyhsc%40modular-oven-287901.iam.gserviceaccount.com"
          }, // replace `{}` with your serviceAccount JSON object
          baseUrl: 'https://storage.googleapis.com/easyhsc',
          basePath: '',
      },
    },
  //...
})
