---
title: "About Modules"
parent: "Module Gallery"
layout: page
nav_order: 1
---
# Modules
Modules are where the majority of the business logic within a Nexus-based application lives.  Functonality within a module should focus on one particular end goal as opposed to putting a variety of disparate functionality into a single module.  

For example, the _Service Module_ is entirely focused on providing an end to end solution for technical support that ties together slack and Jira.  Similarly, the Dox module is focused on searching and highlighting documentation.  While the two could be put into a single module, it's better that there are two separate modules in cases where someone needs just the documentation functionality or just the service functionality.
{:.example}

To see some of the existing modules checkout the [module gallery here]({% link content/modules/index.html %})
{:.info}

## What Can Modules Do?
Modules are simply node packages so they can _do_ anything you can do with a regular node application.  That said, Nexus provides a few conveniences.  

## Connections
Through configuration alone, a module can include connections that provide easy access to third-party services. For example, the Jira connection not only sets up authentication and exposes an easy to use client for the Jira API but also can act as an Add-On "server" for Jira allowing you to receive notifications from Jira instances.

## Protected Routes
Through configuration alone, you can setup a protected route using an Auth0 tenant as your protection mechanism.  While Nexus uses the Express library for handling routing, it adds a layer of authentication for routes you want to protect from prying eyes.  This is useful in cases where your module is providing functionality as a server endpoint and the app is not behind a firewall (which is often the case since it has to sometimes receive requests from third-party services like Jira or Slack).

## Scheduled Jobs
Jobs are units of execution that can be triggered either via a built-in cron scheduler or by a protected endpoint.  Jobs are configured using the same configuration source as everything else making them very easy to setup and execute.


