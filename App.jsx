import { useState, useEffect } from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { useApp } from './context/AppContext'
import BottomNav from './components/BottomNav'
import Toast from './components/Toast'
import Splash from './components/Splash'
import Notifications from './components/Notifications'

import Home from './pages/Home'
import Login from './pages/Login'
import LostPets from './pages/LostPets'
import LostDetail from './pages/LostDetail'
import CreateLost from './pages/CreateLost'
import AdoptPets from './pages/AdoptPets'
import AdoptDetail from './pages/AdoptDetail'
import CreateAdopt from './pages/CreateAdopt'
import FoodAid from './pages/FoodAid'
import FoodDetail from './pages/FoodDetail'
import CreateFood from './pages/CreateFood'
import Favorites from './pages/Favorites'
import MyListings from './pages/MyListings'
import Profile from './pages/Profile'

const HIDE_NAV = ['/giris', '/kayip/olustur', '/sahiplendirme/olustur', '/mama/olustur']

function hideNav(pathname) {
  if (HIDE_NAV.includes(pathname)) return true
  if (/^\/kayip\/[^/]+$/.test(pathname) && pathname !== '/kayip/olustur') return true
  if (/^\/sahiplendirme\/[^/]+$/.test(pathname) && pathname !== '/sahiplendirme/olustur')
    return true
  if (/^\/mama\/[^/]+$/.test(pathname) && pathname !== '/mama/olustur') return true
  return false
}

export default function App() {
  const { toast, showSplash } = useApp()
  const location = useLocation()
  const noNav = hideNav(location.pathname)
  const [notifOpen, setNotifOpen] = useState(false)

  // Close notifications on route change
  useEffect(() => {
    setNotifOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!notifOpen) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') setNotifOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [notifOpen])

  const openNotifications = (e) => {
    const btn = e.target.closest?.('button[aria-label="Bildirimler"]')
    if (!btn) return
    e.preventDefault()
    e.stopPropagation()
    setNotifOpen(true)
  }

  return (
    <div className="app-shell">
      <div className="app-frame" onClick={openNotifications}>
        {showSplash && <Splash />}
        <Toast message={toast} />
        <Notifications open={notifOpen} onClose={() => setNotifOpen(false)} />

        <div className={`app-content ${noNav ? 'no-nav' : ''}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/giris" element={<Login />} />

            <Route path="/kayip" element={<LostPets />} />
            <Route path="/kayip/olustur" element={<CreateLost />} />
            <Route path="/kayip/:id" element={<LostDetail />} />

            <Route path="/sahiplendirme" element={<AdoptPets />} />
            <Route path="/sahiplendirme/olustur" element={<CreateAdopt />} />
            <Route path="/sahiplendirme/:id" element={<AdoptDetail />} />

            <Route path="/mama" element={<FoodAid />} />
            <Route path="/mama/olustur" element={<CreateFood />} />
            <Route path="/mama/:id" element={<FoodDetail />} />

            <Route path="/favoriler" element={<Favorites />} />
            <Route path="/ilanlarim" element={<MyListings />} />
            <Route path="/profil" element={<Profile />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        {!noNav && <BottomNav />}
      </div>
    </div>
  )
}
