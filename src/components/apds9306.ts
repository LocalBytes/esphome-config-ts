/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: apds9306.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/apds9306
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Apds9306Sensor extends EsphomeComponent<Apds9306SensorConfig> {
    componentName: string = "apds9306.sensor";
}

export type Apds9306SensorConfigBitWidth = '13' | '16' | '17' | '18' | '19' | '20';
export type Apds9306SensorConfigGain = '1' | '3' | '6' | '9' | '18';
export type Apds9306SensorConfig = {
        accuracy_decimals?: any;
        address?: any;
        bit_width?: Apds9306SensorConfigBitWidth;
        device_class?: any;
        gain?: Apds9306SensorConfigGain;
        i2c_id?: ID;
        icon?: any;
        id?: any;
        measurement_rate?: any;
        state_class?: any;
        unit_of_measurement?: any;
        update_interval?: any;
    } & SensorSENSORSCHEMA & CoreCOMPONENTSCHEMA;
