/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ade7953_i2c.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ade7953_i2c
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Ade7953BaseADE7953CONFIGSCHEMA } from "./ade7953_base.js";

export class Ade7953I2cSensor extends EsphomeComponent<Ade7953I2cSensorConfig> {
    componentName: string = "ade7953_i2c.sensor";
}

export interface Ade7953I2cSensorConfig extends Ade7953BaseADE7953CONFIGSCHEMA {
    address?: any;
    i2c_id?: ID;
    id?: ID;
}
