/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: qmc5883l.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/qmc5883l
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Qmc5883lSensor extends EsphomeComponent<Qmc5883lSensorConfig> {
    componentName: string = "qmc5883l.sensor";
}

export interface Qmc5883lSensorFieldStrengthSchema extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export type Qmc5883lSensorConfigFieldStrengthX = Qmc5883lSensorFieldStrengthSchema;
export type Qmc5883lSensorConfigFieldStrengthY = Qmc5883lSensorFieldStrengthSchema;
export type Qmc5883lSensorConfigFieldStrengthZ = Qmc5883lSensorFieldStrengthSchema;

export interface Qmc5883lSensorConfigHeading extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
}

export interface Qmc5883lSensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    address?: any;
    range?: any;
    oversampling?: any;
    field_strength_x?: Qmc5883lSensorConfigFieldStrengthX;
    field_strength_y?: Qmc5883lSensorConfigFieldStrengthY;
    field_strength_z?: Qmc5883lSensorConfigFieldStrengthZ;
    heading?: Qmc5883lSensorConfigHeading;
    update_interval?: any;
    i2c_id?: ID;
}
