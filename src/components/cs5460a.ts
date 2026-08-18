/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: cs5460a.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/cs5460a
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export abstract class Cs5460a extends EsphomeComponent {
    componentName: string = "cs5460a";
}

export class Cs5460aSensor extends EsphomeComponent<Cs5460aSensorConfig> {
    componentName: string = "cs5460a.sensor";
}

export interface Cs5460aSensorConfigCurrent extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Cs5460aSensorConfigCurrentGain = {};
export type Cs5460aSensorConfigPgaGain = '10X' | '50X';

export interface Cs5460aSensorConfigPower extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Cs5460aSensorConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';

export interface Cs5460aSensorConfigVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Cs5460aSensorConfig extends CoreCOMPONENT_SCHEMA {
    cs_pin?: Pin;
    current?: Cs5460aSensorConfigCurrent;
    current_gain?: Cs5460aSensorConfigCurrentGain;
    current_hpf?: boolean;
    data_rate?: any;
    id?: ID;
    pga_gain?: Cs5460aSensorConfigPgaGain;
    phase_offset?: number;
    power?: Cs5460aSensorConfigPower;
    pulse_energy?: any;
    release_device?: boolean;
    samples?: number;
    spi_id?: ID;
    spi_mode?: Cs5460aSensorConfigSpiMode;
    voltage?: Cs5460aSensorConfigVoltage;
    voltage_gain?: any;
    voltage_hpf?: boolean;
}
