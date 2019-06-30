/**
 * Employes.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  datastore: 'default',
  attributes: {
    name: { type: 'string' },
    surname: { type: 'string' },
    sex: { type: 'string' },
    dateOfBirth: { type: 'string', columnType: 'date' },
    experience: { type: 'string' },
    technologies: { type: 'json', columnType: 'array' },
    email: { type: 'string' },
    phone: { type: 'string' }
  }
};

