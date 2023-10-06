/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: inkplate6.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/inkplate6
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { DisplayFULL_DISPLAY_SCHEMA } from "./display.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Inkplate6Display extends BaseComponent<Inkplate6DisplayConfig> {
    componentName: string = "inkplate6.display";
}

export interface Inkplate6DisplayConfig extends DisplayFULL_DISPLAY_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: ID;
    greyscale?: boolean;
    partial_updating?: boolean;
    full_update_every?: number;
    model?: Inkplate6DisplayConfigModel;
    ckv_pin: Pin;
    gmod_pin: Pin;
    gpio0_enable_pin: Pin;
    oe_pin: Pin;
    powerup_pin: Pin;
    sph_pin: Pin;
    spv_pin: Pin;
    vcom_pin: Pin;
    wakeup_pin: Pin;
    cl_pin?: Pin;
    le_pin?: Pin;
    display_data_0_pin?: Pin;
    display_data_1_pin?: Pin;
    display_data_2_pin?: Pin;
    display_data_3_pin?: Pin;
    display_data_4_pin?: Pin;
    display_data_5_pin?: Pin;
    display_data_6_pin?: Pin;
    display_data_7_pin?: Pin;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}

export type Inkplate6DisplayConfigModel = 'inkplate_6' | 'inkplate_10' | 'inkplate_6_plus' | 'inkplate_6_v2';
