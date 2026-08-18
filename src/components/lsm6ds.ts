/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: lsm6ds.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/lsm6ds
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { MotionCONFIGSCHEMA } from "./motion.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";

export class Lsm6dsMotion extends EsphomeComponent<Lsm6dsMotionConfig> {
    componentName: string = "lsm6ds.motion";
}

export type Lsm6dsMotionConfigAccelerometerOdr = 'OFF' | '12_5HZ' | '26HZ' | '52HZ' | '104HZ' | '208HZ' | '416HZ' | '833HZ' | '1666HZ' | '3332HZ' | '6664HZ';
export type Lsm6dsMotionConfigAccelerometerRange = '2G' | '4G' | '8G' | '16G';
export type Lsm6dsMotionConfigGyroscopeOdr = 'OFF' | '12_5HZ' | '26HZ' | '52HZ' | '104HZ' | '208HZ' | '416HZ' | '833HZ' | '1666HZ' | '3332HZ' | '6664HZ';
export type Lsm6dsMotionConfigGyroscopeRange = '125DPS' | '250DPS' | '500DPS' | '1000DPS' | '2000DPS';

export interface Lsm6dsMotionConfig extends MotionCONFIGSCHEMA {
    accelerometer_odr?: Lsm6dsMotionConfigAccelerometerOdr;
    accelerometer_range?: Lsm6dsMotionConfigAccelerometerRange;
    address?: any;
    gyroscope_odr?: Lsm6dsMotionConfigGyroscopeOdr;
    gyroscope_range?: Lsm6dsMotionConfigGyroscopeRange;
    i2c_id?: ID;
    id?: ID;
}

export class Lsm6dsSensor extends EsphomeComponent<Lsm6dsSensorConfig> {
    componentName: string = "lsm6ds.sensor";
}

export interface Lsm6dsSensorConfig extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    lsm6ds_id?: ID;
    state_class?: any;
    type?: any;
    unit_of_measurement?: any;
}
