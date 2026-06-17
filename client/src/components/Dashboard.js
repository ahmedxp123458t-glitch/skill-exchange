import React from 'react';

function Dashboard({ users, skills, requests, ratings }) {
  const acceptedRequests = requests.filter(r => r.status === 'accepted').length;
  const avgRating = ratings.length > 0
    ? (ratings.reduce((s, r) => s + r.score, 0) / ratings.length).toFixed(1)
    : '0.0';

  return (
    <div>
      <div className="section">
        <div className="section-title">Learning Progress Dashboard</div>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-value">{users.length}</div>
            <div className="stat-label">Users</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{skills.length}</div>
            <div className="stat-label">Skills Listed</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{requests.length}</div>
            <div className="stat-label">Requests</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{acceptedRequests}</div>
            <div className="stat-label">Completed Exchanges</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{avgRating}</div>
            <div className="stat-label">Avg Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
