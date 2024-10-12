export const weakMap = new WeakMap();

export function queryAPI(endPoint) {
  const noCall = weakMap.get(endPoint) || 0;
  if (noCall + 1 < 5) {
    weakMap.set(endPoint, noCall + 1);
  } else {
    throw new Error('Endpoint load is high');
  }
}
