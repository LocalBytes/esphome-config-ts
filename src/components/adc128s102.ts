/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: adc128s102.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/adc128s102
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Adc128s102 extends EsphomeComponent<Adc128s102Config> {
    componentName: string = "adc128s102";
}

export type Adc128s102ConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';

export interface Adc128s102Config {
    cs_pin: Pin;
    data_rate?: any;
    id?: ID;
    release_device?: boolean;
    spi_id?: ID;
    spi_mode?: Adc128s102ConfigSpiMode;
}

export class Adc128s102Sensor extends EsphomeComponent<Adc128s102SensorConfig> {
    componentName: string = "adc128s102.sensor";
}

export type Adc128s102SensorConfig = {
        adc128s102_id?: ID;
        channel: number;
        id?: any;
        update_interval?: any;
    } & SensorSENSORSCHEMA & CoreCOMPONENTSCHEMA;
