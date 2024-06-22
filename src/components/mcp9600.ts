/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: mcp9600.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mcp9600
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Mcp9600Sensor extends EsphomeComponent<Mcp9600SensorConfig> {
    componentName: string = "mcp9600.sensor";
}

export type Mcp9600SensorConfigThermocoupleType = 'K' | 'J' | 'T' | 'N' | 'S' | 'E' | 'B' | 'R';

export interface Mcp9600SensorConfigHotJunction extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Mcp9600SensorConfigColdJunction extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Mcp9600SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    thermocouple_type?: Mcp9600SensorConfigThermocoupleType;
    hot_junction?: Mcp9600SensorConfigHotJunction;
    cold_junction?: Mcp9600SensorConfigColdJunction;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}
