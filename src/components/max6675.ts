/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: max6675.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/max6675
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Max6675Sensor extends EsphomeComponent<Max6675SensorConfig> {
    componentName: string = "max6675.sensor";
}

export type Max6675SensorConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';
export type Max6675SensorConfig = {
        accuracy_decimals?: any;
        cs_pin: Pin;
        data_rate?: any;
        device_class?: any;
        id?: any;
        release_device?: boolean;
        spi_id?: ID;
        spi_mode?: Max6675SensorConfigSpiMode;
        state_class?: any;
        unit_of_measurement?: any;
        update_interval?: any;
    } & SensorSENSORSCHEMA & CoreCOMPONENTSCHEMA;
