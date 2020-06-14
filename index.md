---
title: "Introduction"
layout: page
nav_order: 1
---

# What is Nexus

Nexus is a `framework` written in typescript that helps to establish `connections` between third-party services through `modules` which provide business logic to transform inputs and outputs from/to the connections.

![Nexus App Architecture]({% link assets/images/nexus-architecture-simplified.png %})

Nexus applications use the nexus-core package to load and configure these modules and connections.
{:.info}

Nexus can be thought of as more of a *standard* than a framework in that it exposes interfaces that allows clients to re-use connections and modules.  A client can mix and match modules to create new ways of interacting with third-party services from a single application.

For example, a "ServiceBot" that uses the Services Module to take service requests from a slack channel and connect any conversations that happen with that thread in slack with a newly created Jira ticket.  Because we use both the Jira and Slack Connections, we can establish two-way communication between Jira and Slack visa-vi the ServiceBot application.  Most of this functionality is happening in the `service` module.  Additionally, the client could include the `dox` module so that a single application could provide easy access to documentation as well to help reduce the number of requests that come through.
{:.example}


