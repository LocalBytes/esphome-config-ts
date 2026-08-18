/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: mmc5983.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mmc5983
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";

export class Mmc5983Sensor extends EsphomeComponent<Mmc5983SensorConfig> {
    componentName: string = "mmc5983.sensor";
}

export type Mmc5983SensorConfigFieldStrengthX = Mmc5983SensorFieldStrengthSchema;
export type Mmc5983SensorConfigFieldStrengthY = Mmc5983SensorFieldStrengthSchema;
export type Mmc5983SensorConfigFieldStrengthZ = Mmc5983SensorFieldStrengthSchema;

export interface Mmc5983SensorConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    field_strength_x?: Mmc5983SensorConfigFieldStrengthX;
    field_strength_y?: Mmc5983SensorConfigFieldStrengthY;
    field_strength_z?: Mmc5983SensorConfigFieldStrengthZ;
    i2c_id?: ID;
    id?: ID;
    update_interval?: any;
}

export interface Mmc5983SensorFieldStrengthSchema extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}
