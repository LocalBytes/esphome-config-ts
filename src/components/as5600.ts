/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: as5600.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/as5600
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";

export class As5600 extends EsphomeComponent<As5600Config> {
    componentName: string = "as5600";
}

export type As5600ConfigDirection = 'CLOCKWISE' | 'COUNTERCLOCKWISE';
export type As5600ConfigFastFilter = 'NONE' | 'LSB6' | 'LSB7' | 'LSB9' | 'LSB18' | 'LSB21' | 'LSB24' | 'LSB10';
export type As5600ConfigHysteresis = 'NONE' | 'LSB1' | 'LSB2' | 'LSB3';
export type As5600ConfigPowerMode = 'NOMINAL' | 'LOW1' | 'LOW2' | 'LOW3';
export type As5600ConfigSlowFilter = '16X' | '8X' | '4X' | '2X';

export interface As5600Config extends CoreCOMPONENTSCHEMA {
    address?: any;
    dir_pin?: Pin;
    direction?: As5600ConfigDirection;
    end_position?: any;
    fast_filter?: As5600ConfigFastFilter;
    hysteresis?: As5600ConfigHysteresis;
    i2c_id?: ID;
    id?: ID;
    power_mode?: As5600ConfigPowerMode;
    range?: any;
    slow_filter?: As5600ConfigSlowFilter;
    start_position?: any;
    watchdog?: boolean;
}

export class As5600Sensor extends EsphomeComponent<As5600SensorConfig> {
    componentName: string = "as5600.sensor";
}

export interface As5600SensorConfigGain extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    entity_category?: any;
    state_class?: any;
}

export interface As5600SensorConfigMagnitude extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    entity_category?: any;
    icon?: any;
    state_class?: any;
}

export type As5600SensorConfigOutOfRangeMode = 'MIN_MAX' | 'NAN';

export interface As5600SensorConfigRawPosition extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
}

export interface As5600SensorConfigStatus extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    entity_category?: any;
    icon?: any;
    state_class?: any;
}

export type As5600SensorConfig = {
        accuracy_decimals?: any;
        as5600_id?: ID;
        gain?: As5600SensorConfigGain;
        icon?: any;
        id?: any;
        magnitude?: As5600SensorConfigMagnitude;
        out_of_range_mode?: As5600SensorConfigOutOfRangeMode;
        raw_position?: As5600SensorConfigRawPosition;
        state_class?: any;
        status?: As5600SensorConfigStatus;
        update_interval?: any;
    } & SensorSENSORSCHEMA & CoreCOMPONENTSCHEMA;
