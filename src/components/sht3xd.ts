/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sht3xd.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sht3xd
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Sht3xdSensor extends EsphomeComponent<Sht3xdSensorConfig> {
    componentName: string = "sht3xd.sensor";
}

export interface Sht3xdSensorConfigHumidity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sht3xdSensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sht3xdSensorConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    heater_enabled?: boolean;
    humidity?: Sht3xdSensorConfigHumidity;
    i2c_id?: ID;
    id?: ID;
    temperature?: Sht3xdSensorConfigTemperature;
    update_interval?: any;
}
