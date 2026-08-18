/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: max44009.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/max44009
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Max44009Sensor extends EsphomeComponent<Max44009SensorConfig> {
    componentName: string = "max44009.sensor";
}

export type Max44009SensorConfigMode = 'auto' | 'low_power' | 'continuous';
export type Max44009SensorConfig = {
        accuracy_decimals?: any;
        address?: any;
        device_class?: any;
        i2c_id?: ID;
        id?: any;
        mode?: Max44009SensorConfigMode;
        state_class?: any;
        unit_of_measurement?: any;
        update_interval?: any;
    } & SensorSENSORSCHEMA & CoreCOMPONENTSCHEMA;
