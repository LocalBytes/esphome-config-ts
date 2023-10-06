import {Configuration} from "../lib/config";
import {VirtualComponent} from "../lib/base";
import {Esphome} from "../lib/components/esphome";
import {Esp32} from "../lib/components/esp32";
import {WebServer} from "../lib/components/web_server";
import {Logger} from "../lib/components/logger";
import {Api} from "../lib/components/api";
import {Ota} from "../lib/components/ota";
import {MatrixKeypad} from "../lib/components/matrix_keypad";
import {Wifi} from "../lib/components/wifi";
import {CaptivePortal} from "../lib/components/captive_portal";

class Button extends VirtualComponent<{}> {
    synth() {
        return []
    }
}


let config = new Configuration();

config.addComponent(new Esphome({
    name: "macropad",
    build_path: "",
    platformio_options: {
        "board_build.flash_mode": "dio",
    }
}))

config.addComponent(new Esp32({
    board: "esp32-c3-devkitm-1",
    framework: {
        type: "esp-idf",
        sdkconfig_options: {}
    }
}));

config.addComponent(new Wifi({
    id: "wifi",
    ap: {ssid: "LocalBytes MacroPad"}
}))
config.addComponent(new CaptivePortal({
    id: "captive_portal",
    web_server_base_id: "webserver_base"
}))

config.addComponent(new Logger({
    id: "logger",
    logs: {}
}))

config.addComponent(new WebServer({
    id: "webserver",
    web_server_base_id: "webserver_base"
}))
config.addComponent(new Api({id: "api"}))
config.addComponent(new Ota({id: "ota"}))

config.addComponent(new MatrixKeypad({
    id: "keypad",
    keys: "ABCDEFGHIJKLMNOPQRSTUVWXY",
    columns: [21, 20, 3, 7].map(pin => ({pin: `GPIO${pin}`})),
    rows: [0, 1, 10, 4, 5, 6].map(pin => ({pin: `GPIO${pin}`})),
}));

