/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: status.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/status
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { BinarySensorBINARYSENSORSCHEMA } from "./binary_sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class StatusBinarySensor extends EsphomeComponent<StatusBinarySensorConfig> {
    componentName: string = "status.binary_sensor";
}

export type StatusBinarySensorConfig = {
        device_class?: any;
        entity_category?: any;
        id?: any;
        update_interval?: any;
    } & BinarySensorBINARYSENSORSCHEMA & CoreCOMPONENTSCHEMA;
