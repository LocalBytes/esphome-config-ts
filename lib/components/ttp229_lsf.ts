/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ttp229_lsf.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ttp229_lsf
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import { BinarySensorBINARY_SENSOR_SCHEMA } from "./binary_sensor.js";

export class Ttp229Lsf extends BaseComponent<Ttp229LsfConfig> {
    componentName: string = "ttp229_lsf";
}

export interface Ttp229LsfConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    i2c_id?: ID;
    address?: any;
}

export class Ttp229LsfBinarySensor extends BaseComponent<Ttp229LsfBinarySensorConfig> {
    componentName: string = "ttp229_lsf.binary_sensor";
}

export interface Ttp229LsfBinarySensorConfig extends BinarySensorBINARY_SENSOR_SCHEMA {
    id?: any;
    ttp229_id?: ID;
    channel: number;
}
