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
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { DisplayBASIC_DISPLAY_SCHEMA } from "./display.js";

export class Max7219digitDisplay extends EsphomeComponent<Max7219digitDisplayConfig> {
    componentName: string = "max7219digit.display";
}

export type Max7219digitDisplayConfigChipLinesStyle = 'ZIGZAG' | 'SNAKE';
export type Max7219digitDisplayConfigRotateChip = '0' | '90' | '180' | '270';
export type Max7219digitDisplayConfigScrollMode = 'CONTINUOUS' | 'STOP';
export type Max7219digitDisplayConfigScrollSpeed = CorePositiveTimePeriodMilliseconds;
export type Max7219digitDisplayConfigScrollDelay = CorePositiveTimePeriodMilliseconds;
export type Max7219digitDisplayConfigScrollDwell = CorePositiveTimePeriodMilliseconds;
export type Max7219digitDisplayConfig = {
        id?: ID;
        num_chips?: number;
        num_chip_lines?: number;
        chip_lines_style?: Max7219digitDisplayConfigChipLinesStyle;
        intensity?: number;
        rotate_chip?: Max7219digitDisplayConfigRotateChip;
        scroll_mode?: Max7219digitDisplayConfigScrollMode;
        scroll_enable?: boolean;
        scroll_speed?: Max7219digitDisplayConfigScrollSpeed;
        scroll_delay?: Max7219digitDisplayConfigScrollDelay;
        scroll_dwell?: Max7219digitDisplayConfigScrollDwell;
        reverse_enable?: boolean;
        flip_x?: boolean;
        update_interval?: any;
        spi_id?: ID;
        cs_pin: Pin;
    } & DisplayBASIC_DISPLAY_SCHEMA & CoreCOMPONENT_SCHEMA;
