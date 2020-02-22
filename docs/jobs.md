---
title: "Jobs"
layout: page
nav_order: 6
---

Jobs are packages units of work that live in a module.  Jobs  are one of several ways to expose behavior to users of a module (endpoints/routes is another way).  Jobs can be set to run on a schedule or can be triggered by a Nexus built-in job starter endpoint which is available to all Nexus-based applications.

# Creating a Job

To create a job, create a class that is derived from the `Job` class which defined in the `nexus-extend` package.  You will have to define two properties of that class:

1. The `_run` method
2. The `name` attribute

The name of the Job is used to identify it in configuration files.  In configuration, this "name" is considered the job "type" and is used by your own factory to identify which Job should be created.

Which brings us to the next step in creating your own Jobs: the factory.  The loadJobs method in your Module class will act as a factory for new Job instances.  It will be called with one or more Job definition objects.  Use those to identify the right Job class and instantiate it.  As in:

```typescript
class BasicModule extends Module {
    // ...
    public loadJobs(jobsDefinition: NexusJobDefinition[]): Job[] {
      return jobsDefinition.map((j) => {
        if (j.type === "basic") {
          return new BasicJob(j);
        }

        throw new Error(`Job type ${j.type} does not match what is available`);
      })
    }
    // ...
}
```
