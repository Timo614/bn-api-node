export interface PagingInterface {
	page: number,
	limit: number,
	sort?: "",
	dir?:"",
	total: number,
	tags?: Array<{name: string, values: Array<string>}>
}