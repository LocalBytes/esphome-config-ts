/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: duty_time.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/duty_time
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class DutyTimeSensor extends EsphomeComponent<DutyTimeSensorConfig> {
    componentName: string = "duty_time.sensor";
}

export interface DutyTimeSensorConfigLastTime extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type DutyTimeSensorConfig = {
        accuracy_decimals?: any;
        device_class?: any;
        entity_category?: any;
        icon?: any;
        id?: any;
        lambda?: any;
        last_time?: DutyTimeSensorConfigLastTime;
        restore?: boolean;
        sensor?: ID;
        state_class?: any;
        unit_of_measurement?: any;
        update_interval?: any;
    } & SensorSENSORSCHEMA & CoreCOMPONENTSCHEMA;

export interface DutyTimeSensorDUTYTIMEIDSCHEMA {
    id: ID;
}
