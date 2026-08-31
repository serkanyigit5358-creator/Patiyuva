import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import BottomNav from './components/BottomNav';
import { AppProvider } from './context/AppContext';

// NOT: AppContext'i burada yeniden createContext() ile tanımlamadık — Home.jsx onu
// './context/AppContext' modülünden import ediyor. İki ayrı context, iki ayrı "kutup" demek
// olurdu ve useApp() yine null dönerdi. Tek kaynak: src/context/AppContext.jsx

// Sayfa taslakları
const DummyPage = ({ title }) => (
  <div style={{ padding: '20px', textAlign: 'center', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1F2937', marginBottom: '10px' }}>{title}</h2>
    <p style={{ color: '#6B7280' }}>Bu sayfa çok yakında can dostlarımız için aktif edilecektir.</p>
  </div>
);

function App() {
  // Home'da kırılma yaşanmaması için mock state değerleri
  const [stats] = useState({ lost: 0, adopted: 0, food: 0 });
  const [user] = useState({ name: 'Serkan', email: 'serkanyigit5358@gmail.com' });

  return (
    <AppProvider value={{ stats, user }}>
      <Router>
        <div className="app-container" style={{ minHeight: '100vh', paddingBottom: '70px', background: '#FFFBF7' }}>

          {/* Tüm Sayfa Rotaları Tanımlamaları */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kayip" element={<DummyPage title="Kayıp Hayvan Bildir" />} />
            <Route path="/sahiplendirme" element={<DummyPage title="Sahiplendirme İlanları" />} />
            <Route path="/mama" element={<DummyPage title="Mama Desteği" />} />
            <Route path="/favoriler" element={<DummyPage title="Favori İlanlarım" />} />
            <Route path="/ilanlarim" element={<DummyPage title="Benim İlanlarım" />} />
            <Route path="/profil" element={<DummyPage title="Profilim" />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>

          {/* Sabit Alt Menü */}
          <BottomNav />

        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
