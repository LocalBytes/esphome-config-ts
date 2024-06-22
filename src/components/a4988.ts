/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: a4988.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/a4988
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { StepperSTEPPER_SCHEMA } from "./stepper.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class A4988Stepper extends EsphomeComponent<A4988StepperConfig> {
    componentName: string = "a4988.stepper";
}

export type A4988StepperConfig = {
        id: string;
        step_pin: Pin;
        dir_pin: Pin;
        sleep_pin?: Pin;
    } & StepperSTEPPER_SCHEMA & CoreCOMPONENT_SCHEMA;
