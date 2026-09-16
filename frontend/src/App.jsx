import React, { useState } from 'react';

export function App() {
  const [data, setData] = useState(null);
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState(null);
  const [itemResponse, setItemResponse] = useState('');

  // 1. Items Router: GET /api/items/
  const fetchItems = () => {
    fetch('/api/items/')
      .then((res) => res.json())
      .then((d) => setData(d))
      .catch((err) => console.error(err));
  };

  // 2. Users Router: GET /api/users/
  const fetchUsers = () => {
    fetch('/api/users/')
      .then((res) => res.json())
      .then((d) => setUsers(d.users))
      .catch((err) => console.error(err));
  };

  // 3. Items Router: POST /api/items/
  const createNewItem = () => {
    fetch('/api/items/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Docker Container', category: 'DevOps' }),
    })
      .then((res) => res.json())
      .then((d) => setItemResponse(d.message))
      .catch((err) => console.error(err));
  };

  // 4. System Router: GET /api/system/stats
  const fetchStats = () => {
    fetch('/api/system/stats')
      .then((res) => res.json())
      .then((d) => setStats(d))
      .catch((err) => console.error(err));
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem', maxWidth: '600px' }}>
      <h1>FastAPI Routers + Nginx Demo</h1>

      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '2rem' }}>
        <button onClick={fetchItems}>Get Items</button>
        <button onClick={fetchUsers}>Get Users</button>
        <button onClick={createNewItem}>Create Item (POST)</button>
        <button onClick={fetchStats}>Get System Stats</button>
      </div>

      <hr />

      {data && (
        <div>
          <h3>Items Data:</h3>
          <p>{data.description}</p>
          <ul>{data.items.map((item, i) => <li key={i}>{item}</li>)}</ul>
        </div>
      )}

      {users.length > 0 && (
        <div>
          <h3>Users List:</h3>
          <ul>{users.map((u) => <li key={u.id}>{u.name} - {u.role}</li>)}</ul>
        </div>
      )}

      {itemResponse && (
        <div style={{ background: '#e6ffe6', padding: '10px', borderRadius: '4px' }}>
          <strong>POST Response:</strong> {itemResponse}
        </div>
      )}

      {stats && (
        <div>
          <h3>Server Stats:</h3>
          <p>Uptime: {stats.uptime_seconds}s</p>
          <p>Status: {stats.status}</p>
        </div>
      )}
    </div>
  );
}

export default App;