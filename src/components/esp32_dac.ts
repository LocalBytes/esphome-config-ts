/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: esp32_dac.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/esp32_dac
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { OutputFLOAT_OUTPUT_SCHEMA } from "./output.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Esp32DacOutput extends EsphomeComponent<Esp32DacOutputConfig> {
    componentName: string = "esp32_dac.output";
}

export type Esp32DacOutputConfig = {
        id: string;
        pin: Pin;
    } & OutputFLOAT_OUTPUT_SCHEMA & CoreCOMPONENT_SCHEMA;
