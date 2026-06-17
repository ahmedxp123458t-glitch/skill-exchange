import React, { useState } from 'react';

function SkillListing({ skills, users }) {
  const [skill, setSkill] = useState('');
  const [description, setDescription] = useState('');
  const [level, setLevel] = useState('beginner');

  const handlePost = () => {
    alert(`Skill "${skill}" posted! (DB integration required for persistence)`);
    setSkill(''); setDescription(''); setLevel('beginner');
  };

  const getUserName = (id) => {
    const u = users.find(u => u._id === id);
    return u ? u.name : 'Unknown';
  };

  return (
    <div>
      <div className="section">
        <div className="section-title">Post a Skill</div>
        <div className="grid-2">
          <div className="form-group">
            <label>Skill</label>
            <input value={skill} onChange={e => setSkill(e.target.value)} placeholder="e.g. React" />
          </div>
          <div className="form-group">
            <label>Level</label>
            <select value={level} onChange={e => setLevel(e.target.value)}>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea value={description} onChange={e => setDescription(e.target.value)} rows={3} />
        </div>
        <button className="btn btn-gold" onClick={handlePost}>Post Skill</button>
      </div>

      <div className="section">
        <div className="section-title">Available Skills</div>
        {skills.map(s => (
          <div className="request-card" key={s._id}>
            <strong>{s.skill}</strong> <span className="status-badge pending">{s.level}</span>
            <p style={{fontSize:13,color:'#888',marginTop:4}}>{s.description}</p>
            <small>Posted by {getUserName(s.userId)}</small>
          </div>
        ))}
        {skills.length === 0 && <p>No skills listed yet.</p>}
      </div>
    </div>
  );
}

export default SkillListing;
