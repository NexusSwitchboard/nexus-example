import {
  IRouteDefinition,
  Job,
  NexusJobDefinition,
  NexusModule,
  ModuleConfig, ConnectionRequest, IConfigGroups
} from '@nexus-switchboard/nexus-extend';

import routes from "./routes";
import jobs from "./jobs";
import connections from "./connections";
import {configRules} from "./config";
import {Application} from "express";

export class BasicModule extends NexusModule {

    public name = "basic";

    protected getConfigRules(): IConfigGroups {
        // We rely on our config rules to validate that we are getting the required 
        //  config in the right format.
        return configRules;
    }

    public loadConfig(config?: ModuleConfig): ModuleConfig {
        // Notice that we simply return the config object that is given to us. That's because
        //  we are relying on the configRules defined to be used to validate that the config
        //  is valid.  We *could* validate things here that are not possible to validate any
        //  other way, though.
        return config;
    }

    public loadRoutes(_config: ModuleConfig): IRouteDefinition[] {
        return routes;
    }

    public loadJobs(jobsDefinition: NexusJobDefinition[]): Job[] {
        return jobs(jobsDefinition);
    }

    public loadConnections(config: ModuleConfig,
                           _subApp: Application): ConnectionRequest[] {
        return connections(config);
    }
}

export default new BasicModule();
