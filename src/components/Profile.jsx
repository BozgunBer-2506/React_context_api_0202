import { useUser } from '../contexts/UserContext';
import { useTheme } from '../contexts/ThemeContext';
import Card from './Card';

function Profile() {
  const { user } = useUser();
  const { isDark } = useTheme();

  return (
    <div>
      <h2 style={{ 
        color: isDark ? '#fff' : '#2d3436',
        marginBottom: '24px' 
      }}>
        Profil
      </h2>

      <Card title="Persönliche Informationen">
        <div style={{ 
          display: 'grid', 
          gap: '16px',
          maxWidth: '400px' 
        }}>
          <div>
            <label style={{ 
              display: 'block', 
              fontSize: '14px',
              color: isDark ? '#b2bec3' : '#636e72',
              marginBottom: '4px'
            }}>
              Benutzername
            </label>
            <div style={{ 
              fontWeight: 'bold',
              color: isDark ? '#fff' : '#2d3436'
            }}>
              {user.name}
            </div>
          </div>

          <div>
            <label style={{ 
              display: 'block', 
              fontSize: '14px',
              color: isDark ? '#b2bec3' : '#636e72',
              marginBottom: '4px'
            }}>
              Rolle
            </label>
            <div style={{ 
              fontWeight: 'bold',
              color: isDark ? '#fff' : '#2d3436'
            }}>
              {user.role}
            </div>
          </div>

          <div>
            <label style={{ 
              display: 'block', 
              fontSize: '14px',
              color: isDark ? '#b2bec3' : '#636e72',
              marginBottom: '4px'
            }}>
              Letzter Login
            </label>
            <div style={{ 
              fontWeight: 'bold',
              color: isDark ? '#fff' : '#2d3436'
            }}>
              {user.loginTime}
            </div>
          </div>
        </div>
      </Card>

      <Card title="Einstellungen">
        <p>Hier können Profileinstellungen angepasst werden.</p>
      </Card>
    </div>
  );
}

export default Profile;