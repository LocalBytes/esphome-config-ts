/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ble_rssi.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ble_rssi
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class BleRssiSensor extends EsphomeComponent<BleRssiSensorConfig> {
    componentName: string = "ble_rssi.sensor";
}

export type BleRssiSensorConfig = {
        accuracy_decimals?: any;
        device_class?: any;
        esp32_ble_id?: ID;
        ibeacon_major?: number;
        ibeacon_minor?: number;
        ibeacon_uuid?: any;
        id?: any;
        irk?: any;
        mac_address?: any;
        service_uuid?: any;
        state_class?: any;
        unit_of_measurement?: any;
    } & SensorSENSORSCHEMA & CoreCOMPONENTSCHEMA;
