// noinspection ES6PreferShortImport

import {Configuration, VirtualComponent} from "../dist/lib/index.js";
import {BinaryLight, Esp8266, Esphome, GpioBinarySensor, GpioOutput} from "../dist/components/index.js";

class ButtonLight extends VirtualComponent<{
    id: string,
    button_pin: string,
    light_pin: string,
}> {
    synth() {
        let output_id = this.config.id + "_output";
        let button_id = this.config.id + "_button";
        let light_id = this.config.id + "_light";

        return [
            new GpioOutput({
                id: output_id,
                pin: this.config.light_pin,
            }),
            new BinaryLight({
                id: light_id,
                output: output_id,
                output_id: output_id,
            }),
            new GpioBinarySensor({
                id: button_id,
                pin: this.config.button_pin,
                on_press: [{
                    "light.toggle": light_id
                }]
            })
        ];
    }

}

let config = new Configuration();

config.addComponent(new Esphome({
    name: "Button Light",
    build_path: "build",
    platformio_options: {},
}));

config.addComponent(new Esp8266({
    board: "d1_mini",
}))

config.addComponent(new ButtonLight({
    id: "lighty_mclightface",
    button_pin: "D1",
    light_pin: "D2",
}))

console.log(config.synthYaml());
