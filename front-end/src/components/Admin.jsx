import React from 'react';

function Admin({towns, loading, error}) {
  return (
    <div>
      <h1>Admin</h1>
      <p>Manage towns (backend data shown below)</p>

      {error && <div style={{ color: 'red' }}>Error: {error}</div>}

      {loading && <div>Loading...</div>}

      <ul>
        {towns.length === 0 && <li>No towns yet</li>}
        {towns.map(t => (
          <li key={t.id}>{t.name} (id: {t.id})</li>
        ))}
      </ul>
    </div>
  );
}

export default Admin;