import { Connection, ConnectionConfig } from "@nexus-switchboard/nexus-extend";
export declare class BasicConnection extends Connection {
    name: string;
    connect(): Connection;
    disconnect(): boolean;
}
export default function createConnection(cfg: ConnectionConfig): Connection;
