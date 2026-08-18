/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: honeywellabp.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/honeywellabp
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class HoneywellabpSensor extends EsphomeComponent<HoneywellabpSensorConfig> {
    componentName: string = "honeywellabp.sensor";
}

export interface HoneywellabpSensorConfigPressure extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    max_pressure: string;
    min_pressure: string;
    state_class?: any;
    unit_of_measurement?: any;
}

export type HoneywellabpSensorConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';

export interface HoneywellabpSensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HoneywellabpSensorConfig extends CoreCOMPONENTSCHEMA {
    cs_pin: Pin;
    data_rate?: any;
    id?: ID;
    pressure?: HoneywellabpSensorConfigPressure;
    release_device?: boolean;
    spi_id?: ID;
    spi_mode?: HoneywellabpSensorConfigSpiMode;
    temperature?: HoneywellabpSensorConfigTemperature;
    update_interval?: any;
}
