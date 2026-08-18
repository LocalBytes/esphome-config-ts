/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: selec_meter.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/selec_meter
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class SelecMeterSensor extends EsphomeComponent<SelecMeterSensorConfig> {
    componentName: string = "selec_meter.sensor";
}

export interface SelecMeterSensorConfigActivePower extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SelecMeterSensorConfigApparentEnergy extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SelecMeterSensorConfigApparentPower extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SelecMeterSensorConfigCurrent extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SelecMeterSensorConfigExportActiveEnergy extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SelecMeterSensorConfigExportReactiveEnergy extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SelecMeterSensorConfigFrequency extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SelecMeterSensorConfigImportActiveEnergy extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SelecMeterSensorConfigImportReactiveEnergy extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SelecMeterSensorConfigMaximumDemandActivePower extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SelecMeterSensorConfigMaximumDemandApparentPower extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SelecMeterSensorConfigMaximumDemandReactivePower extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SelecMeterSensorConfigPowerFactor extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface SelecMeterSensorConfigReactivePower extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SelecMeterSensorConfigTotalActiveEnergy extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SelecMeterSensorConfigTotalReactiveEnergy extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SelecMeterSensorConfigVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SelecMeterSensorConfig extends CoreCOMPONENT_SCHEMA {
    active_power?: SelecMeterSensorConfigActivePower;
    address?: any;
    apparent_energy?: SelecMeterSensorConfigApparentEnergy;
    apparent_power?: SelecMeterSensorConfigApparentPower;
    current?: SelecMeterSensorConfigCurrent;
    export_active_energy?: SelecMeterSensorConfigExportActiveEnergy;
    export_reactive_energy?: SelecMeterSensorConfigExportReactiveEnergy;
    frequency?: SelecMeterSensorConfigFrequency;
    id?: ID;
    import_active_energy?: SelecMeterSensorConfigImportActiveEnergy;
    import_reactive_energy?: SelecMeterSensorConfigImportReactiveEnergy;
    maximum_demand_active_power?: SelecMeterSensorConfigMaximumDemandActivePower;
    maximum_demand_apparent_power?: SelecMeterSensorConfigMaximumDemandApparentPower;
    maximum_demand_reactive_power?: SelecMeterSensorConfigMaximumDemandReactivePower;
    modbus_id?: ID;
    power_factor?: SelecMeterSensorConfigPowerFactor;
    reactive_power?: SelecMeterSensorConfigReactivePower;
    total_active_energy?: SelecMeterSensorConfigTotalActiveEnergy;
    total_reactive_energy?: SelecMeterSensorConfigTotalReactiveEnergy;
    update_interval?: any;
    voltage?: SelecMeterSensorConfigVoltage;
}
