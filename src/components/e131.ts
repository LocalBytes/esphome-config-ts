/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: e131.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/e131
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";

export class E131 extends BaseComponent<E131Config> {
    componentName: string = "e131";
}

export type E131ConfigMethod = 'UNICAST' | 'MULTICAST';

export interface E131Config {
    id?: ID;
    method?: E131ConfigMethod;
}
