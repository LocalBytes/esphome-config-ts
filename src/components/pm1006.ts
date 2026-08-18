/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: pm1006.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/pm1006
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Pm1006Sensor extends EsphomeComponent<Pm1006SensorConfig> {
    componentName: string = "pm1006.sensor";
}

export interface Pm1006SensorConfigPm25 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pm1006SensorConfig extends CoreCOMPONENTSCHEMA {
    id?: ID;
    pm_2_5?: Pm1006SensorConfigPm25;
    uart_id?: ID;
    update_interval?: any;
}
