/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: esp32_hall.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/esp32_hall
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Esp32HallSensor extends EsphomeComponent<Esp32HallSensorConfig> {
    componentName: string = "esp32_hall.sensor";
}

export type Esp32HallSensorConfig = {
        id?: any;
        unit_of_measurement?: any;
        icon?: any;
        accuracy_decimals?: any;
        state_class?: any;
        update_interval?: any;
    } & SensorSENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
