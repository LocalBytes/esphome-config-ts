/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: xiaomi_cgg1.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/xiaomi_cgg1
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { BthomeMithermometerBLEDEVICESCHEMA } from "./bthome_mithermometer.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class XiaomiCgg1Sensor extends EsphomeComponent<XiaomiCgg1SensorConfig> {
    componentName: string = "xiaomi_cgg1.sensor";
}

export interface XiaomiCgg1SensorConfigBatteryLevel extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiCgg1SensorConfigHumidity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiCgg1SensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type XiaomiCgg1SensorConfig = {
        battery_level?: XiaomiCgg1SensorConfigBatteryLevel;
        bindkey?: any;
        humidity?: XiaomiCgg1SensorConfigHumidity;
        id?: ID;
        mac_address: string;
        temperature?: XiaomiCgg1SensorConfigTemperature;
    } & BthomeMithermometerBLEDEVICESCHEMA & CoreCOMPONENTSCHEMA;
