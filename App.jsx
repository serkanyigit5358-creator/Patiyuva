import React, { useState } from 'react';
import './index.css';

function App() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) return;

    setMessage('🎉 Başarıyla kayıt oldunuz!');
    setEmail('');

    setTimeout(() => {
      setMessage('');
    }, 4000);
  };

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          🐾 <span>PatiYuva</span>
        </div>

        <div className="nav-links">
          <a href="#ilanlar">İlanlar</a>
          <a href="#bagis">Bağış</a>
          <a href="#iletisim">İletişim</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">🐾 Bir canın hayatını değiştir</span>

          <h1>
            Onlara
            <br />
            <strong>Sıcak Bir Yuva</strong>
            <br />
            Olun
          </h1>

          <p>
            Sahiplenilmeyi bekleyen can dostlarımız
            <br />
            sizinle tanışmak için sabırsızlanıyor.
          </p>

          <div className="hero-buttons">
            <a href="#ilanlar" className="btn primary">
              🐾 Pati Bul
            </a>

            <a href="#bagis" className="btn secondary">
              ❤️ Destek Ol
            </a>
          </div>
        </div>

        <div className="hero-animal">
          🐶
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="stat-card">
          <div className="stat-icon">🏠</div>
          <strong>142+</strong>
          <span>Yuva Bulan Pati</span>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🥣</div>
          <strong>2.500+</strong>
          <span>Kg Mama Bağışı</span>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🐾</div>
          <strong>84</strong>
          <span>Aktif İlan</span>
        </div>
      </section>

      {/* İLANLAR */}
      <section className="section" id="ilanlar">
        <div className="section-title">
          <span>🐾</span>
          <h2>Yuva Bekleyen Dostlarımız</h2>
          <p>Belki de aradığınız can dostunuz burada.</p>
        </div>

        <div className="animals">

          <div className="animal-card">
            <div className="animal-image dog">🐶</div>
            <div className="animal-info">
              <h3>Boncuk</h3>
              <p>🐕 2 yaşında • Dişi</p>
              <button>Detayları Gör</button>
            </div>
          </div>

          <div className="animal-card">
            <div className="animal-image cat">🐱</div>
            <div className="animal-info">
              <h3>Misket</h3>
              <p>🐈 1 yaşında • Dişi</p>
              <button>Detayları Gör</button>
            </div>
          </div>

          <div className="animal-card">
            <div className="animal-image dog2">🐕</div>
            <div className="animal-info">
              <h3>Paşa</h3>
              <p>🐕 3 yaşında • Erkek</p>
              <button>Detayları Gör</button>
            </div>
          </div>

        </div>
      </section>

      {/* BAĞIŞ */}
      <section className="donation" id="bagis">
        <div>
          <
