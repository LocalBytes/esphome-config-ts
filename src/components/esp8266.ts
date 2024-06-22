/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: esp8266.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/esp8266
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";

export class Esp8266 extends EsphomeComponent<Esp8266Config> {
    componentName: string = "esp8266";
}

export type Esp8266ConfigBoard = 'agruminolemon' | 'd1_mini_lite' | 'd1_mini' | 'd1_mini_pro' | 'd1' | 'eduinowifi' | 'esp01_1m' | 'esp01' | 'esp07' | 'esp07s' | 'esp12e' | 'esp210' | 'esp8285' | 'espduino' | 'espectro' | 'espino' | 'espinotee' | 'espmxdevkit' | 'espresso_lite_v1' | 'espresso_lite_v2' | 'esp_wroom_02' | 'gen4iod' | 'heltec_wifi_kit_8' | 'huzzah' | 'inventone' | 'modwifi' | 'nodemcu' | 'nodemcuv2' | 'oak' | 'phoenix_v1' | 'phoenix_v2' | 'sonoff_basic' | 'sonoff_s20' | 'sonoff_sv' | 'sonoff_th' | 'sparkfunBlynk' | 'thingdev' | 'thing' | 'wifiduino' | 'wifinfo' | 'wifi_slot' | 'wio_link' | 'wio_node' | 'xinabox_cw01';

export interface Esp8266ConfigFramework {
    version?: string;
    source?: string;
    platform_version?: any;
}

export type Esp8266ConfigBoardFlashMode = 'qio' | 'qout' | 'dio' | 'dout';

export interface Esp8266Config {
    board: Esp8266ConfigBoard;
    framework?: Esp8266ConfigFramework;
    restore_from_flash?: boolean;
    early_pin_init?: boolean;
    board_flash_mode?: Esp8266ConfigBoardFlashMode;
}
