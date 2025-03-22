import React from "react";

const leaveRequests = [
  { id: 1, from: "31 Dec 2024", to: "10 Jan 2025", days: 1, status: "Pending", reason: "Travelling to village", employee: "ViruSs" },
  { id: 2, from: "31 Dec 2024", to: "31 Dec 2024", days: 2, status: "Rejected", reason: "Sorry! I can't approve", employee: "Diamond Cream" },
  { id: 3, from: "25 Dec 2024", to: "25 Dec 2024", days: 1, status: "Approved", reason: "Travelling to village", employee: "Phao Northside" },
  { id: 4, from: "10 Dec 2024", to: "13 Dec 2024", days: 3, status: "Approved", reason: "Travelling to village", employee: "Jack" },
  { id: 5, from: "8 Nov 2024", to: "13 Nov 2024", days: 5, status: "Approved", reason: "Travelling to village", employee: "Sol" },
  { id: 6, from: "8 Nov 2024", to: "13 Nov 2024", days: 5, status: "Approved", reason: "Travelling to village", employee: "Avinash" },
];

const AdminDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/6 bg-blue-700 text-white p-5">
        <h2 className="text-xl font-bold">Admin</h2>
        <p className="mt-4">Dashboard</p>
      </div>

      {/* Main Content */}
      <div className="w-5/6 p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="p-4 bg-white shadow rounded text-center">
            <h3 className="text-2xl font-bold text-green-600">100</h3>
            <p>Employees</p>
          </div>
          <div className="p-4 bg-white shadow rounded text-center">
            <h3 className="text-2xl font-bold text-blue-600">20</h3>
            <p>Total Leave Day</p>
          </div>
          <div className="p-4 bg-white shadow rounded text-center">
            <h3 className="text-2xl font-bold text-red-600">15</h3>
            <p>Request Denied</p>
          </div>
          <div className="p-4 bg-white shadow rounded text-center">
            <h3 className="text-2xl font-bold text-yellow-600">5</h3>
            <p>Pending Leave Requests</p>
          </div>
        </div>

        {/* Leave Requests Table */}
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-xl font-bold mb-4">Leave Requests</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">From</th>
                <th className="border p-2">To</th>
                <th className="border p-2">Days</th>
                <th className="border p-2">Status</th>
                <th className="border p-2">Reason</th>
                <th className="border p-2">Employee</th>
              </tr>
            </thead>
            <tbody>
              {leaveRequests.map((request) => (
                <tr key={request.id} className="text-center">
                  <td className="border p-2">{request.from}</td>
                  <td className="border p-2">{request.to}</td>
                  <td className="border p-2">{request.days}</td>
                  <td className={`border p-2 font-bold ${
                    request.status === "Pending" ? "text-yellow-600" :
                    request.status === "Approved" ? "text-green-600" : "text-red-600" 
                  }`}>
                    {request.status}
                  </td>
                  <td className="border p-2">{request.reason}</td>
                  <td className="border p-2">{request.employee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
