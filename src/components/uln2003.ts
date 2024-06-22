/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: uln2003.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/uln2003
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { StepperSTEPPER_SCHEMA } from "./stepper.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Uln2003Stepper extends BaseComponent<Uln2003StepperConfig> {
    componentName: string = "uln2003.stepper";
}

export type Uln2003StepperConfigStepMode = 'FULL_STEP' | 'HALF_STEP' | 'WAVE_DRIVE';
export type Uln2003StepperConfig = {
        id: string;
        pin_a: Pin;
        pin_b: Pin;
        pin_c: Pin;
        pin_d: Pin;
        sleep_when_done?: boolean;
        step_mode?: Uln2003StepperConfigStepMode;
    } & StepperSTEPPER_SCHEMA & CoreCOMPONENT_SCHEMA;
