/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: esp32.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/esp32
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreSOURCE_SCHEMA } from "./esphome.js";

export class Esp32 extends EsphomeComponent<Esp32Config> {
    componentName: string = "esp32";
}

export type Esp32ConfigBoard = 'adafruit_feather_esp32s2_tft' | 'adafruit_feather_esp32s3' | 'adafruit_feather_esp32s3_nopsram' | 'adafruit_feather_esp32s3_tft' | 'adafruit_feather_esp32_v2' | 'adafruit_funhouse_esp32s2' | 'adafruit_itsybitsy_esp32' | 'adafruit_magtag29_esp32s2' | 'adafruit_metro_esp32s2' | 'adafruit_qtpy_esp32c3' | 'adafruit_qtpy_esp32' | 'adafruit_qtpy_esp32s2' | 'adafruit_qtpy_esp32s3_nopsram' | 'airm2m_core_esp32c3' | 'alksesp32' | 'atmegazero_esp32s2' | 'az-delivery-devkit-v4' | 'bee_motion_mini' | 'bee_motion' | 'bee_motion_s3' | 'bee_s3' | 'bpi-bit' | 'bpi_leaf_s3' | 'briki_abc_esp32' | 'briki_mbc-wb_esp32' | 'cnrs_aw2eth' | 'connaxio_espoir' | 'cytron_maker_feather_aiot_s3' | 'd-duino-32' | 'deneyapkart1A' | 'deneyapkart1Av2' | 'deneyapkartg' | 'deneyapkart' | 'deneyapmini' | 'deneyapminiv2' | 'denky32' | 'denky_d4' | 'dfrobot_beetle_esp32c3' | 'dfrobot_firebeetle2_esp32s3' | 'dpu_esp32' | 'esp320' | 'esp32-c3-devkitm-1' | 'esp32-c3-m1i-kit' | 'esp32cam' | 'esp32-devkitlipo' | 'esp32dev' | 'esp32doit-devkit-v1' | 'esp32doit-espduino' | 'esp32-evb' | 'esp32-gateway' | 'esp32-poe-iso' | 'esp32-poe' | 'esp32-pro' | 'esp32-s2-franzininho' | 'esp32-s2-kaluga-1' | 'esp32-s2-saola-1' | 'esp32s3box' | 'esp32s3camlcd' | 'esp32-s3-devkitc-1' | 'esp32-s3-korvo-2' | 'esp32thing' | 'esp32thing_plus' | 'esp32vn-iot-uno' | 'espea32' | 'espectro32' | 'espino32' | 'esp-wrover-kit' | 'etboard' | 'featheresp32' | 'featheresp32-s2' | 'firebeetle32' | 'fm-devkit' | 'franzininho_wifi_esp32s2' | 'franzininho_wifi_msc_esp32s2' | 'frogboard' | 'healthypi4' | 'heltec_wifi_kit_32' | 'heltec_wifi_kit_32_v2' | 'heltec_wifi_lora_32' | 'heltec_wifi_lora_32_V2' | 'heltec_wireless_stick_lite' | 'heltec_wireless_stick' | 'honeylemon' | 'hornbill32dev' | 'hornbill32minima' | 'imbrios-logsens-v1p1' | 'inex_openkb' | 'intorobot' | 'iotaap_magnolia' | 'iotbusio' | 'iotbusproteus' | 'kb32-ft' | 'kits-edu' | 'labplus_mpython' | 'lionbit' | 'lolin32_lite' | 'lolin32' | 'lolin_c3_mini' | 'lolin_d32' | 'lolin_d32_pro' | 'lolin_s2_mini' | 'lolin_s2_pico' | 'lolin_s3' | 'lopy4' | 'lopy' | 'm5stack-atom' | 'm5stack-core2' | 'm5stack-core-esp32' | 'm5stack-coreink' | 'm5stack-fire' | 'm5stack-grey' | 'm5stack-station' | 'm5stack-timer-cam' | 'm5stick-c' | 'magicbit' | 'mgbot-iotik32a' | 'mgbot-iotik32b' | 'mhetesp32devkit' | 'mhetesp32minikit' | 'microduino-core-esp32' | 'micros2' | 'minimain_esp32s2' | 'nano32' | 'nina_w10' | 'node32s' | 'nodemcu-32s2' | 'nodemcu-32s' | 'nscreen-32' | 'odroid_esp32' | 'onehorse32dev' | 'oroca_edubot' | 'pico32' | 'piranha_esp32' | 'pocket_32' | 'pycom_gpy' | 'qchip' | 'quantum' | 'redpill_esp32s3' | 'seeed_xiao_esp32c3' | 'sensesiot_weizen' | 'sg-o_airMon' | 's_odi_ultra' | 'sparkfun_esp32_iot_redboard' | 'sparkfun_esp32micromod' | 'sparkfun_esp32s2_thing_plus_c' | 'sparkfun_esp32s2_thing_plus' | 'sparkfun_lora_gateway_1-channel' | 'tamc_termod_s3' | 'tinypico' | 'trueverit-iot-driver-mk2' | 'trueverit-iot-driver-mk3' | 'trueverit-iot-driver' | 'ttgo-lora32-v1' | 'ttgo-lora32-v21' | 'ttgo-lora32-v2' | 'ttgo-t1' | 'ttgo-t7-v13-mini32' | 'ttgo-t7-v14-mini32' | 'ttgo-t-beam' | 'ttgo-t-oi-plus' | 'ttgo-t-watch' | 'turta_iot_node' | 'um_feathers2' | 'um_feathers2_neo' | 'um_feathers3' | 'um_pros3' | 'um_rmp' | 'um_tinys2' | 'um_tinys3' | 'unphone7' | 'unphone8' | 'unphone9' | 'upesy_wroom' | 'upesy_wrover' | 'vintlabs-devkit-v1' | 'watchy' | 'wemosbat' | 'wemos_d1_mini32' | 'wemos_d1_uno32' | 'wesp32' | 'widora-air' | 'wifiduino32c3' | 'wifiduino32' | 'wifiduino32s3' | 'wipy3' | 'wt32-eth01' | 'xinabox_cw02';
export type Esp32ConfigVariant = 'ESP32' | 'ESP32S2' | 'ESP32S3' | 'ESP32C2' | 'ESP32C3' | 'ESP32C6' | 'ESP32H2';
export type Esp32ConfigFramework = Esp32ConfigFrameworkEspIdf | Esp32ConfigFrameworkArduino;
export type Esp32ConfigFrameworkEspIdfSdkconfigOptions = Record<string, string>;

export interface Esp32ConfigFrameworkEspIdfAdvanced {
    ignore_efuse_mac_crc?: boolean;
}

export type Esp32ConfigFrameworkEspIdfComponentsSource = CoreSOURCE_SCHEMA;

export interface Esp32ConfigFrameworkEspIdfComponents {
    name: string;
    source: Esp32ConfigFrameworkEspIdfComponentsSource;
    path?: string;
    refresh?: string;
}

export interface Esp32ConfigFrameworkEspIdf {
    type: "esp-idf" | "ESP-IDF";
    version?: string;
    source?: string;
    platform_version?: any;
    sdkconfig_options: Esp32ConfigFrameworkEspIdfSdkconfigOptions;
    advanced?: Esp32ConfigFrameworkEspIdfAdvanced;
    components?: Esp32ConfigFrameworkEspIdfComponents[];
}

export interface Esp32ConfigFrameworkArduino {
    type: "arduino" | "ARDUINO";
    version?: string;
    source?: string;
    platform_version?: any;
}

export interface Esp32Config {
    board: Esp32ConfigBoard;
    variant?: Esp32ConfigVariant;
    framework?: Esp32ConfigFramework;
}
