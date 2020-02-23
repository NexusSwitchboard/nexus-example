"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes = [{
        method: "get",
        path: "/test",
        handler: async (_req, res) => {
            return res.json({ message: "Success!" }).status(200);
        },
        protected: false
    }];
exports.default = routes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3JvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLE1BQU0sTUFBTSxHQUF1QixDQUFDO1FBQ2hDLE1BQU0sRUFBRSxLQUFLO1FBQ2IsSUFBSSxFQUFFLE9BQU87UUFDYixPQUFPLEVBQUUsS0FBSyxFQUFFLElBQWEsRUFBRSxHQUFhLEVBQUUsRUFBRTtZQUM1QyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUUsVUFBVSxFQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkQsQ0FBQztRQUNELFNBQVMsRUFBRSxLQUFLO0tBQ25CLENBQUMsQ0FBQztBQUVILGtCQUFlLE1BQU0sQ0FBQyJ9