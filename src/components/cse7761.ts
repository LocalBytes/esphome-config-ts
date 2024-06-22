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
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Cse7761Sensor extends BaseComponent<Cse7761SensorConfig> {
    componentName: string = "cse7761.sensor";
}

export interface Cse7761SensorConfigVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Cse7761SensorConfigCurrent_1 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Cse7761SensorConfigCurrent_2 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Cse7761SensorConfigActivePower_1 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Cse7761SensorConfigActivePower_2 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Cse7761SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    voltage?: Cse7761SensorConfigVoltage;
    current_1?: Cse7761SensorConfigCurrent_1;
    current_2?: Cse7761SensorConfigCurrent_2;
    active_power_1?: Cse7761SensorConfigActivePower_1;
    active_power_2?: Cse7761SensorConfigActivePower_2;
    update_interval?: any;
    uart_id?: ID;
}
