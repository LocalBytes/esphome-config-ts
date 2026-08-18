/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: text.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/text
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreENTITYBASESCHEMA, CoreMQTTCOMPONENTSCHEMA, CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { TextSensorTEXTSENSORSCHEMA } from "./text_sensor.js";

export abstract class Text extends EsphomeComponent {
    componentName: string = "text";
}

export interface TextOPERATIONBASESCHEMA {
    id: ID;
}

export type TextTEXTSCHEMAMode = 'TEXT' | 'PASSWORD';

export interface TextTEXTSCHEMAWebServer {
    sorting_group_id?: ID;
    sorting_weight?: any;
    web_server_id?: ID;
}

export type TextTEXTSCHEMA = {
        id?: ID;
        mode: TextTEXTSCHEMAMode;
        mqtt_id?: any;
        on_value?: object[];
        web_server?: TextTEXTSCHEMAWebServer;
        name: string;
        icon?: any;
        internal?: any;
        disabled_by_default?: any;
        entity_category?: any;
    } & CoreENTITYBASESCHEMA & CoreMQTTCOMPONENTSCHEMA;

export class TextTextSensor extends EsphomeComponent<TextTextSensorConfig> {
    componentName: string = "text.text_sensor";
}

export type TextTextSensorConfig = {
        id?: any;
        source_id: ID;
    } & TextSensorTEXTSENSORSCHEMA & CoreCOMPONENTSCHEMA;
