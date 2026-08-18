/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ade7953_base.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ade7953_base
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export abstract class Ade7953Base extends EsphomeComponent {
    componentName: string = "ade7953_base";
}

export interface Ade7953BaseADE7953CONFIGSCHEMAActivePowerA extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ade7953BaseADE7953CONFIGSCHEMAActivePowerB extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ade7953BaseADE7953CONFIGSCHEMAApparentPowerA extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ade7953BaseADE7953CONFIGSCHEMAApparentPowerB extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ade7953BaseADE7953CONFIGSCHEMACurrentA extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ade7953BaseADE7953CONFIGSCHEMACurrentB extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Ade7953BaseADE7953CONFIGSCHEMACurrentPgaGainA = '1x' | '2x' | '4x' | '8x' | '16x' | '22x';
export type Ade7953BaseADE7953CONFIGSCHEMACurrentPgaGainB = '1x' | '2x' | '4x' | '8x' | '16x' | '22x';

export interface Ade7953BaseADE7953CONFIGSCHEMAFrequency extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ade7953BaseADE7953CONFIGSCHEMAPowerFactorA extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ade7953BaseADE7953CONFIGSCHEMAPowerFactorB extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ade7953BaseADE7953CONFIGSCHEMAReactivePowerA extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ade7953BaseADE7953CONFIGSCHEMAReactivePowerB extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ade7953BaseADE7953CONFIGSCHEMAVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Ade7953BaseADE7953CONFIGSCHEMAVoltagePgaGain = '1x' | '2x' | '4x' | '8x' | '16x' | '22x';

export interface Ade7953BaseADE7953CONFIGSCHEMA extends CoreCOMPONENTSCHEMA {
    active_power_a?: Ade7953BaseADE7953CONFIGSCHEMAActivePowerA;
    active_power_b?: Ade7953BaseADE7953CONFIGSCHEMAActivePowerB;
    active_power_gain_a?: any;
    active_power_gain_b?: any;
    apparent_power_a?: Ade7953BaseADE7953CONFIGSCHEMAApparentPowerA;
    apparent_power_b?: Ade7953BaseADE7953CONFIGSCHEMAApparentPowerB;
    current_a?: Ade7953BaseADE7953CONFIGSCHEMACurrentA;
    current_b?: Ade7953BaseADE7953CONFIGSCHEMACurrentB;
    current_gain_a?: any;
    current_gain_b?: any;
    current_pga_gain_a?: Ade7953BaseADE7953CONFIGSCHEMACurrentPgaGainA;
    current_pga_gain_b?: Ade7953BaseADE7953CONFIGSCHEMACurrentPgaGainB;
    frequency?: Ade7953BaseADE7953CONFIGSCHEMAFrequency;
    irq_pin?: Pin;
    power_factor_a?: Ade7953BaseADE7953CONFIGSCHEMAPowerFactorA;
    power_factor_b?: Ade7953BaseADE7953CONFIGSCHEMAPowerFactorB;
    reactive_power_a?: Ade7953BaseADE7953CONFIGSCHEMAReactivePowerA;
    reactive_power_b?: Ade7953BaseADE7953CONFIGSCHEMAReactivePowerB;
    update_interval?: any;
    use_accumulated_energy_registers?: boolean;
    voltage?: Ade7953BaseADE7953CONFIGSCHEMAVoltage;
    voltage_gain?: any;
    voltage_pga_gain?: Ade7953BaseADE7953CONFIGSCHEMAVoltagePgaGain;
}
