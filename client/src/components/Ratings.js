import React, { useState } from 'react';

function Ratings({ ratings, users }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(0);

  const handleRate = (val) => {
    setScore(val);
    alert(`Rated ${val} star(s)! (DB integration required)`);
  };

  const avgRating = ratings.length > 0
    ? (ratings.reduce((s, r) => s + r.score, 0) / ratings.length).toFixed(1)
    : '0.0';

  return (
    <div>
      <div className="section">
        <div className="section-title">Rate a User</div>
        <div className="form-group">
          <label>Select User</label>
          <select>
            <option value="">-- Select --</option>
            {users.map(u => <option key={u._id} value={u._id}>{u.name}</option>)}
          </select>
        </div>
        <div style={{marginBottom:12}}>
          <label style={{display:'block',fontSize:13,fontWeight:600,color:'#555',marginBottom:6}}>Rating</label>
          <div>
            {[1,2,3,4,5].map(i => (
              <span key={i} className={`star ${i <= (hover || score) ? 'filled' : ''}`}
                onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(0)}
                onClick={() => handleRate(i)}>★</span>
            ))}
          </div>
        </div>
        <div className="form-group">
          <label>Review</label>
          <textarea rows={3} placeholder="Write a review..." />
        </div>
        <button className="btn btn-gold">Submit Rating</button>
      </div>

      <div className="section">
        <div className="section-title">All Ratings</div>
        <p>Average Rating: <strong style={{color:'#d4af37'}}>★ {avgRating}</strong> ({ratings.length} reviews)</p>
        {ratings.map(r => (
          <div className="request-card" key={r._id}>
            <strong>{'★'.repeat(r.score)}{'☆'.repeat(5 - r.score)}</strong> - {r.fromUserId?.name || 'Unknown'} → {r.toUserId?.name || 'Unknown'}
            {r.review && <p style={{fontSize:13,color:'#888',marginTop:4}}>"{r.review}"</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ratings;
