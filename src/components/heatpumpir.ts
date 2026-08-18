/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: heatpumpir.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/heatpumpir
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Climate_CLIMATE_SCHEMA } from "./climate.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class HeatpumpirClimate extends EsphomeComponent<HeatpumpirClimateConfig> {
    componentName: string = "heatpumpir.climate";
}

export type HeatpumpirClimateConfigHorizontalDefault = 'auto' | 'middle' | 'left' | 'mleft' | 'mright' | 'right';
export type HeatpumpirClimateConfigProtocol = 'aux' | 'ballu' | 'carrier_mca' | 'carrier_nqv' | 'daikin_arc417' | 'daikin_arc480' | 'daikin' | 'electroluxyal' | 'fuego' | 'fujitsu_awyz' | 'gree' | 'greeya' | 'greeyan' | 'greeyac' | 'greeyt' | 'greeyap' | 'hisense_aud' | 'hitachi' | 'hyundai' | 'ivt' | 'midea' | 'mitsubishi_fa' | 'mitsubishi_fd' | 'mitsubishi_fe' | 'mitsubishi_heavy_fdtc' | 'mitsubishi_heavy_zj' | 'mitsubishi_heavy_zm' | 'mitsubishi_heavy_zmp' | 'mitsubishi_heavy_kj' | 'mitsubishi_msc' | 'mitsubishi_msy' | 'mitsubishi_sez' | 'panasonic_ckp' | 'panasonic_dke' | 'panasonic_eke' | 'panasonic_jke' | 'panasonic_lke' | 'panasonic_nke' | 'samsung_aqv' | 'samsung_fjm' | 'sharp' | 'toshiba_daiseikai' | 'toshiba' | 'zhlt01' | 'nibe' | 'carrier_qlima_1' | 'carrier_qlima_2' | 'samsung_aqv12msan' | 'zhjg01' | 'airway' | 'bgh_aud' | 'panasonic_altdke' | 'philco_phs32' | 'vaillantvai8' | 'r51m';
export type HeatpumpirClimateConfigVerticalDefault = 'auto' | 'up' | 'mup' | 'middle' | 'mdown' | 'down';
export type HeatpumpirClimateConfig = {
        horizontal_default: HeatpumpirClimateConfigHorizontalDefault;
        humidity_sensor?: ID;
        id?: ID;
        max_temperature: string;
        min_temperature: string;
        protocol: HeatpumpirClimateConfigProtocol;
        receiver_id?: ID;
        sensor?: ID;
        supports_cool?: boolean;
        supports_heat?: boolean;
        transmitter_id?: ID;
        vertical_default: HeatpumpirClimateConfigVerticalDefault;
    } & Climate_CLIMATE_SCHEMA & CoreCOMPONENT_SCHEMA;
