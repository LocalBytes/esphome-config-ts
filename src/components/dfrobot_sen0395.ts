/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: dfrobot_sen0395.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/dfrobot_sen0395
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { BinarySensor_BINARY_SENSOR_SCHEMA } from "./binary_sensor.js";

export class DfrobotSen0395 extends EsphomeComponent<DfrobotSen0395Config> {
    componentName: string = "dfrobot_sen0395";
}

export interface DfrobotSen0395Config {
    id?: ID;
    uart_id?: ID;
}

export class DfrobotSen0395BinarySensor extends EsphomeComponent<DfrobotSen0395BinarySensorConfig> {
    componentName: string = "dfrobot_sen0395.binary_sensor";
}

export interface DfrobotSen0395BinarySensorConfig extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
    dfrobot_sen0395_id?: ID;
}

export class DfrobotSen0395Switch extends EsphomeComponent<DfrobotSen0395SwitchConfig> {
    componentName: string = "dfrobot_sen0395.switch";
}

export type DfrobotSen0395SwitchConfig = DfrobotSen0395SwitchConfigPresenceViaUart | DfrobotSen0395SwitchConfigSensorActive | DfrobotSen0395SwitchConfigStartAfterBoot | DfrobotSen0395SwitchConfigTurnOnLed;

export interface DfrobotSen0395SwitchConfigPresenceViaUart {
    type: "presence_via_uart" | "PRESENCE_VIA_UART";
    dfrobot_sen0395_id?: ID;
    entity_category?: any;
    id?: ID;
}

export interface DfrobotSen0395SwitchConfigSensorActive {
    type: "sensor_active" | "SENSOR_ACTIVE";
    dfrobot_sen0395_id?: ID;
    entity_category?: any;
    id?: ID;
}

export interface DfrobotSen0395SwitchConfigStartAfterBoot {
    type: "start_after_boot" | "START_AFTER_BOOT";
    dfrobot_sen0395_id?: ID;
    entity_category?: any;
    id?: ID;
}

export interface DfrobotSen0395SwitchConfigTurnOnLed {
    type: "turn_on_led" | "TURN_ON_LED";
    dfrobot_sen0395_id?: ID;
    entity_category?: any;
    id?: ID;
}
