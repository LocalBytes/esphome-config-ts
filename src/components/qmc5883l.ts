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
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Qmc5883lSensor extends EsphomeComponent<Qmc5883lSensorConfig> {
    componentName: string = "qmc5883l.sensor";
}

export type Qmc5883lSensorConfigFieldStrengthX = Qmc5883lSensorFieldStrengthSchema;
export type Qmc5883lSensorConfigFieldStrengthY = Qmc5883lSensorFieldStrengthSchema;
export type Qmc5883lSensorConfigFieldStrengthZ = Qmc5883lSensorFieldStrengthSchema;

export interface Qmc5883lSensorConfigHeading extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Qmc5883lSensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Qmc5883lSensorConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    data_rate?: any;
    drdy_pin?: Pin;
    field_strength_x?: Qmc5883lSensorConfigFieldStrengthX;
    field_strength_y?: Qmc5883lSensorConfigFieldStrengthY;
    field_strength_z?: Qmc5883lSensorConfigFieldStrengthZ;
    heading?: Qmc5883lSensorConfigHeading;
    i2c_id?: ID;
    id?: ID;
    oversampling?: any;
    range?: any;
    temperature?: Qmc5883lSensorConfigTemperature;
    update_interval?: any;
}

export interface Qmc5883lSensorFieldStrengthSchema extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}
