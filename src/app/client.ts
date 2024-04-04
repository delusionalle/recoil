import { Client, type ClientOptions } from "discord.js";

export class Recoil extends Client {
    constructor(opts: ClientOptions) {
        super(opts);
    }

    // init module stores using the module loader
    ld() {

    }

    // connect to websocket and ready for message handling
    async ws_login() {
        await super.login(process.env.AUTHORIZATION)
    }
}
