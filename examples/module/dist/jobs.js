"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nexus_extend_1 = require("@nexus-switchboard/nexus-extend");
class BasicJob extends nexus_extend_1.Job {
    constructor() {
        super(...arguments);
        this.name = "basic";
    }
    /**
     * Override the _run method to do the work that the job entails.
     * @private
     */
    _run() {
        return Promise.resolve(true);
    }
}
exports.default = (jobsDefinition) => {
    return jobsDefinition.map((j) => {
        if (j.type === "basic") {
            return new BasicJob(j);
        }
        throw new Error(`Job type ${j.type} does not match what is available`);
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam9icy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9qb2JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0VBQTBFO0FBRzFFLE1BQU0sUUFBUyxTQUFRLGtCQUFHO0lBQTFCOztRQUVTLFNBQUksR0FBVyxPQUFPLENBQUM7SUFTaEMsQ0FBQztJQVBDOzs7T0FHRztJQUNPLElBQUk7UUFDVixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztDQUNGO0FBRUQsa0JBQWUsQ0FBQyxjQUFvQyxFQUFTLEVBQUU7SUFDN0QsT0FBTyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDOUIsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtZQUN0QixPQUFPLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3hCO1FBRUQsTUFBTSxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLG1DQUFtQyxDQUFDLENBQUM7SUFDekUsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUEifQ==