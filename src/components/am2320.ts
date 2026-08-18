/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: am2320.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/am2320
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Am2320Sensor extends EsphomeComponent<Am2320SensorConfig> {
    componentName: string = "am2320.sensor";
}

export interface Am2320SensorConfigHumidity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Am2320SensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Am2320SensorConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    humidity?: Am2320SensorConfigHumidity;
    i2c_id?: ID;
    id?: ID;
    temperature?: Am2320SensorConfigTemperature;
    update_interval?: any;
}
