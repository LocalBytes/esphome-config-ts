/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: honeywell_hih_i2c.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/honeywell_hih_i2c
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class HoneywellHihI2cSensor extends EsphomeComponent<HoneywellHihI2cSensorConfig> {
    componentName: string = "honeywell_hih_i2c.sensor";
}

export interface HoneywellHihI2cSensorConfigHumidity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HoneywellHihI2cSensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HoneywellHihI2cSensorConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    humidity?: HoneywellHihI2cSensorConfigHumidity;
    i2c_id?: ID;
    id?: ID;
    temperature?: HoneywellHihI2cSensorConfigTemperature;
    update_interval?: any;
}
