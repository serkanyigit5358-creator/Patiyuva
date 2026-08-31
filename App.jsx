import React, { useState } from 'react';
import { Mail, Heart, Shield, Award, ArrowRight } from 'lucide-react';

function App() {
  const [totalAdoptions, setTotalAdoptions] = useState(0);
  const [activeFosters, setActiveFosters] = useState(0);
  const [rescuedAnimals, setRescuedAnimals] = useState(0);

  const handleNavClick = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrimaryAction = () => {
    alert("PatiYuva Uygulamasına Hoş Geldiniz! İlanlar sayfasına yönlendiriliyorsunuz...");
  };

  return (
    <div className="min-h-screen bg-amber-50/30 text-gray-800 font-sans">
      <nav className="bg-white shadow-sm sticky top-0 z-50 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <span className="text-2xl">🐾</span>
          <span className="text-xl font-bold text-amber-600 tracking-wide">PatiYuva</span>
        </div>
        <div className="hidden md:flex items-center gap-6 font-medium text-gray-600">
          <button onClick={() => handleNavClick('hakkimizda')} className="hover:text-amber-600 transition">Hakkımızda</button>
          <button onClick={() => handleNavClick('istatistikler')} className="hover:text-amber-600 transition">İstatistikler</button>
          <button onClick={() => handleNavClick('iletisim')} className="hover:text-amber-600 transition text-amber-600 border border-amber-600 px-4 py-1.5 rounded-full hover:bg-amber-50">İletişim</button>
        </div>
      </nav>

      <header className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">Yayındayız! www.patiyuvaapp.online</span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            Onlara Sıcak Bir <span className="text-amber-600">Yuva</span> Olmaya Hazır Mısın?
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            PatiYuva, sokaktaki canlarımızın kalıcı ailelerine kavuşması, geçici yuva bulunması ve acil durumdaki dostlarımızın kurtarılması için geliştirilmiş topluluk odaklı bir platformdur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button onClick={handlePrimaryAction} className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-amber-600/20 transition flex items-center justify-center gap-2 group">
              Hemen Keşfet <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={() => handleNavClick('hakkimizda')} className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 font-semibold px-8 py-4 rounded-xl transition text-center">
              Daha Fazla Bilgi
            </button>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="w-72 h-72 md:w-96 md:h-96 bg-amber-200 rounded-full absolute -z-10 blur-2xl opacity-40 top-10"></div>
          <span className="text-[120px] md:text-[180px] select-none animate-bounce duration-1000">🐶</span>
        </div>
      </header>

      <section id="hakkimizda" className="bg-white py-16 border-t border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl font-bold text-gray-900">Neler Yapıyoruz?</h2>
            <p className="text-gray-500">Sadece bir ilan sitesi değil, pati dostları için tam teşekküllü bir dijital ekosistem kuruyoruz.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-amber-50/50 rounded-2xl border border-amber-100/50 space-y-4">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600"><Heart size={24} /></div>
              <h3 className="text-xl font-bold">Kolay Sahiplendirme</h3>
              <p className="text-gray-600 text-sm">Detaylı filtreleme ile can dostlarımızı en doğru ailelerle buluşturuyoruz.</p>
            </div>
            <div className="p-6 bg-amber-50/50 rounded-2xl border border-amber-100/50 space-y-4">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600"><Shield size={24} /></div>
              <h3 className="text-xl font-bold">Geçici Yuva Ağı</h3>
              <p className="text-gray-600 text-sm">Klinikten çıkan veya acil durumu olan canlara güvenli geçici evler sağlıyoruz.</p>
            </div>
            <div className="p-6 bg-amber-50/50 rounded-2xl border border-amber-100/50 space-y-4">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600"><Award size={24} /></div>
              <h3 className="text-xl font-bold">Güvenilir Topluluk</h3>
              <p className="text-gray-600 text-sm">Tüm kullanıcıları doğrulayarak dostlarımızın emniyetini en üst düzeyde tutuyoruz.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="istatistikler" className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Canlı Proje Sayaçlarımız</h2>
        <p className="text-gray-500 mb-12">Yeni lansman nedeniyle tüm verilerimiz güncellenmiştir.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-4xl md:text-5xl font-black text-amber-600 mb-2">{totalAdoptions}</p>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Sahiplendirilen Canlar</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-4xl md:text-5xl font-black text-amber-600 mb-2">{activeFosters}</p>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Aktif Geçici Yuvalar</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 col-span-2 md:col-span-1">
            <p className="text-4xl md:text-5xl font-black text-amber-600 mb-2">{rescuedAnimals}</p>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Kurtarılan Hayat</p>
          </div>
        </div>
      </section>

      <footer id="iletisim" className="bg-gray-900 text-gray-400 py-12 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-white font-bold text-lg">
              <span>🐾</span> PatiYuva
            </div>
            <p className="text-sm text-gray-500">© 2026 PatiYuva Projesi. Tüm hakları saklıdır.</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-3">
            <span className="text-xs uppercase text-gray-500 font-semibold tracking-widest">Bize Ulaşın</span>
            <a href="mailto:serkanyigit5358@gmail.com" className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-amber-400 hover:text-amber-300 font-medium px-4 py-2.5 rounded-xl border border-gray-700 transition">
              <Mail size={16} /> serkanyigit5358@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
