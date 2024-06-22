/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: senseair.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/senseair
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class SenseairSensor extends EsphomeComponent<SenseairSensorConfig> {
    componentName: string = "senseair.sensor";
}

export interface SenseairSensorConfigCo2 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface SenseairSensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    co2: SenseairSensorConfigCo2;
    update_interval?: any;
    uart_id?: ID;
}

export interface SenseairSensorCALIBRATION_ACTION_SCHEMA {
    id: ID;
}

export abstract class Senseair extends EsphomeComponent {
    componentName: string = "senseair";
}
