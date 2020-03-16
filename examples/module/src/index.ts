import {
  IRouteDefinition,
  Job,
  NexusJobDefinition,
  NexusModule,
  ModuleConfig, ConnectionRequest
} from '@nexus-switchboard/nexus-extend';

import routes from "./routes";
import jobs from "./jobs";
import connections from "./connections";
import config from "./config";
import {Application} from "express";

export class BasicModule extends NexusModule {

    public name = "basic";

    public loadConfig(overrides?: ModuleConfig): ModuleConfig {
        return Object.assign({}, overrides, config);
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
