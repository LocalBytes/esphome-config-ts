/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: zephyr_mcumgr.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/zephyr_mcumgr
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { OtaBASE_OTA_SCHEMA } from "./ota.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class ZephyrMcumgrOta extends EsphomeComponent<ZephyrMcumgrOtaConfig> {
    componentName: string = "zephyr_mcumgr.ota";
}

export type ZephyrMcumgrOtaConfigTransportHardwareUart = 'CDC' | 'CDC1' | 'UART0' | 'UART1';

export interface ZephyrMcumgrOtaConfigTransport {
    ble?: boolean;
    hardware_uart?: ZephyrMcumgrOtaConfigTransportHardwareUart;
}

export type ZephyrMcumgrOtaConfig = {
        id?: ID;
        transport?: ZephyrMcumgrOtaConfigTransport;
    } & OtaBASE_OTA_SCHEMA & CoreCOMPONENT_SCHEMA;
