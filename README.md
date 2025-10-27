# Ada Karakaya - Portfolio Website (React)

Bu, Ada Haydar Karakaya'nın kişisel portfolyo web sitesinin React versiyonudur.

## 🚀 Özellikler

- ⚛️ React ile geliştirilmiş modern single-page application
- 🌐 İki dilli destek (Türkçe/İngilizce) - react-i18next ile
- 📱 Tamamen responsive tasarım
- ⚡ Vite ile hızlı geliştirme ve build
- 🎨 Modern UI/UX tasarımı
- 📧 İletişim formu (Formspree entegrasyonu)
- 🔝 Scroll to top özelliği
- 🎯 Smooth scroll navigasyon
- 🖼️ Proje filtreleme sistemi

## 🛠️ Teknolojiler

- React 19
- Vite
- react-i18next (Çoklu dil desteği)
- CSS3 (Animations & Transitions)
- Font Awesome Icons
- Formspree (Form handling)

## 📦 Kurulum

1. Bağımlılıkları yükleyin:
```bash
npm install
```

2. Development sunucusunu başlatın:
```bash
npm run dev
```

3. Tarayıcınızda `http://localhost:5173` adresini açın

## 🏗️ Build

Production build oluşturmak için:
```bash
npm run build
```

Build çıktısı `dist` klasöründe oluşturulacaktır.

## 🚀 GitHub Pages'e Deploy

GitHub Pages'e deploy etmek için:
```bash
npm run deploy
```

Bu komut otomatik olarak build alıp gh-pages branch'ine yükleyecektir.

## 📁 Proje Yapısı

```
portfolio-react/
├── public/
│   └── assets/         # Resimler, CV, favicon
├── src/
│   ├── components/     # React bileşenleri
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── ScrollToTop.jsx
│   ├── i18n/          # Dil dosyaları
│   │   └── config.js
│   ├── App.jsx        # Ana uygulama bileşeni
│   ├── App.css        # Ana stil dosyası
│   ├── main.jsx       # Giriş noktası
│   └── index.css      # Global stiller
├── index.html
├── vite.config.js
└── package.json
```

## 🌐 Özellikler Detayı

### Çoklu Dil Desteği
- Türkçe ve İngilizce dil seçenekleri
- LocalStorage ile dil tercihi kaydedilir
- Tüm içerik i18n ile yönetilir

### Responsive Tasarım
- Mobile-first yaklaşım
- Burger menü (mobil cihazlar için)
- Tüm ekran boyutlarında optimize görünüm

### Animasyonlar
- Fade-in animasyonları (Intersection Observer API)
- Typewriter efekti
- Smooth scroll
- Skill bar animasyonları

## 📝 Lisans

© 2025 Ada Haydar Karakaya. Tüm Hakları Saklıdır.

## 📧 İletişim

- Email: adahaydarx@gmail.com
- LinkedIn: [linkedin.com/in/adakarakaya](https://www.linkedin.com/in/adakarakaya)
- GitHub: [github.com/AdaKarakaya](https://github.com/AdaKarakaya)

