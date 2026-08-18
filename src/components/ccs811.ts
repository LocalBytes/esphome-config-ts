/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ccs811.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ccs811
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { TextSensorTEXTSENSORSCHEMA } from "./text_sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Ccs811Sensor extends EsphomeComponent<Ccs811SensorConfig> {
    componentName: string = "ccs811.sensor";
}

export interface Ccs811SensorConfigEco2 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ccs811SensorConfigTvoc extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ccs811SensorConfigVersion extends TextSensorTEXTSENSORSCHEMA {
    icon?: any;
}

export interface Ccs811SensorConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    baseline?: any;
    eco2?: Ccs811SensorConfigEco2;
    humidity?: ID;
    i2c_id?: ID;
    id?: ID;
    temperature?: ID;
    tvoc?: Ccs811SensorConfigTvoc;
    update_interval?: any;
    version?: Ccs811SensorConfigVersion;
}
