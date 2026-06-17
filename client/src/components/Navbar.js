import React from 'react';

const tabs = [
  { key: 'dashboard', label: 'Dashboard', icon: '📊' },
  { key: 'profiles', label: 'Profiles', icon: '👤' },
  { key: 'skills', label: 'Skills', icon: '⭐' },
  { key: 'requests', label: 'Requests', icon: '📨' },
  { key: 'chat', label: 'Chat', icon: '💬' },
  { key: 'ratings', label: 'Ratings', icon: '🏆' },
];

function Navbar({ activeTab, setActiveTab, searchTerm, setSearchTerm }) {
  return (
    <nav className="topbar">
      <div className="topbar-brand"><span>Skill</span>Exchange</div>
      <ul className="topbar-nav">
        {tabs.map(tab => (
          <li key={tab.key} className={activeTab === tab.key ? 'active' : ''} onClick={() => setActiveTab(tab.key)}>
            {tab.icon} {tab.label}
          </li>
        ))}
      </ul>
      <input className="search-input" placeholder="Search skills..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
    </nav>
  );
}

export default Navbar;
