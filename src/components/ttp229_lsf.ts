/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ttp229_lsf.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ttp229_lsf
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { BinarySensorBINARYSENSORSCHEMA } from "./binary_sensor.js";

export class Ttp229Lsf extends EsphomeComponent<Ttp229LsfConfig> {
    componentName: string = "ttp229_lsf";
}

export interface Ttp229LsfConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    i2c_id?: ID;
    id?: ID;
}

export class Ttp229LsfBinarySensor extends EsphomeComponent<Ttp229LsfBinarySensorConfig> {
    componentName: string = "ttp229_lsf.binary_sensor";
}

export interface Ttp229LsfBinarySensorConfig extends BinarySensorBINARYSENSORSCHEMA {
    channel: number;
    id?: any;
    ttp229_id?: ID;
}
