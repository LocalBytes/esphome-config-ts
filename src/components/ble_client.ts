/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ble_client.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ble_client
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { OutputBINARY_OUTPUT_SCHEMA } from "./output.js";
import type { Switch_SWITCH_SCHEMA } from "./switch.js";
import type { TextSensor_TEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export class BleClient extends EsphomeComponent<BleClientConfig> {
    componentName: string = "ble_client";
}

export interface BleClientBLE_CLIENT_SCHEMA {
    ble_client_id?: ID;
}

export interface BleClientBLE_CONNECT_ACTION_SCHEMA {
    id?: ID;
}

export interface BleClientConfig extends CoreCOMPONENT_SCHEMA {
    auto_connect?: boolean;
    esp32_ble_id?: ID;
    id?: ID;
    mac_address: string;
    name?: string;
    on_connect?: object[];
    on_disconnect?: object[];
    on_numeric_comparison_request?: object[];
    on_passkey_notification?: object[];
    on_passkey_request?: object[];
}

export class BleClientOutput extends EsphomeComponent<BleClientOutputConfig> {
    componentName: string = "ble_client.output";
}

export type BleClientOutputConfig = {
        characteristic_uuid: string;
        id: string;
        require_response?: boolean;
        service_uuid: string;
    } & OutputBINARY_OUTPUT_SCHEMA & CoreCOMPONENT_SCHEMA & BleClientBLE_CLIENT_SCHEMA;

export class BleClientSensor extends EsphomeComponent<BleClientSensorConfig> {
    componentName: string = "ble_client.sensor";
}

export type BleClientSensorConfig = BleClientSensorConfigCharacteristic | BleClientSensorConfigRssi;

export interface BleClientSensorConfigCharacteristic {
    type: "characteristic" | "CHARACTERISTIC";
    accuracy_decimals?: any;
    characteristic_uuid: string;
    descriptor_uuid?: any;
    id?: any;
    lambda?: any;
    notify?: boolean;
    on_notify?: object[];
    service_uuid: string;
    update_interval?: any;
}

export interface BleClientSensorConfigRssi {
    type: "rssi" | "RSSI";
    accuracy_decimals?: any;
    device_class?: any;
    id?: any;
    state_class?: any;
    unit_of_measurement?: any;
    update_interval?: any;
}

export class BleClientSwitch extends EsphomeComponent<BleClientSwitchConfig> {
    componentName: string = "ble_client.switch";
}

export type BleClientSwitchConfig = {
        icon?: any;
        id?: ID;
    } & Switch_SWITCH_SCHEMA & BleClientBLE_CLIENT_SCHEMA & CoreCOMPONENT_SCHEMA;

export class BleClientTextSensor extends EsphomeComponent<BleClientTextSensorConfig> {
    componentName: string = "ble_client.text_sensor";
}

export type BleClientTextSensorConfig = {
        characteristic_uuid: string;
        descriptor_uuid?: any;
        id?: any;
        notify?: boolean;
        on_notify?: object[];
        service_uuid: string;
        update_interval?: any;
    } & TextSensor_TEXT_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA & BleClientBLE_CLIENT_SCHEMA;
