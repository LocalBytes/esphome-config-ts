/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ezo.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ezo
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { SensorSENSOR_SCHEMA } from "./sensor.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class EzoSensor extends BaseComponent<EzoSensorConfig> {
    componentName: string = "ezo.sensor";
}

export interface EzoSensorConfig extends SensorSENSOR_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    on_custom?: object[];
    on_calibration?: object[];
    on_slope?: object[];
    on_t?: object[];
    on_device_information?: object[];
    on_led?: object[];
    update_interval?: any;
    i2c_id?: ID;
    address: string;
}
