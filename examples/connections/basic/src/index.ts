import {Connection, ConnectionConfig} from "@nexus-switchboard/nexus-extend";

export class BasicConnection extends Connection {

    public name: string = "basic";

    public connect(): Connection {
        return undefined;
    }

    public disconnect(): boolean {
        return false;
    }

}

export default function createConnection(cfg: ConnectionConfig): Connection {
    return new BasicConnection(cfg);
}
