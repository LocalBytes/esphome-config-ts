/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: max6675.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/max6675
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Max6675Sensor extends EsphomeComponent<Max6675SensorConfig> {
    componentName: string = "max6675.sensor";
}

export type Max6675SensorConfig = {
        id?: any;
        unit_of_measurement?: any;
        accuracy_decimals?: any;
        device_class?: any;
        state_class?: any;
        update_interval?: any;
        spi_id?: ID;
        cs_pin: Pin;
    } & SensorSENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
