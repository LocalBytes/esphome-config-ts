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
import type { TextSensorTEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export class BleClient extends EsphomeComponent<BleClientConfig> {
    componentName: string = "ble_client";
}

export interface BleClientConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    mac_address: string;
    name?: string;
    on_connect?: object[];
    on_disconnect?: object[];
    on_passkey_request?: object[];
    on_passkey_notification?: object[];
    on_numeric_comparison_request?: object[];
    esp32_ble_id?: ID;
}

export interface BleClientBLE_CLIENT_SCHEMA {
    ble_client_id?: ID;
}

export class BleClientSensor extends EsphomeComponent<BleClientSensorConfig> {
    componentName: string = "ble_client.sensor";
}

export type BleClientSensorConfig = BleClientSensorConfigCharacteristic | BleClientSensorConfigRssi;

export interface BleClientSensorConfigCharacteristic {
    type: "characteristic" | "CHARACTERISTIC";
    id?: any;
    accuracy_decimals?: any;
    update_interval?: any;
    service_uuid: string;
    characteristic_uuid: string;
    descriptor_uuid?: any;
    lambda?: any;
    notify?: boolean;
    on_notify?: object[];
}

export interface BleClientSensorConfigRssi {
    type: "rssi" | "RSSI";
    id?: any;
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    update_interval?: any;
}

export class BleClientOutput extends EsphomeComponent<BleClientOutputConfig> {
    componentName: string = "ble_client.output";
}

export type BleClientOutputConfig = {
        id: string;
        service_uuid: string;
        characteristic_uuid: string;
        require_response?: boolean;
    } & OutputBINARY_OUTPUT_SCHEMA & CoreCOMPONENT_SCHEMA & BleClientBLE_CLIENT_SCHEMA;

export class BleClientSwitch extends EsphomeComponent<BleClientSwitchConfig> {
    componentName: string = "ble_client.switch";
}

export type BleClientSwitchConfigRestoreMode = 'RESTORE_DEFAULT_OFF' | 'RESTORE_DEFAULT_ON' | 'ALWAYS_OFF' | 'ALWAYS_ON' | 'RESTORE_INVERTED_DEFAULT_OFF' | 'RESTORE_INVERTED_DEFAULT_ON' | 'DISABLED';
export type BleClientSwitchConfig = {
        restore_mode?: BleClientSwitchConfigRestoreMode;
        id?: ID;
        icon?: any;
    } & Switch_SWITCH_SCHEMA & BleClientBLE_CLIENT_SCHEMA & CoreCOMPONENT_SCHEMA;

export class BleClientTextSensor extends EsphomeComponent<BleClientTextSensorConfig> {
    componentName: string = "ble_client.text_sensor";
}

export type BleClientTextSensorConfig = {
        id?: any;
        service_uuid: string;
        characteristic_uuid: string;
        descriptor_uuid?: any;
        notify?: boolean;
        on_notify?: object[];
        update_interval?: any;
    } & TextSensorTEXT_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA & BleClientBLE_CLIENT_SCHEMA;
