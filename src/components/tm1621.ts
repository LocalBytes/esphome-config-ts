/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: tm1621.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/tm1621
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { DisplayBASICDISPLAYSCHEMA } from "./display.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Tm1621Display extends EsphomeComponent<Tm1621DisplayConfig> {
    componentName: string = "tm1621.display";
}

export type Tm1621DisplayConfig = {
        cs_pin: Pin;
        data_pin: Pin;
        id?: ID;
        read_pin: Pin;
        update_interval?: any;
        write_pin: Pin;
        lambda?: any;
    } & DisplayBASICDISPLAYSCHEMA & CoreCOMPONENTSCHEMA;
