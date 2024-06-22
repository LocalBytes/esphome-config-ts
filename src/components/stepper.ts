/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: stepper.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/stepper
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";

export abstract class Stepper extends BaseComponent {
    componentName: string = "stepper";
}

export interface StepperSTEPPER_SCHEMA {
    max_speed: string;
    acceleration?: any;
    deceleration?: any;
}
