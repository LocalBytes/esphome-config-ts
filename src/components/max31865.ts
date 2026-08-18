/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: max31865.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/max31865
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Max31865Sensor extends EsphomeComponent<Max31865SensorConfig> {
    componentName: string = "max31865.sensor";
}

export type Max31865SensorConfigMainsFilter = '50HZ' | '60HZ';
export type Max31865SensorConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';
export type Max31865SensorConfig = {
        accuracy_decimals?: any;
        cs_pin: Pin;
        data_rate?: any;
        device_class?: any;
        id?: any;
        mains_filter?: Max31865SensorConfigMainsFilter;
        reference_resistance: string;
        release_device?: boolean;
        rtd_nominal_resistance: string;
        rtd_wires?: number;
        spi_id?: ID;
        spi_mode?: Max31865SensorConfigSpiMode;
        state_class?: any;
        unit_of_measurement?: any;
        update_interval?: any;
    } & SensorSENSORSCHEMA & CoreCOMPONENTSCHEMA;
