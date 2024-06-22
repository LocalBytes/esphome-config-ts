/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: pzemdc.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/pzemdc
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class PzemdcSensor extends BaseComponent<PzemdcSensorConfig> {
    componentName: string = "pzemdc.sensor";
}

export interface PzemdcSensorConfigVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface PzemdcSensorConfigCurrent extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface PzemdcSensorConfigPower extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface PzemdcSensorConfigEnergy extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface PzemdcSensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    voltage?: PzemdcSensorConfigVoltage;
    current?: PzemdcSensorConfigCurrent;
    power?: PzemdcSensorConfigPower;
    energy?: PzemdcSensorConfigEnergy;
    update_interval?: any;
    modbus_id?: ID;
    address?: any;
}

export abstract class Pzemdc extends BaseComponent {
    componentName: string = "pzemdc";
}
