/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: dashboard_import.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/dashboard_import
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";

export class DashboardImport extends EsphomeComponent<DashboardImportConfig> {
    componentName: string = "dashboard_import";
}

export interface DashboardImportConfig {
    package_import_url: string;
    import_full_config?: boolean;
}
