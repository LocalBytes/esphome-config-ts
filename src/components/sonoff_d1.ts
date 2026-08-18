/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sonoff_d1.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sonoff_d1
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { LightBRIGHTNESSONLYLIGHTSCHEMA } from "./light.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class SonoffD1Light extends EsphomeComponent<SonoffD1LightConfig> {
    componentName: string = "sonoff_d1.light";
}

export type SonoffD1LightConfig = {
        max_value?: number;
        min_value?: number;
        output_id?: ID;
        uart_id?: ID;
        use_rm433_remote?: boolean;
    } & LightBRIGHTNESSONLYLIGHTSCHEMA & CoreCOMPONENTSCHEMA;
