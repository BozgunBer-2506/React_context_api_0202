import { useUser } from '../contexts/UserContext';
import { useTheme } from '../contexts/ThemeContext';
import Card from './Card';

function Dashboard() {
  const { user } = useUser();
  const { isDark } = useTheme();

  const getStats = () => {
    switch(user.role) {
      case 'Admin':
        return [
          { label: 'Benutzer', value: '156', icon: '👥' },
          { label: 'System-Logs', value: '42', icon: '📋' },
          { label: 'Backups', value: '8', icon: '💾' }
        ];
      case 'Moderator':
        return [
          { label: 'Meldungen', value: '23', icon: '🚨' },
          { label: 'Gelöschte Posts', value: '7', icon: '🗑️' },
          { label: 'Warnungen', value: '5', icon: '⚠️' }
        ];
      default:
        return [
          { label: 'Aktive Projekte', value: '12', icon: '📊' },
          { label: 'Nachrichten', value: '5', icon: '💬' },
          { label: 'Aufgaben', value: '28', icon: '✅' }
        ];
    }
  };

  const getActivities = () => {
    switch(user.role) {
      case 'Admin':
        return [
          'System-Update durchgeführt',
          'Neuen Benutzer "Max" erstellt',
          'Backup erfolgreich abgeschlossen',
          'Server-Logs überprüft'
        ];
      case 'Moderator':
        return [
          '3 Meldungen bearbeitet',
          'Kommentar von User123 entfernt',
          'Neuen Content freigegeben',
          'Spam-Report überprüft'
        ];
      default:
        return [
          'Projekt "Website Redesign" aktualisiert',
          'Neue Nachricht von Team erhalten',
          'Aufgabe "Code Review" abgeschlossen',
          'Profil aktualisiert'
        ];
    }
  };

  return (
    <div>
      <h2 style={{ 
        color: isDark ? '#fff' : '#2d3436',
        marginBottom: '24px' 
      }}>
        Dashboard - {user.role}
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        marginBottom: '24px'
      }}>
        {getStats().map((stat, index) => (
          <Card key={index}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '32px', marginBottom: '8px' }}>
                {stat.icon}
              </div>
              <div style={{ 
                fontSize: '24px', 
                fontWeight: 'bold',
                color: isDark ? '#fff' : '#2d3436'
              }}>
                {stat.value}
              </div>
              <div style={{ 
                fontSize: '14px',
                color: isDark ? '#b2bec3' : '#636e72'
              }}>
                {stat.label}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card title="Letzte Aktivitäten">
        <ul style={{ paddingLeft: '20px', margin: 0 }}>
          {getActivities().map((activity, index) => (
            <li key={index} style={{ marginBottom: '8px' }}>
              {activity}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}

export default Dashboard;