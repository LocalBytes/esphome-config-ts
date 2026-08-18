/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: esp32_ble_server.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/esp32_ble_server
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Esp32BleServer extends EsphomeComponent<Esp32BleServerConfig> {
    componentName: string = "esp32_ble_server";
}

export type Esp32BleServerConfigFirmwareVersionEndianness = 'LITTLE' | 'BIG';
export type Esp32BleServerConfigFirmwareVersionType = 'uint8_t' | 'uint16_t' | 'uint32_t' | 'uint64_t' | 'int8_t' | 'int16_t' | 'int32_t' | 'int64_t' | 'float' | 'double' | 'string';

export interface Esp32BleServerConfigFirmwareVersion {
    data: number;
    endianness?: Esp32BleServerConfigFirmwareVersionEndianness;
    string_encoding?: any;
    type?: Esp32BleServerConfigFirmwareVersionType;
}

export type Esp32BleServerConfigManufacturerEndianness = 'LITTLE' | 'BIG';
export type Esp32BleServerConfigManufacturerType = 'uint8_t' | 'uint16_t' | 'uint32_t' | 'uint64_t' | 'int8_t' | 'int16_t' | 'int32_t' | 'int64_t' | 'float' | 'double' | 'string';

export interface Esp32BleServerConfigManufacturer {
    data: number;
    endianness?: Esp32BleServerConfigManufacturerEndianness;
    string_encoding?: any;
    type?: Esp32BleServerConfigManufacturerType;
}

export type Esp32BleServerConfigModelEndianness = 'LITTLE' | 'BIG';
export type Esp32BleServerConfigModelType = 'uint8_t' | 'uint16_t' | 'uint32_t' | 'uint64_t' | 'int8_t' | 'int16_t' | 'int32_t' | 'int64_t' | 'float' | 'double' | 'string';

export interface Esp32BleServerConfigModel {
    data: number;
    endianness?: Esp32BleServerConfigModelEndianness;
    string_encoding?: any;
    type?: Esp32BleServerConfigModelType;
}

export type Esp32BleServerConfigServicesCharacteristicsDescriptionEndianness = 'LITTLE' | 'BIG';
export type Esp32BleServerConfigServicesCharacteristicsDescriptionType = 'uint8_t' | 'uint16_t' | 'uint32_t' | 'uint64_t' | 'int8_t' | 'int16_t' | 'int32_t' | 'int64_t' | 'float' | 'double' | 'string';

export interface Esp32BleServerConfigServicesCharacteristicsDescription {
    data: number;
    endianness?: Esp32BleServerConfigServicesCharacteristicsDescriptionEndianness;
    string_encoding?: any;
    type?: Esp32BleServerConfigServicesCharacteristicsDescriptionType;
}

export type Esp32BleServerConfigServicesCharacteristicsDescriptorsValueEndianness = 'LITTLE' | 'BIG';
export type Esp32BleServerConfigServicesCharacteristicsDescriptorsValueType = 'uint8_t' | 'uint16_t' | 'uint32_t' | 'uint64_t' | 'int8_t' | 'int16_t' | 'int32_t' | 'int64_t' | 'float' | 'double' | 'string';

export interface Esp32BleServerConfigServicesCharacteristicsDescriptorsValue {
    data: number;
    endianness?: Esp32BleServerConfigServicesCharacteristicsDescriptorsValueEndianness;
    string_encoding?: any;
    type?: Esp32BleServerConfigServicesCharacteristicsDescriptorsValueType;
}

export interface Esp32BleServerConfigServicesCharacteristicsDescriptors {
    id?: ID;
    max_length?: number;
    on_write?: object[];
    read?: boolean;
    uuid: string;
    value: Esp32BleServerConfigServicesCharacteristicsDescriptorsValue;
    write?: boolean;
}

export type Esp32BleServerConfigServicesCharacteristicsValueEndianness = 'LITTLE' | 'BIG';
export type Esp32BleServerConfigServicesCharacteristicsValueType = 'uint8_t' | 'uint16_t' | 'uint32_t' | 'uint64_t' | 'int8_t' | 'int16_t' | 'int32_t' | 'int64_t' | 'float' | 'double' | 'string';

export interface Esp32BleServerConfigServicesCharacteristicsValue {
    data: number;
    endianness?: Esp32BleServerConfigServicesCharacteristicsValueEndianness;
    string_encoding?: any;
    type?: Esp32BleServerConfigServicesCharacteristicsValueType;
}

export interface Esp32BleServerConfigServicesCharacteristics {
    broadcast?: boolean;
    char_value_action_id_?: ID;
    description?: Esp32BleServerConfigServicesCharacteristicsDescription;
    descriptors?: Esp32BleServerConfigServicesCharacteristicsDescriptors[];
    id?: ID;
    indicate?: boolean;
    notify?: boolean;
    on_write?: object[];
    read?: boolean;
    uuid: string;
    value?: Esp32BleServerConfigServicesCharacteristicsValue;
    write?: boolean;
    write_no_response?: boolean;
}

export interface Esp32BleServerConfigServices {
    advertise?: boolean;
    characteristics?: Esp32BleServerConfigServicesCharacteristics[];
    id?: ID;
    uuid: string;
}

export interface Esp32BleServerConfig extends CoreCOMPONENT_SCHEMA {
    appearance?: number;
    ble_id?: ID;
    firmware_version?: Esp32BleServerConfigFirmwareVersion;
    id?: ID;
    manufacturer?: Esp32BleServerConfigManufacturer;
    manufacturer_data?: any;
    max_clients?: number;
    model?: Esp32BleServerConfigModel;
    on_connect?: object[];
    on_disconnect?: object[];
    services?: Esp32BleServerConfigServices[];
}
