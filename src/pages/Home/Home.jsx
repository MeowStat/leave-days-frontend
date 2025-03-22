function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Leave Days Management System</h1>
      <p>This is the home page of the application.</p>
      <div className="dashboard-section">
        <h2>Your Leave Days</h2>
        <div className="stats">
          <div className="stat-card">
            <h3>Available Days</h3>
            <p className="stat-value">15</p>
          </div>
          <div className="stat-card">
            <h3>Used Days</h3>
            <p className="stat-value">5</p>
          </div>
          <div className="stat-card">
            <h3>Pending Requests</h3>
            <p className="stat-value">2</p>
          </div>
        </div>
      </div>
      <div className="action-section">
        <button className="primary-button">Request Leave</button>
        <button className="secondary-button">View History</button>
      </div>
    </div>
  );
}

export default Home;
