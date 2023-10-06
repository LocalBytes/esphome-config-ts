/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: esp32_dac.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/esp32_dac
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { OutputFLOAT_OUTPUT_SCHEMA } from "./output.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Esp32DacOutput extends BaseComponent<Esp32DacOutputConfig> {
    componentName: string = "esp32_dac.output";
}

export interface Esp32DacOutputConfig extends OutputFLOAT_OUTPUT_SCHEMA, CoreCOMPONENT_SCHEMA {
    id: string;
    pin: Pin;
}
