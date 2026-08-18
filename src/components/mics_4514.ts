/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: mics_4514.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mics_4514
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Mics4514Sensor extends EsphomeComponent<Mics4514SensorConfig> {
    componentName: string = "mics_4514.sensor";
}

export interface Mics4514SensorConfigAmmonia extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Mics4514SensorConfigCarbonMonoxide extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Mics4514SensorConfigEthanol extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Mics4514SensorConfigHydrogen extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Mics4514SensorConfigMethane extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Mics4514SensorConfigNitrogenDioxide extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Mics4514SensorConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    ammonia?: Mics4514SensorConfigAmmonia;
    carbon_monoxide?: Mics4514SensorConfigCarbonMonoxide;
    ethanol?: Mics4514SensorConfigEthanol;
    hydrogen?: Mics4514SensorConfigHydrogen;
    i2c_id?: ID;
    id?: ID;
    methane?: Mics4514SensorConfigMethane;
    nitrogen_dioxide?: Mics4514SensorConfigNitrogenDioxide;
    update_interval?: any;
}
