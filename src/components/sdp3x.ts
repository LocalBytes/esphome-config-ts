/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sdp3x.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sdp3x
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Sdp3xSensor extends BaseComponent<Sdp3xSensorConfig> {
    componentName: string = "sdp3x.sensor";
}

export type Sdp3xSensorConfigMeasurementMode = 'mass_flow' | 'differential_pressure';
export type Sdp3xSensorConfig = {
        id?: any;
        unit_of_measurement?: any;
        accuracy_decimals?: any;
        device_class?: any;
        state_class?: any;
        measurement_mode?: Sdp3xSensorConfigMeasurementMode;
        update_interval?: any;
        i2c_id?: ID;
        address?: any;
    } & SensorSENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
