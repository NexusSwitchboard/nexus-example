import { Router } from 'express';
import { ConnectionRequestDefinition, IRouteDefinition, Job, NexusJobDefinition, NexusModule, NexusModuleConfig } from '@nexus-switchboard/nexus-extend';
export declare class BasicModule extends NexusModule {
    name: string;
    loadConfig(overrides?: NexusModuleConfig): NexusModuleConfig;
    loadRoutes(_config: NexusModuleConfig): IRouteDefinition[];
    loadJobs(jobsDefinition: NexusJobDefinition[]): Job[];
    loadConnections(config: NexusModuleConfig, _router: Router): ConnectionRequestDefinition[];
}
declare const _default: BasicModule;
export default _default;
