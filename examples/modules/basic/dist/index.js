"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nexus_extend_1 = require("@nexus-switchboard/nexus-extend");
const routes_1 = __importDefault(require("./routes"));
const jobs_1 = __importDefault(require("./jobs"));
const connections_1 = __importDefault(require("./connections"));
const config_1 = __importDefault(require("./config"));
class BasicModule extends nexus_extend_1.NexusModule {
    constructor() {
        super(...arguments);
        this.name = "basic";
    }
    loadConfig(overrides) {
        return Object.assign({}, overrides, config_1.default);
    }
    loadRoutes(_config) {
        return routes_1.default;
    }
    loadJobs(jobsDefinition) {
        return jobs_1.default(jobsDefinition);
    }
    loadConnections(config, _router) {
        return connections_1.default(config);
    }
}
exports.BasicModule = BasicModule;
exports.default = new BasicModule();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxrRUFPeUM7QUFFekMsc0RBQThCO0FBQzlCLGtEQUEwQjtBQUMxQixnRUFBd0M7QUFDeEMsc0RBQThCO0FBRTlCLE1BQWEsV0FBWSxTQUFRLDBCQUFXO0lBQTVDOztRQUVTLFNBQUksR0FBRyxPQUFPLENBQUM7SUFpQnhCLENBQUM7SUFmUSxVQUFVLENBQUMsU0FBNkI7UUFDN0MsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsZ0JBQU0sQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFTSxVQUFVLENBQUMsT0FBMEI7UUFDMUMsT0FBTyxnQkFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxRQUFRLENBQUMsY0FBb0M7UUFDbEQsT0FBTyxjQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVNLGVBQWUsQ0FBQyxNQUF5QixFQUFFLE9BQWU7UUFDL0QsT0FBTyxxQkFBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdCLENBQUM7Q0FDRjtBQW5CRCxrQ0FtQkM7QUFFRCxrQkFBZSxJQUFJLFdBQVcsRUFBRSxDQUFDIn0=