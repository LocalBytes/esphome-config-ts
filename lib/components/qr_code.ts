/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: qr_code.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/qr_code
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";

export class QrCode extends BaseComponent<QrCodeConfig> {
    componentName: string = "qr_code";
}

export interface QrCodeConfig {
    id: string;
    value: string;
    ecc?: QrCodeConfigEcc;
}

export type QrCodeConfigEcc = 'LOW' | 'MEDIUM' | 'QUARTILE' | 'HIGH';
