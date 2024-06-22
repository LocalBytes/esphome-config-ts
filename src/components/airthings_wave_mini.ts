/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: airthings_wave_mini.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/airthings_wave_mini
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { AirthingsWaveBaseBASE_SCHEMA } from "./airthings_wave_base.js";

export class AirthingsWaveMiniSensor extends EsphomeComponent<AirthingsWaveMiniSensorConfig> {
    componentName: string = "airthings_wave_mini.sensor";
}

export interface AirthingsWaveMiniSensorConfig extends AirthingsWaveBaseBASE_SCHEMA {
    id?: any;
}
