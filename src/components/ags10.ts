/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ags10.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ags10
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export abstract class Ags10 extends EsphomeComponent {
    componentName: string = "ags10";
}

export class Ags10Sensor extends EsphomeComponent<Ags10SensorConfig> {
    componentName: string = "ags10.sensor";
}

export interface Ags10SensorConfigResistance extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    entity_category?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ags10SensorConfigTvoc extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ags10SensorConfigVersion extends Sensor_SENSOR_SCHEMA {
    entity_category?: any;
    icon?: any;
}

export interface Ags10SensorConfig extends CoreCOMPONENT_SCHEMA {
    address?: any;
    i2c_id?: ID;
    id?: ID;
    resistance?: Ags10SensorConfigResistance;
    tvoc: Ags10SensorConfigTvoc;
    update_interval?: any;
    version?: Ags10SensorConfigVersion;
}
