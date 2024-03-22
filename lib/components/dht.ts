/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: dht.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/dht
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class DhtSensor extends BaseComponent<DhtSensorConfig> {
    componentName: string = "dht.sensor";
}

export interface DhtSensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    pin: Pin;
    temperature?: DhtSensorConfigTemperature;
    humidity?: DhtSensorConfigHumidity;
    model?: DhtSensorConfigModel;
    update_interval?: any;
}

export interface DhtSensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface DhtSensorConfigHumidity extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export type DhtSensorConfigModel = 'AUTO_DETECT' | 'DHT11' | 'DHT22' | 'AM2302' | 'RHT03' | 'SI7021' | 'DHT22_TYPE2';
