/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: ezo.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ezo
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class EzoSensor extends EsphomeComponent<EzoSensorConfig> {
    componentName: string = "ezo.sensor";
}

export type EzoSensorConfig = {
        id?: any;
        on_custom?: object[];
        on_calibration?: object[];
        on_slope?: object[];
        on_t?: object[];
        on_device_information?: object[];
        on_led?: object[];
        update_interval?: any;
        i2c_id?: ID;
        address: string;
    } & SensorSENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
