/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: grove_gas_mc_v2.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/grove_gas_mc_v2
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class GroveGasMcV2Sensor extends EsphomeComponent<GroveGasMcV2SensorConfig> {
    componentName: string = "grove_gas_mc_v2.sensor";
}

export interface GroveGasMcV2SensorConfigCarbonMonoxide extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface GroveGasMcV2SensorConfigEthanol extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface GroveGasMcV2SensorConfigNitrogenDioxide extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface GroveGasMcV2SensorConfigTvoc extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface GroveGasMcV2SensorConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    carbon_monoxide?: GroveGasMcV2SensorConfigCarbonMonoxide;
    ethanol?: GroveGasMcV2SensorConfigEthanol;
    i2c_id?: ID;
    id?: ID;
    nitrogen_dioxide?: GroveGasMcV2SensorConfigNitrogenDioxide;
    tvoc?: GroveGasMcV2SensorConfigTvoc;
    update_interval?: any;
}
