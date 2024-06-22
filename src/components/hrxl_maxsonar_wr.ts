/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: hrxl_maxsonar_wr.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/hrxl_maxsonar_wr
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";

export class HrxlMaxsonarWrSensor extends EsphomeComponent<HrxlMaxsonarWrSensorConfig> {
    componentName: string = "hrxl_maxsonar_wr.sensor";
}

export interface HrxlMaxsonarWrSensorConfig extends SensorSENSOR_SCHEMA {
    id?: any;
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
    uart_id?: ID;
}
