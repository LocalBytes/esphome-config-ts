/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: pca9685.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/pca9685
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { OutputFLOAT_OUTPUT_SCHEMA } from "./output.js";

export class Pca9685 extends EsphomeComponent<Pca9685Config> {
    componentName: string = "pca9685";
}

export type Pca9685ConfigPhaseBalancer = 'none' | 'linear';

export interface Pca9685Config extends CoreCOMPONENT_SCHEMA {
    address?: any;
    external_clock_input?: boolean;
    frequency?: any;
    i2c_id?: ID;
    id?: ID;
    phase_balancer?: Pca9685ConfigPhaseBalancer;
}

export class Pca9685Output extends EsphomeComponent<Pca9685OutputConfig> {
    componentName: string = "pca9685.output";
}

export interface Pca9685OutputConfig extends OutputFLOAT_OUTPUT_SCHEMA {
    channel: number;
    id: string;
    pca9685_id?: ID;
}
