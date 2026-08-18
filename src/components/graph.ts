/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: graph.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/graph
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodSeconds } from "./esphome.js";

export class Graph extends EsphomeComponent<GraphConfig> {
    componentName: string = "graph";
}

export type GraphConfigDuration = CorePositiveTimePeriodSeconds;
export type GraphConfigLegendDirection = 'AUTO' | 'HORIZONTAL' | 'VERTICAL';
export type GraphConfigLegendShowValues = 'NONE' | 'AUTO' | 'BESIDE' | 'BELOW';

export interface GraphConfigLegend {
    border?: boolean;
    direction?: GraphConfigLegendDirection;
    height?: number;
    id?: ID;
    name_font: ID;
    show_lines?: boolean;
    show_units?: boolean;
    show_values?: GraphConfigLegendShowValues;
    value_font?: ID;
    width?: number;
}

export type GraphConfigLineType = 'SOLID' | 'DOTTED' | 'DASHED';
export type GraphConfigTracesLineType = 'SOLID' | 'DOTTED' | 'DASHED';

export interface GraphConfigTraces {
    color?: ID;
    continuous?: boolean;
    id?: ID;
    line_thickness?: number;
    line_type?: GraphConfigTracesLineType;
    name?: string;
    sensor: ID;
}

export type GraphConfigXGrid = CorePositiveTimePeriodSeconds;

export interface GraphConfig {
    border?: boolean;
    color?: ID;
    duration: GraphConfigDuration;
    height?: number;
    id: string;
    legend?: GraphConfigLegend;
    line_thickness?: number;
    line_type?: GraphConfigLineType;
    max_range?: any;
    max_value?: any;
    min_range?: any;
    min_value?: any;
    sensor?: ID;
    traces?: GraphConfigTraces[];
    width?: number;
    x_grid?: GraphConfigXGrid;
    y_grid?: any;
}
