import React from 'react';

function Requests({ requests }) {
  return (
    <div className="section">
      <div className="section-title">Skill Requests</div>
      {requests.length === 0 && <p>No requests yet.</p>}
      {requests.map(r => (
        <div className="request-card" key={r._id}>
          <strong>Skill: {r.skill}</strong>
          <span className={`status-badge ${r.status}`}>{r.status}</span>
          <p style={{fontSize:13,color:'#888',marginTop:4}}>{r.message}</p>
          <small>From: {r.fromUserId?.name || 'Unknown'} → To: {r.toUserId?.name || 'Unknown'}</small>
        </div>
      ))}
    </div>
  );
}

export default Requests;
