---
title: "API Authentication"
layout: page
nav_order: 4
parent: "Configuration"
---

# Auth0 Authentication for Nexus API

By default, Nexus exposes some API endpoints to get information about the configuration of the instance.  Things like module configuration (minus secrets), running jobs, exposed routes, etc.  It is recommended that you create a free account with Auth0 and setup a tenet, then an API.  Here's how

## 1 - Create an Auth0 account
If you already have one, you do not need to create a new one.  You can use the free tier as all the features you need will be available.

## 2 - Create an API
Click the `Create API` button under the APIs section and fill in the details as described in the UI.  You should end up with something that looks like this:

[Auth0 API Screen]({% link assets/images/ss-auth0-api-screen-1.png %})

Now you have to create a single permission called `admin`.  Click on the permissions tab and add a 
new permission called `admin` and give it any description you want.  In the end, it should look 
something like this:

[Auth0 API Screen]({% link assets/images/ss-auth0-api-screen-2.png %})

## 3 - Fill in the nexus configuration under `global.auth`.

Now you can use the configuration information from Step 2 to fill in the nexus config file you've 
already started.

```javascript
{
    // Where the JSON Web Key Set is stored.  For Auth0, every tenet has their own
    //  endpoint where these public keys can be found.  The Tenent domain is going to be
    //  something like `https://kshehadeh.us.auth0.com`
    jwksUri: "<TENENT DOMAIN>.well-known/jwks.json",

    // The audience within Auth0 is also shown as the `Identifier` and is what you entered
    //  when you were making the API.
    audience: "https://nexus-switchboard.dev",

    // Just the tenent domain.  Something like `https://kshehadeh.us.auth0.com`
    issuer: "<TENENT DOMAIN>",

    // Unless you changed it when making the API, this is the default encryption algorithm.
    algorithms: ["RS256"]
}
```

## 4 - Create an application
In `3` you created the API that is protected.  That represents the nexus app you're creating.  Now
you will create the 'application' that is trying to access the API.  In our case, our "App" is Postman
or some other API testing tool.

* Click the `Create App` button under the App section.
* Enter the name of your app:
[Nexus Auth0 App Screen 1]({% link assets/images/ss-auth0-app-screen-1.png %})

* Select the API you created in step 3:
[Nexus Auth0 App Screen 2]({% link assets/images/ss-auth0-app-screen-2.png %})

* Copy the client ID in the App details screen for the app you just created
[Nexus Auth0 App Screen 2]({% link assets/images/ss-auth0-app-screen-3.png %})

## 5 Get the Bearer Token

Once your nexus instance is up and running you can now use this client ID and secret the associated 
client secret to grab a bearer token from Auth0.  This is the actual key that will be sent to 
Nexus.  Bearer tokens have a lifetime that you can set within the Auth0 API to ensure that if they
get leaked, they won't last forever.

To request a bearer token:
```bash
curl --request POST \
  --url https://kshehadeh.us.auth0.com/oauth/token \
  --header 'content-type: application/json' \
  --data '{"client_id":"<CLIENT_ID>","client_secret":"<CLIENT_SECRET>","audience":"<AUDIENCE>","grant_type":"client_credentials"}'
```

What you'll get back is:
```json
{
  "access_token": "<ACCESS TOKEN>",
  "token_type": "Bearer"
}
```

## 6 Use the bearer token to access your app's Nexus API endpoints

Now you will use the Bearer token in your request to the Nexus API of your application:

```bash
curl --request GET \
  --url https://localhost:3001/api/version \
  --header 'Authorization: Bearer <BEARER_TOKEN>' \
  --header 'content-type: application/json' \
```

And you should get something that looks like this:

```json
{
    "name": "basic",
    "version": "1.0.0",
    "description": "A barebones nexus app",
    "main": "index.js",
    "scripts": {
        "dev": "node index.js --inspect",
        "start": "node index.js",
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [
        "nexus-app"
    ],
    "author": "Karim Shehadeh",
    "license": "ISC",
    "dependencies": {
        "@nexus-switchboard/nexus-core": "^0.5.15",
        "@nexus-switchboard/nexus-mod-liveness": "^0.1.4",
        "debug": "^4.1.1",
        "express": "^4.17.1"
    },
    "devDependencies": {
        "@types/node": "^13.13.14",
        "tslib": "^1.13.0",
        "typescript": "^3.9.6"
    }

```