/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: rc522_spi.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/rc522_spi
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { Rc522RC522_SCHEMA } from "./rc522.js";
import { BinarySensorBINARY_SENSOR_SCHEMA } from "./binary_sensor.js";

export class Rc522Spi extends BaseComponent<Rc522SpiConfig> {
    componentName: string = "rc522_spi";
}

export interface Rc522SpiConfig extends Rc522RC522_SCHEMA {
    id?: any;
    spi_id?: ID;
    cs_pin: Pin;
}

export class Rc522SpiBinarySensor extends BaseComponent<Rc522SpiBinarySensorConfig> {
    componentName: string = "rc522_spi.binary_sensor";
}

export interface Rc522SpiBinarySensorConfig extends BinarySensorBINARY_SENSOR_SCHEMA {
    id?: any;
    rc522_id?: ID;
    uid: string;
}
