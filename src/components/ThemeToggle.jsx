import { useTheme } from '../contexts/ThemeContext';

function ThemeToggle() {
  const { toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: '10px 20px',
        border: 'none',
        borderRadius: '20px',
        cursor: 'pointer',
        background: isDark ? '#f1c40f' : '#2c3e50',
        color: isDark ? '#2c3e50' : '#f1c40f',
        fontSize: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}
    >
      {isDark ? '☀️' : '🌙'}
      {isDark ? 'Hell' : 'Dunkel'}
    </button>
  );
}

export default ThemeToggle;