import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  function login(username, role = 'User') {
    setUser({
      name: username,
      role: role,
      loginTime: new Date().toLocaleTimeString()
    });
  }

  function logout() {
    setUser(null);
  }

  const value = {
    user,
    login,
    logout,
    isLoggedIn: user !== null
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  if (context === null) {
    throw new Error('useUser muss innerhalb UserProvider verwendet werden');
  }

  return context;
}