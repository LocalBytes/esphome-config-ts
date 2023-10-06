/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: tm1638.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/tm1638
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { BinarySensorBINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import { DisplayBASIC_DISPLAY_SCHEMA } from "./display.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import { OutputBINARY_OUTPUT_SCHEMA } from "./output.js";
import { SwitchSWITCH_SCHEMA } from "./switch.js";

export class Tm1638BinarySensor extends BaseComponent<Tm1638BinarySensorConfig> {
    componentName: string = "tm1638.binary_sensor";
}

export interface Tm1638BinarySensorConfig extends BinarySensorBINARY_SENSOR_SCHEMA {
    id?: any;
    tm1638_id?: ID;
    key: number;
}

export class Tm1638Display extends BaseComponent<Tm1638DisplayConfig> {
    componentName: string = "tm1638.display";
}

export interface Tm1638DisplayConfig extends DisplayBASIC_DISPLAY_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: ID;
    clk_pin: Pin;
    stb_pin: Pin;
    dio_pin: Pin;
    intensity?: number;
    update_interval?: any;
}

export class Tm1638Output extends BaseComponent<Tm1638OutputConfig> {
    componentName: string = "tm1638.output";
}

export interface Tm1638OutputConfig extends OutputBINARY_OUTPUT_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: ID;
    tm1638_id?: ID;
    led: number;
}

export class Tm1638Switch extends BaseComponent<Tm1638SwitchConfig> {
    componentName: string = "tm1638.switch";
}

export interface Tm1638SwitchConfig extends SwitchSWITCH_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: ID;
    tm1638_id?: ID;
    led: number;
}
