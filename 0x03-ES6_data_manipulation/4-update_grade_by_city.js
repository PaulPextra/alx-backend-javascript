export default function updateStudentGradeByCity(arr, city, newGrades) {
  return arr
    .filter((elem) => elem.location === city)
    .map((person) => {
      const grades = newGrades.filter((elem) => elem.studentId === person.id);
      const grade = grades.length ? grades[0].grade : 'N/A';
      return {
        ...person,
        grade,
      };
    });
}
