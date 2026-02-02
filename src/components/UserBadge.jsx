import { useUser } from '../contexts/UserContext';

function UserBadge() {
  const { user, logout, isLoggedIn } = useUser();

  if (!isLoggedIn) {
    return (
      <span style={{ color: '#95a5a6' }}>
        Nicht eingeloggt
      </span>
    );
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <div>
        <strong>{user.name}</strong>
        <span style={{
          marginLeft: '8px',
          padding: '2px 8px',
          background: user.role === 'Admin' ? '#e74c3c' : '#3498db',
          borderRadius: '12px',
          fontSize: '12px',
          color: '#fff'
        }}>
          {user.role}
        </span>
      </div>
      <button
        onClick={logout}
        style={{
          padding: '6px 12px',
          background: '#95a5a6',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default UserBadge;