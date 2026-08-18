/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: teleinfo.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/teleinfo
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { TextSensorTEXTSENSORSCHEMA } from "./text_sensor.js";

export class Teleinfo extends EsphomeComponent<TeleinfoConfig> {
    componentName: string = "teleinfo";
}

export interface TeleinfoConfig extends CoreCOMPONENTSCHEMA {
    historical_mode?: boolean;
    id?: ID;
    uart_id?: ID;
    update_interval?: any;
}

export interface TeleinfoTELEINFOLISTENERSCHEMA {
    tag_name: string;
    teleinfo_id?: ID;
}

export class TeleinfoSensor extends EsphomeComponent<TeleinfoSensorConfig> {
    componentName: string = "teleinfo.sensor";
}

export type TeleinfoSensorConfig = {
        accuracy_decimals?: any;
        device_class?: any;
        icon?: any;
        id?: any;
        state_class?: any;
        unit_of_measurement?: any;
    } & SensorSENSORSCHEMA & TeleinfoTELEINFOLISTENERSCHEMA;

export class TeleinfoTextSensor extends EsphomeComponent<TeleinfoTextSensorConfig> {
    componentName: string = "teleinfo.text_sensor";
}

export type TeleinfoTextSensorConfig = {
        id?: any;
    } & TextSensorTEXTSENSORSCHEMA & TeleinfoTELEINFOLISTENERSCHEMA;
