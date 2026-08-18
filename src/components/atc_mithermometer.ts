/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: atc_mithermometer.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/atc_mithermometer
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class AtcMithermometerSensor extends EsphomeComponent<AtcMithermometerSensorConfig> {
    componentName: string = "atc_mithermometer.sensor";
}

export interface AtcMithermometerSensorConfigBatteryLevel extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface AtcMithermometerSensorConfigBatteryVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface AtcMithermometerSensorConfigHumidity extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface AtcMithermometerSensorConfigSignalStrength extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface AtcMithermometerSensorConfigTemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface AtcMithermometerSensorConfig extends CoreCOMPONENT_SCHEMA {
    battery_level?: AtcMithermometerSensorConfigBatteryLevel;
    battery_voltage?: AtcMithermometerSensorConfigBatteryVoltage;
    esp32_ble_id?: ID;
    humidity?: AtcMithermometerSensorConfigHumidity;
    id?: ID;
    mac_address: string;
    signal_strength?: AtcMithermometerSensorConfigSignalStrength;
    temperature?: AtcMithermometerSensorConfigTemperature;
}
