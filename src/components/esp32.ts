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
import type { CorePositiveTimePeriodSeconds } from "./esphome.js";

export class Esp32 extends EsphomeComponent<Esp32Config> {
    componentName: string = "esp32";
}

export type Esp32ConfigBoard = '4d_systems_esp32s3_gen4_r8n16' | 'adafruit_camera_esp32s3' | 'adafruit_feather_esp32_v2' | 'adafruit_feather_esp32c6' | 'adafruit_feather_esp32s2' | 'adafruit_feather_esp32s2_reversetft' | 'adafruit_feather_esp32s2_tft' | 'adafruit_feather_esp32s3' | 'adafruit_feather_esp32s3_nopsram' | 'adafruit_feather_esp32s3_reversetft' | 'adafruit_feather_esp32s3_tft' | 'adafruit_funhouse_esp32s2' | 'adafruit_itsybitsy_esp32' | 'adafruit_magtag29_esp32s2' | 'adafruit_matrixportal_esp32s3' | 'adafruit_metro_esp32s2' | 'adafruit_metro_esp32s3' | 'adafruit_qtpy_esp32' | 'adafruit_qtpy_esp32c3' | 'adafruit_qtpy_esp32s2' | 'adafruit_qtpy_esp32s3_n4r2' | 'adafruit_qtpy_esp32s3_nopsram' | 'adafruit_qualia_s3_rgb666' | 'airm2m_core_esp32c3' | 'alksesp32' | 'arduino_nano_esp32' | 'arduino_nesso_n1' | 'atd147_s3' | 'atmegazero_esp32s2' | 'aventen_s3_sync' | 'az-delivery-devkit-v4' | 'bee_data_logger' | 'bee_motion' | 'bee_motion_mini' | 'bee_motion_s3' | 'bee_s3' | 'bpi-bit' | 'bpi-centi-s3' | 'bpi_leaf_s3' | 'cnrs_aw2eth' | 'connaxio_espoir' | 'cytron_maker_feather_aiot_s3' | 'd-duino-32' | 'deneyapkart' | 'deneyapkart1A' | 'deneyapkart1Av2' | 'deneyapkartg' | 'deneyapmini' | 'deneyapminiv2' | 'denky32' | 'denky_d4' | 'dfrobot_beetle_esp32c3' | 'dfrobot_firebeetle2_esp32c6' | 'dfrobot_firebeetle2_esp32e' | 'dfrobot_firebeetle2_esp32s3' | 'dfrobot_romeo_esp32s3' | 'dpu_esp32' | 'edgebox-esp-100' | 'esp-wrover-kit' | 'esp32-c2-devkitm-1' | 'esp32-c3-devkitc-02' | 'esp32-c3-devkitm-1' | 'esp32-c3-m1i-kit' | 'esp32-c5-devkitc-1' | 'esp32-c5-devkitc1-n16r4' | 'esp32-c5-devkitc1-n4' | 'esp32-c5-devkitc1-n8r4' | 'esp32-c6-devkitc-1' | 'esp32-c6-devkitm-1' | 'esp32-c61-devkitc1' | 'esp32-c61-devkitc1-n8r2' | 'esp32-devkitlipo' | 'esp32-evb' | 'esp32-gateway' | 'esp32-h2-devkitm-1' | 'esp32-p4' | 'esp32-p4-evboard' | 'esp32-p4_r3' | 'esp32-p4_r3-evboard' | 'esp32-pico-devkitm-2' | 'esp32-poe' | 'esp32-poe-iso' | 'esp32-pro' | 'esp32-s2-franzininho' | 'esp32-s2-kaluga-1' | 'esp32-s2-saola-1' | 'esp32-s3-devkitc-1' | 'esp32-s3-devkitc-1-n32r8v' | 'esp32-s3-devkitc1-n16r16' | 'esp32-s3-devkitc1-n16r2' | 'esp32-s3-devkitc1-n16r8' | 'esp32-s3-devkitc1-n4r2' | 'esp32-s3-devkitc1-n4r8' | 'esp32-s3-devkitc1-n8r2' | 'esp32-s3-devkitc1-n8r8' | 'esp32-s3-devkitm-1' | 'esp32-s3-fh4r2' | 'esp32-solo1' | 'esp320' | 'esp32cam' | 'esp32dev' | 'esp32doit-devkit-v1' | 'esp32doit-espduino' | 'esp32s3_120_16_8-qio_opi' | 'esp32s3_powerfeather' | 'esp32s3box' | 'esp32s3camlcd' | 'esp32s3usbotg' | 'esp32thing' | 'esp32thing_plus' | 'esp32vn-iot-uno' | 'espea32' | 'espectro32' | 'espino32' | 'etboard' | 'featheresp32' | 'featheresp32-s2' | 'firebeetle32' | 'fm-devkit' | 'franzininho_wifi_esp32s2' | 'franzininho_wifi_msc_esp32s2' | 'freenove-esp32-s3-n8r8' | 'freenove_esp32_s3_wroom' | 'freenove_esp32_wrover' | 'frogboard' | 'healthypi4' | 'heltec_wifi_kit_32' | 'heltec_wifi_kit_32_V3' | 'heltec_wifi_kit_32_v2' | 'heltec_wifi_lora_32' | 'heltec_wifi_lora_32_V2' | 'heltec_wifi_lora_32_V3' | 'heltec_wireless_stick' | 'heltec_wireless_stick_lite' | 'honeylemon' | 'hornbill32dev' | 'hornbill32minima' | 'huidu_hd_wf1' | 'huidu_hd_wf2' | 'huidu_hd_wf4' | 'imbrios-logsens-v1p1' | 'inex_openkb' | 'intorobot' | 'iotaap_magnolia' | 'iotbusio' | 'iotbusproteus' | 'ioxesp32' | 'ioxesp32ps' | 'jczn_2432s028r' | 'kb32-ft' | 'kits-edu' | 'labplus_mpython' | 'lilka_v2' | 'lilygo-t-display' | 'lilygo-t-display-s3' | 'lilygo-t-energy-s3' | 'lilygo-t3-s3' | 'lionbit' | 'lionbits3' | 'lolin32' | 'lolin32_lite' | 'lolin_c3_mini' | 'lolin_d32' | 'lolin_d32_pro' | 'lolin_s2_mini' | 'lolin_s2_pico' | 'lolin_s3' | 'lolin_s3_mini' | 'lolin_s3_mini_pro' | 'lolin_s3_pro' | 'lopy' | 'lopy4' | 'm5stack-atom' | 'm5stack-atoms3' | 'm5stack-atoms3u' | 'm5stack-core-esp32' | 'm5stack-core-esp32-16M' | 'm5stack-core2' | 'm5stack-coreink' | 'm5stack-cores3' | 'm5stack-fire' | 'm5stack-grey' | 'm5stack-stamps3' | 'm5stack-station' | 'm5stack-tab5-p4' | 'm5stack-timer-cam' | 'm5stack_paper' | 'm5stamp-pico' | 'm5stick-c' | 'magicbit' | 'mgbot-iotik32a' | 'mgbot-iotik32b' | 'mhetesp32devkit' | 'mhetesp32minikit' | 'microduino-core-esp32' | 'micros2' | 'minimain_esp32s2' | 'motorgo_mini_1' | 'namino_arancio' | 'namino_rosso' | 'nano32' | 'nebulas3' | 'nina_w10' | 'node32s' | 'nodemcu-32s' | 'nodemcu-32s2' | 'nologo_esp32c3_super_mini' | 'nscreen-32' | 'odroid_esp32' | 'onehorse32dev' | 'oroca_edubot' | 'pico32' | 'piranha_esp32' | 'pocket_32' | 'pycom_gpy' | 'qchip' | 'quantum' | 'redpill_esp32s3' | 'roboheart_hercules' | 'rymcu-esp32-s3-devkitc-1' | 's_odi_ultra' | 'seeed_xiao_esp32_s3_plus' | 'seeed_xiao_esp32c3' | 'seeed_xiao_esp32c5' | 'seeed_xiao_esp32c6' | 'seeed_xiao_esp32s3' | 'sensebox_mcu_esp32s2' | 'sensesiot_weizen' | 'sg-o_airMon' | 'sparkfun_esp32_iot_redboard' | 'sparkfun_esp32c6_thing_plus' | 'sparkfun_esp32micromod' | 'sparkfun_esp32s2_thing_plus' | 'sparkfun_esp32s2_thing_plus_c' | 'sparkfun_esp32s3_thing_plus' | 'sparkfun_lora_gateway_1-channel' | 'sparkfun_pro_micro_esp32c3' | 'sparkfun_qwiic_pocket_esp32c6' | 'tamc_termod_s3' | 'tinypico' | 'trueverit-iot-driver' | 'trueverit-iot-driver-mk2' | 'trueverit-iot-driver-mk3' | 'ttgo-lora32-v1' | 'ttgo-lora32-v2' | 'ttgo-lora32-v21' | 'ttgo-t-beam' | 'ttgo-t-oi-plus' | 'ttgo-t-watch' | 'ttgo-t1' | 'ttgo-t7-v13-mini32' | 'ttgo-t7-v14-mini32' | 'turta_iot_node' | 'um_bling' | 'um_edges3_d' | 'um_feathers2' | 'um_feathers2_neo' | 'um_feathers3' | 'um_feathers3_neo' | 'um_nanos3' | 'um_omgs3' | 'um_pros3' | 'um_rmp' | 'um_squixl' | 'um_tinyc6' | 'um_tinys2' | 'um_tinys3' | 'unphone7' | 'unphone8' | 'unphone9' | 'upesy_wroom' | 'upesy_wrover' | 'valtrack_v4_mfw_esp32_c3' | 'valtrack_v4_vts_esp32_c3' | 'vintlabs-devkit-v1' | 'watchy' | 'waveshare_esp32_s3_zero' | 'waveshare_esp32s3_touch_lcd_128' | 'weactstudio_esp32c3coreboard' | 'wemos_d1_mini32' | 'wemos_d1_uno32' | 'wemosbat' | 'wesp32' | 'widora-air' | 'wifiduino32' | 'wifiduino32c3' | 'wifiduino32s3' | 'wipy3' | 'ws_esp32_s3_matrix' | 'wt32-eth01' | 'wt32-sc01-plus' | 'xinabox_cw02' | 'yb_esp32s3_amp' | 'yb_esp32s3_amp_v2' | 'yb_esp32s3_amp_v3' | 'yb_esp32s3_dac' | 'yb_esp32s3_drv' | 'yb_esp32s3_eth';
export type Esp32ConfigCpuFrequency = '240MHZ' | '120MHZ' | '64MHZ' | '96MHZ' | '320MHZ' | '16MHZ' | '160MHZ' | '400MHZ' | '40MHZ' | '80MHZ' | '360MHZ' | '48MHZ' | '32MHZ';
export type Esp32ConfigFlashFrequency = '120MHZ' | '80MHZ' | '64MHZ' | '60MHZ' | '48MHZ' | '40MHZ' | '32MHZ' | '30MHZ' | '26MHZ' | '24MHZ' | '20MHZ' | '16MHZ';
export type Esp32ConfigFlashMode = 'qio' | 'qout' | 'dio' | 'dout' | 'opi';
export type Esp32ConfigFlashSize = '2MB' | '4MB' | '8MB' | '16MB' | '32MB';
export type Esp32ConfigFrameworkAdvancedAssertionLevel = 'DISABLE' | 'ENABLE' | 'SILENT';
export type Esp32ConfigFrameworkAdvancedCompilerOptimization = 'DEBUG' | 'NONE' | 'PERF' | 'SIZE';
export type Esp32ConfigFrameworkAdvancedMinimumChipRevision = '0.0' | '1.0' | '1.1' | '2.0' | '3.0' | '3.1';
export type Esp32ConfigFrameworkAdvancedSignedOtaVerificationSigningScheme = 'rsa3072' | 'ecdsa256' | 'ecdsa_v1';

export interface Esp32ConfigFrameworkAdvancedSignedOtaVerification {
    signing_key?: any;
    signing_scheme?: Esp32ConfigFrameworkAdvancedSignedOtaVerificationSigningScheme;
    verification_key?: any;
}

export interface Esp32ConfigFrameworkAdvanced {
    adc_oneshot_in_iram?: boolean;
    assertion_level?: Esp32ConfigFrameworkAdvancedAssertionLevel;
    compiler_optimization?: Esp32ConfigFrameworkAdvancedCompilerOptimization;
    disable_debug_stubs?: boolean;
    disable_dev_null_vfs?: boolean;
    disable_fatfs?: boolean;
    disable_libc_locks_in_iram?: boolean;
    disable_mbedtls_peer_cert?: boolean;
    disable_mbedtls_pkcs7?: boolean;
    disable_ocd_aware?: boolean;
    disable_regi2c_in_iram?: boolean;
    disable_usb_serial_jtag_secondary?: boolean;
    disable_vfs_support_dir?: boolean;
    disable_vfs_support_select?: boolean;
    disable_vfs_support_termios?: boolean;
    enable_full_printf?: boolean;
    enable_idf_experimental_features?: boolean;
    enable_lwip_assert?: boolean;
    enable_lwip_bridge_interface?: boolean;
    enable_lwip_check_thread_safety?: boolean;
    enable_lwip_dhcp_server?: boolean;
    enable_lwip_mdns_queries?: boolean;
    enable_lwip_tcpip_core_locking?: boolean;
    enable_ota_rollback?: boolean;
    execute_from_psram?: boolean;
    freertos_in_iram?: boolean;
    heap_in_iram?: boolean;
    ignore_efuse_custom_mac?: boolean;
    ignore_efuse_mac_crc?: boolean;
    include_builtin_idf_components?: string[];
    loop_task_stack_size?: number;
    minimum_chip_revision?: Esp32ConfigFrameworkAdvancedMinimumChipRevision;
    ringbuf_in_iram?: boolean;
    signed_ota_verification?: Esp32ConfigFrameworkAdvancedSignedOtaVerification;
    sram1_as_iram?: boolean;
    use_full_certificate_bundle?: boolean;
}

export interface Esp32ConfigFrameworkComponents {
    name: string;
    path?: string;
    ref?: string;
    source?: any;
}

export type Esp32ConfigFrameworkLogLevel = 'NONE' | 'ERROR' | 'WARN' | 'INFO' | 'DEBUG' | 'VERBOSE';
export type Esp32ConfigFrameworkSdkconfigOptions = Record<string, string>;
export type Esp32ConfigFrameworkType = 'esp-idf' | 'arduino';

export interface Esp32ConfigFramework {
    advanced?: Esp32ConfigFrameworkAdvanced;
    components?: Esp32ConfigFrameworkComponents[];
    log_level?: Esp32ConfigFrameworkLogLevel;
    platform_version?: any;
    release?: string;
    sdkconfig_options: Esp32ConfigFrameworkSdkconfigOptions;
    source?: string;
    type?: Esp32ConfigFrameworkType;
    version?: string;
}

export interface Esp32ConfigPartitions {
    name: string;
    size: number;
    subtype: number;
    type: number;
}

export type Esp32ConfigVariant = 'ESP32' | 'ESP32C2' | 'ESP32C3' | 'ESP32C5' | 'ESP32C6' | 'ESP32C61' | 'ESP32H2' | 'ESP32H4' | 'ESP32H21' | 'ESP32P4' | 'ESP32S2' | 'ESP32S3' | 'ESP32S31';
export type Esp32ConfigWatchdogTimeout = CorePositiveTimePeriodSeconds;

export interface Esp32Config {
    board?: Esp32ConfigBoard;
    cpu_frequency?: Esp32ConfigCpuFrequency;
    engineering_sample?: boolean;
    flash_frequency?: Esp32ConfigFlashFrequency;
    flash_mode?: Esp32ConfigFlashMode;
    flash_size?: Esp32ConfigFlashSize;
    framework?: Esp32ConfigFramework;
    partitions?: Esp32ConfigPartitions[];
    toolchain?: any;
    variant?: Esp32ConfigVariant;
    watchdog_timeout?: Esp32ConfigWatchdogTimeout;
}
