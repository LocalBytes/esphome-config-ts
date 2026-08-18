/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: mmc5603.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mmc5603
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Mmc5603Sensor extends EsphomeComponent<Mmc5603SensorConfig> {
    componentName: string = "mmc5603.sensor";
}

export type Mmc5603SensorConfigFieldStrengthX = Mmc5603SensorFieldStrengthSchema;
export type Mmc5603SensorConfigFieldStrengthY = Mmc5603SensorFieldStrengthSchema;
export type Mmc5603SensorConfigFieldStrengthZ = Mmc5603SensorFieldStrengthSchema;

export interface Mmc5603SensorConfigHeading extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Mmc5603SensorConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    auto_set_reset?: boolean;
    field_strength_x?: Mmc5603SensorConfigFieldStrengthX;
    field_strength_y?: Mmc5603SensorConfigFieldStrengthY;
    field_strength_z?: Mmc5603SensorConfigFieldStrengthZ;
    heading?: Mmc5603SensorConfigHeading;
    i2c_id?: ID;
    id?: ID;
    update_interval?: any;
}

export interface Mmc5603SensorFieldStrengthSchema extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}
