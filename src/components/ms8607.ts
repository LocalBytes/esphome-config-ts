/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ms8607.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ms8607
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Ms8607Sensor extends EsphomeComponent<Ms8607SensorConfig> {
    componentName: string = "ms8607.sensor";
}

export interface Ms8607SensorConfigHumidity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    address?: any;
    device_class?: any;
    humidity_i2c_id?: ID;
    i2c_id?: ID;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ms8607SensorConfigPressure extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ms8607SensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ms8607SensorConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    humidity?: Ms8607SensorConfigHumidity;
    i2c_id?: ID;
    id?: ID;
    pressure?: Ms8607SensorConfigPressure;
    temperature?: Ms8607SensorConfigTemperature;
    update_interval?: any;
}
