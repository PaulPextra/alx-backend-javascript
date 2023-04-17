export default function createReportObject(employeesList) {
  const allEmployees = {};
  for (let [deptName, empList] of Object.entries(employeesList)) {
    allEmployees[deptName] = [...empList];
  }

  const reportObj = {
    allEmployees,
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length;
    },
  };
  return reportObj;
}
