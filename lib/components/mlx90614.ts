/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: mlx90614.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mlx90614
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Mlx90614Sensor extends BaseComponent<Mlx90614SensorConfig> {
    componentName: string = "mlx90614.sensor";
}

export interface Mlx90614SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    ambient?: Mlx90614SensorConfigAmbient;
    object?: Mlx90614SensorConfigObject;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}

export interface Mlx90614SensorConfigAmbient extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Mlx90614SensorConfigObject extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    emissivity?: any;
}
