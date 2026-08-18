/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ezo.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ezo
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class EzoSensor extends EsphomeComponent<EzoSensorConfig> {
    componentName: string = "ezo.sensor";
}

export type EzoSensorConfig = {
        address: string;
        i2c_id?: ID;
        id?: any;
        on_calibration?: object[];
        on_custom?: object[];
        on_device_information?: object[];
        on_led?: object[];
        on_slope?: object[];
        on_t?: object[];
        update_interval?: any;
    } & SensorSENSORSCHEMA & CoreCOMPONENTSCHEMA;
