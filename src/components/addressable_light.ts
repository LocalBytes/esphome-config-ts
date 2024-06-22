/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: addressable_light.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/addressable_light
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds } from "./esphome.js";
import type { DisplayFULL_DISPLAY_SCHEMA } from "./display.js";

export class AddressableLightDisplay extends EsphomeComponent<AddressableLightDisplayConfig> {
    componentName: string = "addressable_light.display";
}

export type AddressableLightDisplayConfigUpdateInterval = CorePositiveTimePeriodMilliseconds;

export interface AddressableLightDisplayConfig extends DisplayFULL_DISPLAY_SCHEMA {
    id?: ID;
    addressable_light_id: ID;
    width: number;
    height: number;
    update_interval?: AddressableLightDisplayConfigUpdateInterval;
    pixel_mapper?: any;
}
