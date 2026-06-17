import React from 'react';

function ProfileList({ users, searchTerm }) {
  const filtered = users.filter(u =>
    u.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase())) ||
    u.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="section">
      <div className="section-title">User Profiles</div>
      {filtered.length === 0 && <p>No users found.</p>}
      {filtered.map(u => (
        <div className="user-card" key={u._id}>
          <div className="user-name">{u.name}</div>
          <div className="user-bio">{u.bio}</div>
          <div className="user-rating">★ {u.rating.toFixed(1)}</div>
          <div>{u.skills.map(s => <span key={s} className="skill-badge">{s}</span>)}</div>
        </div>
      ))}
    </div>
  );
}

export default ProfileList;
