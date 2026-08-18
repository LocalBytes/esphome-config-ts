/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: display.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/display
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export abstract class Display extends EsphomeComponent {
    componentName: string = "display";
}

export interface DisplayBASICDISPLAYSCHEMA extends CoreCOMPONENTSCHEMA {
    lambda?: any;
    update_interval?: any;
}

export interface DisplayFULLDISPLAYSCHEMAPages {
    id?: ID;
    lambda: string;
}

export interface DisplayFULLDISPLAYSCHEMA extends DisplayBASICDISPLAYSCHEMA {
    auto_clear_enabled?: any;
    on_page_change?: object[];
    pages?: DisplayFULLDISPLAYSCHEMAPages[];
    rotation?: any;
    show_test_card?: boolean;
}
