export function removeArrayElement<ArrayElement>(
	array: ArrayElement[],
	index: number,
): ArrayElement[] {
	array.splice(index, 1);
	return array;
}

export function capitalizeFirstLetter(wordOrPhrase: string): string {
	const firstLetter = wordOrPhrase[0].toUpperCase();
	const restOfWordOrPhrase = wordOrPhrase.slice(1);
	return firstLetter + restOfWordOrPhrase;
}

export function convertKeysToIntegers<T>(object: T): number[] {
	const stringKeys = Object.keys(object);
	return stringKeys.map((key: string) => parseInt(key));
}
