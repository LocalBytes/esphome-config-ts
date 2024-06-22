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
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class T6615Sensor extends EsphomeComponent<T6615SensorConfig> {
    componentName: string = "t6615.sensor";
}

export interface T6615SensorConfigCo2 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface T6615SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    co2: T6615SensorConfigCo2;
    update_interval?: any;
    uart_id?: ID;
}
