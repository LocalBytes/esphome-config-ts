/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: whynter.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/whynter
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { ClimateCLIMATESCHEMA } from "./climate.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { RemoteBaseREMOTETRANSMITTABLESCHEMA } from "./remote_base.js";

export class WhynterClimate extends EsphomeComponent<WhynterClimateConfig> {
    componentName: string = "whynter.climate";
}

export type WhynterClimateConfig = {
        humidity_sensor?: ID;
        id?: ID;
        receiver_id?: ID;
        sensor?: ID;
        supports_cool?: boolean;
        supports_heat?: boolean;
        use_fahrenheit?: boolean;
    } & ClimateCLIMATESCHEMA & CoreCOMPONENTSCHEMA & RemoteBaseREMOTETRANSMITTABLESCHEMA;
