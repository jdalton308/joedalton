
### Dependencies
NPM


### Organization
- `/src/` - Contains all application files: JS, CSS, Images, etc. These are all bundled and copied to `/dist` with Webpack.


### Run Locally
```bash

# Webpack dev server, with hot module replacement
npm start

# Run a production build
npm run build
npm run serve

```


### Deployment
The site is hosted on [Firebase Hosting](firebase.google.com), and can be deployed by...

```bash

# Ensure firebase CLI is installed
npm i -g firebase-tools

# NPM Deploy command: Build then deploy
npm run deploy

``` 
