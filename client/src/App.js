import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProfileList from './components/ProfileList';
import SkillListing from './components/SkillListing';
import Requests from './components/Requests';
import Chat from './components/Chat';
import Ratings from './components/Ratings';
import Dashboard from './components/Dashboard';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [users, setUsers] = useState([]);
  const [skills, setSkills] = useState([]);
  const [requests, setRequests] = useState([]);
  const [messages, setMessages] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/api/users').then(r=>r.json()).then(setUsers).catch(()=>{});
    fetch('/api/skills').then(r=>r.json()).then(setSkills).catch(()=>{});
    fetch('/api/requests').then(r=>r.json()).then(setRequests).catch(()=>{});
    fetch('/api/messages').then(r=>r.json()).then(setMessages).catch(()=>{});
    fetch('/api/ratings').then(r=>r.json()).then(setRatings).catch(()=>{});
  }, []);

  const renderTab = () => {
    switch(activeTab) {
      case 'profiles': return <ProfileList users={users} searchTerm={searchTerm} />;
      case 'skills': return <SkillListing skills={skills} users={users} />;
      case 'requests': return <Requests requests={requests} />;
      case 'chat': return <Chat messages={messages} users={users} />;
      case 'ratings': return <Ratings ratings={ratings} users={users} />;
      case 'dashboard': return <Dashboard users={users} skills={skills} requests={requests} ratings={ratings} />;
      default: return <Dashboard users={users} skills={skills} requests={requests} ratings={ratings} />;
    }
  };

  return (
    <div className="app">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <main className="main-content">{renderTab()}</main>
    </div>
  );
}

export default App;
