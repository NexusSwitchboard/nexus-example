import {IConfigGroups} from "@nexus-switchboard/nexus-extend"

export const configRules:IConfigGroups = {
    "basic": [
        {
            name: "CONFIG_1",
            reason: "An example of a configuration value that must be set",
            required: true,
            default: "Test",
            level: "error",
            type: ["string"]
        }
    ]
}
