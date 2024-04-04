import type { Options } from "./app/options.ts";
import { IntentsBitField } from "discord.js";

export const config: Options = {
    client: {
        intents: [
            IntentsBitField.Flags.Guilds
        ]
    }
}
