/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: zyaura.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/zyaura
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class ZyauraSensor extends EsphomeComponent<ZyauraSensorConfig> {
    componentName: string = "zyaura.sensor";
}

export interface ZyauraSensorConfigCo2 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface ZyauraSensorConfigHumidity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface ZyauraSensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface ZyauraSensorConfig extends CoreCOMPONENTSCHEMA {
    clock_pin: Pin;
    co2?: ZyauraSensorConfigCo2;
    data_pin: Pin;
    humidity?: ZyauraSensorConfigHumidity;
    id?: ID;
    temperature?: ZyauraSensorConfigTemperature;
    update_interval?: any;
}
