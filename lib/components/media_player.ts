/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: media_player.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/media_player
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { CoreENTITY_BASE_SCHEMA } from "./esphome.js";

export abstract class MediaPlayer extends BaseComponent {
    componentName: string = "media_player";
}

export interface MediaPlayerMEDIA_PLAYER_SCHEMA extends CoreENTITY_BASE_SCHEMA {
    on_state?: object[];
    on_idle?: object[];
    on_play?: object[];
    on_pause?: object[];
}

export interface MediaPlayerMEDIA_PLAYER_ACTION_SCHEMA {
    id?: ID;
}
