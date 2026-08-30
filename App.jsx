import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useApp } from './context/AppContext';
import AltNav from './bileşenler/AltNav';
import Toast from './bileşenler/Toast';
import Splash from './bileşenler/Splash';
import Bildirimler from './bileşenler/Bildirimler';

import Home from './pages/Home';
import Login from './pages/Login';
import LostPets from './pages/LostPets';
import LostDetail from './pages/LostDetail';
import CreateLost from './pages/CreateLost';
import AdoptPets from './pages/AdoptPets';
import AdoptDetail from './pages/AdoptDetail';
import CreateAdopt from './pages/CreateAdopt';
import FoodAid from './pages/FoodAid';
import FoodDetail from './pages/FoodDetail';
import CreateFood from './pages/CreateFood';
import Favorites from './pages/Favorites';
import MyListings from './pages/MyListings';
import Profile from './pages/Profile';

const GIZLE_NAV = ['/giriş', '/kayıp/oluştur', '/sahiplendirme/oluştur', '/mama/oluştur'];

function hideNav(yolAdi) {
  if (GIZLE_NAV.includes(yolAdi)) return true;
  if (/^\/kayıp\/[^/]+\/düzenle/.test(yolAdi) && yolAdi !== '/kayıp/oluştur') return true;
  if (/^\/sahiplendirme\/[^/]+\/düzenle/.test(yolAdi) && yolAdi !== '/sahiplendirme/oluştur') return true;
  if (/^\/mama\/[^/]+\/düzenle/.test(yolAdi) && yolAdi !== '/mama/oluştur') return true;
  return false;
}

export default function App() {
  const { toast, showSplash } = useApp();
  const konum = useLocation();
  const noNav = hideNav(konum.pathname);
  const [bildirimAcik, setBildirimAcik] = useState(false);

  useEffect(() => {
    setBildirimAcik(false);
  }, [konum.pathname]);

  useEffect(() => {
    if (!bildirimAcik) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setBildirimAcik(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [bildirimAcik]);

  const acikBildirimler = (e) => {
    const dugme = e.target.closest('button[aria-label="Bildirimler"]');
    if (!dugme) return;
    e.preventDefault();
    e.stopPropagation();
    setBildirimAcik(true);
  };

  return (
    <div className="uygulama-kabugu">
      <div className="uygulama-cercevesi" onClick={acikBildirimler}>
        {showSplash && <Splash />}
        {toast && <Toast mesaj={toast} />}
        <Bildirimler acik={bildirimAcik} kapat={() => setBildirimAcik(false)} />

        <div className={`uygulama-icerigi ${noNav ? 'navigasyon-yok' : ''}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/giriş" element={<Login />} />
            <Route path="/kayıp" element={<LostPets />} />
            <Route path="/kayıp/oluştur" element={<CreateLost />} />
            <Route path="/kayıp/:id" element={<LostDetail />} />
            <Route path="/sahiplendirme" element={<AdoptPets />} />
            <Route path="/sahiplendirme/oluştur" element={<CreateAdopt />} />
            <Route path="/sahiplendirme/:id" element={<AdoptDetail />} />
            <Route path="/mama" element={<FoodAid />} />
            <Route path="/mama/oluştur" element={<CreateFood />} />
            <Route path="/mama/:id" element={<FoodDetail />} />
            <Route path="/favoriler" element={<Favorites />} />
            <Route path="/ilanlarım" element={<MyListings />} />
            <Route path="/profil" element={<Profile />} />
            <Route path="*" element={<div>Görüntü bulunamadı / yer değiştirecek</div>} />
          </Routes>
        </div>

        {!noNav && <AltNav />}
      </div>
    </div>
  );
}
