---
title: Introduction
metaTitle: Introduction to Nexus Switchboard
metaDescription: About Nexus Switchboard and links to getting started
---

# Architecture

For those who are familiar with the Model/View/Controller pattern, Nexus applies this pattern loosely against the notion of service interconnecitivity.

The Models are connections as they serve as the source and destination for data. Modules are the controllers in that they contain the logic that uses the data in the connections to create some behavior that would otherwise not be possible in either service.

## How are Connections Implemented?

Connections are not meant to be re-implementations of service clients. Rather, the container wraps an existing client providing some code to initialize it using configuration that is made available through Nexus.

For example if you took a peek into `nexus-conn-jira` you would see that the JiraConnection class is actually just instantiating and initializing an existing Jira client package. The same is true for Confluence, Slack and the rest. They then expose the client instance as a property of the `Connection` class.

While this does mean that there is inconsistency in how each are used, the alternative of re-implementing API clients for each service seems unnecessary and difficult to maintain.

## How Do Modules and Connections Work Together?

Modules are managed by the main application. Each module should add the necessary connections to its own dependencies so that you can control the version of the connection you use. You can, though, expect the app to include that right connections but that creates somewhat more fragile if not workable solution.

That said, the connections that _can_ be used by modules is specified in the .nexus file at the app level. While this may not be strictly necessary from a technical perspective it helps to ensure that you don't have modules using connections without the modules knownledge.

## Connections and Modules as Packages or Folders

If you are adding functionality that is very specific to your situation you will likely not being using an existing module. Instead, you can simply create a built-in module which is effectively a module that sits in your application's folder hierarchy.

Rather than using the package name in the `.nexus` file, you would use the folder name. For example, if your module was located in `/myproject/mymodule` then the "key" in the .nexus file would be "mymodule" and would have a sub-property "path" that would be set to "." meaning the folder is at the root of the project. The `path` property will indicate to nexus not to expect it to be an installed package.

