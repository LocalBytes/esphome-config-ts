/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: mopeka_std_check.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mopeka_std_check
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { BthomeMithermometerBLEDEVICESCHEMA } from "./bthome_mithermometer.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class MopekaStdCheckSensor extends EsphomeComponent<MopekaStdCheckSensorConfig> {
    componentName: string = "mopeka_std_check.sensor";
}

export interface MopekaStdCheckSensorConfigBatteryLevel extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface MopekaStdCheckSensorConfigDistance extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface MopekaStdCheckSensorConfigLevel extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type MopekaStdCheckSensorConfigTankType = 'CUSTOM' | 'NORTH_AMERICA_20LB_VERTICAL' | 'NORTH_AMERICA_30LB_VERTICAL' | 'NORTH_AMERICA_40LB_VERTICAL' | 'EUROPE_6KG' | 'EUROPE_11KG' | 'EUROPE_14KG';

export interface MopekaStdCheckSensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type MopekaStdCheckSensorConfig = {
        battery_level?: MopekaStdCheckSensorConfigBatteryLevel;
        custom_distance_empty?: any;
        custom_distance_full?: any;
        distance?: MopekaStdCheckSensorConfigDistance;
        id?: ID;
        level?: MopekaStdCheckSensorConfigLevel;
        mac_address: string;
        propane_butane_mix?: any;
        tank_type: MopekaStdCheckSensorConfigTankType;
        temperature?: MopekaStdCheckSensorConfigTemperature;
    } & BthomeMithermometerBLEDEVICESCHEMA & CoreCOMPONENTSCHEMA;
