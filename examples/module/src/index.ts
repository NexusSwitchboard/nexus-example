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
        return configRules;
    }

    public loadConfig(config?: ModuleConfig): ModuleConfig {
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
