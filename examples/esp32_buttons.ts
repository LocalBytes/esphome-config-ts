import { Configuration } from "@/lib/config.ts";
import { EsphomePlatform } from "@/components/EsphomePlatform.ts";
import { WifiPlatform } from "@/components/WifiPlatform.ts";
import { CaptivePortalPlatform } from "@/components/CaptivePortalPlatform.ts";
import { LoggerPlatform } from "@/components/LoggerPlatform.ts";
import { MatrixKeypadPlatform } from "@/components/MatrixKeypadPlatform.ts";
import { ApiPlatform } from "@/components/ApiPlatform.ts";
import { WebServerPlatform } from "@/components/WebServerPlatform.ts";
import { EsphomeOta } from "@/components/EsphomeOta.ts";
import { Esp32Platform } from "@/components/Esp32Platform.ts";

let config = new Configuration();

config.addComponent(
  new EsphomePlatform({
    name: "macropad",
  }),
);

config.addComponent(
  new Esp32Platform({
    board: "esp32-c3-devkitm-1",
    framework: {
      type: "esp-idf",
      sdkconfig_options: {},
    },
  }),
);

config.addComponent(
  new WifiPlatform({
    id: "wifi",
    ap: { ssid: "LocalBytes MacroPad" },
  }),
);
config.addComponent(new CaptivePortalPlatform({ id: "captive_portal" }));

config.addComponent(
  new LoggerPlatform({
    id: "logger",
    logs: {},
  }),
);

config.addComponent(new WebServerPlatform({}));
config.addComponent(new ApiPlatform({}));
config.addComponent(new EsphomeOta({}));

config.addComponent(
  new MatrixKeypadPlatform({
    id: "keypad",
    keys: "ABCDEFGHIJKLMNOPQRSTUVWXY",
    columns: [21, 20, 3, 7].map((pin) => ({ pin: `GPIO${pin}` })),
    rows: [0, 1, 10, 4, 5, 6].map((pin) => ({ pin: `GPIO${pin}` })),
  }),
);

console.log(config.synthYaml());
