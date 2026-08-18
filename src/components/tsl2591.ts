/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: tsl2591.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/tsl2591
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Tsl2591Sensor extends EsphomeComponent<Tsl2591SensorConfig> {
    componentName: string = "tsl2591.sensor";
}

export interface Tsl2591SensorConfigActualGain extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
}

export interface Tsl2591SensorConfigCalculatedLux extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Tsl2591SensorConfigFullSpectrum extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
}

export type Tsl2591SensorConfigGain = '1X' | 'LOW' | '25X' | 'MED' | 'MEDIUM' | '400X' | 'HIGH' | '9500X' | 'MAX' | 'MAXIMUM' | 'AUTO';

export interface Tsl2591SensorConfigInfrared extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
}

export interface Tsl2591SensorConfigVisible extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
}

export interface Tsl2591SensorConfig extends CoreCOMPONENTSCHEMA {
    actual_gain?: Tsl2591SensorConfigActualGain;
    address?: any;
    calculated_lux?: Tsl2591SensorConfigCalculatedLux;
    device_factor?: any;
    full_spectrum?: Tsl2591SensorConfigFullSpectrum;
    gain?: Tsl2591SensorConfigGain;
    glass_attenuation_factor?: any;
    i2c_id?: ID;
    id?: ID;
    infrared?: Tsl2591SensorConfigInfrared;
    integration_time?: any;
    name?: string;
    power_save_mode?: boolean;
    update_interval?: any;
    visible?: Tsl2591SensorConfigVisible;
}
