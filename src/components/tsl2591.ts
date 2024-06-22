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
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Tsl2591Sensor extends EsphomeComponent<Tsl2591SensorConfig> {
    componentName: string = "tsl2591.sensor";
}

export interface Tsl2591SensorConfigInfrared extends SensorSENSOR_SCHEMA {
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Tsl2591SensorConfigVisible extends SensorSENSOR_SCHEMA {
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Tsl2591SensorConfigFullSpectrum extends SensorSENSOR_SCHEMA {
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Tsl2591SensorConfigCalculatedLux extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Tsl2591SensorConfigActualGain extends SensorSENSOR_SCHEMA {
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export type Tsl2591SensorConfigGain = '1X' | 'LOW' | '25X' | 'MED' | 'MEDIUM' | '400X' | 'HIGH' | '9500X' | 'MAX' | 'MAXIMUM' | 'AUTO';

export interface Tsl2591SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    infrared?: Tsl2591SensorConfigInfrared;
    visible?: Tsl2591SensorConfigVisible;
    full_spectrum?: Tsl2591SensorConfigFullSpectrum;
    calculated_lux?: Tsl2591SensorConfigCalculatedLux;
    actual_gain?: Tsl2591SensorConfigActualGain;
    integration_time?: any;
    name?: string;
    gain?: Tsl2591SensorConfigGain;
    power_save_mode?: boolean;
    device_factor?: any;
    glass_attenuation_factor?: any;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}
