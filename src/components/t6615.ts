/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: t6615.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/t6615
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class T6615Sensor extends EsphomeComponent<T6615SensorConfig> {
    componentName: string = "t6615.sensor";
}

export interface T6615SensorConfigCo2 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface T6615SensorConfig extends CoreCOMPONENTSCHEMA {
    co2?: T6615SensorConfigCo2;
    id?: ID;
    uart_id?: ID;
    update_interval?: any;
}
