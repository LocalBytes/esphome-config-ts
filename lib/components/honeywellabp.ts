/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: honeywellabp.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/honeywellabp
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class HoneywellabpSensor extends BaseComponent<HoneywellabpSensorConfig> {
    componentName: string = "honeywellabp.sensor";
}

export interface HoneywellabpSensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    pressure?: HoneywellabpSensorConfigPressure;
    temperature?: HoneywellabpSensorConfigTemperature;
    update_interval?: any;
    spi_id?: ID;
    cs_pin: Pin;
}

export interface HoneywellabpSensorConfigPressure extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    min_pressure: string;
    max_pressure: string;
}

export interface HoneywellabpSensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}
