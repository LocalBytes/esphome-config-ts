/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: xiaomi_hhccpot002.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/xiaomi_hhccpot002
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { SensorSENSOR_SCHEMA } from "./sensor.js";
import { Esp32BleTrackerESP_BLE_DEVICE_SCHEMA } from "./esp32_ble_tracker.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class XiaomiHhccpot002Sensor extends BaseComponent<XiaomiHhccpot002SensorConfig> {
    componentName: string = "xiaomi_hhccpot002.sensor";
}

export interface XiaomiHhccpot002SensorConfig extends Esp32BleTrackerESP_BLE_DEVICE_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: ID;
    mac_address: string;
    moisture?: XiaomiHhccpot002SensorConfigMoisture;
    conductivity?: XiaomiHhccpot002SensorConfigConductivity;
}

export interface XiaomiHhccpot002SensorConfigMoisture extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface XiaomiHhccpot002SensorConfigConductivity extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}
