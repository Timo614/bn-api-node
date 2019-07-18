export interface NoteInterface {
    readonly id?: string;
    main_table: boolean;
	note: string;
	readonly main_id: string,
	readonly created_by: string,
    readonly created_at?: Date;
    readonly updated_at?: Date;
}

export const createNote = (base: any = {}): NoteInterface => {
	return {
		...{
			main_table: "",
			note: "",
		},
		...base
	} as NoteInterface;
};

