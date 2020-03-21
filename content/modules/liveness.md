---
title: "Liveness Module"
layout: page
nav_order: 2
parent: Modules
---

Simple  module that implements only one endpoint which can be used as a healthcheck for infrastructure liveness checks.

# Setup

None!  This is the absolute simplest possible module.  Just by installing the module there will be a GET endpoint available at:

    https://<your-domain>/<your-nexus-root>/m/liveness/up

The output from this endpoint if everything is working correctly is:
 
 ```json
    {
        "message": "up"
    }    
```
