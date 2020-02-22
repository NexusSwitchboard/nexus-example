---
title: "Connections"
layout: page
nav_order: 5
---
# Connections

Connections in Nexus represent a translation layer between a Nexus module and a third-party service.  Connections are abstracted as separate entities in Nexus to make them packagable in a format that is reusable by any module and Nexus app.

For example, rather than having Module A and Module B both embed a jira client into their codebase and manage the configuration, initialization and instantiation themselves, they can both use Connection A which exposes access to Jira through the same interface.

In the case of Jira, for example, the nexus-conn-jira Connection wraps an existing package.  It uses Nexus configuration automatically to initialize the client and adds a few convenience methods on top of the existing ones available in the client.  To avoid being too heavy handed it exposes the client instance as an `api` property.  While this is an abstraction leak, the benefits often outweigh the advantages.  But there is nothing preventing a connection from being a full implementation of the client.

## Creating Your Own Connection

### Create a Typescript Project
You can do this however you want.  The `typescript-starter` project is one way that is quick and gets you everything you would need to get started.

``` bash
npx typescript-starter
```

You can then remove everything under `./src` except the `index.ts` file and delete all the content in that file.

### Add the Connection class code

Add this to the `index.ts` file you just cleared out:

```typescript
import {Connection, ConnectionConfig} from "@nexus-switchboard/nexus-extend";

export class BasicConnection extends Connection {

    public name: string = "basic";

    public connect(): Connection {
        return undefined;
    }

    public disconnect(): boolean {
        return false;
    }

}

export default function createConnection(cfg: ConnectionConfig): Connection {
    return new BasicConnection(cfg);
}
```

|Explain the Code|
|----------------|
|The connection base class constructor is given a configuration object that is passed in by the Nexus Core (and derived from the .nexus config that is specified by the app).  Note that there is a factory function that is a default export of this module.  It is this function that does the actual instantiation of the connection object.  It is done this way because there can be multiple instances of a connection in use by one or modules in an app.  Worth noting is that the factory function takes a config as its only param.  That config could be used to indicate which of multiple connection objects should be created in cases where you have a more complex object model.|


### You're Done!
That's really all there is to a connection.  Most of the work is done by the Nexus core but by using a `Connection`-derived class and implementing the connect and disconnect methods, you are providing the core with a standardized method of establish the connection and removing the connection.  In more complex examples of connections you will see that the connect method contains code to instantiate an API client and uses the automatically populated `config` property of the connection class to fill in the authentication details for the client.
