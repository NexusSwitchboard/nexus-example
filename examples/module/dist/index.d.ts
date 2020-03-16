import { IRouteDefinition, Job, NexusJobDefinition, NexusModule, ModuleConfig, ConnectionRequest } from '@nexus-switchboard/nexus-extend';
import { Application } from "express";
export declare class BasicModule extends NexusModule {
    name: string;
    loadConfig(overrides?: ModuleConfig): ModuleConfig;
    loadRoutes(_config: ModuleConfig): IRouteDefinition[];
    loadJobs(jobsDefinition: NexusJobDefinition[]): Job[];
    loadConnections(config: ModuleConfig, _subApp: Application): ConnectionRequest[];
}
declare const _default: BasicModule;
export default _default;
