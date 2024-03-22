/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: am2320.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/am2320
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Am2320Sensor extends BaseComponent<Am2320SensorConfig> {
    componentName: string = "am2320.sensor";
}

export interface Am2320SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    temperature?: Am2320SensorConfigTemperature;
    humidity?: Am2320SensorConfigHumidity;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}

export interface Am2320SensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Am2320SensorConfigHumidity extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}
