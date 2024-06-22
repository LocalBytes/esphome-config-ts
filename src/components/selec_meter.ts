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
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class SelecMeterSensor extends EsphomeComponent<SelecMeterSensorConfig> {
    componentName: string = "selec_meter.sensor";
}

export interface SelecMeterSensorConfigTotalActiveEnergy extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface SelecMeterSensorConfigImportActiveEnergy extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface SelecMeterSensorConfigExportActiveEnergy extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface SelecMeterSensorConfigTotalReactiveEnergy extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface SelecMeterSensorConfigImportReactiveEnergy extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface SelecMeterSensorConfigExportReactiveEnergy extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface SelecMeterSensorConfigApparentEnergy extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface SelecMeterSensorConfigActivePower extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface SelecMeterSensorConfigReactivePower extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface SelecMeterSensorConfigApparentPower extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface SelecMeterSensorConfigVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface SelecMeterSensorConfigCurrent extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface SelecMeterSensorConfigPowerFactor extends SensorSENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface SelecMeterSensorConfigFrequency extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface SelecMeterSensorConfigMaximumDemandActivePower extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface SelecMeterSensorConfigMaximumDemandReactivePower extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface SelecMeterSensorConfigMaximumDemandApparentPower extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface SelecMeterSensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    total_active_energy?: SelecMeterSensorConfigTotalActiveEnergy;
    import_active_energy?: SelecMeterSensorConfigImportActiveEnergy;
    export_active_energy?: SelecMeterSensorConfigExportActiveEnergy;
    total_reactive_energy?: SelecMeterSensorConfigTotalReactiveEnergy;
    import_reactive_energy?: SelecMeterSensorConfigImportReactiveEnergy;
    export_reactive_energy?: SelecMeterSensorConfigExportReactiveEnergy;
    apparent_energy?: SelecMeterSensorConfigApparentEnergy;
    active_power?: SelecMeterSensorConfigActivePower;
    reactive_power?: SelecMeterSensorConfigReactivePower;
    apparent_power?: SelecMeterSensorConfigApparentPower;
    voltage?: SelecMeterSensorConfigVoltage;
    current?: SelecMeterSensorConfigCurrent;
    power_factor?: SelecMeterSensorConfigPowerFactor;
    frequency?: SelecMeterSensorConfigFrequency;
    maximum_demand_active_power?: SelecMeterSensorConfigMaximumDemandActivePower;
    maximum_demand_reactive_power?: SelecMeterSensorConfigMaximumDemandReactivePower;
    maximum_demand_apparent_power?: SelecMeterSensorConfigMaximumDemandApparentPower;
    update_interval?: any;
    modbus_id?: ID;
    address?: any;
}
