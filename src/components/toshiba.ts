/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: toshiba.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/toshiba
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { ClimateCLIMATESCHEMA } from "./climate.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { RemoteBaseREMOTETRANSMITTABLESCHEMA } from "./remote_base.js";

export class ToshibaClimate extends EsphomeComponent<ToshibaClimateConfig> {
    componentName: string = "toshiba.climate";
}

export type ToshibaClimateConfigModel = 'GENERIC' | 'RAC-PT1411HWRU-C' | 'RAC-PT1411HWRU-F' | 'RAS-2819T';
export type ToshibaClimateConfig = {
        humidity_sensor?: ID;
        id?: ID;
        model?: ToshibaClimateConfigModel;
        receiver_id?: ID;
        sensor?: ID;
        supports_cool?: boolean;
        supports_heat?: boolean;
    } & ClimateCLIMATESCHEMA & CoreCOMPONENTSCHEMA & RemoteBaseREMOTETRANSMITTABLESCHEMA;
