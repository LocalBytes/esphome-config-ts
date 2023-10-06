/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: socket.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/socket
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";

export class Socket extends BaseComponent<SocketConfig> {
    componentName: string = "socket";
}

export interface SocketConfig {
    implementation?: SocketConfigImplementation;
}

export type SocketConfigImplementation = 'lwip_tcp' | 'bsd_sockets';
