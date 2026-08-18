/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: qwiic_pir.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/qwiic_pir
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreTimePeriod, CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { BinarySensorBINARYSENSORSCHEMA } from "./binary_sensor.js";

export class QwiicPirBinarySensor extends EsphomeComponent<QwiicPirBinarySensorConfig> {
    componentName: string = "qwiic_pir.binary_sensor";
}

export type QwiicPirBinarySensorConfigDebounce = CoreTimePeriod;
export type QwiicPirBinarySensorConfigDebounceMode = 'RAW' | 'NATIVE' | 'HYBRID';
export type QwiicPirBinarySensorConfig = {
        address?: any;
        debounce?: QwiicPirBinarySensorConfigDebounce;
        debounce_mode?: QwiicPirBinarySensorConfigDebounceMode;
        device_class?: any;
        i2c_id?: ID;
        id?: any;
    } & BinarySensorBINARYSENSORSCHEMA & CoreCOMPONENTSCHEMA;
