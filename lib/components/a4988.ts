/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: a4988.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/a4988
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { StepperSTEPPER_SCHEMA } from "./stepper.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class A4988Stepper extends BaseComponent<A4988StepperConfig> {
    componentName: string = "a4988.stepper";
}

export interface A4988StepperConfig extends StepperSTEPPER_SCHEMA, CoreCOMPONENT_SCHEMA {
    id: string;
    step_pin: Pin;
    dir_pin: Pin;
    sleep_pin?: Pin;
}
