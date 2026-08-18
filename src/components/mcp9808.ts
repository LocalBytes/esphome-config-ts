/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: mcp9808.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mcp9808
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Mcp9808Sensor extends EsphomeComponent<Mcp9808SensorConfig> {
    componentName: string = "mcp9808.sensor";
}

export type Mcp9808SensorConfig = {
        accuracy_decimals?: any;
        address?: any;
        device_class?: any;
        i2c_id?: ID;
        id?: any;
        state_class?: any;
        unit_of_measurement?: any;
        update_interval?: any;
    } & SensorSENSORSCHEMA & CoreCOMPONENTSCHEMA;
