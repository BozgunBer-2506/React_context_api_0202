import { useTheme } from '../contexts/ThemeContext';
import { useUser } from '../contexts/UserContext';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  const { isDark } = useTheme();
  const { user, isLoggedIn, logout } = useUser();

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 24px',
      background: isDark ? '#1e272e' : '#fff',
      borderBottom: `1px solid ${isDark ? '#485460' : '#ddd'}`,
      transition: 'all 0.3s ease'
    }}>
      <h1 style={{
        margin: 0,
        color: isDark ? '#fff' : '#2d3436',
        fontSize: '24px'
      }}>
        MeineApp
      </h1>

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        {isLoggedIn && (
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px',
            color: isDark ? '#fff' : '#2d3436'
          }}>
            <strong>{user.name}</strong>
            <span style={{
              padding: '2px 8px',
              background: user.role === 'Admin' ? '#e74c3c' : user.role === 'Moderator' ? '#9b59b6' : '#3498db',
              borderRadius: '12px',
              fontSize: '12px',
              color: '#fff'
            }}>
              {user.role}
            </span>
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
        )}
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Navbar;