function EmployeeCard({
  employee,
  onDelete,
  onEdit
}) {

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <article className="employee-card">

      <div className="employee-card-header">

        <div className="employee-avatar">
          {getInitials(employee.name)}
        </div>

        <div className="employee-name">

          <h3>{employee.name}</h3>

          <p>
            {employee.employeeId}
          </p>

        </div>

        <span className="department-badge">
          {employee.department}
        </span>

      </div>

      <div className="employee-info">

        <div className="info-row">

          <span>Gender</span>

          <strong>
            {employee.gender}
          </strong>

        </div>

        <div className="info-row">

          <span>Phone</span>

          <strong>
            {employee.phone}
          </strong>

        </div>

        <div className="info-row">

          <span>Local Address</span>

          <strong>
            {employee.localAddress}
          </strong>

        </div>

        <div className="info-row">

          <span>Permanent Address</span>

          <strong>
            {employee.permanentAddress}
          </strong>

        </div>

      </div>

      <div className="card-actions">

        <button
          className="edit-btn"
          onClick={() => onEdit(employee)}
        >
          ✏ Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => onDelete(employee.id)}
        >
          🗑 Delete
        </button>

      </div>

    </article>
  );
}

export default EmployeeCard;