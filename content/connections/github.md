---
title: "Github Connection"
layout: page
parent: "Connections"
nav_order: 5
---

# Github - Nexus Connection

The Github connection wraps the Octokit NodeJS client and takes two parameters:

1. API Token - The API token used to authenticate against API calls
2. Base URL - The Base URL used for all API calls.  By default, this will be set to the `https://api.github.com/`

The Octokit client is exposed in the `api` property of the connection.  For docs on using Octokit, [click here](https://octokit.github.io/rest.js/)

You can assume that authentication has been completed as part of the connection initialization.
