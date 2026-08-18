/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: media_player.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/media_player
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreENTITYBASESCHEMA } from "./esphome.js";

export abstract class MediaPlayer extends EsphomeComponent {
    componentName: string = "media_player";
}

export interface MediaPlayerMEDIAPLAYERACTIONSCHEMA {
    announcement?: boolean;
    id?: ID;
}

export interface MediaPlayerMEDIAPLAYERCONDITIONSCHEMA {
    id?: ID;
}

export interface MediaPlayerMEDIAPLAYERSCHEMA extends CoreENTITYBASESCHEMA {
    on_announcement?: object[];
    on_idle?: object[];
    on_pause?: object[];
    on_play?: object[];
    on_state?: object[];
    on_turn_off?: object[];
    on_turn_on?: object[];
    id?: any;
    name?: any;
    icon?: any;
    internal?: any;
    disabled_by_default?: any;
    entity_category?: any;
}

export interface MediaPlayerMEDIAURLACTIONSCHEMA {
    announcement?: boolean;
    id?: ID;
    media_url: string;
}
