import { useState } from 'react';
import { useUser } from '../contexts/UserContext';
import { useTheme } from '../contexts/ThemeContext';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('User');
  const { login } = useUser();
  const { isDark } = useTheme();

  function handleSubmit(e) {
    e.preventDefault();
    if (username.trim() === '') return;
    
    login(username, role);
    setUsername('');
  }

  const inputStyle = {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    width: '100%',
    marginBottom: '12px'
  };

  return (
    <form onSubmit={handleSubmit} style={{
      maxWidth: '300px',
      padding: '20px',
      background: isDark ? '#2d3436' : '#f8f9fa',
      borderRadius: '8px',
      boxShadow: isDark ? '0 4px 6px rgba(0,0,0,0.3)' : '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ marginTop: 0, color: isDark ? '#fff' : '#2d3436' }}>Login</h3>

      <input
        type="text"
        placeholder="Benutzername"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={inputStyle}
      />

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        style={inputStyle}
      >
        <option value="User">User</option>
        <option value="Admin">Admin</option>
        <option value="Moderator">Moderator</option>
      </select>

      <button
        type="submit"
        style={{
          width: '100%',
          padding: '10px',
          background: '#3498db',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Einloggen
      </button>
    </form>
  );
}

export default LoginForm;