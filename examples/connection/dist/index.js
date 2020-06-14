"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicConnection = void 0;
const nexus_extend_1 = require("@nexus-switchboard/nexus-extend");
class BasicConnection extends nexus_extend_1.Connection {
    constructor() {
        super(...arguments);
        this.name = "connection";
    }
    connect() {
        return undefined;
    }
    disconnect() {
        return false;
    }
}
exports.BasicConnection = BasicConnection;
function createConnection(cfg) {
    return new BasicConnection(cfg);
}
exports.default = createConnection;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsa0VBQTZFO0FBRTdFLE1BQWEsZUFBZ0IsU0FBUSx5QkFBVTtJQUEvQzs7UUFFVyxTQUFJLEdBQVcsWUFBWSxDQUFDO0lBVXZDLENBQUM7SUFSVSxPQUFPO1FBQ1YsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUVNLFVBQVU7UUFDYixPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0NBRUo7QUFaRCwwQ0FZQztBQUVELFNBQXdCLGdCQUFnQixDQUFDLEdBQXFCO0lBQzFELE9BQU8sSUFBSSxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDcEMsQ0FBQztBQUZELG1DQUVDIn0=