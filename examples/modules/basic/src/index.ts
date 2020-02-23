import { Router } from 'express';
import {
  ConnectionRequestDefinition,
  IRouteDefinition,
  Job,
  NexusJobDefinition,
  NexusModule,
  NexusModuleConfig
} from '@nexus-switchboard/nexus-extend';

import routes from "./routes";
import jobs from "./jobs";
import connections from "./connections";
import config from "./config";

export class BasicModule extends NexusModule {

  public name = "basic";

  public loadConfig(overrides?: NexusModuleConfig): NexusModuleConfig {
    return Object.assign({}, overrides, config);
  }

  public loadRoutes(_config: NexusModuleConfig): IRouteDefinition[] {
    return routes;
  }

  public loadJobs(jobsDefinition: NexusJobDefinition[]): Job[] {
    return jobs(jobsDefinition);
  }

  public loadConnections(config: NexusModuleConfig, _router: Router): ConnectionRequestDefinition[] {
    return connections(config);
  }
}

export default new BasicModule();
