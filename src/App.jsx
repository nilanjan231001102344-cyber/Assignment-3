import { useState } from "react";
import Header from "./components/Header";
import EmployeeForm from "./components/EmployeeForm";
import SearchBar from "./components/SearchBar";
import DepartmentFilter from "./components/DepartmentFilter";
import EmployeeList from "./components/EmployeeList";
import Footer from "./components/Footer";

function App() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      employeeId: "EMP001",
      department: "Management",
      gender: "Male",
      phone: "9876543210",
      localAddress: "Salt Lake, Kolkata",
      permanentAddress: "Durgapur, West Bengal"
    },
    {
      id: 2,
      name: "Priya Das",
      employeeId: "EMP002",
      department: "Marketing",
      gender: "Female",
      phone: "9876543211",
      localAddress: "New Town, Kolkata",
      permanentAddress: "Siliguri, West Bengal"
    },
    {
      id: 3,
      name: "Amit Roy",
      employeeId: "EMP003",
      department: "Development",
      gender: "Male",
      phone: "9876543212",
      localAddress: "Barasat, Kolkata",
      permanentAddress: "Krishnanagar, West Bengal"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [editingEmployee, setEditingEmployee] = useState(null);

  // Add Employee
  const addEmployee = (employee) => {
    const newEmployee = {
      ...employee,
      id: Date.now()
    };

    setEmployees((previousEmployees) => [
      ...previousEmployees,
      newEmployee
    ]);
  };

  // Delete Employee
  const deleteEmployee = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    if (confirmDelete) {
      setEmployees((previousEmployees) =>
        previousEmployees.filter((employee) => employee.id !== id)
      );
    }
  };

  // Edit Employee
  const updateEmployee = (updatedEmployee) => {
    setEmployees((previousEmployees) =>
      previousEmployees.map((employee) =>
        employee.id === updatedEmployee.id
          ? updatedEmployee
          : employee
      )
    );

    setEditingEmployee(null);
  };

  // Search + Department Filter
  const filteredEmployees = employees.filter((employee) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      employee.name.toLowerCase().includes(search) ||
      employee.employeeId.toLowerCase().includes(search) ||
      employee.department.toLowerCase().includes(search) ||
      employee.phone.includes(search);

    const matchesDepartment =
      selectedDepartment === "All" ||
      employee.department === selectedDepartment;

    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="app">

      <Header />

      <main className="main-container">

        <EmployeeForm
          onAddEmployee={addEmployee}
          editingEmployee={editingEmployee}
          onUpdateEmployee={updateEmployee}
          onCancelEdit={() => setEditingEmployee(null)}
        />

        <section className="directory-section">

          <div className="directory-header">

            <div>
              <p className="section-label">
                EMPLOYEE DIRECTORY
              </p>

              <h2>
                Our Employees
              </h2>

              <p className="section-description">
                Manage and view employee information.
              </p>
            </div>

            <div className="employee-count">
              <span>{employees.length}</span>
              <p>Total Employees</p>
            </div>

          </div>

          <div className="controls">

            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />

            <DepartmentFilter
              employees={employees}
              selectedDepartment={selectedDepartment}
              onDepartmentChange={setSelectedDepartment}
            />

          </div>

          <EmployeeList
            employees={filteredEmployees}
            onDelete={deleteEmployee}
            onEdit={setEditingEmployee}
          />

        </section>

      </main>

      <Footer />

    </div>
  );
}

export default App;