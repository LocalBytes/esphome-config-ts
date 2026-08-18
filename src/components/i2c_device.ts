/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: i2c_device.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/i2c_device
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";

export class I2cDevice extends EsphomeComponent<I2cDeviceConfig> {
    componentName: string = "i2c_device";
}

export interface I2cDeviceConfig {
    address: string;
    i2c_id?: ID;
    id?: ID;
}
