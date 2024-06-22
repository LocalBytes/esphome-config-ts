/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: esp32_ble_beacon.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/esp32_ble_beacon
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Esp32BleBeacon extends EsphomeComponent<Esp32BleBeaconConfig> {
    componentName: string = "esp32_ble_beacon";
}

export type Esp32BleBeaconConfigType = 'IBEACON';
export type Esp32BleBeaconConfigMinInterval = CorePositiveTimePeriodMilliseconds;
export type Esp32BleBeaconConfigMaxInterval = CorePositiveTimePeriodMilliseconds;
export type Esp32BleBeaconConfigTxPower = '0' | '3' | '6' | '9' | '-12' | '-9' | '-6' | '-3';

export interface Esp32BleBeaconConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    type: Esp32BleBeaconConfigType;
    uuid: string;
    major?: number;
    minor?: number;
    min_interval?: Esp32BleBeaconConfigMinInterval;
    max_interval?: Esp32BleBeaconConfigMaxInterval;
    measured_power?: number;
    tx_power?: Esp32BleBeaconConfigTxPower;
}
