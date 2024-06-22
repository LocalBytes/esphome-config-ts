/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: mlx90393.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mlx90393
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Mlx90393Sensor extends BaseComponent<Mlx90393SensorConfig> {
    componentName: string = "mlx90393.sensor";
}

export type Mlx90393SensorConfigGain = '1X' | '1_33X' | '1_67X' | '2X' | '2_5X' | '3X' | '4X' | '5X';
export type Mlx90393SensorConfigXAxisResolution = '16BIT' | '17BIT' | '18BIT' | '19BIT';

export interface Mlx90393SensorConfigXAxis extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
    resolution?: Mlx90393SensorConfigXAxisResolution;
}

export type Mlx90393SensorConfigYAxisResolution = '16BIT' | '17BIT' | '18BIT' | '19BIT';

export interface Mlx90393SensorConfigYAxis extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
    resolution?: Mlx90393SensorConfigYAxisResolution;
}

export type Mlx90393SensorConfigZAxisResolution = '16BIT' | '17BIT' | '18BIT' | '19BIT';

export interface Mlx90393SensorConfigZAxis extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
    resolution?: Mlx90393SensorConfigZAxisResolution;
}

export interface Mlx90393SensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
    oversampling?: number;
}

export interface Mlx90393SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    gain?: Mlx90393SensorConfigGain;
    drdy_pin?: Pin;
    oversampling?: number;
    filter?: number;
    x_axis?: Mlx90393SensorConfigXAxis;
    y_axis?: Mlx90393SensorConfigYAxis;
    z_axis?: Mlx90393SensorConfigZAxis;
    temperature?: Mlx90393SensorConfigTemperature;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}
