/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: dfplayer.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/dfplayer
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";

export class Dfplayer extends BaseComponent<DfplayerConfig> {
    componentName: string = "dfplayer";
}

export interface DfplayerConfig {
    id?: ID;
    on_finished_playback?: object[];
    uart_id?: ID;
}
