/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: hmc5883l.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/hmc5883l
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { SensorSENSOR_SCHEMA } from "./sensor.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Hmc5883lSensor extends BaseComponent<Hmc5883lSensorConfig> {
    componentName: string = "hmc5883l.sensor";
}

export interface Hmc5883lSensorFieldStrengthSchema extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Hmc5883lSensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    address?: any;
    oversampling?: any;
    range?: any;
    field_strength_x?: Hmc5883lSensorConfigFieldStrengthX;
    field_strength_y?: Hmc5883lSensorConfigFieldStrengthY;
    field_strength_z?: Hmc5883lSensorConfigFieldStrengthZ;
    heading?: Hmc5883lSensorConfigHeading;
    update_interval?: any;
    i2c_id?: ID;
}

export interface Hmc5883lSensorConfigFieldStrengthX extends Hmc5883lSensorFieldStrengthSchema {
}

export interface Hmc5883lSensorConfigFieldStrengthY extends Hmc5883lSensorFieldStrengthSchema {
}

export interface Hmc5883lSensorConfigFieldStrengthZ extends Hmc5883lSensorFieldStrengthSchema {
}

export interface Hmc5883lSensorConfigHeading extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
}
