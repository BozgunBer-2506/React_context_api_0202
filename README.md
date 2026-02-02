# React Context API - Komplett Projekt

## 🎯 Was wurde gebaut?

Eine vollständige React-Anwendung mit:
- ✅ Theme Context (Dark/Light Mode)
- ✅ User Context (Authentication)
- ✅ LocalStorage (Persistenz)
- ✅ Role-based Content (Admin/Moderator/User)
- ✅ Multiple Pages (Dashboard/Profile/Settings)

## 📁 Dateistruktur

```
src/
├── contexts/
│   ├── ThemeContext.jsx    # Theme Management
│   └── UserContext.jsx     # User Authentication
├── components/
│   ├── Card.jsx           # Wiederverwendbare Card
│   ├── Dashboard.jsx      # Dashboard mit role-based Stats
│   ├── LoginForm.jsx      # Login Formular
│   ├── Navbar.jsx         # Navigation Bar
│   ├── Navigation.jsx     # Page Navigation
│   ├── Profile.jsx        # User Profile
│   ├── ProtectedContent.jsx  # Main Content Container
│   ├── Settings.jsx       # Settings Page
│   └── ThemeToggle.jsx    # Theme Switch Button
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## 🚀 Installation

1. Alle Dateien in dein React-Projekt kopieren
2. `npm install` ausführen (falls nötig)
3. `npm run dev` starten

## 🎨 Features

### Theme Context
- Dark/Light Mode
- LocalStorage Persistenz
- Smooth Transitions
- Custom Hook: `useTheme()`

### User Context
- Login/Logout
- 3 Rollen: User, Admin, Moderator
- LocalStorage Persistenz
- Custom Hook: `useUser()`

### Role-Based Content

**User:**
- Dashboard: Projekte, Nachrichten, Aufgaben
- Basis-Rechte

**Moderator:**
- Dashboard: Meldungen, Gelöschte Posts, Warnungen
- Moderator-Rechte
- Moderator-Bereich

**Admin:**
- Dashboard: Benutzer, System-Logs, Backups
- Admin-Rechte
- Admin-Bereich

## 🧪 Testen

1. **Theme testen:**
   - Klicke auf Theme-Button (oben rechts)
   - Seite neu laden → Theme bleibt gespeichert

2. **User testen:**
   - Login als "User"
   - Sieh User-spezifische Stats
   - Navigiere: Dashboard → Profil → Einstellungen

3. **Admin testen:**
   - Logout
   - Login als "Admin"
   - Sieh Admin-Panel und Admin-Stats
   - Admin-Rechte werden angezeigt

4. **Moderator testen:**
   - Logout
   - Login als "Moderator"
   - Sieh Moderator-Panel und Moderator-Stats

## 🎓 Wichtige Konzepte

- **Context API:** Globales State Management
- **Custom Hooks:** Sauberer Code
- **LocalStorage:** Daten bleiben nach Reload
- **Role-based UI:** Dynamischer Content je nach Rolle
- **Provider Pattern:** Best Practice für Context

## ✅ Checkliste

- [x] ThemeContext mit LocalStorage
- [x] UserContext mit LocalStorage
- [x] Role-based Stats (User/Admin/Moderator unterschiedlich)
- [x] Role-based Rechte (dynamisch)
- [x] Role-based Aktivitäten
- [x] Admin Panel (nur für Admin)
- [x] Moderator Panel (nur für Moderator)
- [x] Navigation zwischen Pages
- [x] Responsive Design
- [x] CSS mit Hover-Effekten

## 📚 Gelernte Themen

1. Context API Basics
2. Provider Pattern
3. Custom Hooks
4. LocalStorage Integration
5. Role-based Access Control
6. Component Composition
7. Props vs Context
