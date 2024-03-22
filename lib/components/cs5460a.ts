/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: cs5460a.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/cs5460a
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Cs5460aSensor extends BaseComponent<Cs5460aSensorConfig> {
    componentName: string = "cs5460a.sensor";
}

export interface Cs5460aSensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    samples?: number;
    phase_offset?: number;
    pga_gain?: Cs5460aSensorConfigPgaGain;
    current_gain?: Cs5460aSensorConfigCurrentGain;
    voltage_gain?: any;
    current_hpf?: boolean;
    voltage_hpf?: boolean;
    pulse_energy?: any;
    voltage?: Cs5460aSensorConfigVoltage;
    current?: Cs5460aSensorConfigCurrent;
    power?: Cs5460aSensorConfigPower;
    spi_id?: ID;
    cs_pin?: Pin;
}

export type Cs5460aSensorConfigPgaGain = '10X' | '50X';

export interface Cs5460aSensorConfigCurrentGain {
}

export interface Cs5460aSensorConfigVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
}

export interface Cs5460aSensorConfigCurrent extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
}

export interface Cs5460aSensorConfigPower extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
}

export abstract class Cs5460a extends BaseComponent {
    componentName: string = "cs5460a";
}
