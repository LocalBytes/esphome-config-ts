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
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export abstract class Senseair extends EsphomeComponent {
    componentName: string = "senseair";
}

export class SenseairSensor extends EsphomeComponent<SenseairSensorConfig> {
    componentName: string = "senseair.sensor";
}

export interface SenseairSensorCALIBRATIONACTIONSCHEMA {
    id: ID;
}

export interface SenseairSensorConfigCo2 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SenseairSensorConfig extends CoreCOMPONENTSCHEMA {
    co2?: SenseairSensorConfigCo2;
    id?: ID;
    uart_id?: ID;
    update_interval?: any;
}
