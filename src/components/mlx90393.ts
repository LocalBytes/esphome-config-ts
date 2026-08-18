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
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Mlx90393Sensor extends EsphomeComponent<Mlx90393SensorConfig> {
    componentName: string = "mlx90393.sensor";
}

export type Mlx90393SensorConfigGain = '1X' | '1_25X' | '1_67X' | '2X' | '2_5X' | '3X' | '3_75X' | '5X';
export type Mlx90393SensorConfigHallconf = '0' | '12';

export interface Mlx90393SensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    oversampling?: number;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Mlx90393SensorConfigXAxisResolution = 'DIV_8' | 'DIV_4' | 'DIV_2' | 'DIV_1';

export interface Mlx90393SensorConfigXAxis extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    resolution?: Mlx90393SensorConfigXAxisResolution;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Mlx90393SensorConfigYAxisResolution = 'DIV_8' | 'DIV_4' | 'DIV_2' | 'DIV_1';

export interface Mlx90393SensorConfigYAxis extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    resolution?: Mlx90393SensorConfigYAxisResolution;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Mlx90393SensorConfigZAxisResolution = 'DIV_8' | 'DIV_4' | 'DIV_2' | 'DIV_1';

export interface Mlx90393SensorConfigZAxis extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    resolution?: Mlx90393SensorConfigZAxisResolution;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Mlx90393SensorConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    drdy_pin?: Pin;
    filter?: number;
    gain?: Mlx90393SensorConfigGain;
    hallconf?: Mlx90393SensorConfigHallconf;
    i2c_id?: ID;
    id?: ID;
    oversampling?: number;
    temperature?: Mlx90393SensorConfigTemperature;
    temperature_compensation?: any;
    update_interval?: any;
    x_axis?: Mlx90393SensorConfigXAxis;
    y_axis?: Mlx90393SensorConfigYAxis;
    z_axis?: Mlx90393SensorConfigZAxis;
}
