/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: e131.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/e131
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";

export class E131 extends BaseComponent<E131Config> {
    componentName: string = "e131";
}

export interface E131Config {
    id?: ID;
    method?: E131ConfigMethod;
}

export type E131ConfigMethod = 'UNICAST' | 'MULTICAST';
