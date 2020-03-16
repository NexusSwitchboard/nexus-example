import {Request, Response} from "express";
import { IRouteDefinition } from '@nexus-switchboard/nexus-extend';

const routes: IRouteDefinition[] = [{
    method: "get",
    path: "/test",
    handler: async (_req: Request, res: Response) => {
        return res.json({message: "Success!"}).status(200);
    },
    protected: false
}];

export default routes;
