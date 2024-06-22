/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: shelly_dimmer.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/shelly_dimmer
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { LightBRIGHTNESS_ONLY_LIGHT_SCHEMA } from "./light.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class ShellyDimmerLight extends BaseComponent<ShellyDimmerLightConfig> {
    componentName: string = "shelly_dimmer.light";
}

export interface ShellyDimmerLightConfigFirmware {
    url?: any;
    sha256?: any;
    version: string;
    update?: boolean;
}

export interface ShellyDimmerLightConfigPower extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
}

export interface ShellyDimmerLightConfigVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
}

export interface ShellyDimmerLightConfigCurrent extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
}

export type ShellyDimmerLightConfig = {
        output_id?: ID;
        firmware?: ShellyDimmerLightConfigFirmware;
        nrst_pin?: Pin;
        boot0_pin?: Pin;
        leading_edge?: boolean;
        warmup_brightness?: number;
        min_brightness?: number;
        max_brightness?: number;
        power?: ShellyDimmerLightConfigPower;
        voltage?: ShellyDimmerLightConfigVoltage;
        current?: ShellyDimmerLightConfigCurrent;
        gamma_correct?: any;
        update_interval?: any;
        uart_id?: ID;
    } & LightBRIGHTNESS_ONLY_LIGHT_SCHEMA & CoreCOMPONENT_SCHEMA;
