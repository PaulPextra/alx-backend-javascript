export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw TypeError('Name must be a string');
    if (typeof length !== 'number') throw TypeError('Length must be a number');
    if (!Array.isArray(students)) throw TypeError('Students must be an array');
    for (const element of students) {
      if (typeof element !== 'string') throw TypeError('Students must contain strings');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(name) {
    if (typeof name !== 'string') throw TypeError('name must be a string');
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set length(length) {
    if (typeof length !== 'number') throw TypeError('length must be a number');
    this._length = length;
  }

  get length() {
    return this._length;
  }

  set students(students) {
    if (!Array.isArray(students)) throw TypeError('students must be an array');
    for (const element of students) {
      if (typeof element !== 'string') throw TypeError('students must contain strings');
    }
    this._students = students;
  }

  get students() {
    return this._students;
  }
}
