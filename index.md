---
title: "Introduction"
layout: page
nav_order: 1
---

# What is Nexus?

Nexus is meant to help act as a "Switchboard" between different applications.  Taking input from one
and producing output in another.  It can be thought of as a very low-level Zapier or IFTTT.  


## Modules and Connections
The construct at play here are "Modules" and "Connections".  Modules can be thought of the 
connective tissue between disparate connections.  The idea is that you pull existing connections
to create modules or, better yet, there's a module already created that you can just pull, configure
and use.  For example, the service module is a fully functional module that enables a form of 
customer support within Slack that is backed by Jira.  

Here is an example of the way that the Service module interacts with different connections and 
the host application.

![Service Module Architecture]({% link assets/images/module-example-architecture.png %})

For a slightly more generic architectural diagram here is the hierarchical relationship between
the various components in Nexus:

![Nexus App Architecture]({% link assets/images/nexus-architecture-simplified.png %})

## Your App

To use Nexus, you would create your own node application.  All this application needs to do, though,
is import the modules and connections you want to use and then configure the modules.  Initializing
your modules is a simple call to a `Nexus Core` package function with the entire configuration object 
as its parameter.

For a very simple example of this, checkout the [Example App](https://github.com/NexusSwitchboard/docs/tree/master/examples/app).


