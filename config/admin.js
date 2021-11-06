module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dd5d6013592eee0e66be3b2fa5d1cfcd'),
  },
});
