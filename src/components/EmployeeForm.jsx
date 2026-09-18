import { useEffect, useState } from "react";

function EmployeeForm({
  onAddEmployee,
  editingEmployee,
  onUpdateEmployee,
  onCancelEdit
}) {

  const initialForm = {
    name: "",
    employeeId: "",
    department: "Development",
    gender: "Male",
    phone: "",
    localAddress: "",
    permanentAddress: ""
  };

  const [formData, setFormData] = useState(initialForm);

  // Load employee data when Edit is clicked
  useEffect(() => {
    if (editingEmployee) {
      setFormData({
        name: editingEmployee.name,
        employeeId: editingEmployee.employeeId,
        department: editingEmployee.department,
        gender: editingEmployee.gender,
        phone: editingEmployee.phone,
        localAddress: editingEmployee.localAddress,
        permanentAddress: editingEmployee.permanentAddress
      });
    } else {
      setFormData(initialForm);
    }
  }, [editingEmployee]);

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value
    }));
  };

  // Submit form
  const handleSubmit = (event) => {
    event.preventDefault();

    if (editingEmployee) {
      onUpdateEmployee({
        ...editingEmployee,
        ...formData
      });
    } else {
      onAddEmployee(formData);
      setFormData(initialForm);
    }
  };

  return (
    <section className="form-section">

      <div className="form-heading">

        <div>
          <p className="section-label">
            {editingEmployee
              ? "UPDATE INFORMATION"
              : "EMPLOYEE MANAGEMENT"}
          </p>

          <h2>
            {editingEmployee
              ? "Edit Employee"
              : "Add New Employee"}
          </h2>
        </div>

      </div>

      <form onSubmit={handleSubmit}>

        <div className="form-grid">

          <div className="form-group">
            <label>Employee Name</label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter employee name"
              required
            />
          </div>

          <div className="form-group">
            <label>Employee ID</label>

            <input
              type="text"
              name="employeeId"
              value={formData.employeeId}
              onChange={handleChange}
              placeholder="Example: EMP004"
              required
            />
          </div>

          <div className="form-group">
            <label>Department</label>

            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
            >
              <option>Development</option>
              <option>Management</option>
              <option>Marketing</option>
              <option>Human Resources</option>
              <option>Finance</option>
              <option>Operations</option>
            </select>
          </div>

          <div className="form-group">
            <label>Gender</label>

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Phone Number</label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              maxLength="10"
              required
            />
          </div>

          <div className="form-group">
            <label>Local Address</label>

            <input
              type="text"
              name="localAddress"
              value={formData.localAddress}
              onChange={handleChange}
              placeholder="Enter local address"
              required
            />
          </div>

          <div className="form-group full-width">
            <label>Permanent Address</label>

            <textarea
              name="permanentAddress"
              value={formData.permanentAddress}
              onChange={handleChange}
              placeholder="Enter permanent address"
              rows="3"
              required
            ></textarea>
          </div>

        </div>

        <div className="form-actions">

          {editingEmployee && (
            <button
              type="button"
              className="btn cancel-btn"
              onClick={onCancelEdit}
            >
              Cancel
            </button>
          )}

          <button
            type="submit"
            className="btn primary-btn"
          >
            {editingEmployee
              ? "Update Employee"
              : "Add Employee"}
          </button>

        </div>

      </form>

    </section>
  );
}

export default EmployeeForm;