/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: whirlpool.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/whirlpool
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { ClimateCLIMATESCHEMA } from "./climate.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { RemoteBaseREMOTETRANSMITTABLESCHEMA } from "./remote_base.js";

export class WhirlpoolClimate extends EsphomeComponent<WhirlpoolClimateConfig> {
    componentName: string = "whirlpool.climate";
}

export type WhirlpoolClimateConfigModel = 'DG11J1-3A' | 'DG11J1-91';
export type WhirlpoolClimateConfig = {
        humidity_sensor?: ID;
        id?: ID;
        model?: WhirlpoolClimateConfigModel;
        receiver_id?: ID;
        sensor?: ID;
        supports_cool?: boolean;
        supports_heat?: boolean;
    } & ClimateCLIMATESCHEMA & CoreCOMPONENTSCHEMA & RemoteBaseREMOTETRANSMITTABLESCHEMA;
