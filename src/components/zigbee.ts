/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: zigbee.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/zigbee
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { TimeTIME_SCHEMA } from "./time.js";

export class Zigbee extends EsphomeComponent<ZigbeeConfig> {
    componentName: string = "zigbee";
}

export type ZigbeeConfigIeee802154VendorOui = 'random';
export type ZigbeeConfigPowerSource = 'UNKNOWN' | 'MAINS_SINGLE_PHASE' | 'MAINS_THREE_PHASE' | 'BATTERY' | 'DC_SOURCE' | 'EMERGENCY_MAINS_CONST' | 'EMERGENCY_MAINS_TRANSF';
export type ZigbeeConfigWipeOnBoot = 'once';

export interface ZigbeeConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    ieee802154_vendor_oui?: ZigbeeConfigIeee802154VendorOui;
    model?: string;
    on_join?: object[];
    power_source?: ZigbeeConfigPowerSource;
    router?: boolean;
    sleepy?: boolean;
    wipe_on_boot?: ZigbeeConfigWipeOnBoot;
}

export class ZigbeeTime extends EsphomeComponent<ZigbeeTimeConfig> {
    componentName: string = "zigbee.time";
}

export type ZigbeeTimeConfig = {
        id?: ID;
        update_interval?: any;
        zigbee_id?: ID;
    } & TimeTIME_SCHEMA & CoreCOMPONENT_SCHEMA;
