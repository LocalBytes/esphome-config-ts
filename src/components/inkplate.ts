/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: inkplate.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/inkplate
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { DisplayFULL_DISPLAY_SCHEMA } from "./display.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class InkplateDisplay extends EsphomeComponent<InkplateDisplayConfig> {
    componentName: string = "inkplate.display";
}

export type InkplateDisplayConfigModel = 'inkplate_6' | 'inkplate_10' | 'inkplate_6_plus' | 'inkplate_6_v2' | 'inkplate_5' | 'inkplate_5_v2';

export interface InkplateDisplayConfigTransform {
    mirror_x?: boolean;
    mirror_y?: boolean;
}

export type InkplateDisplayConfig = {
        address?: any;
        ckv_pin: Pin;
        cl_pin?: Pin;
        custom_waveform?: number;
        display_data_0_pin?: Pin;
        display_data_1_pin?: Pin;
        display_data_2_pin?: Pin;
        display_data_3_pin?: Pin;
        display_data_4_pin?: Pin;
        display_data_5_pin?: Pin;
        display_data_6_pin?: Pin;
        display_data_7_pin?: Pin;
        full_update_every?: number;
        gmod_pin: Pin;
        gpio0_enable_pin: Pin;
        greyscale?: boolean;
        i2c_id?: ID;
        id?: ID;
        le_pin?: Pin;
        model?: InkplateDisplayConfigModel;
        oe_pin: Pin;
        partial_updating?: boolean;
        powerup_pin: Pin;
        sph_pin: Pin;
        spv_pin: Pin;
        transform?: InkplateDisplayConfigTransform;
        update_interval?: any;
        vcom_pin: Pin;
        wakeup_pin: Pin;
        lambda?: any;
        pages?: any;
    } & DisplayFULL_DISPLAY_SCHEMA & CoreCOMPONENT_SCHEMA;
