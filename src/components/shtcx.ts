/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: shtcx.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/shtcx
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class ShtcxSensor extends EsphomeComponent<ShtcxSensorConfig> {
    componentName: string = "shtcx.sensor";
}

export interface ShtcxSensorConfigHumidity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface ShtcxSensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface ShtcxSensorConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    humidity?: ShtcxSensorConfigHumidity;
    i2c_id?: ID;
    id?: ID;
    temperature?: ShtcxSensorConfigTemperature;
    update_interval?: any;
}
