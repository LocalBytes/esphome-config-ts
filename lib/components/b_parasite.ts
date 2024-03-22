/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: b_parasite.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/b_parasite
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class BParasiteSensor extends BaseComponent<BParasiteSensorConfig> {
    componentName: string = "b_parasite.sensor";
}

export interface BParasiteSensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    mac_address: string;
    temperature?: BParasiteSensorConfigTemperature;
    humidity?: BParasiteSensorConfigHumidity;
    battery_voltage?: BParasiteSensorConfigBatteryVoltage;
    moisture?: BParasiteSensorConfigMoisture;
    illuminance?: BParasiteSensorConfigIlluminance;
    esp32_ble_id?: ID;
}

export interface BParasiteSensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface BParasiteSensorConfigHumidity extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface BParasiteSensorConfigBatteryVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    entity_category?: any;
}

export interface BParasiteSensorConfigMoisture extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface BParasiteSensorConfigIlluminance extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}
