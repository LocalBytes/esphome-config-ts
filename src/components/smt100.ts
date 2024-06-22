/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: smt100.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/smt100
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Smt100Sensor extends EsphomeComponent<Smt100SensorConfig> {
    componentName: string = "smt100.sensor";
}

export interface Smt100SensorConfigCounts extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Smt100SensorConfigDielectricConstant extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Smt100SensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Smt100SensorConfigMoisture extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Smt100SensorConfigVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Smt100SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    counts?: Smt100SensorConfigCounts;
    dielectric_constant?: Smt100SensorConfigDielectricConstant;
    temperature?: Smt100SensorConfigTemperature;
    moisture?: Smt100SensorConfigMoisture;
    voltage?: Smt100SensorConfigVoltage;
    update_interval?: any;
    uart_id?: ID;
}
