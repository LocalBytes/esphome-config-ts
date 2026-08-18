/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: nau7802.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/nau7802
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export abstract class Nau7802 extends EsphomeComponent {
    componentName: string = "nau7802";
}

export class Nau7802Sensor extends EsphomeComponent<Nau7802SensorConfig> {
    componentName: string = "nau7802.sensor";
}

export type Nau7802SensorConfigGain = '1' | '2' | '4' | '8' | '16' | '32' | '64' | '128';
export type Nau7802SensorConfigLdoVoltage = '2.4V' | '2.7V' | '3.0V' | '3.3V' | '3.6V' | '3.9V' | '4.2V' | '4.5V' | 'EXTERNAL' | 'EXT';
export type Nau7802SensorConfigSamplesPerSecond = '10' | '20' | '40' | '80' | '320';
export type Nau7802SensorConfig = {
        accuracy_decimals?: any;
        address?: any;
        gain?: Nau7802SensorConfigGain;
        gain_calibration?: any;
        i2c_id?: ID;
        icon?: any;
        id?: any;
        ldo_voltage?: Nau7802SensorConfigLdoVoltage;
        offset_calibration?: number;
        samples_per_second?: Nau7802SensorConfigSamplesPerSecond;
        state_class?: any;
        update_interval?: any;
    } & SensorSENSORSCHEMA & CoreCOMPONENTSCHEMA;

export interface Nau7802SensorNAU7802CALIBRATESCHEMA {
    id?: ID;
}
