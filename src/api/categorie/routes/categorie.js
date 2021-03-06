module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/categories',
      handler: 'categorie.find',
      config: {
        policies: [],
      },
    },
    {
      method: 'GET',
      path: '/categories/:id',
      handler: 'categorie.findOne',
      config: {
        policies: [],
      },
    },
    {
      method: 'POST',
      path: '/categories',
      handler: 'categorie.create',
      config: {
        policies: [],
      },
    },
    {
      method: 'PUT',
      path: '/categories/:id',
      handler: 'categorie.update',
      config: {
        policies: [],
      },
    },
    {
      method: 'DELETE',
      path: '/categories/:id',
      handler: 'categorie.delete',
      config: {
        policies: [],
      },
    },
  ],
};
