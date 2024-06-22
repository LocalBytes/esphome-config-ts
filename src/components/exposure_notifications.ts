/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: exposure_notifications.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/exposure_notifications
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";

export class ExposureNotifications extends EsphomeComponent<ExposureNotificationsConfig> {
    componentName: string = "exposure_notifications";
}

export interface ExposureNotificationsConfig {
    on_exposure_notification: object[];
}
