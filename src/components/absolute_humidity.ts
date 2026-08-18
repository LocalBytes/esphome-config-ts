/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: absolute_humidity.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/absolute_humidity
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class AbsoluteHumiditySensor extends EsphomeComponent<AbsoluteHumiditySensorConfig> {
    componentName: string = "absolute_humidity.sensor";
}

export type AbsoluteHumiditySensorConfigEquation = 'BUCK' | 'TETENS' | 'WOBUS';
export type AbsoluteHumiditySensorConfig = {
        accuracy_decimals?: any;
        device_class?: any;
        equation?: AbsoluteHumiditySensorConfigEquation;
        humidity: ID;
        id?: any;
        state_class?: any;
        temperature: ID;
        unit_of_measurement?: any;
    } & SensorSENSORSCHEMA & CoreCOMPONENTSCHEMA;
