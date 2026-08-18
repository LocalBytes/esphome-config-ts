/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: hub75.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/hub75
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { DisplayFULL_DISPLAY_SCHEMA } from "./display.js";

export abstract class Hub75 extends EsphomeComponent {
    componentName: string = "hub75";
}

export class Hub75Display extends EsphomeComponent<Hub75DisplayConfig> {
    componentName: string = "hub75.display";
}

export type Hub75DisplayConfigBoard = 'adafruit-matrix-portal-s3' | 'apollo-automation-m1-rev4' | 'apollo-automation-m1-rev6' | 'huidu-hd-wf1' | 'huidu-hd-wf2' | 'esp32-trinity';
export type Hub75DisplayConfigClockSpeed = '8MHZ' | '10MHZ' | '16MHZ' | '20MHZ';
export type Hub75DisplayConfigGammaCorrect = 'LINEAR' | 'CIE1931' | 'GAMMA_2_2';
export type Hub75DisplayConfigLayout = 'HORIZONTAL' | 'TOP_LEFT_DOWN' | 'TOP_RIGHT_DOWN' | 'BOTTOM_LEFT_UP' | 'BOTTOM_RIGHT_UP' | 'TOP_LEFT_DOWN_ZIGZAG' | 'TOP_RIGHT_DOWN_ZIGZAG' | 'BOTTOM_LEFT_UP_ZIGZAG' | 'BOTTOM_RIGHT_UP_ZIGZAG';
export type Hub75DisplayConfigRotation = '0' | '90' | '180' | '270';
export type Hub75DisplayConfigShiftDriver = 'GENERIC' | 'FM6126A' | 'ICN2038S' | 'FM6124' | 'MBI5124' | 'DP3246';

export interface Hub75DisplayConfig extends DisplayFULL_DISPLAY_SCHEMA {
    a_pin: Pin;
    b1_pin: Pin;
    b2_pin: Pin;
    b_pin: Pin;
    bit_depth?: number;
    board?: Hub75DisplayConfigBoard;
    brightness?: number;
    c_pin: Pin;
    clk_pin: Pin;
    clock_phase?: boolean;
    clock_speed?: Hub75DisplayConfigClockSpeed;
    d_pin: Pin;
    double_buffer?: boolean;
    e_pin?: Pin;
    g1_pin: Pin;
    g2_pin: Pin;
    gamma_correct?: Hub75DisplayConfigGammaCorrect;
    id?: ID;
    lat_pin: Pin;
    latch_blanking?: number;
    layout?: Hub75DisplayConfigLayout;
    layout_cols?: number;
    layout_rows?: number;
    min_refresh_rate?: number;
    oe_pin: Pin;
    panel_height: number;
    panel_width: number;
    r1_pin: Pin;
    r2_pin: Pin;
    rotation: Hub75DisplayConfigRotation;
    scan_wiring?: any;
    shift_driver?: Hub75DisplayConfigShiftDriver;
    update_interval?: any;
}
