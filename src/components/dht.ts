/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: dht.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/dht
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class DhtSensor extends EsphomeComponent<DhtSensorConfig> {
    componentName: string = "dht.sensor";
}

export interface DhtSensorConfigHumidity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type DhtSensorConfigModel = 'AUTO_DETECT' | 'DHT11' | 'DHT22' | 'AM2120' | 'AM2302' | 'RHT03' | 'SI7021' | 'DHT22_TYPE2';

export interface DhtSensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DhtSensorConfig extends CoreCOMPONENTSCHEMA {
    humidity?: DhtSensorConfigHumidity;
    id?: ID;
    model?: DhtSensorConfigModel;
    pin: Pin;
    temperature?: DhtSensorConfigTemperature;
    update_interval?: any;
}
