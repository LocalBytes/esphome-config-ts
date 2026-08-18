/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: mopeka_pro_check.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mopeka_pro_check
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { BthomeMithermometerBLEDEVICESCHEMA } from "./bthome_mithermometer.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class MopekaProCheckSensor extends EsphomeComponent<MopekaProCheckSensorConfig> {
    componentName: string = "mopeka_pro_check.sensor";
}

export interface MopekaProCheckSensorConfigBatteryLevel extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface MopekaProCheckSensorConfigDistance extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface MopekaProCheckSensorConfigIgnoredReads extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    entity_category?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface MopekaProCheckSensorConfigLevel extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type MopekaProCheckSensorConfigMinimumSignalQuality = 'ZERO' | 'LOW' | 'MEDIUM' | 'HIGH';

export interface MopekaProCheckSensorConfigSignalQuality extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type MopekaProCheckSensorConfigTankType = 'CUSTOM' | '20LB_V' | '30LB_V' | '40LB_V' | 'EUROPE_6KG' | 'EUROPE_11KG' | 'EUROPE_14KG';

export interface MopekaProCheckSensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type MopekaProCheckSensorConfig = {
        battery_level?: MopekaProCheckSensorConfigBatteryLevel;
        custom_distance_empty?: any;
        custom_distance_full?: any;
        distance?: MopekaProCheckSensorConfigDistance;
        id?: ID;
        ignored_reads?: MopekaProCheckSensorConfigIgnoredReads;
        level?: MopekaProCheckSensorConfigLevel;
        mac_address: string;
        minimum_signal_quality?: MopekaProCheckSensorConfigMinimumSignalQuality;
        signal_quality?: MopekaProCheckSensorConfigSignalQuality;
        tank_type: MopekaProCheckSensorConfigTankType;
        temperature?: MopekaProCheckSensorConfigTemperature;
    } & BthomeMithermometerBLEDEVICESCHEMA & CoreCOMPONENTSCHEMA;
