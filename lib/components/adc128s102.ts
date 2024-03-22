/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: adc128s102.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/adc128s102
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Adc128s102 extends BaseComponent<Adc128s102Config> {
    componentName: string = "adc128s102";
}

export interface Adc128s102Config {
    id?: ID;
    spi_id?: ID;
    cs_pin: Pin;
}

export class Adc128s102Sensor extends BaseComponent<Adc128s102SensorConfig> {
    componentName: string = "adc128s102.sensor";
}

export interface Adc128s102SensorConfig extends SensorSENSOR_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    adc128s102_id?: ID;
    channel: number;
    update_interval?: any;
}
