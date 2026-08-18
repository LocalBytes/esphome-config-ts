/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: veml7700.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/veml7700
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Veml7700Sensor extends EsphomeComponent<Veml7700SensorConfig> {
    componentName: string = "veml7700.sensor";
}

export interface Veml7700SensorConfigActualGain extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
}

export interface Veml7700SensorConfigActualIntegrationTime extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Veml7700SensorConfigAmbientLight extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Veml7700SensorConfigAmbientLightCounts extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Veml7700SensorConfigFullSpectrum extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Veml7700SensorConfigFullSpectrumCounts extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Veml7700SensorConfigGain = '1/8X' | '1/4X' | '1X' | '2X';

export interface Veml7700SensorConfigInfrared extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Veml7700SensorConfig extends CoreCOMPONENTSCHEMA {
    actual_gain?: Veml7700SensorConfigActualGain;
    actual_integration_time?: Veml7700SensorConfigActualIntegrationTime;
    address?: any;
    ambient_light?: Veml7700SensorConfigAmbientLight;
    ambient_light_counts?: Veml7700SensorConfigAmbientLightCounts;
    auto_mode?: boolean;
    full_spectrum?: Veml7700SensorConfigFullSpectrum;
    full_spectrum_counts?: Veml7700SensorConfigFullSpectrumCounts;
    gain?: Veml7700SensorConfigGain;
    glass_attenuation_factor?: any;
    i2c_id?: ID;
    id?: ID;
    infrared?: Veml7700SensorConfigInfrared;
    integration_time?: any;
    lux_compensation?: boolean;
    update_interval?: any;
}
