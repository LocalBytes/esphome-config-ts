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
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Bl0939Sensor extends EsphomeComponent<Bl0939SensorConfig> {
    componentName: string = "bl0939.sensor";
}

export interface Bl0939SensorConfigActivePower_1 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0939SensorConfigActivePower_2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0939SensorConfigCurrent_1 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0939SensorConfigCurrent_2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0939SensorConfigEnergy_1 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0939SensorConfigEnergy_2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0939SensorConfigEnergyTotal extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0939SensorConfigVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bl0939SensorConfig extends CoreCOMPONENT_SCHEMA {
    active_power_1?: Bl0939SensorConfigActivePower_1;
    active_power_2?: Bl0939SensorConfigActivePower_2;
    current_1?: Bl0939SensorConfigCurrent_1;
    current_2?: Bl0939SensorConfigCurrent_2;
    energy_1?: Bl0939SensorConfigEnergy_1;
    energy_2?: Bl0939SensorConfigEnergy_2;
    energy_total?: Bl0939SensorConfigEnergyTotal;
    id?: ID;
    uart_id?: ID;
    update_interval?: any;
    voltage?: Bl0939SensorConfigVoltage;
}
