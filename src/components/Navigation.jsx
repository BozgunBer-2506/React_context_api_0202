import { useTheme } from '../contexts/ThemeContext';

function Navigation({ onNavigate, currentPage }) {
  const { isDark } = useTheme();

  const pages = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'profile', label: 'Profil', icon: '👤' },
    { id: 'settings', label: 'Einstellungen', icon: '⚙️' }
  ];

  return (
    <nav style={{
      display: 'flex',
      gap: '8px',
      marginBottom: '24px',
      borderBottom: `1px solid ${isDark ? '#485460' : '#ddd'}`,
      paddingBottom: '12px'
    }}>
      {pages.map((page) => (
        <button
          key={page.id}
          onClick={() => onNavigate(page.id)}
          style={{
            padding: '8px 16px',
            border: 'none',
            borderRadius: '4px',
            background: currentPage === page.id 
              ? (isDark ? '#3498db' : '#3498db')
              : (isDark ? '#2d3436' : '#f8f9fa'),
            color: currentPage === page.id ? '#fff' : (isDark ? '#b2bec3' : '#636e72'),
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: currentPage === page.id ? 'bold' : 'normal'
          }}
        >
          {page.icon} {page.label}
        </button>
      ))}
    </nav>
  );
}

export default Navigation;