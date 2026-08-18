/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: duty_cycle.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/duty_cycle
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class DutyCycleSensor extends EsphomeComponent<DutyCycleSensorConfig> {
    componentName: string = "duty_cycle.sensor";
}

export type DutyCycleSensorConfig = {
        accuracy_decimals?: any;
        icon?: any;
        id?: any;
        pin: Pin;
        state_class?: any;
        unit_of_measurement?: any;
        update_interval?: any;
    } & SensorSENSORSCHEMA & CoreCOMPONENTSCHEMA;
