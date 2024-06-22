/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: hitachi_ac424.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/hitachi_ac424
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { ClimateIrCLIMATE_IR_WITH_RECEIVER_SCHEMA } from "./climate_ir.js";

export class HitachiAc424Climate extends EsphomeComponent<HitachiAc424ClimateConfig> {
    componentName: string = "hitachi_ac424.climate";
}

export interface HitachiAc424ClimateConfig extends ClimateIrCLIMATE_IR_WITH_RECEIVER_SCHEMA {
    id?: any;
}
