/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: socket.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/socket
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";

export class Socket extends EsphomeComponent<SocketConfig> {
    componentName: string = "socket";
}

export type SocketConfigImplementation = 'lwip_tcp' | 'bsd_sockets';

export interface SocketConfig {
    implementation?: SocketConfigImplementation;
}
