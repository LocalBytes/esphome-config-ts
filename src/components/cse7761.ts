/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: cse7761.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/cse7761
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Cse7761Sensor extends EsphomeComponent<Cse7761SensorConfig> {
    componentName: string = "cse7761.sensor";
}

export interface Cse7761SensorConfigActivePower1 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Cse7761SensorConfigActivePower2 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Cse7761SensorConfigCurrent1 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Cse7761SensorConfigCurrent2 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Cse7761SensorConfigVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Cse7761SensorConfig extends CoreCOMPONENTSCHEMA {
    active_power_1?: Cse7761SensorConfigActivePower1;
    active_power_2?: Cse7761SensorConfigActivePower2;
    current_1?: Cse7761SensorConfigCurrent1;
    current_2?: Cse7761SensorConfigCurrent2;
    id?: ID;
    uart_id?: ID;
    update_interval?: any;
    voltage?: Cse7761SensorConfigVoltage;
}
