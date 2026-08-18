/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: hdc302x.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/hdc302x
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export abstract class Hdc302x extends EsphomeComponent {
    componentName: string = "hdc302x";
}

export class Hdc302xSensor extends EsphomeComponent<Hdc302xSensorConfig> {
    componentName: string = "hdc302x.sensor";
}

export interface Hdc302xSensorConfigHumidity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Hdc302xSensorConfigPowerMode = 'HIGH_ACCURACY' | 'BALANCED' | 'LOW_POWER' | 'ULTRA_LOW_POWER';

export interface Hdc302xSensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Hdc302xSensorConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    humidity?: Hdc302xSensorConfigHumidity;
    i2c_id?: ID;
    id?: ID;
    power_mode?: Hdc302xSensorConfigPowerMode;
    temperature?: Hdc302xSensorConfigTemperature;
    update_interval?: any;
}
