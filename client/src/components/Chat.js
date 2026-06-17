import React, { useState } from 'react';

function Chat({ messages, users }) {
  const [text, setText] = useState('');
  const currentUserId = users[0]?._id || '';

  const handleSend = () => {
    if (!text.trim()) return;
    alert(`Message sent: "${text}" (DB integration required)`);
    setText('');
  };

  return (
    <div className="section">
      <div className="section-title">Messages</div>
      <div className="chat-box">
        {messages.length === 0 && <p style={{textAlign:'center',color:'#888',padding:20}}>No messages yet</p>}
        {messages.map(m => (
          <div key={m._id} className={`chat-msg ${m.senderId?._id === currentUserId ? 'sent' : 'received'}`}>
            <div className="msg-sender">{m.senderId?.name || 'Unknown'}</div>
            <div className="msg-text">{m.text}</div>
            <div className="msg-time">{new Date(m.timestamp).toLocaleString()}</div>
          </div>
        ))}
      </div>
      <div className="chat-input-row">
        <input value={text} onChange={e => setText(e.target.value)} placeholder="Type a message..." onKeyDown={e => e.key === 'Enter' && handleSend()} />
        <button className="btn btn-gold" onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
