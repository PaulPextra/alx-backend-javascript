export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw Error('Cannot process');
  const copy = map;
  for (const [key, value] of map.entries()) if (value === 1) copy.set(key, 100);
  return copy;
}
