/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sigma_delta_output.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sigma_delta_output
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { OutputFLOAT_OUTPUT_SCHEMA } from "./output.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class SigmaDeltaOutputOutput extends EsphomeComponent<SigmaDeltaOutputOutputConfig> {
    componentName: string = "sigma_delta_output.output";
}

export type SigmaDeltaOutputOutputConfig = {
        update_interval?: any;
        id: string;
        pin?: Pin;
        state_change_action?: object[];
        turn_on_action?: object[];
        turn_off_action?: object[];
    } & OutputFLOAT_OUTPUT_SCHEMA & CoreCOMPONENT_SCHEMA;
