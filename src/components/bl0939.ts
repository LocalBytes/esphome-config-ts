/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: bl0939.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/bl0939
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Bl0939Sensor extends EsphomeComponent<Bl0939SensorConfig> {
    componentName: string = "bl0939.sensor";
}

export interface Bl0939SensorConfigActivePower1 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0939SensorConfigActivePower2 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0939SensorConfigCurrent1 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0939SensorConfigCurrent2 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0939SensorConfigEnergy1 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0939SensorConfigEnergy2 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0939SensorConfigEnergyTotal extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0939SensorConfigVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0939SensorConfig extends CoreCOMPONENTSCHEMA {
    active_power_1?: Bl0939SensorConfigActivePower1;
    active_power_2?: Bl0939SensorConfigActivePower2;
    current_1?: Bl0939SensorConfigCurrent1;
    current_2?: Bl0939SensorConfigCurrent2;
    energy_1?: Bl0939SensorConfigEnergy1;
    energy_2?: Bl0939SensorConfigEnergy2;
    energy_total?: Bl0939SensorConfigEnergyTotal;
    id?: ID;
    uart_id?: ID;
    update_interval?: any;
    voltage?: Bl0939SensorConfigVoltage;
}
