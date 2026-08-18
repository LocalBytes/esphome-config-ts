/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: hydreon_rgxx.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/hydreon_rgxx
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { BinarySensorBINARYSENSORSCHEMA } from "./binary_sensor.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class HydreonRgxxBinarySensor extends EsphomeComponent<HydreonRgxxBinarySensorConfig> {
    componentName: string = "hydreon_rgxx.binary_sensor";
}

export interface HydreonRgxxBinarySensorConfigEmSat extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
}

export interface HydreonRgxxBinarySensorConfigLensBad extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
}

export interface HydreonRgxxBinarySensorConfigTooCold extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
}

export interface HydreonRgxxBinarySensorConfig {
    em_sat?: HydreonRgxxBinarySensorConfigEmSat;
    hydreon_rgxx_id?: ID;
    id?: ID;
    lens_bad?: HydreonRgxxBinarySensorConfigLensBad;
    too_cold?: HydreonRgxxBinarySensorConfigTooCold;
}

export class HydreonRgxxSensor extends EsphomeComponent<HydreonRgxxSensorConfig> {
    componentName: string = "hydreon_rgxx.sensor";
}

export interface HydreonRgxxSensorConfigAcc extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HydreonRgxxSensorConfigEventAcc extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type HydreonRgxxSensorConfigModel = 'RG_9' | 'RG_15';

export interface HydreonRgxxSensorConfigMoisture extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HydreonRgxxSensorConfigRInt extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type HydreonRgxxSensorConfigResolution = 'low' | 'high';

export interface HydreonRgxxSensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HydreonRgxxSensorConfigTotalAcc extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HydreonRgxxSensorConfig extends CoreCOMPONENTSCHEMA {
    acc?: HydreonRgxxSensorConfigAcc;
    disable_led?: boolean;
    event_acc?: HydreonRgxxSensorConfigEventAcc;
    id?: ID;
    model: HydreonRgxxSensorConfigModel;
    moisture?: HydreonRgxxSensorConfigMoisture;
    r_int?: HydreonRgxxSensorConfigRInt;
    resolution?: HydreonRgxxSensorConfigResolution;
    temperature?: HydreonRgxxSensorConfigTemperature;
    total_acc?: HydreonRgxxSensorConfigTotalAcc;
    uart_id?: ID;
    update_interval?: any;
}
