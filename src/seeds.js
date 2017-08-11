// src/seeds.js
const feathers = require('feathers/client');
const rest = require('feathers-rest/client');
const superagent = require('superagent');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication-client');

const user = {
  name: 'Omar Nizam Aldeen',
  email: 'omar@gmail.com',
  password: 'abcd1234'
};

const red= '#DE5454';
const yellow = '#FBD40B';
const green = '#70C67A';

const batches = [
  {
    'title': 'Batch Number 1 ',
    'students': [
      { 'evaluations': [ {evaluationDate: Date.now, total: 'You failed', color: red } ], 'firstName': 'Shahem', 'lastName': 'Nizam', 'photo': 'http://media-dmg.assets-cdk.com/teams/repository/export/v/1/553/9ff109bb110058aa60050568bfc31/5539ff109bb110058aa60050568bfc31.png' },
      { 'evaluations': [ {evaluationDate: Date.now, total: '', color: green } ], 'firstName': 'Samer', 'lastName': 'Alahmad', 'photo': 'http://media-dmg.assets-cdk.com/teams/repository/export/v/1/553/9ff109bb110058aa60050568bfc31/5539ff109bb110058aa60050568bfc31.png' },
      { 'evaluations': [ {evaluationDate: Date.now, total: 'Try Again', color: yellow } ], 'firstName': 'Tim', 'lastName': 'Kleef', 'photo': 'http://media-dmg.assets-cdk.com/teams/repository/export/v/1/553/9ff109bb110058aa60050568bfc31/5539ff109bb110058aa60050568bfc31.png' },
      { 'evaluations': [ {evaluationDate: Date.now, total: 'You failed', color: red } ], 'firstName': 'Nabig', 'lastName': 'Nizam', 'photo': 'http://media-dmg.assets-cdk.com/teams/repository/export/v/1/553/9ff109bb110058aa60050568bfc31/5539ff109bb110058aa60050568bfc31.png' },
      { 'evaluations': [ {evaluationDate: Date.now, total: '', color: green } ], 'firstName': 'Tarek', 'lastName': 'Alabdulla', 'photo': 'http://media-dmg.assets-cdk.com/teams/repository/export/v/1/553/9ff109bb110058aa60050568bfc31/5539ff109bb110058aa60050568bfc31.png' },
      { 'evaluations': [ {evaluationDate: Date.now, total: 'Try Again', color: yellow } ], 'firstName': 'Wisse', 'lastName': 'Barkhof', 'photo': 'http://media-dmg.assets-cdk.com/teams/repository/export/v/1/553/9ff109bb110058aa60050568bfc31/5539ff109bb110058aa60050568bfc31.png' },
      { 'evaluations': [ {evaluationDate: Date.now, total: '', color: green } ], 'firstName': 'Nigel', 'lastName': 'Skelton', 'photo': 'http://media-dmg.assets-cdk.com/teams/repository/export/v/1/553/9ff109bb110058aa60050568bfc31/5539ff109bb110058aa60050568bfc31.png' },
      { 'evaluations': [ {evaluationDate: Date.now, total: '', color: green } ], 'firstName': 'Felix', 'lastName': 'Voogt', 'photo': 'http://media-dmg.assets-cdk.com/teams/repository/export/v/1/553/9ff109bb110058aa60050568bfc31/5539ff109bb110058aa60050568bfc31.png' },
      { 'evaluations': [ {evaluationDate: Date.now, total: 'Try Again', color: yellow } ], 'firstName': 'Osama', 'lastName': 'Mohamed', 'photo': 'http://media-dmg.assets-cdk.com/teams/repository/export/v/1/553/9ff109bb110058aa60050568bfc31/5539ff109bb110058aa60050568bfc31.png' },
      { 'evaluations': [ {evaluationDate: Date.now, total: 'You failed', color: red } ], 'firstName': 'Nick', 'lastName': 'Brown', 'photo': 'http://media-dmg.assets-cdk.com/teams/repository/export/v/1/553/9ff109bb110058aa60050568bfc31/5539ff109bb110058aa60050568bfc31.png' },
    ],
    'startDate': 'Jan 3, 2017',
    'endDate': 'Feb 20, 2017',
  },
  {
    'title': 'Batch Number 2 ',
    'students': [
      { 'evaluations': [ {evaluationDate: Date.now, total: 'You failed', color: red } ], 'firstName': 'Shahem', 'lastName': 'Nizam', 'photo': 'http://media-dmg.assets-cdk.com/teams/repository/export/v/1/553/9ff109bb110058aa60050568bfc31/5539ff109bb110058aa60050568bfc31.png' },
      { 'evaluations': [ {evaluationDate: Date.now, total: '', color: green } ], 'firstName': 'Samer', 'lastName': 'Alahmad', 'photo': 'http://media-dmg.assets-cdk.com/teams/repository/export/v/1/553/9ff109bb110058aa60050568bfc31/5539ff109bb110058aa60050568bfc31.png' },
      { 'evaluations': [ {evaluationDate: Date.now, total: 'Try Again', color: yellow } ], 'firstName': 'Tim', 'lastName': 'Kleef', 'photo': 'http://media-dmg.assets-cdk.com/teams/repository/export/v/1/553/9ff109bb110058aa60050568bfc31/5539ff109bb110058aa60050568bfc31.png' },
      { 'evaluations': [ {evaluationDate: Date.now, total: 'You failed', color: red } ], 'firstName': 'Nabig', 'lastName': 'Nizam', 'photo': 'http://media-dmg.assets-cdk.com/teams/repository/export/v/1/553/9ff109bb110058aa60050568bfc31/5539ff109bb110058aa60050568bfc31.png' },
      { 'evaluations': [ {evaluationDate: Date.now, total: '', color: green } ], 'firstName': 'Tarek', 'lastName': 'Alabdulla', 'photo': 'http://media-dmg.assets-cdk.com/teams/repository/export/v/1/553/9ff109bb110058aa60050568bfc31/5539ff109bb110058aa60050568bfc31.png' },
      { 'evaluations': [ {evaluationDate: Date.now, total: 'Try Again', color: yellow } ], 'firstName': 'Wisse', 'lastName': 'Barkhof', 'photo': 'http://media-dmg.assets-cdk.com/teams/repository/export/v/1/553/9ff109bb110058aa60050568bfc31/5539ff109bb110058aa60050568bfc31.png' },
      { 'evaluations': [ {evaluationDate: Date.now, total: '', color: green } ], 'firstName': 'Nigel', 'lastName': 'Skelton', 'photo': 'http://media-dmg.assets-cdk.com/teams/repository/export/v/1/553/9ff109bb110058aa60050568bfc31/5539ff109bb110058aa60050568bfc31.png' },
      { 'evaluations': [ {evaluationDate: Date.now, total: '', color: green } ], 'firstName': 'Felix', 'lastName': 'Voogt', 'photo': 'http://media-dmg.assets-cdk.com/teams/repository/export/v/1/553/9ff109bb110058aa60050568bfc31/5539ff109bb110058aa60050568bfc31.png' },
      { 'evaluations': [ {evaluationDate: Date.now, total: 'Try Again', color: yellow } ], 'firstName': 'Osama', 'lastName': 'Mohamed', 'photo': 'http://media-dmg.assets-cdk.com/teams/repository/export/v/1/553/9ff109bb110058aa60050568bfc31/5539ff109bb110058aa60050568bfc31.png' },
      { 'evaluations': [ {evaluationDate: Date.now, total: 'You failed', color: red } ], 'firstName': 'Nick', 'lastName': 'Brown', 'photo': 'http://media-dmg.assets-cdk.com/teams/repository/export/v/1/553/9ff109bb110058aa60050568bfc31/5539ff109bb110058aa60050568bfc31.png' },
    ],
    'startDate': 'Jan 3, 2017',
    'endDate': 'Feb 20, 2017',
  },
  {
    'title': 'Batch Number 3 ',
    'students': [
      { 'evaluations': [ { evaluationDate: Date.now } ], 'firstName': 'Shahem', 'lastName': 'Nizam', 'photo': 'http://media-dmg.assets-cdk.com/teams/repository/export/v/1/553/9ff109bb110058aa60050568bfc31/5539ff109bb110058aa60050568bfc31.png' },
      { 'evaluations': [ { evaluationDate: Date.now } ], 'firstName': 'Samer', 'lastName': 'Alahmad', 'photo': 'http://media-dmg.assets-cdk.com/teams/repository/export/v/1/553/9ff109bb110058aa60050568bfc31/5539ff109bb110058aa60050568bfc31.png' },
      { 'evaluations': [ { evaluationDate: Date.now } ], 'firstName': 'Tim', 'lastName': 'Kleef', 'photo': 'http://media-dmg.assets-cdk.com/teams/repository/export/v/1/553/9ff109bb110058aa60050568bfc31/5539ff109bb110058aa60050568bfc31.png' },
      { 'evaluations': [ { evaluationDate: Date.now } ], 'firstName': 'Nabig', 'lastName': 'Nizam', 'photo': 'http://media-dmg.assets-cdk.com/teams/repository/export/v/1/553/9ff109bb110058aa60050568bfc31/5539ff109bb110058aa60050568bfc31.png' },
      { 'evaluations': [ { evaluationDate: Date.now } ], 'firstName': 'Tarek', 'lastName': 'Alabdulla', 'photo': 'http://media-dmg.assets-cdk.com/teams/repository/export/v/1/553/9ff109bb110058aa60050568bfc31/5539ff109bb110058aa60050568bfc31.png' },
      { 'evaluations': [ { evaluationDate: Date.now } ], 'firstName': 'Wisse', 'lastName': 'Barkhof', 'photo': 'http://media-dmg.assets-cdk.com/teams/repository/export/v/1/553/9ff109bb110058aa60050568bfc31/5539ff109bb110058aa60050568bfc31.png' },
      { 'evaluations': [ { evaluationDate: Date.now } ], 'firstName': 'Nigel', 'lastName': 'Scelton', 'photo': 'http://media-dmg.assets-cdk.com/teams/repository/export/v/1/553/9ff109bb110058aa60050568bfc31/5539ff109bb110058aa60050568bfc31.png' },
      { 'evaluations': [ { evaluationDate: Date.now } ], 'firstName': 'Felix', 'lastName': 'Voogt', 'photo': 'http://media-dmg.assets-cdk.com/teams/repository/export/v/1/553/9ff109bb110058aa60050568bfc31/5539ff109bb110058aa60050568bfc31.png' },
      { 'evaluations': [ { evaluationDate: Date.now } ], 'firstName': 'Osama', 'lastName': 'Mohamed', 'photo': 'http://media-dmg.assets-cdk.com/teams/repository/export/v/1/553/9ff109bb110058aa60050568bfc31/5539ff109bb110058aa60050568bfc31.png' },
      { 'evaluations': [ { evaluationDate: Date.now } ], 'firstName': 'Nick', 'lastName': 'Brown', 'photo': 'http://media-dmg.assets-cdk.com/teams/repository/export/v/1/553/9ff109bb110058aa60050568bfc31/5539ff109bb110058aa60050568bfc31.png' },
    ],
    'startDate': 'Jan 3, 2017',
    'endDate': 'Feb 20, 2017',
  },
  {
    title: 'Batch Number 4 ',
    'students': [
      { 'evaluations': [ { evaluationDate: Date.now } ], 'firstName': 'Shahem', 'lastName': 'Nizam', 'photo': 'http://media-dmg.assets-cdk.com/teams/repository/export/v/1/553/9ff109bb110058aa60050568bfc31/5539ff109bb110058aa60050568bfc31.png' },
      { 'evaluations': [ { evaluationDate: Date.now } ], 'firstName': 'Samer', 'lastName': 'Alahmad', 'photo': 'http://media-dmg.assets-cdk.com/teams/repository/export/v/1/553/9ff109bb110058aa60050568bfc31/5539ff109bb110058aa60050568bfc31.png' },
      { 'evaluations': [ { evaluationDate: Date.now } ], 'firstName': 'Tim', 'lastName': 'Kleef', 'photo': 'http://media-dmg.assets-cdk.com/teams/repository/export/v/1/553/9ff109bb110058aa60050568bfc31/5539ff109bb110058aa60050568bfc31.png' },
      { 'evaluations': [ { evaluationDate: Date.now } ], 'firstName': 'Nabig', 'lastName': 'Nizam', 'photo': 'http://media-dmg.assets-cdk.com/teams/repository/export/v/1/553/9ff109bb110058aa60050568bfc31/5539ff109bb110058aa60050568bfc31.png' },
      { 'evaluations': [ { evaluationDate: Date.now } ], 'firstName': 'Tarek', 'lastName': 'Alabdulla', 'photo': 'http://media-dmg.assets-cdk.com/teams/repository/export/v/1/553/9ff109bb110058aa60050568bfc31/5539ff109bb110058aa60050568bfc31.png' },
      { 'evaluations': [ { evaluationDate: Date.now } ], 'firstName': 'Wisse', 'lastName': 'Barkhof', 'photo': 'http://media-dmg.assets-cdk.com/teams/repository/export/v/1/553/9ff109bb110058aa60050568bfc31/5539ff109bb110058aa60050568bfc31.png' },
      { 'evaluations': [ { evaluationDate: Date.now } ], 'firstName': 'Nigel', 'lastName': 'Scelton', 'photo': 'http://media-dmg.assets-cdk.com/teams/repository/export/v/1/553/9ff109bb110058aa60050568bfc31/5539ff109bb110058aa60050568bfc31.png' },
      { 'evaluations': [ { evaluationDate: Date.now } ], 'firstName': 'Felix', 'lastName': 'Voogt', 'photo': 'http://media-dmg.assets-cdk.com/teams/repository/export/v/1/553/9ff109bb110058aa60050568bfc31/5539ff109bb110058aa60050568bfc31.png' },
      { 'evaluations': [ { evaluationDate: Date.now } ], 'firstName': 'Osama', 'lastName': 'Mohamed', 'photo': 'http://media-dmg.assets-cdk.com/teams/repository/export/v/1/553/9ff109bb110058aa60050568bfc31/5539ff109bb110058aa60050568bfc31.png' },
      { 'evaluations': [ { evaluationDate: Date.now } ], 'firstName': 'Nick', 'lastName': 'Brown', 'photo': 'http://media-dmg.assets-cdk.com/teams/repository/export/v/1/553/9ff109bb110058aa60050568bfc31/5539ff109bb110058aa60050568bfc31.png' },
    ],
    'startDate': 'Jan 3, 2017',
    'endDate': 'Feb 20, 2017',
  },
];

const feathersClient = feathers();

feathersClient
  .configure(hooks())
  .configure(rest('http://localhost:3030').superagent(superagent))
  .configure(auth());

feathersClient.service('users').create(user)
  .then(() => {
    feathersClient.authenticate({
      strategy: 'local',
      email: user.email,
      password: user.password
    })
      .then(() => {
        batches.map((batch) => {
          feathersClient.service('batches').create(batch)
            .then((result) => {
              console.log('Batch seeded...', result.title);
            }).catch((error) => {
              console.error('Error seeding batch!', error.message);
            });
        })
      })
      .catch(function(error){
        console.error('Error authenticating!', error);
      });
  })
  .catch(function(error) {
    console.error('Error creating user!');
  });
