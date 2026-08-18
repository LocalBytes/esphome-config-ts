/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: seeed_mr60fda2.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/seeed_mr60fda2
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { BinarySensorBINARYSENSORSCHEMA } from "./binary_sensor.js";
import type { ButtonBUTTONSCHEMA } from "./button.js";
import type { SelectSELECTSCHEMA } from "./select.js";

export class SeeedMr60fda2 extends EsphomeComponent<SeeedMr60fda2Config> {
    componentName: string = "seeed_mr60fda2";
}

export interface SeeedMr60fda2Config extends CoreCOMPONENTSCHEMA {
    id?: ID;
    uart_id?: ID;
}

export class SeeedMr60fda2BinarySensor extends EsphomeComponent<SeeedMr60fda2BinarySensorConfig> {
    componentName: string = "seeed_mr60fda2.binary_sensor";
}

export interface SeeedMr60fda2BinarySensorConfigFallDetected extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
    icon?: any;
}

export interface SeeedMr60fda2BinarySensorConfigPeopleExist extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
    icon?: any;
}

export interface SeeedMr60fda2BinarySensorConfig {
    fall_detected?: SeeedMr60fda2BinarySensorConfigFallDetected;
    mr60fda2_id?: ID;
    people_exist?: SeeedMr60fda2BinarySensorConfigPeopleExist;
}

export class SeeedMr60fda2Button extends EsphomeComponent<SeeedMr60fda2ButtonConfig> {
    componentName: string = "seeed_mr60fda2.button";
}

export interface SeeedMr60fda2ButtonConfigFactoryReset extends ButtonBUTTONSCHEMA {
    device_class?: any;
    entity_category?: any;
    id?: ID;
}

export interface SeeedMr60fda2ButtonConfigGetRadarParameters extends ButtonBUTTONSCHEMA {
    device_class?: any;
    entity_category?: any;
    id?: ID;
}

export interface SeeedMr60fda2ButtonConfig {
    factory_reset?: SeeedMr60fda2ButtonConfigFactoryReset;
    get_radar_parameters?: SeeedMr60fda2ButtonConfigGetRadarParameters;
    mr60fda2_id?: ID;
}

export class SeeedMr60fda2Select extends EsphomeComponent<SeeedMr60fda2SelectConfig> {
    componentName: string = "seeed_mr60fda2.select";
}

export interface SeeedMr60fda2SelectConfigHeightThreshold extends SelectSELECTSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: any;
}

export interface SeeedMr60fda2SelectConfigInstallHeight extends SelectSELECTSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: any;
}

export interface SeeedMr60fda2SelectConfigSensitivity extends SelectSELECTSCHEMA {
    entity_category?: any;
    id?: any;
}

export interface SeeedMr60fda2SelectConfig {
    height_threshold?: SeeedMr60fda2SelectConfigHeightThreshold;
    install_height?: SeeedMr60fda2SelectConfigInstallHeight;
    mr60fda2_id?: ID;
    sensitivity?: SeeedMr60fda2SelectConfigSensitivity;
}
