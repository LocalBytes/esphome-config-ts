/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: inkbird_ibsth1_mini.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/inkbird_ibsth1_mini
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { BthomeMithermometerBLEDEVICESCHEMA } from "./bthome_mithermometer.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class InkbirdIbsth1MiniSensor extends EsphomeComponent<InkbirdIbsth1MiniSensorConfig> {
    componentName: string = "inkbird_ibsth1_mini.sensor";
}

export interface InkbirdIbsth1MiniSensorConfigBatteryLevel extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface InkbirdIbsth1MiniSensorConfigExternalTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface InkbirdIbsth1MiniSensorConfigHumidity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface InkbirdIbsth1MiniSensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type InkbirdIbsth1MiniSensorConfig = {
        battery_level?: InkbirdIbsth1MiniSensorConfigBatteryLevel;
        external_temperature?: InkbirdIbsth1MiniSensorConfigExternalTemperature;
        humidity?: InkbirdIbsth1MiniSensorConfigHumidity;
        id?: ID;
        mac_address: string;
        temperature?: InkbirdIbsth1MiniSensorConfigTemperature;
    } & BthomeMithermometerBLEDEVICESCHEMA & CoreCOMPONENTSCHEMA;
