import { useTheme } from '../contexts/ThemeContext';
import Card from './Card';

function Settings() {
  const { theme, setTheme, isDark } = useTheme();

  const themes = [
    { value: 'light', label: 'Hell', icon: '☀️' },
    { value: 'dark', label: 'Dunkel', icon: '🌙' }
  ];

  return (
    <div>
      <h2 style={{ 
        color: isDark ? '#fff' : '#2d3436',
        marginBottom: '24px' 
      }}>
        Einstellungen
      </h2>

      <Card title="Darstellung">
        <p style={{ 
          marginBottom: '16px',
          color: isDark ? '#b2bec3' : '#636e72'
        }}>
          Wähle dein bevorzugtes Theme
        </p>

        <div style={{ display: 'flex', gap: '12px' }}>
          {themes.map((t) => (
            <button
              key={t.value}
              onClick={() => setTheme(t.value)}
              style={{
                padding: '12px 24px',
                border: theme === t.value ? '2px solid #3498db' : '2px solid transparent',
                borderRadius: '8px',
                background: isDark ? '#2d3436' : '#fff',
                color: isDark ? '#fff' : '#2d3436',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: theme === t.value ? 'bold' : 'normal',
                boxShadow: theme === t.value 
                  ? '0 0 0 3px rgba(52, 152, 219, 0.2)' 
                  : 'none'
              }}
            >
              {t.icon} {t.label}
            </button>
          ))}
        </div>
      </Card>

      <Card title="Benachrichtigungen">
        <p>Benachrichtigungseinstellungen können hier konfiguriert werden.</p>
      </Card>

      <Card title="Datenschutz">
        <p>Datenschutzeinstellungen und Privatsphäre-Optionen.</p>
      </Card>
    </div>
  );
}

export default Settings;