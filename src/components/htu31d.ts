/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: htu31d.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/htu31d
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Htu31dSensor extends EsphomeComponent<Htu31dSensorConfig> {
    componentName: string = "htu31d.sensor";
}

export interface Htu31dSensorConfigHumidity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Htu31dSensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Htu31dSensorConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    humidity?: Htu31dSensorConfigHumidity;
    i2c_id?: ID;
    id?: ID;
    temperature?: Htu31dSensorConfigTemperature;
    update_interval?: any;
}
