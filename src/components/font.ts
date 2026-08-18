/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: font.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/font
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";

export class Font extends EsphomeComponent<FontConfig> {
    componentName: string = "font";
}

export type FontConfigBpp = '1' | '2' | '4' | '8';

export interface FontConfigExtras {
    file: string;
    glyphs: string[];
}

export type FontConfigGlyphsets = 'GF_Arabic_Core' | 'GF_Arabic_Plus' | 'GF_Cyrillic_Core' | 'GF_Cyrillic_Historical' | 'GF_Cyrillic_Plus' | 'GF_Cyrillic_Pro' | 'GF_Greek_AncientMusicalSymbols' | 'GF_Greek_Archaic' | 'GF_Greek_Coptic' | 'GF_Greek_Core' | 'GF_Greek_Expert' | 'GF_Greek_Plus' | 'GF_Greek_Pro' | 'GF_Latin_African' | 'GF_Latin_Beyond' | 'GF_Latin_Core' | 'GF_Latin_Kernel' | 'GF_Latin_Plus' | 'GF_Latin_PriAfrican' | 'GF_Latin_Vietnamese' | 'GF_Phonetics_APA' | 'GF_Phonetics_DisorderedSpeech' | 'GF_Phonetics_IPAHistorical' | 'GF_Phonetics_IPAStandard' | 'GF_Phonetics_SinoExt' | 'GF_TransLatin_Arabic' | 'GF_TransLatin_Pinyin';

export interface FontConfig {
    bpp?: FontConfigBpp;
    extras?: FontConfigExtras[];
    file: string;
    glyphs?: string[];
    glyphsets?: FontConfigGlyphsets[];
    id: string;
    ignore_missing_glyphs?: boolean;
    raw_data_id?: ID;
    raw_glyph_id?: ID;
    size?: number;
}

export interface FontEXTERNAL_FONT_SCHEMA {
    italic?: boolean;
    refresh?: string;
    weight?: number;
}
