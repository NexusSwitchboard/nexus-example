"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrRUFBNkU7QUFFN0UsTUFBYSxlQUFnQixTQUFRLHlCQUFVO0lBQS9DOztRQUVXLFNBQUksR0FBVyxZQUFZLENBQUM7SUFVdkMsQ0FBQztJQVJVLE9BQU87UUFDVixPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBRU0sVUFBVTtRQUNiLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7Q0FFSjtBQVpELDBDQVlDO0FBRUQsU0FBd0IsZ0JBQWdCLENBQUMsR0FBcUI7SUFDMUQsT0FBTyxJQUFJLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNwQyxDQUFDO0FBRkQsbUNBRUMifQ==