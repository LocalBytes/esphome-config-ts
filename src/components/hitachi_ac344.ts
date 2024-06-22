/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: hitachi_ac344.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/hitachi_ac344
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { ClimateIrCLIMATE_IR_WITH_RECEIVER_SCHEMA } from "./climate_ir.js";

export class HitachiAc344Climate extends EsphomeComponent<HitachiAc344ClimateConfig> {
    componentName: string = "hitachi_ac344.climate";
}

export interface HitachiAc344ClimateConfig extends ClimateIrCLIMATE_IR_WITH_RECEIVER_SCHEMA {
    id?: any;
}
