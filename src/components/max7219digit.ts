/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: max7219digit.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/max7219digit
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { DisplayBASICDISPLAYSCHEMA } from "./display.js";

export abstract class Max7219digit extends EsphomeComponent {
    componentName: string = "max7219digit";
}

export class Max7219digitDisplay extends EsphomeComponent<Max7219digitDisplayConfig> {
    componentName: string = "max7219digit.display";
}

export type Max7219digitDisplayConfigChipLinesStyle = 'ZIGZAG' | 'SNAKE';
export type Max7219digitDisplayConfigRotateChip = '0' | '90' | '180' | '270';
export type Max7219digitDisplayConfigScrollDelay = CorePositiveTimePeriodMilliseconds;
export type Max7219digitDisplayConfigScrollDwell = CorePositiveTimePeriodMilliseconds;
export type Max7219digitDisplayConfigScrollMode = 'CONTINUOUS' | 'STOP';
export type Max7219digitDisplayConfigScrollSpeed = CorePositiveTimePeriodMilliseconds;
export type Max7219digitDisplayConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';
export type Max7219digitDisplayConfig = {
        chip_lines_style?: Max7219digitDisplayConfigChipLinesStyle;
        cs_pin: Pin;
        data_rate?: any;
        flip_x?: boolean;
        id?: ID;
        intensity?: number;
        num_chip_lines?: number;
        num_chips?: number;
        release_device?: boolean;
        reverse_enable?: boolean;
        rotate_chip?: Max7219digitDisplayConfigRotateChip;
        scroll_delay?: Max7219digitDisplayConfigScrollDelay;
        scroll_dwell?: Max7219digitDisplayConfigScrollDwell;
        scroll_enable?: boolean;
        scroll_mode?: Max7219digitDisplayConfigScrollMode;
        scroll_speed?: Max7219digitDisplayConfigScrollSpeed;
        spi_id?: ID;
        spi_mode?: Max7219digitDisplayConfigSpiMode;
        update_interval?: any;
        lambda?: any;
    } & DisplayBASICDISPLAYSCHEMA & CoreCOMPONENTSCHEMA;

export interface Max7219digitDisplayMAX7219OFFACTIONSCHEMA {
    id?: ID;
    state?: any;
}

export interface Max7219digitDisplayMAX7219ONACTIONSCHEMA {
    id?: ID;
    state?: any;
}
