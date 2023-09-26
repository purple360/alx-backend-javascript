export default function createIteratorObject(report) {
  const departments = Object.values(report);

  let currentDeptIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    next() {
      if (currentDeptIndex < departments.length) {
        const currentDepartment = departments[currentDeptIndex];
        if (currentEmployeeIndex < currentDepartment.employees.length) {
          const employee = currentDepartment.employees[currentEmployeeIndex];
          currentEmployeeIndex++;
          return { value: employee, done: false };
        } else {
          // Move to the next department
          currentDeptIndex++;
          currentEmployeeIndex = 0;
          return this.next(); // Recursively call next() for the next department
        }
      }
      return { done: true };
    },
  };
}
