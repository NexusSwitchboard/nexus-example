# Quick Start

## Prerequisites

* Node and NPM are installed.  Nexus is tested with v12+ though it should work with version 8+

To create a Nexus application quickly, follow these steps:

## Steps

### Setup Project Directory
``` bash
$ mkdir myapp; cd myapp
$ npm init
$ npm install --save @nexus-switchboard/nexus-core @nexus-switchboard/nexus-mod-liveness
```

### Add Nexus Configuration
``` bash
$ touch .nexus
```

In file `.nexus` add this:

``` json 
{
  "rootUri": "/",
  "connections": [],
  "modules": {
    "nexus-mod-liveness": {
      "scope": "nexus-switchboard",
      "config": {}
    }
  }
}
```

### Add Nexus Code

In file `index.js`, add the following: 

``` javascript 
require('@nexus-switchboard/nexus-core').startNexusServer(3001);
```

And in `package.json` under the `scripts` key add these items:

```
"dev": "node index.js --inspect",
"start": "node index.js",
```

### Start the App

``` bash
$ npm run dev
```

### Test It Out

In your browser, go to:

    http://localhost:3001/m/liveness/up
    
And you should see a JSON response.
