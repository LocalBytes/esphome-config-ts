/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: mhz19.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mhz19
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Mhz19Sensor extends BaseComponent<Mhz19SensorConfig> {
    componentName: string = "mhz19.sensor";
}

export interface Mhz19SensorConfigCo2 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Mhz19SensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Mhz19SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    co2: Mhz19SensorConfigCo2;
    temperature?: Mhz19SensorConfigTemperature;
    automatic_baseline_calibration?: boolean;
    update_interval?: any;
    uart_id?: ID;
}

export interface Mhz19SensorCALIBRATION_ACTION_SCHEMA {
    id: ID;
}

export abstract class Mhz19 extends BaseComponent {
    componentName: string = "mhz19";
}
