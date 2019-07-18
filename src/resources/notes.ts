import { createRequestMethod } from "../interfaces/server/request-method.interface";
import { NoteInterface } from "../interfaces/resources/note.interface";
import ResourceClass from "../classes/abstracts/resource.class";
import { IndexInterface } from "../interfaces/resources/structures/index.interface";

/**
 * @endpoint notes
 * @url /notes/{main_table}/{id}
 */
class NotesResource extends ResourceClass {
	methodDefinitions = {
		index: this.index(),
		create: this.create()
	};

	constructor() {
		super("notes");
		this.buildAliases();
	}

	/**
	 * List of notes
	 * @auth true
	 * @params {main_table:string, id:uuid}
	 * @data Array<[[NotesInterface]]>
	 * @url /notes/{main_table}/{id}
	 */
	index(): IndexInterface {
		return createRequestMethod({
			method: "GET",
			path: "/{main_table}/{id}",
			required: [],
			requiresAuth: true
		}) as any;
	}

	/**
	 * Create a note
	 * @auth true
	 * @params {...NotesInterface}
	 * @requires {main_table: string, id: uuid, note: string}
	 * @url /notes/{main_table}/{id}
	 */
	create(): NoteInterface {
		return createRequestMethod({
			name: "create",
			method: "POST",
			path: "/{main_table}/{id}",
			required: ["note"],
			requiresAuth: true
		}) as any;
	}
}

export default NotesResource;
