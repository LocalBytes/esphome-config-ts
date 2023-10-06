/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: remote_transmitter.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/remote_transmitter
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class RemoteTransmitter extends BaseComponent<RemoteTransmitterConfig> {
    componentName: string = "remote_transmitter";
}

export interface RemoteTransmitterConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    pin: Pin;
    carrier_duty_percent: string;
}
