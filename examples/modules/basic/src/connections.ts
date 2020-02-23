import {NexusModuleConfig} from "@nexus-switchboard/nexus-extend";

export default (_config: NexusModuleConfig) => {
    return [
        {
            name: "basic",
            config: {
                "CONN_CONFIG": "My Config Value"
            }
        }
    ];
}
