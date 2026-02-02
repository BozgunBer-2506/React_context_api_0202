import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { UserProvider } from './contexts/UserContext';
import Navbar from './components/Navbar';
import ProtectedContent from './components/ProtectedContent';
import './App.css';

function AppContent() {
  const { isDark } = useTheme();

  return (
    <div style={{
      minHeight: '100vh',
      background: isDark ? '#0f0f23' : '#f5f6fa',
      transition: 'all 0.3s ease'
    }}>
      <Navbar />
      <main style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '40px' 
      }}>
        <ProtectedContent />
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <AppContent />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;