/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: gpio.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/gpio
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { BinarySensorBINARYSENSORSCHEMA } from "./binary_sensor.js";
import type { CoreCOMPONENTSCHEMA, CorePositiveTimePeriodMilliseconds } from "./esphome.js";
import type { OutputBINARYOUTPUTSCHEMA } from "./output.js";
import type { SwitchSWITCHSCHEMA } from "./switch.js";

export class GpioBinarySensor extends EsphomeComponent<GpioBinarySensorConfig> {
    componentName: string = "gpio.binary_sensor";
}

export type GpioBinarySensorConfigInterruptType = 'RISING' | 'FALLING' | 'ANY';
export type GpioBinarySensorConfig = {
        id?: any;
        interrupt_type?: GpioBinarySensorConfigInterruptType;
        pin: Pin;
        use_interrupt?: boolean;
    } & BinarySensorBINARYSENSORSCHEMA & CoreCOMPONENTSCHEMA;

export class GpioOneWire extends EsphomeComponent<GpioOneWireConfig> {
    componentName: string = "gpio.one_wire";
}

export interface GpioOneWireConfig extends CoreCOMPONENTSCHEMA {
    id?: ID;
    pin: Pin;
}

export class GpioOutput extends EsphomeComponent<GpioOutputConfig> {
    componentName: string = "gpio.output";
}

export type GpioOutputConfig = {
        id: string;
        pin: Pin;
    } & OutputBINARYOUTPUTSCHEMA & CoreCOMPONENTSCHEMA;

export class GpioSwitch extends EsphomeComponent<GpioSwitchConfig> {
    componentName: string = "gpio.switch";
}

export type GpioSwitchConfigInterlockWaitTime = CorePositiveTimePeriodMilliseconds;
export type GpioSwitchConfig = {
        id?: ID;
        interlock?: ID[];
        interlock_wait_time?: GpioSwitchConfigInterlockWaitTime;
        pin: Pin;
    } & SwitchSWITCHSCHEMA & CoreCOMPONENTSCHEMA;
