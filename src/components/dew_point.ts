/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: dew_point.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/dew_point
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class DewPointSensor extends EsphomeComponent<DewPointSensorConfig> {
    componentName: string = "dew_point.sensor";
}

export type DewPointSensorConfig = {
        accuracy_decimals?: any;
        device_class?: any;
        humidity: ID;
        icon?: any;
        id?: any;
        state_class?: any;
        temperature: ID;
        unit_of_measurement?: any;
    } & SensorSENSORSCHEMA & CoreCOMPONENTSCHEMA;
