import { useTheme } from '../contexts/ThemeContext';

function Card({ title, children }) {
  const { isDark } = useTheme();

  return (
    <div className="card" style={{
      padding: '20px',
      borderRadius: '12px',
      background: isDark ? '#2d3436' : '#fff',
      color: isDark ? '#dfe6e9' : '#2d3436',
      boxShadow: isDark
        ? '0 4px 6px rgba(0, 0, 0, 0.3)'
        : '0 4px 6px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px',
      transition: 'all 0.3s ease'
    }}>
      {title && <h3 style={{ marginTop: 0 }}>{title}</h3>}
      {children}
    </div>
  );
}

export default Card;