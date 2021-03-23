/**
 * Ensure the given value is an array.
 *
 * @param {any} value
 *
 * @return {array};
 */
export function wrap<T>(value?: T | T[]): T[] {
    if (!arguments.length) {
        return [];
    }

    if (!Array.isArray(value)) {
        value = [value] as T[];
    }

    return value;
}
