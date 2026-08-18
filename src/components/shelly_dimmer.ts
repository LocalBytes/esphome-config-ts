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
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { LightBRIGHTNESSONLYLIGHTSCHEMA } from "./light.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class ShellyDimmerLight extends EsphomeComponent<ShellyDimmerLightConfig> {
    componentName: string = "shelly_dimmer.light";
}

export interface ShellyDimmerLightConfigCurrent extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface ShellyDimmerLightConfigFirmware {
    sha256?: any;
    update?: boolean;
    url?: any;
    version: string;
}

export interface ShellyDimmerLightConfigPower extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface ShellyDimmerLightConfigVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type ShellyDimmerLightConfig = {
        boot0_pin?: Pin;
        current?: ShellyDimmerLightConfigCurrent;
        firmware?: ShellyDimmerLightConfigFirmware;
        gamma_correct?: any;
        leading_edge?: boolean;
        max_brightness?: number;
        min_brightness?: number;
        nrst_pin?: Pin;
        output_id?: ID;
        power?: ShellyDimmerLightConfigPower;
        uart_id?: ID;
        update_interval?: any;
        voltage?: ShellyDimmerLightConfigVoltage;
        warmup_brightness?: number;
    } & LightBRIGHTNESSONLYLIGHTSCHEMA & CoreCOMPONENTSCHEMA;
