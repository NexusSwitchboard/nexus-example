# Configuration in Nexus

Configuration in Nexus can seem complicated at first but there are a few things to keep in mind that might help.

1. `Definition` is the term used for anything that describes how to create or initialize an entity in Nexus.  For example, there's a Connection Definition, a Module Definition and a Job Definition.  And above all of those is the Nexus Definition itself.  
2. `Config` is reserved for additional properties that configure the behavior of these entities.  Configuration is open ended and assumed a key/value format most of the time.  
3. While definition and configuration have overlap conceptually and practically, it can help to differentiate the two to think of Definition as top level configuration and Config as a child of definitions.

## Top Level Nexus Configuration
You can have a working Nexus-based app just by adding a `.nexus` file to your new node app and calling one of the Nexus initializers available in the core.  That file is called a *Nexus Definition File* and contains information about which modules and connections should be instantiated during startup.  

### Global Configuration

The `global` property holds the following configuration options:

* **nexusPath** - Where Nexus-specific routes are mounted.  For example, if you are adding Nexus to an existing web application then you will probably want to put it under `/nexus` to avoid route collisions.  Or you can just give it `/` indicating that it will sit at the application's root.

```json
    "nexusPath": "/nexus"
```

* **baseUrl** - The base URL for the application.  This will be the URL *without* the `nexusPath` appended to the end.

```text
https://mynexus.com
```

* **authentication** - This contains information about how to protect endpoints that are protected with the `protectedEndpoint` call.  The type of authentication to use is the key and the value for that key is an object containing configuration info for that auth type.  The only supported auth type right now is auth0:

```json
    "authentication": {
        "auth0": {
          "jwksUri": "https://<your_tenent>/.well-known/jwks.json",
          "audience": "https://<your_tenent_audience>",
          "issuer": "https://<your_tenent_issuer>",
          "algorithms": ["RS256"]
        }
    }
```

### Modules and Connections

* **modules** - This is a keyed list of module definitions to include in your app.  These will be initialized upon startup.  For more information about the configuration of each, checkout [Modules](modules.md)

* **connections** - This is a keyed list of connection definitions to include in your app.  While connections are not directly created by the nexus framework, they are created by the modules that are included.  You must define the ones you want to use here to ensure that modules are not using connections you are unaware of - plus it allows you to configure connection configuration options at the highest level as opposed to module by module. That said, you will probably rarely need to do that.



