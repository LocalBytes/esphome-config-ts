/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: mics_4514.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mics_4514
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Mics_4514Sensor extends EsphomeComponent<Mics_4514SensorConfig> {
    componentName: string = "mics_4514.sensor";
}

export interface Mics_4514SensorCommonSensorSchema extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Mics_4514SensorConfigNitrogenDioxide extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export type Mics_4514SensorConfigCarbonMonoxide = Mics_4514SensorCommonSensorSchema;
export type Mics_4514SensorConfigMethane = Mics_4514SensorCommonSensorSchema;
export type Mics_4514SensorConfigEthanol = Mics_4514SensorCommonSensorSchema;
export type Mics_4514SensorConfigHydrogen = Mics_4514SensorCommonSensorSchema;
export type Mics_4514SensorConfigAmmonia = Mics_4514SensorCommonSensorSchema;

export interface Mics_4514SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    nitrogen_dioxide?: Mics_4514SensorConfigNitrogenDioxide;
    carbon_monoxide?: Mics_4514SensorConfigCarbonMonoxide;
    methane?: Mics_4514SensorConfigMethane;
    ethanol?: Mics_4514SensorConfigEthanol;
    hydrogen?: Mics_4514SensorConfigHydrogen;
    ammonia?: Mics_4514SensorConfigAmmonia;
    i2c_id?: ID;
    address?: any;
    update_interval?: any;
}
