export default function groceriesList() {
  const arr = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];
  const map = new Map();
  for (const i of arr) map.set(i[0], i[1]);
  return map;
}
