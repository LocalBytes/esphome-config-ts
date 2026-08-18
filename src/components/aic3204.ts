/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: aic3204.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/aic3204
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export abstract class Aic3204 extends EsphomeComponent {
    componentName: string = "aic3204";
}

export class Aic3204AudioDac extends EsphomeComponent<Aic3204AudioDacConfig> {
    componentName: string = "aic3204.audio_dac";
}

export interface Aic3204AudioDacConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    i2c_id?: ID;
    id?: ID;
}
