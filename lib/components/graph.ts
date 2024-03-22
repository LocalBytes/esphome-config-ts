/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: graph.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/graph
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { CorePositiveTimePeriodSeconds } from "./esphome.js";

export class Graph extends BaseComponent<GraphConfig> {
    componentName: string = "graph";
}

export interface GraphConfig {
    id: string;
    duration: GraphConfigDuration;
    width: number;
    height: number;
    x_grid?: GraphConfigXGrid;
    y_grid?: any;
    border?: boolean;
    sensor?: ID;
    line_thickness?: number;
    line_type?: GraphConfigLineType;
    color?: ID;
    min_value?: any;
    max_value?: any;
    min_range?: any;
    max_range?: any;
    traces?: GraphConfigTraces[];
    legend?: GraphConfigLegend[];
}

export interface GraphConfigDuration extends CorePositiveTimePeriodSeconds {
}

export interface GraphConfigXGrid extends CorePositiveTimePeriodSeconds {
}

export type GraphConfigLineType = 'SOLID' | 'DOTTED' | 'DASHED';

export interface GraphConfigTraces {
    id?: ID;
    sensor: ID;
    name?: string;
    line_thickness?: number;
    line_type?: GraphConfigTracesLineType;
    color?: ID;
}

export type GraphConfigTracesLineType = 'SOLID' | 'DOTTED' | 'DASHED';

export interface GraphConfigLegend {
    id?: ID;
    name_font: ID;
    value_font?: ID;
    width?: number;
    height?: number;
    border?: boolean;
    show_lines?: boolean;
    show_values?: GraphConfigLegendShowValues;
    show_units?: boolean;
    direction?: GraphConfigLegendDirection;
}

export type GraphConfigLegendShowValues = 'NONE' | 'AUTO' | 'BESIDE' | 'BELOW';
export type GraphConfigLegendDirection = 'AUTO' | 'HORIZONTAL' | 'VERTICAL';
