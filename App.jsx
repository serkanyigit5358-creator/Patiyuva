import React, { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [stats, setStats] = useState({
    yuvaBulanlar: 0,
    MamaBagislari: 0,
    AktifIlanlar: 0
  });

  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const targetStats = {
      yuvaBulanlar: 142,
      MamaBagislari: 2500,
      AktifIlanlar: 84
    };

    const interval = setInterval(() => {
      setStats(prev => {
        const next = { ...prev };
        let done = true;

        if (next.yuvaBulanlar < targetStats.yuvaBulanlar) {
          next.yuvaBulanlar += 2;
          done = false;
        }

        if (next.MamaBagislari < targetStats.MamaBagislari) {
          next.MamaBagislari += 50;
          done = false;
        }

        if (next.AktifIlanlar < targetStats.AktifIlanlar) {
          next.AktifIlanlar += 1;
          done = false;
        }

        if (done) clearInterval(interval);

        return next;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const handleEmailSubmit = (e) => {
    e.preventDefault();

    if (email) {
      setIsSubmitted(true);
      setEmail('');

      setTimeout(() => {
        setIsSubmitted(false);
      }, 4000);
    }
  };

  return (
    <div className="app-container">

      <nav className="navbar">
        <div className="logo">🐾 PatiYuva</div>

        <div className="nav-links">
          <a href="#ilanlar">İlanlar</a>
          <a href="#bagis">Bağış</a>
          <a href="#iletisim">İletişim</a>
        </div>
      </nav>

      <header className="hero-section">
        <h1>Onlara Sıcak Bir Yuva Olun</h1>

        <p>
          Sahiplenilmeyi bekleyen yüzlerce can dostumuz
          sizinle tanışmak için sabırsızlanıyor.
        </p>

        <div className="hero-buttons">
          <a href="#ilanlar" className="btn btn-primary">
            Pati Bul
          </a>

          <a href="#bagis" className="btn btn-secondary">
            Destek Ol
          </a>
        </div>
      </header>

      <section className="stats-section">

        <div className="stat-card">
          <h3>{stats.yuvaBulanlar}+</h3>
          <p>Yuva Bulan Pati</p>
        </div>

        <div className="stat-card">
          <h3>{stats.MamaBagislari} kg+</h3>
          <p>Mama Bağışı</p>
        </div>

        <div className="stat-card">
          <h3>{stats.AktifIlanlar}</h3>
          <p>Aktif İlan</p>
        </div>

      </section>

      <section className="newsletter-section">
        <h3>Bizden Haber Alın</h3>

        <p>
          Yeni ilanlar ve mama kampanyalarından ilk siz haberdar olun.
        </p>

        {!isSubmitted ? (
          <form
            onSubmit={handleEmailSubmit}
            className="newsletter-form"
          >
            <input
              type="email"
              placeholder="E-posta adresiniz"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button
              type="submit"
              className="btn btn-submit"
            >
              Abone Ol
            </button>
          </form>
        ) : (
          <div className="success-message">
            🎉 Başarıyla abone oldunuz! Teşekkürler.
          </div>
        )}
      </section>

      <div className="bottom-nav">
        <a href="#ilanlar" className="nav-item">
          🐾 İlanlar
        </a>

        <a href="#bagis" className="nav-item">
          ❤️ Bağış
        </a>

        <a href="#profil" className="nav-item">
          👤 Profil
        </a>
      </div>

    </div>
  );
}

export default App;
