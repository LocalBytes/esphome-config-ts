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
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Aht10Sensor extends EsphomeComponent<Aht10SensorConfig> {
    componentName: string = "aht10.sensor";
}

export interface Aht10SensorConfigHumidity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Aht10SensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Aht10SensorConfigVariant = 'AHT10' | 'AHT20';

export interface Aht10SensorConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    humidity?: Aht10SensorConfigHumidity;
    i2c_id?: ID;
    id?: ID;
    temperature?: Aht10SensorConfigTemperature;
    update_interval?: any;
    variant?: Aht10SensorConfigVariant;
}
