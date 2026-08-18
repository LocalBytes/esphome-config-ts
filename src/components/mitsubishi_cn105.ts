/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: mitsubishi_cn105.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mitsubishi_cn105
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Climate_CLIMATE_SCHEMA } from "./climate.js";

export class MitsubishiCn105Climate extends EsphomeComponent<MitsubishiCn105ClimateConfig> {
    componentName: string = "mitsubishi_cn105.climate";
}

export type MitsubishiCn105ClimateConfigSupportedSwingModes = 'OFF' | 'BOTH' | 'VERTICAL' | 'HORIZONTAL';

export interface MitsubishiCn105ClimateConfig extends Climate_CLIMATE_SCHEMA {
    current_temperature_min_interval?: any;
    id?: ID;
    supported_swing_modes?: MitsubishiCn105ClimateConfigSupportedSwingModes;
    uart_id?: ID;
    update_interval?: any;
}
