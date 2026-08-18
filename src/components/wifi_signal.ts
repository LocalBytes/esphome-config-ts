/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: wifi_signal.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/wifi_signal
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class WifiSignalSensor extends EsphomeComponent<WifiSignalSensorConfig> {
    componentName: string = "wifi_signal.sensor";
}

export type WifiSignalSensorConfig = {
        accuracy_decimals?: any;
        device_class?: any;
        entity_category?: any;
        id?: any;
        state_class?: any;
        unit_of_measurement?: any;
        update_interval?: any;
    } & SensorSENSORSCHEMA & CoreCOMPONENTSCHEMA;
