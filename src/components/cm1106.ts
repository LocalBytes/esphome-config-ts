/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: cm1106.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/cm1106
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export abstract class Cm1106 extends EsphomeComponent {
    componentName: string = "cm1106";
}

export class Cm1106Sensor extends EsphomeComponent<Cm1106SensorConfig> {
    componentName: string = "cm1106.sensor";
}

export interface Cm1106SensorConfigCo2 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Cm1106SensorConfig extends CoreCOMPONENTSCHEMA {
    co2?: Cm1106SensorConfigCo2;
    id?: ID;
    uart_id?: ID;
    update_interval?: any;
}
