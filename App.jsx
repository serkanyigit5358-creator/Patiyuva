import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useApp } from './context/AppContext';
import AltNav from './components/AltNav';
import Toast from './components/Toast';
import Splash from './components/Splash';
import Notifications from './components/Notifications';

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

const HIDE_NAV = ['/giris', '/kayıp/olustur', '/sahiplendirme/olustur', '/mama/olustur'];

function hideNav(pathname) {
  if (HIDE_NAV.includes(pathname)) return true;
  if (/^\/kayıp\/[^/]+\/düzenle/.test(pathname) && pathname !== '/kayıp/olustur') return true;
  if (/^\/sahiplendirme\/[^/]+\/düzenle/.test(pathname) && pathname !== '/sahiplendirme/olustur') return true;
  if (/^\/mama\/[^/]+\/düzenle/.test(pathname) && pathname !== '/mama/olustur') return true;
  return false;
}

export default function App() {
  const { toast, showSplash } = useApp();
  const location = useLocation();
  const noNav = hideNav(location.pathname);
  const [bildirimAcik, setBildirimAcik] = useState(false);

  useEffect(() => {
    setBildirimAcik(false);
  }, [location.pathname]);

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
        <Notifications acik={bildirimAcik} kapat={() => setBildirimAcik(false)} />

        <div className={`uygulama-icerigi ${noNav ? 'navigasyon-yok' : ''}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/giris" element={<Login />} />
            <Route path="/kayıp" element={<LostPets />} />
            <Route path="/kayıp/olustur" element={<CreateLost />} />
            <Route path="/kayıp/:id" element={<LostDetail />} />
            <Route path="/sahiplendirme" element={<AdoptPets />} />
            <Route path="/sahiplendirme/olustur" element={<CreateAdopt />} />
            <Route path="/sahiplendirme/:id" element={<AdoptDetail />} />
            <Route path="/mama" element={<FoodAid />} />
            <Route path="/mama/olustur" element={<CreateFood />} />
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
