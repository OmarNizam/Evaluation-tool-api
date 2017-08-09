// src/services/batches/batches.hooks.js

const { authenticate } = require('feathers-authentication').hooks
const { restrictToAuthenticated } = require('feathers-authentication-hooks')
const { populate } = require('feathers-hooks-common')
const restrict = [
  authenticate('jwt'),
  restrictToAuthenticated(),
];
const updateStudent = require('../../hooks/update-student');
module.exports = {
  before: {
    all: [...restrict],
    find: [],
    get: [],
    create: [],
    update: [updateStudent()],
    patch: [updateStudent()],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
