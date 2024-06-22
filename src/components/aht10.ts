/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: aht10.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/aht10
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Aht10Sensor extends BaseComponent<Aht10SensorConfig> {
    componentName: string = "aht10.sensor";
}

export interface Aht10SensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Aht10SensorConfigHumidity extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Aht10SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    temperature?: Aht10SensorConfigTemperature;
    humidity?: Aht10SensorConfigHumidity;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}
