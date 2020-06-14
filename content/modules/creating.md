---
title: "Creating your own"
layout: page
parent: "Modules"
nav_order: 2
---
## Step 1 - Create and Prep a Typescript Project

For a barebones typescript project you can copy the `basic` example module in this repository. 

If you copied one of the basic module examples then you should have a folder structure that looks like this:

```
* (root)
    * src
      * index.ts
      * connections.ts
      * routes.ts
      * jobs.ts
      * config.ts
```

Plus the additional project config files at the root.

## Step 2 - Setup Configuration

Configuration refers to the properties that are unique to your module and must be set by the user of your module.  

### Controlling Configuration
Module configuration is set in the `.nexus` file by the client.  These values, during initialization, are passed into the module instance method `loadConfig`.  This is done to give the module the ultimate decision making ability for how to process the configuration.  *Whatever is returned from this method becomes the stored module configuration*.  It is not uncommon to simply return what you're given and rely on defined configuration rules to handle the validation of the rules.

### Configuration rules
As a module writer you can dictate the rules of configuration options using the Configuration Rules structures.

You can override the `getConfigRules` in your module class and return something like this:

```typescript
const ConfigRules: IConfigGroups = {
    'Jira Connection': [
        {name: 'JIRA_USERNAME', type: ["string"], required: true, level: "error", reason: "Needed to integrate with Jira APIs"},
        {name: 'JIRA_API_KEY', required: true, level: "error", reason: "Needed to integrate with Jira APIs"},
        {
            name: 'JIRA_ADDON_CACHE',
            type: ["string"],
            required: true,
            level: "error",
            reason: "Needed to store addon client data to properly decode host events and requests."
        }
    ]
}
```

In this example the rules are dictating that these three configuration values are required.  You can even dictate what format these values should have.  If you mark them as errors, then module loading will fail.  Otherwise, logs will simply show a warning.

Although not required, this method of validating configuration allows you to describe the configuration options in a fairly self-documenting way and makes it easier for module users to easily understand what configuration is possible and required.

In the module example, you will see the following code in the `index.ts` file

In the index.ts file:
```typescript
import {configRules} from "./config";

export class BasicModule extends NexusModule {
    ...
    protected getConfigRules(): IConfigGroups {
        // We rely on our config rules to validate that we are getting the required 
        //  config in the right format.
        return configRules;
    }

    public loadConfig(config?: ModuleConfig): ModuleConfig {
        // Notice that we simply return the config object that is given to us. That's because
        //  we are relying on the configRules defined to be used to validate that the config
        //  is valid.  We *could* validate things here that are not possible to validate any
        //  other way, though.
        return config;    
    }
    ...
}
```

And here are the config fules that are defined in `./config`

```typescript
export const configRules:IConfigGroups = {
    "basic": [
        {
            name: "CONFIG_1",
            reason: "An example of a configuration value that must be set",
            required: true,
            default: "Test",
            level: "error",
            type: ["string"]
        }
    ]
}

```

|**Note**|
|--------|
| If you have `__env__` as a value for any of the configs then the core will do something special with that.  Instead of taking the value as is, it will instead load the value from an environment variable that has the following format: `<MODULE_NAME>_<CONFIG_NAME>`. So, for example, if the config is named `CONFIG_1` and the module is called `basic` then the core will look for an environment variable named `BASIC_CONFIG_1`.   Additionally, it will keep track of which of these configurations are considered secret so that when outputing module information using the `/api/modules` endpoint, it will not show the actual values|

## Step 3 - Setup Routes

Routes in Nexus are setup through Express.  To setup routes through Nexus, you only have to return a list of route definitions from the `loadRoutes` method.  

In the example above, there is a separate `routes.ts` file that defines those routes but you need not do it that way if you don't have a lot to define.  

A route definition has the following attributes:

```typescript
export interface IRouteDefinition {

    // The method for the route
    method: "get" | "post" | "put";

    // The path to the route.  Note that this will
    //  be the sub-path after the nexus prefix which will
    //  be `/nexus/m/<modname>/<yourpath>`
    path: string;

    // This is where you will do the work when the endpoint is requested.
    handler: (req: Request, resp: Response, next?: NextFunction) => any;

    // If set to true, then the auth0 configuration is used to protected
    //  the route for you.  You don't have to do anything but set this 
    //  to true if you wish to have Nexus protect the route for you.
    protected: boolean;

    // To avoid upstream interference of requests, Nexus does not 
    //  insert into middleware to tranform the body.  You can add that 
    //  here, though.  For example, you might pass in `bodyParser.json()`
    //  for this if you're expecting JSON input.
    bodyParser?: NextHandleFunction;
}
```

Note that while route definitions are simplified versions of Express Routers, you do have an opportunity to setup your own routes directly through the Express IRoute interface later on in the module initialization process.  But in so doing, you lose some of the protections you get by having Nexus core do it.

## Step 4 - Setup Jobs

Jobs are quick ways of setting up "packages of work" that can be executed periodically or on demand through a common Nexus endpoint.  In the jobs.ts file in this example you will see the definition of a job class (derived from `Job`) and a factory function that takes a set of job definitions are returns a new `BasicJob`  instance.

On the `BasicJob` class there are only two things that have to be implemented:

1. The name of the job (this can be thought of as the name of the _type_ of job).
2. The code to run when the job is triggered.

In the `jobs.ts` file we will define both the new Job class(es) and the factory function that will return an instance of it. 

```typescript
class BasicJob extends Job {
  // The "name" here represents the name of the *type* of the job. So 
  //    outside of this class, when a 
  public name: string = "basic";

  /**
   * Override the _run method to do the work that the job entails.
   * @private
   */
  protected _run(): Promise<boolean> {
      return Promise.resolve(true);
  }
}

export default (jobsDefinition: NexusJobDefinition[]): Job[] => {
  return jobsDefinition.map((j) => {
    if (j.type === "basic") {
      return new BasicJob(j);
    }

    throw new Error(`Job type ${j.type} does not match what is available`);
  })
}
```

Configuration of Jobs, like the rest of the configuration is done in the .nexus file that is controlled by the app that is integrating Nexus into itself.

You can have multiple job instance definitions in the `.nexus` configuration as in: 

```json
...
"jobs": [
        {
          "type": "basic",
          "schedule": "0 8 * * 5",
          "options": {
            "JOB_CONFIG_1": "Config Value 1"
          }
        }
      ]
...      
```

A Job instance definition has the following properties:

* **type** - This should match one of the `name`s of the module's Jobs.
* **schedule** - The cron-formatted schedule of when the Job should run
* **options** - These are the job-specific options that are passed in during Module initialization.

|**Note**|
|----|
|You can have multiple instances of the same Job with different configuration values.  This is helpful when you want to perform the same operation on multiple targets.|


## Step 5 - Setup Connections

Most modules will use connections to respond to some type of request or trigger received by the module.  

|Note|
|----|
|It is important to note that it is not the Module's job to instantiate the connections but just to define which ones will be used and how they should be configured.  By having centralized management of collections, there are certain benefits that can be had when there are multiple modules that use the same connection with the same configuration values. | 

In the `connections.ts` file there is an exported function which takes the top level module configuration defined in .nexus and returns a list of a `ConnectionRequestDefinition` objects.

```typescript
export default (_config: NexusModuleConfig) => {
    return [
        {
            name: "basic",
            config: {
                "CONN_CONFIG": "My Config Value"
            }
        }
    ];
}
```

A `ConnectionRequestDefinition` is made up of two values, the name of the connection to create and the configuration options to apply to it. 

The name is matched against the name of the connection in the `.nexus` config file's `connections` key.  If not defined there then the connection will not be created (even if it's added as a dependency).  This is meant to ensure that only connections that have been explicitly defined by the controlling app are allowed.

The **configuration** can contain any configuration options needed by the connection.  The reason that we are given the `NexusModuleConfig` in the `loadConnections` method is that we often pass through those variables to the connection configuration definitions.  

### You're Done!



## Folders vs. Published Packages

Modules can either be included in the form of a published npm package or as a folder on disk.  The latter is useful in cases where you are simply making a specialized connection for your use case and have no intention to share.

Using a folder reference makes it a lot easier to make changes to modules without having to manage npm links between projects.  Within the app modules config area, you will provide a `path` parameter that gives the relative path to the root directory where the module project folder lives.

So, for example, if your app is here `/dev/mybot/app` and your module lives here: `/dev/mybot/mymod` then the `.nexus` configuration would look something like this:
```json
{
    ...
    "modules": {
      "mymod": {
        "path": ".."
       }   
    }

    ...
}
```  
If a relative path is it will be expected to be relative to the current working directory.  In most cases this is the project directory of the app.

Note that in either case, whether it's a published package being used or a local one, the root will need to be capable of being `require`d without the need for specifying a file.  This usually means, specifying a `main` property in the package.json.

The [example](/docs/example) will give you a look at how to setup the relationships between connections and apps with a barebones app and custom connection.


