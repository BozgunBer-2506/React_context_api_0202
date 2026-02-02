import { useState } from 'react';
import { useUser } from '../contexts/UserContext';
import { useTheme } from '../contexts/ThemeContext';
import LoginForm from './LoginForm';
import Navigation from './Navigation';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Settings from './Settings';
import Card from './Card';

function ProtectedContent() {
  const { user, isLoggedIn } = useUser(); // UserContext
  const { isDark } = useTheme(); // ThemeContext
  const [currentPage, setCurrentPage] = useState('dashboard');

  if (!isLoggedIn) {
    return (
      <div style={{ 
        textAlign: 'center', 
        padding: '40px',
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h2 style={{ color: isDark ? '#fff' : '#2d3436' }}>
          Zugriff verweigert
        </h2>
        <p style={{ color: isDark ? '#b2bec3' : '#636e72', marginBottom: '20px' }}>
          Bitte logge dich ein, um diesen Inhalt zu sehen.
        </p>
        <LoginForm />
      </div>
    );
  }

  const getRechte = () => {
    const baseRechte = [
      'Zugriff auf geschützte Inhalte',
      'Persönliches Dashboard',
      'Profil bearbeiten'
    ];

    const roleRechte = {
      'Admin': [
        { text: '⭐ Benutzer verwalten', color: '#e74c3c' },
        { text: '⭐ System-Einstellungen ändern', color: '#e74c3c' },
        { text: '⭐ Alle Logs einsehen', color: '#e74c3c' },
        { text: '⭐ Datenbank-Zugriff', color: '#e74c3c' }
      ],
      'Moderator': [
        { text: '⭐ Inhalte moderieren', color: '#9b59b6' },
        { text: '⭐ Benutzer warnen', color: '#9b59b6' },
        { text: '⭐ Meldungen bearbeiten', color: '#9b59b6' }
      ]
    };

    return {
      base: baseRechte,
      role: roleRechte[user.role] || []
    };
  };

  const rechte = getRechte();

  const renderPage = () => {
    switch(currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'profile':
        return <Profile />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div>
      <Card title={`Willkommen, ${user.name}! 👋`}>
        <p>Du bist als <strong>{user.role}</strong> eingeloggt.</p>
        <p style={{ color: isDark ? '#b2bec3' : '#636e72' }}>
          Login-Zeit: {user.loginTime}
        </p>
      </Card>

      {user.role === 'Admin' && (
        <Card>
          <div style={{
            padding: '16px',
            background: '#e74c3c',
            color: '#fff',
            borderRadius: '8px',
            marginTop: '-20px',
            marginLeft: '-20px',
            marginRight: '-20px',
            marginBottom: '16px'
          }}>
            <h3 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
              🔧 Admin-Bereich
            </h3>
            <p style={{ margin: '4px 0 0 0', fontSize: '14px', opacity: 0.9 }}>
              Nur für Administratoren sichtbar
            </p>
          </div>
          <ul style={{ paddingLeft: '20px', margin: 0 }}>
            <li>Benutzer verwalten</li>
            <li>System-Einstellungen</li>
            <li>Logs einsehen</li>
            <li>Datenbank-Backup</li>
          </ul>
        </Card>
      )}

      {user.role === 'Moderator' && (
        <Card>
          <div style={{
            padding: '16px',
            background: '#9b59b6',
            color: '#fff',
            borderRadius: '8px',
            marginTop: '-20px',
            marginLeft: '-20px',
            marginRight: '-20px',
            marginBottom: '16px'
          }}>
            <h3 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
              ⚡ Moderator-Bereich
            </h3>
            <p style={{ margin: '4px 0 0 0', fontSize: '14px', opacity: 0.9 }}>
              Nur für Moderatoren sichtbar
            </p>
          </div>
          <ul style={{ paddingLeft: '20px', margin: 0 }}>
            <li>Inhalte moderieren</li>
            <li>Meldungen bearbeiten</li>
            <li>Kommentare verwalten</li>
          </ul>
        </Card>
      )}

      <Card title="Deine Rechte">
        <ul style={{ paddingLeft: '20px', margin: 0 }}>
          {rechte.base.map((recht, index) => (
            <li key={index}>{recht}</li>
          ))}
          {rechte.role.map((recht, index) => (
            <li key={`role-${index}`} style={{ color: recht.color, fontWeight: 'bold' }}>
              {recht.text}
            </li>
          ))}
        </ul>
      </Card>

      <Navigation onNavigate={setCurrentPage} currentPage={currentPage} />
      
      {renderPage()}
    </div>
  );
}

export default ProtectedContent;