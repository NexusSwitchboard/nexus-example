---
title: "Connections"
layout: page
nav_order: 5
has_children: true
---
# Connections

Connections in Nexus represent a translation layer between a Nexus module and a third-party service.  Connections are abstracted as separate entities in Nexus to make them packagable in a format that is reusable by any module and Nexus app.

Rather than having Module A and Module B both embed a jira client into their codebase and manage the configuration, initialization and instantiation themselves, they can both use Connection A which exposes access to Jira through the same interface.
{:.example}

To use one of the existing connections, check out the [connection gallery here]({% link content/connections/gallery.html %})
{:.info}


