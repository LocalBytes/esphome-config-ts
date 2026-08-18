/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: nfc.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/nfc
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { BinarySensorBINARYSENSORSCHEMA } from "./binary_sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class NfcBinarySensor extends EsphomeComponent<NfcBinarySensorConfig> {
    componentName: string = "nfc.binary_sensor";
}

export type NfcBinarySensorConfig = {
        id?: any;
        ndef_contains?: string;
        nfcc_id?: ID;
        tag_id?: string;
        uid?: any;
    } & BinarySensorBINARYSENSORSCHEMA & CoreCOMPONENTSCHEMA;
