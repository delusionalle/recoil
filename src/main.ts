import { Recoil } from "./app/client.ts";
import { config } from "./opts.ts";

const app = new Recoil(config.client)

await app.ws_login();
