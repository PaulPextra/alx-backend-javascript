export default function getStudentsByLocation(arr, city) {
  return arr.filter((elem) => elem.location === city);
}
