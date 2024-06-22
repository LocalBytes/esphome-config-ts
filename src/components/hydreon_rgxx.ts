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
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { BinarySensorBINARY_SENSOR_SCHEMA } from "./binary_sensor.js";

export class HydreonRgxxSensor extends EsphomeComponent<HydreonRgxxSensorConfig> {
    componentName: string = "hydreon_rgxx.sensor";
}

export type HydreonRgxxSensorConfigModel = 'RG_9' | 'RG_15';

export interface HydreonRgxxSensorConfigAcc extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface HydreonRgxxSensorConfigEventAcc extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface HydreonRgxxSensorConfigTotalAcc extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface HydreonRgxxSensorConfigRInt extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface HydreonRgxxSensorConfigMoisture extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface HydreonRgxxSensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface HydreonRgxxSensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    model: HydreonRgxxSensorConfigModel;
    acc?: HydreonRgxxSensorConfigAcc;
    event_acc?: HydreonRgxxSensorConfigEventAcc;
    total_acc?: HydreonRgxxSensorConfigTotalAcc;
    r_int?: HydreonRgxxSensorConfigRInt;
    moisture?: HydreonRgxxSensorConfigMoisture;
    temperature?: HydreonRgxxSensorConfigTemperature;
    update_interval?: any;
    uart_id?: ID;
}

export class HydreonRgxxBinarySensor extends EsphomeComponent<HydreonRgxxBinarySensorConfig> {
    componentName: string = "hydreon_rgxx.binary_sensor";
}

export interface HydreonRgxxBinarySensorConfigTooCold extends BinarySensorBINARY_SENSOR_SCHEMA {
    device_class?: any;
}

export interface HydreonRgxxBinarySensorConfigLensBad extends BinarySensorBINARY_SENSOR_SCHEMA {
    device_class?: any;
}

export interface HydreonRgxxBinarySensorConfigEmSat extends BinarySensorBINARY_SENSOR_SCHEMA {
    device_class?: any;
}

export interface HydreonRgxxBinarySensorConfig {
    id?: ID;
    hydreon_rgxx_id?: ID;
    too_cold?: HydreonRgxxBinarySensorConfigTooCold;
    lens_bad?: HydreonRgxxBinarySensorConfigLensBad;
    em_sat?: HydreonRgxxBinarySensorConfigEmSat;
}
