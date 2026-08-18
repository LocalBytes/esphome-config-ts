/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: b_parasite.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/b_parasite
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class BParasiteSensor extends EsphomeComponent<BParasiteSensorConfig> {
    componentName: string = "b_parasite.sensor";
}

export interface BParasiteSensorConfigBatteryVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface BParasiteSensorConfigHumidity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface BParasiteSensorConfigIlluminance extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface BParasiteSensorConfigMoisture extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface BParasiteSensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface BParasiteSensorConfig extends CoreCOMPONENTSCHEMA {
    battery_voltage?: BParasiteSensorConfigBatteryVoltage;
    esp32_ble_id?: ID;
    humidity?: BParasiteSensorConfigHumidity;
    id?: ID;
    illuminance?: BParasiteSensorConfigIlluminance;
    mac_address: string;
    moisture?: BParasiteSensorConfigMoisture;
    temperature?: BParasiteSensorConfigTemperature;
}
