/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: zhlt01.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/zhlt01
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { ClimateCLIMATESCHEMA } from "./climate.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { RemoteBaseREMOTETRANSMITTABLESCHEMA } from "./remote_base.js";

export class Zhlt01Climate extends EsphomeComponent<Zhlt01ClimateConfig> {
    componentName: string = "zhlt01.climate";
}

export type Zhlt01ClimateConfig = {
        humidity_sensor?: ID;
        id?: ID;
        receiver_id?: ID;
        sensor?: ID;
        supports_cool?: boolean;
        supports_heat?: boolean;
    } & ClimateCLIMATESCHEMA & CoreCOMPONENTSCHEMA & RemoteBaseREMOTETRANSMITTABLESCHEMA;
