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
import type { ClimateIrCLIMATE_IR_WITH_RECEIVER_SCHEMA } from "./climate_ir.js";

export class HeatpumpirClimate extends EsphomeComponent<HeatpumpirClimateConfig> {
    componentName: string = "heatpumpir.climate";
}

export type HeatpumpirClimateConfigProtocol = 'aux' | 'ballu' | 'carrier_mca' | 'carrier_nqv' | 'daikin_arc417' | 'daikin_arc480' | 'daikin' | 'electroluxyal' | 'fuego' | 'fujitsu_awyz' | 'gree' | 'greeya' | 'greeyan' | 'greeyac' | 'greeyt' | 'hisense_aud' | 'hitachi' | 'hyundai' | 'ivt' | 'midea' | 'mitsubishi_fa' | 'mitsubishi_fd' | 'mitsubishi_fe' | 'mitsubishi_heavy_fdtc' | 'mitsubishi_heavy_zj' | 'mitsubishi_heavy_zm' | 'mitsubishi_heavy_zmp' | 'mitsubishi_heavy_kj' | 'mitsubishi_msc' | 'mitsubishi_msy' | 'mitsubishi_sez' | 'panasonic_ckp' | 'panasonic_dke' | 'panasonic_jke' | 'panasonic_lke' | 'panasonic_nke' | 'samsung_aqv' | 'samsung_fjm' | 'sharp' | 'toshiba_daiseikai' | 'toshiba' | 'zhlt01';
export type HeatpumpirClimateConfigHorizontalDefault = 'auto' | 'middle' | 'left' | 'mleft' | 'mright' | 'right';
export type HeatpumpirClimateConfigVerticalDefault = 'auto' | 'up' | 'mup' | 'middle' | 'mdown' | 'down';

export interface HeatpumpirClimateConfig extends ClimateIrCLIMATE_IR_WITH_RECEIVER_SCHEMA {
    id?: any;
    protocol: HeatpumpirClimateConfigProtocol;
    horizontal_default: HeatpumpirClimateConfigHorizontalDefault;
    vertical_default: HeatpumpirClimateConfigVerticalDefault;
    min_temperature: string;
    max_temperature: string;
}
