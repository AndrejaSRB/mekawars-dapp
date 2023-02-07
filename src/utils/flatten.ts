/**
 * Extract the value of a query param. If the param ios an array, return only the first element of the array.
 * @param source The query param source.
 */
export default function flatten<T extends string = string>(
  source: string | string[] | null | undefined,
): T | undefined {
  if (!source) {
    return undefined;
  }

  return Array.isArray(source) ? (source[0] as T) : (source as T);
}
