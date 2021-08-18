import type { HttpFunction } from '@google-cloud/functions-framework/build/src/functions';

// by default, only one function is deployed,
// if you want to deploy multiple functions at once 
// you have to extend scripts/deploy-gcf.bash according to the sample.
export const helloWorld: HttpFunction = (req, res) => {
  res.send('hello world');
};

export const otherHandler: HttpFunction = (req, res) => {
  res.send('hello world');
};

export const someOtherHandler: HttpFunction = (req, res) => {
  res.send('hello world');
};

