/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: iaqcore.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/iaqcore
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class IaqcoreSensor extends EsphomeComponent<IaqcoreSensorConfig> {
    componentName: string = "iaqcore.sensor";
}

export interface IaqcoreSensorConfigCo2 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface IaqcoreSensorConfigTvoc extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface IaqcoreSensorConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    co2?: IaqcoreSensorConfigCo2;
    i2c_id?: ID;
    id?: ID;
    tvoc?: IaqcoreSensorConfigTvoc;
    update_interval?: any;
}
