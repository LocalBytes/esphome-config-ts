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
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class AbsoluteHumiditySensor extends EsphomeComponent<AbsoluteHumiditySensorConfig> {
    componentName: string = "absolute_humidity.sensor";
}

export type AbsoluteHumiditySensorConfigEquation = 'BUCK' | 'TETENS' | 'WOBUS';
export type AbsoluteHumiditySensorConfig = {
        unit_of_measurement?: any;
        icon?: any;
        accuracy_decimals?: any;
        state_class?: any;
        id?: any;
        temperature: ID;
        humidity: ID;
        equation?: AbsoluteHumiditySensorConfigEquation;
    } & SensorSENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
