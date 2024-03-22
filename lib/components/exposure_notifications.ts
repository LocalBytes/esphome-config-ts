/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: exposure_notifications.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/exposure_notifications
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";

export class ExposureNotifications extends BaseComponent<ExposureNotificationsConfig> {
    componentName: string = "exposure_notifications";
}

export interface ExposureNotificationsConfig {
    on_exposure_notification: object[];
}
