/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: xiaomi_mhoc401.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/xiaomi_mhoc401
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { BthomeMithermometerBLEDEVICESCHEMA } from "./bthome_mithermometer.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class XiaomiMhoc401Sensor extends EsphomeComponent<XiaomiMhoc401SensorConfig> {
    componentName: string = "xiaomi_mhoc401.sensor";
}

export interface XiaomiMhoc401SensorConfigBatteryLevel extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiMhoc401SensorConfigHumidity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiMhoc401SensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type XiaomiMhoc401SensorConfig = {
        battery_level?: XiaomiMhoc401SensorConfigBatteryLevel;
        bindkey: string;
        humidity?: XiaomiMhoc401SensorConfigHumidity;
        id?: ID;
        mac_address: string;
        temperature?: XiaomiMhoc401SensorConfigTemperature;
    } & BthomeMithermometerBLEDEVICESCHEMA & CoreCOMPONENTSCHEMA;
