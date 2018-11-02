export const getAllMethodNames = (obj: any) => {
	let props: Array<string> = [];

	do {
		const l = Object.getOwnPropertyNames(obj)
			.concat(Object.getOwnPropertySymbols(obj).map(s => s.toString()))
			.sort()
			.filter((p, i, arr) =>
				typeof obj[p] === "function" &&  //only the methods
				p !== "constructor" &&           //not the constructor
				(i == 0 || p !== arr[i - 1]) &&  //not overriding in this prototype
				props.indexOf(p) === -1          //not overridden in a child
			);
		props = props.concat(l)
	}
	while (
		(obj = Object.getPrototypeOf(obj)) &&   //walk-up the prototype chain
		//not the the Object prototype methods (hasOwnProperty, etc...)
		Object.getPrototypeOf(obj));

	return props
};

/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
export function isObject(item: any) :boolean{
	return (item && typeof item === "object" && !Array.isArray(item));
}

/**
 *
 * @param target
 * @param sources
 */
export const mergeDeep = (target:any, ...sources:any[]):any  => {
	if (!sources.length) return target;
	const source = sources.shift();

	if (isObject(target) && isObject(source)) {
		for (const key in source) {
			if (isObject(source[key])) {
				if (!target[key]) Object.assign(target, { [key]: {} });
				mergeDeep(target[key], source[key]);
			} else {
				Object.assign(target, { [key]: source[key] });
			}
		}
	}

	return mergeDeep(target, ...sources);
};