/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: tm1638.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/tm1638
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { BinarySensor_BINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { DisplayBASIC_DISPLAY_SCHEMA } from "./display.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { OutputBINARY_OUTPUT_SCHEMA } from "./output.js";
import type { Switch_SWITCH_SCHEMA } from "./switch.js";

export class Tm1638BinarySensor extends EsphomeComponent<Tm1638BinarySensorConfig> {
    componentName: string = "tm1638.binary_sensor";
}

export interface Tm1638BinarySensorConfig extends BinarySensor_BINARY_SENSOR_SCHEMA {
    id?: any;
    key: number;
    tm1638_id?: ID;
}

export class Tm1638Display extends EsphomeComponent<Tm1638DisplayConfig> {
    componentName: string = "tm1638.display";
}

export type Tm1638DisplayConfig = {
        clk_pin: Pin;
        dio_pin: Pin;
        id?: ID;
        intensity?: number;
        stb_pin: Pin;
        update_interval?: any;
        lambda?: any;
    } & DisplayBASIC_DISPLAY_SCHEMA & CoreCOMPONENT_SCHEMA;

export class Tm1638Output extends EsphomeComponent<Tm1638OutputConfig> {
    componentName: string = "tm1638.output";
}

export type Tm1638OutputConfig = {
        id?: ID;
        led: number;
        tm1638_id?: ID;
    } & OutputBINARY_OUTPUT_SCHEMA & CoreCOMPONENT_SCHEMA;

export class Tm1638Switch extends EsphomeComponent<Tm1638SwitchConfig> {
    componentName: string = "tm1638.switch";
}

export type Tm1638SwitchConfig = {
        id?: ID;
        led: number;
        tm1638_id?: ID;
    } & Switch_SWITCH_SCHEMA & CoreCOMPONENT_SCHEMA;
