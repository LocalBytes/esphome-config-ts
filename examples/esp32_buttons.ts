// noinspection ES6PreferShortImport

import {Configuration, VirtualComponent} from "../dist/lib/index.js";
import {
    Api,
    CaptivePortal,
    Esp32,
    Esphome,
    Logger,
    MatrixKeypad,
    Ota,
    WebServer,
    Wifi
} from "../dist/components/index.js";

class Button extends VirtualComponent {
    synth() {
        return []
    }
}

let config = new Configuration();

//TODO: Figure out why this is expecting build_path
// @ts-ignore
config.addComponent(new Esphome({
    name: "macropad",
    platformio_options: {
        "board_build.flash_mode": "dio",
    }
}))

config.addComponent(new Esp32({
    board: "esp32-c3-devkitm-1",
    framework: {
        type: "esp-idf",
        sdkconfig_options: {},
    }
}));

config.addComponent(new Wifi({
    id: "wifi",
    ap: {ssid: "LocalBytes MacroPad"}
}))
config.addComponent(new CaptivePortal({id: "captive_portal"}))

config.addComponent(new Logger({
    id: "logger",
    logs: {}
}))

config.addComponent(new WebServer({id: "webserver"}))
config.addComponent(new Api({id: "api"}))
config.addComponent(new Ota({id: "ota"}))

config.addComponent(new MatrixKeypad({
    id: "keypad",
    keys: "ABCDEFGHIJKLMNOPQRSTUVWXY",
    columns: [21, 20, 3, 7].map(pin => ({pin: `GPIO${pin}`})),
    rows: [0, 1, 10, 4, 5, 6].map(pin => ({pin: `GPIO${pin}`})),
}));

console.log(config.synthYaml());
