import { Server } from "./classes/server";
import ResourceInterfaces from "./interfaces/resources/index";
import Enums from "./interfaces/enums/index";
import Mocker from "./classes/mocker";


let defaultExport = {
	Server,
	Mocker,
	ResourceInterfaces,
	Enums
};

export default defaultExport;