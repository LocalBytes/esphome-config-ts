/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: mlx90614.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mlx90614
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Mlx90614Sensor extends EsphomeComponent<Mlx90614SensorConfig> {
    componentName: string = "mlx90614.sensor";
}

export interface Mlx90614SensorConfigAmbient extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Mlx90614SensorConfigObject extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    emissivity?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Mlx90614SensorConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    ambient?: Mlx90614SensorConfigAmbient;
    i2c_id?: ID;
    id?: ID;
    object?: Mlx90614SensorConfigObject;
    update_interval?: any;
}
