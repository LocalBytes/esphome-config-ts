/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: atc_mithermometer.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/atc_mithermometer
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class AtcMithermometerSensor extends BaseComponent<AtcMithermometerSensorConfig> {
    componentName: string = "atc_mithermometer.sensor";
}

export interface AtcMithermometerSensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    mac_address: string;
    temperature?: AtcMithermometerSensorConfigTemperature;
    humidity?: AtcMithermometerSensorConfigHumidity;
    battery_level?: AtcMithermometerSensorConfigBatteryLevel;
    battery_voltage?: AtcMithermometerSensorConfigBatteryVoltage;
    signal_strength?: AtcMithermometerSensorConfigSignalStrength;
    esp32_ble_id?: ID;
}

export interface AtcMithermometerSensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface AtcMithermometerSensorConfigHumidity extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface AtcMithermometerSensorConfigBatteryLevel extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    entity_category?: any;
}

export interface AtcMithermometerSensorConfigBatteryVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    entity_category?: any;
}

export interface AtcMithermometerSensorConfigSignalStrength extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    entity_category?: any;
}
