/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: zyaura.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/zyaura
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class ZyauraSensor extends BaseComponent<ZyauraSensorConfig> {
    componentName: string = "zyaura.sensor";
}

export interface ZyauraSensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    clock_pin: Pin;
    data_pin: Pin;
    co2?: ZyauraSensorConfigCo2;
    temperature?: ZyauraSensorConfigTemperature;
    humidity?: ZyauraSensorConfigHumidity;
    update_interval?: any;
}

export interface ZyauraSensorConfigCo2 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface ZyauraSensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface ZyauraSensorConfigHumidity extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}
