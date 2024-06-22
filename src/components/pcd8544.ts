/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: pcd8544.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/pcd8544
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { DisplayFULL_DISPLAY_SCHEMA } from "./display.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Pcd8544Display extends BaseComponent<Pcd8544DisplayConfig> {
    componentName: string = "pcd8544.display";
}

export type Pcd8544DisplayConfig = {
        id?: ID;
        dc_pin: Pin;
        reset_pin: Pin;
        cs_pin: Pin;
        contrast?: number;
        update_interval?: any;
        spi_id?: ID;
    } & DisplayFULL_DISPLAY_SCHEMA & CoreCOMPONENT_SCHEMA;
