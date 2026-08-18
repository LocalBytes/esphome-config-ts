/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: pvvx_mithermometer.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/pvvx_mithermometer
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriod, CorePositiveTimePeriodSeconds, CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { DisplayBASICDISPLAYSCHEMA } from "./display.js";
import type { BleClientBLECLIENTSCHEMA } from "./ble_client.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { BthomeMithermometerBLEDEVICESCHEMA } from "./bthome_mithermometer.js";

export class PvvxMithermometerDisplay extends EsphomeComponent<PvvxMithermometerDisplayConfig> {
    componentName: string = "pvvx_mithermometer.display";
}

export type PvvxMithermometerDisplayConfigDisconnectDelay = CorePositiveTimePeriod;
export type PvvxMithermometerDisplayConfigValidityPeriod = CorePositiveTimePeriodSeconds;
export type PvvxMithermometerDisplayConfig = {
        auto_clear_enabled?: boolean;
        disconnect_delay?: PvvxMithermometerDisplayConfigDisconnectDelay;
        id?: ID;
        time_id?: ID;
        update_interval?: any;
        validity_period?: PvvxMithermometerDisplayConfigValidityPeriod;
        lambda?: any;
    } & DisplayBASICDISPLAYSCHEMA & BleClientBLECLIENTSCHEMA & CoreCOMPONENTSCHEMA;

export class PvvxMithermometerSensor extends EsphomeComponent<PvvxMithermometerSensorConfig> {
    componentName: string = "pvvx_mithermometer.sensor";
}

export interface PvvxMithermometerSensorConfigBatteryLevel extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PvvxMithermometerSensorConfigBatteryVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PvvxMithermometerSensorConfigHumidity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PvvxMithermometerSensorConfigSignalStrength extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PvvxMithermometerSensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type PvvxMithermometerSensorConfig = {
        battery_level?: PvvxMithermometerSensorConfigBatteryLevel;
        battery_voltage?: PvvxMithermometerSensorConfigBatteryVoltage;
        humidity?: PvvxMithermometerSensorConfigHumidity;
        id?: ID;
        mac_address: string;
        signal_strength?: PvvxMithermometerSensorConfigSignalStrength;
        temperature?: PvvxMithermometerSensorConfigTemperature;
    } & BthomeMithermometerBLEDEVICESCHEMA & CoreCOMPONENTSCHEMA;
