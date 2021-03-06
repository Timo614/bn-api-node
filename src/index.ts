import * as dotenv from 'dotenv';
dotenv.config();

import { Server } from "./classes/server";
import ResourceInterfaces from "./interfaces/resources/index";

export const server = Server;
export const resourceInterfaces = ResourceInterfaces;
