/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: qmp6988.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/qmp6988
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Qmp6988Sensor extends EsphomeComponent<Qmp6988SensorConfig> {
    componentName: string = "qmp6988.sensor";
}

export type Qmp6988SensorConfigTemperatureOversampling = 'NONE' | '1X' | '2X' | '4X' | '8X' | '16X' | '32X' | '64X';

export interface Qmp6988SensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    oversampling?: Qmp6988SensorConfigTemperatureOversampling;
}

export type Qmp6988SensorConfigPressureOversampling = 'NONE' | '1X' | '2X' | '4X' | '8X' | '16X' | '32X' | '64X';

export interface Qmp6988SensorConfigPressure extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    oversampling?: Qmp6988SensorConfigPressureOversampling;
}

export type Qmp6988SensorConfigIirFilter = 'OFF' | '2X' | '4X' | '8X' | '16X' | '32X';

export interface Qmp6988SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    temperature?: Qmp6988SensorConfigTemperature;
    pressure?: Qmp6988SensorConfigPressure;
    iir_filter?: Qmp6988SensorConfigIirFilter;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}
