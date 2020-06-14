"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicModule = void 0;
const nexus_extend_1 = require("@nexus-switchboard/nexus-extend");
const routes_1 = __importDefault(require("./routes"));
const jobs_1 = __importDefault(require("./jobs"));
const connections_1 = __importDefault(require("./connections"));
const config_1 = require("./config");
class BasicModule extends nexus_extend_1.NexusModule {
    constructor() {
        super(...arguments);
        this.name = "basic";
    }
    getConfigRules() {
        return config_1.configRules;
    }
    loadConfig(config) {
        return config;
    }
    loadRoutes(_config) {
        return routes_1.default;
    }
    loadJobs(jobsDefinition) {
        return jobs_1.default(jobsDefinition);
    }
    loadConnections(config, _subApp) {
        return connections_1.default(config);
    }
}
exports.BasicModule = BasicModule;
exports.default = new BasicModule();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsa0VBTXlDO0FBRXpDLHNEQUE4QjtBQUM5QixrREFBMEI7QUFDMUIsZ0VBQXdDO0FBQ3hDLHFDQUFxQztBQUdyQyxNQUFhLFdBQVksU0FBUSwwQkFBVztJQUE1Qzs7UUFFVyxTQUFJLEdBQUcsT0FBTyxDQUFDO0lBc0IxQixDQUFDO0lBcEJhLGNBQWM7UUFDcEIsT0FBTyxvQkFBVyxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxVQUFVLENBQUMsTUFBcUI7UUFDbkMsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVNLFVBQVUsQ0FBQyxPQUFxQjtRQUNuQyxPQUFPLGdCQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVNLFFBQVEsQ0FBQyxjQUFvQztRQUNoRCxPQUFPLGNBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU0sZUFBZSxDQUFDLE1BQW9CLEVBQ3BCLE9BQW9CO1FBQ3ZDLE9BQU8scUJBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQixDQUFDO0NBQ0o7QUF4QkQsa0NBd0JDO0FBRUQsa0JBQWUsSUFBSSxXQUFXLEVBQUUsQ0FBQyJ9