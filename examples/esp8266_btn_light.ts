// noinspection ES6PreferShortImport

import {Configuration} from "../dist/lib/index.js";
import {BinaryLight, Esp8266, Esphome, GpioBinarySensor, GpioOutput} from "../dist/components/index.js";

let config = new Configuration();

config.addComponent(new Esphome({
    name: "Button Light",
    build_path: "build",
    platformio_options: {},
}));

config.addComponent(new Esp8266({
    board: "d1_mini",
}))

let output = new GpioOutput({
    id: "output",
    pin: "D1",
})
config.addComponent(output);

let light = new BinaryLight({
    id: "button_light",
    name: "Button Light",
    output: output.config.id,
    output_id: output.config.id
});
config.addComponent(light);

let button = new GpioBinarySensor({
    id: "button",
    pin: "D2",
    on_press: [{
        "light.toggle": light.config.id
    }]
});
config.addComponent(button);

console.log(config.synthYaml());
