/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: as3935_spi.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/as3935_spi
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { As3935AS3935_SCHEMA } from "./as3935.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class As3935Spi extends EsphomeComponent<As3935SpiConfig> {
    componentName: string = "as3935_spi";
}

export type As3935SpiConfig = {
        id?: any;
        spi_id?: ID;
        cs_pin: Pin;
    } & As3935AS3935_SCHEMA & CoreCOMPONENT_SCHEMA;
