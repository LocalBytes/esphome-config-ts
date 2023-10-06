/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: mmc5603.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mmc5603
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { SensorSENSOR_SCHEMA } from "./sensor.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Mmc5603Sensor extends BaseComponent<Mmc5603SensorConfig> {
    componentName: string = "mmc5603.sensor";
}

export interface Mmc5603SensorFieldStrengthSchema extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Mmc5603SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    address?: any;
    field_strength_x?: Mmc5603SensorConfigFieldStrengthX;
    field_strength_y?: Mmc5603SensorConfigFieldStrengthY;
    field_strength_z?: Mmc5603SensorConfigFieldStrengthZ;
    heading?: Mmc5603SensorConfigHeading;
    update_interval?: any;
    i2c_id?: ID;
}

export interface Mmc5603SensorConfigFieldStrengthX extends Mmc5603SensorFieldStrengthSchema {
}

export interface Mmc5603SensorConfigFieldStrengthY extends Mmc5603SensorFieldStrengthSchema {
}

export interface Mmc5603SensorConfigFieldStrengthZ extends Mmc5603SensorFieldStrengthSchema {
}

export interface Mmc5603SensorConfigHeading extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
}
