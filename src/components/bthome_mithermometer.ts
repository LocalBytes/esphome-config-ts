/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: bthome_mithermometer.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/bthome_mithermometer
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export abstract class BthomeMithermometer extends EsphomeComponent {
    componentName: string = "bthome_mithermometer";
}

export interface BthomeMithermometerBLEDEVICESCHEMA {
    esp32_ble_id?: ID;
}

export class BthomeMithermometerSensor extends EsphomeComponent<BthomeMithermometerSensorConfig> {
    componentName: string = "bthome_mithermometer.sensor";
}

export interface BthomeMithermometerSensorConfigBatteryLevel extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface BthomeMithermometerSensorConfigBatteryVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface BthomeMithermometerSensorConfigHumidity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface BthomeMithermometerSensorConfigSignalStrength extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface BthomeMithermometerSensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type BthomeMithermometerSensorConfig = {
        battery_level?: BthomeMithermometerSensorConfigBatteryLevel;
        battery_voltage?: BthomeMithermometerSensorConfigBatteryVoltage;
        bindkey?: any;
        humidity?: BthomeMithermometerSensorConfigHumidity;
        id?: ID;
        mac_address: string;
        signal_strength?: BthomeMithermometerSensorConfigSignalStrength;
        temperature?: BthomeMithermometerSensorConfigTemperature;
    } & BthomeMithermometerBLEDEVICESCHEMA & CoreCOMPONENTSCHEMA;
