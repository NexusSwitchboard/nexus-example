import {ModuleConfig} from "@nexus-switchboard/nexus-extend";

export default (_config: ModuleConfig) => {
    return [
        {
            name: "connection",
            config: {
                "CONN_CONFIG": "My Config Value"
            }
        }
    ];
}
