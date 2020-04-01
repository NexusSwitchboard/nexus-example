---
title: "Jira Connection"
layout: page
parent: "Connections"
nav_order: 2
---

# Nexus - Jira Connection

[![Github](../../assets/images/GitHub-Mark-32px.png)](https://github.com/NexusSwitchboard/nexus-conn-jira/)

The Jira Connection establishes a connection to Jira using a Jira client [called jira.js](https://www.npmjs.com/package/jira.js).  It also can act as an Addon client/server sending and receiving requests to/from the Jira server.  

## The Jira API Client
You can make requests of your jira server using the `api` property of the connection instance that was created.  See the [API documentation](https://mrrefactoring.github.io/jira.js/) for information about the available calls and the structure.  There are also some aggregations of API calls that are made available directly in the connection object.  These have been fully [documented in the code](https://github.com/NexusSwitchboard/nexus-conn-jira/blob/763341abf20ef4efd8b8a28c923fa54ec6c4043f/src/index.ts#L73)

## The Addon Client/Server
Probably the most powerful part of this connection is its ability to act as an Addon "server".  To enable this, we are using the `atlassian-addon-helper` package [available here](https://www.npmjs.com/package/atlassian-addon-helper).

## Configuration
The Jira Connection configuration object is [fully documented in code here](https://github.com/NexusSwitchboard/nexus-conn-jira/blob/763341abf20ef4efd8b8a28c923fa54ec6c4043f/src/index.ts#L27).
