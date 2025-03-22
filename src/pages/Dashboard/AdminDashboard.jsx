function AdminDashboard() {
  // Mock data for leave requests
  const leaveRequests = [
    { id: 1, employeeName: 'John Doe', startDate: '2023-07-01', endDate: '2023-07-05', status: 'Pending' },
    { id: 2, employeeName: 'Jane Smith', startDate: '2023-07-10', endDate: '2023-07-12', status: 'Approved' },
    { id: 3, employeeName: 'Mike Johnson', startDate: '2023-07-15', endDate: '2023-07-20', status: 'Rejected' },
  ];

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="admin-section">
        <h2>Pending Leave Requests</h2>
        <table className="requests-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Employee</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {leaveRequests.map(request => (
              <tr key={request.id}>
                <td>{request.id}</td>
                <td>{request.employeeName}</td>
                <td>{request.startDate}</td>
                <td>{request.endDate}</td>
                <td className={`status-${request.status.toLowerCase()}`}>
                  {request.status}
                </td>
                <td>
                  <button className="approve-btn">Approve</button>
                  <button className="reject-btn">Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="admin-section">
        <h2>System Management</h2>
        <div className="admin-actions">
          <button className="admin-btn">Manage Users</button>
          <button className="admin-btn">Leave Settings</button>
          <button className="admin-btn">Generate Reports</button>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
