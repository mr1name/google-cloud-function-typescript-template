# google-cloud-function-typescript-template

A simple template with a minimum of dependencies to create Google Cloud Functions using Typescript.

## Local development

```
$ FN=helloWorld npm run watch
```

## Deployment

The template is prepared for integration with Cloud Build, but you can also run `deploy` script (`scripts/deploy-gcf.bash`) manually, in this case the `build` script will also have to be called manually.

By default, only `helloWorld` function is deployed, if you want to deploy multiple functions at once you have to extend `scripts/deploy-gcf.bash` according to the sample.

## Hacks

The build script generates a simple `index.js` file in the root directory, as it is necessary to deploy functions. 
