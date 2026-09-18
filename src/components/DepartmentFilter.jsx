function DepartmentFilter({
  employees,
  selectedDepartment,
  onDepartmentChange
}) {

  const departments = [
    "All",
    ...new Set(
      employees.map((employee) => employee.department)
    )
  ];

  return (
    <div className="filter-box">

      <label htmlFor="department">
        Department
      </label>

      <select
        id="department"
        value={selectedDepartment}
        onChange={(event) =>
          onDepartmentChange(event.target.value)
        }
      >

        {departments.map((department) => (
          <option
            key={department}
            value={department}
          >
            {department}
          </option>
        ))}

      </select>

    </div>
  );
}

export default DepartmentFilter;