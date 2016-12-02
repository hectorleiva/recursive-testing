'use strict';

const Promise = require('bluebird');

let counter = 10000;

const work = () => {
  counter--;
  if (counter === 0) {
    return Promise.resolve(null);
  }

  return Promise.resolve(true);
};

const handler = (result) => {
  if (result === null) {
    console.log('end');
    return;
  }

  return work().then(handler);
};

work().then(handler);
