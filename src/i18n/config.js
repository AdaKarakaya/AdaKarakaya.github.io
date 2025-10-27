import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  tr: {
    translation: {
      pageTitle: "Ada Haydar Karakaya - Yönetim Bilişim Sistemleri Öğrencisi",
      logoName: "Ada Karakaya",
      navHome: "Anasayfa",
      navAbout: "Hakkımda",
      navExperience: "Deneyim & Eğitim",
      navProjects: "Projeler",
      navSkills: "Beceriler",
      navContact: "İletişim",

      heroTitle: "Merhaba, ben Ada Haydar Karakaya!",
      heroDescriptionP1: "İstanbul Medipol Üniversitesi'nde ",
      heroDescriptionP1Highlight: "Yönetim Bilişim Sistemleri 3. sınıf öğrencisiyim",
      heroDescriptionP1End: " ve ",
      heroTypewriter: "veri analizi ve otomasyon konularına meraklıyım.",
      heroDescriptionP2Start: "Özellikle ",
      heroDescriptionP2Highlight: "SQL ve veri tabanı yönetimi",
      heroDescriptionP2End: " konularına ilgi duyuyorum. Analitik düşünme becerim ve öğrenmeye olan isteğimle, teknoloji alanında kendimi geliştirmeye odaklıyım. Takım çalışmasına yatkın, sorumluluk sahibi ve iletişime açık bir öğrenci olarak staj sürecinde teorik bilgilerimi pratiğe dökmeyi ve yeni deneyimler kazanmayı hedefliyorum.",
      heroBtnProjects: "Projelerimi İncele",
      heroBtnCV: "CV'mi İndir",

      aboutTitle: "Hakkımda",
      aboutTextP1: "Yönetim Bilişim Sistemleri 3. sınıf öğrencisi olarak, özellikle SQL ve veri tabanı yönetimi konularına ilgi duyuyorum. Analitik düşünme becerim ve öğrenmeye olan isteğimle, teknoloji alanında kendimi geliştirmeye odaklıyım.",
      aboutTextP2: "Takım çalışmasına yatkın, sorumluluk sahibi ve iletişime açık bir öğrenciyim. Staj sürecinde hem teorik bilgilerimi pratiğe dökmek hem de yeni deneyimler kazanmak istiyorum.",

      experienceTitle: "Eğitim ve Deneyim Geçmişi",
      expItInternTitle: "IT Stajyeri",
      expItInternCompany: "@MET-GÜN İnşaat",
      expItInternDate: "Ağustos 2025 - Eylül 2025",
      expItInternDesc: "MET-GÜN İnşaat'taki stajım süresince, bilişim sistemleri süreçlerine aktif destek sağlayarak teorik bilgilerimi pratik deneyimlerle pekiştirmeyi ve kurumsal IT ortamında kendimi geliştirmeyi hedefliyorum.",
      expMisTitle: "Yönetim Bilişim Sistemleri Lisans",
      expMisCompany: "@İstanbul Medipol Üniversitesi",
      expMisDate: "Eylül 2023 - Devam Ediyor",
      expMisDesc: "Yönetim Bilişim Sistemleri 3. sınıf öğrencisiyim. Özellikle SQL ve veritabanı yönetimi konularına büyük ilgi duyuyorum. Analitik düşünme becerilerimi kullanarak Veri Bilimi, Sistem Analizi ve Tasarımı gibi temel YBS derslerinde aktif rol alıyorum. Öğrenmeye olan isteğim ve teknoloji alanında kendimi sürekli geliştirme hedefimle, takım çalışmasına yatkın ve sorumluluk sahibi bir öğrenci olarak projelerde yer alıyorum.",
      expHighSchoolTitle: "Lise Eğitimi",
      expHighSchoolCompany: "@Yakacık Doğa Anadolu Lisesi",
      expHighSchoolDate: "Eylül 2019 - Haziran 2023",
      expHighSchoolDesc: "Lise eğitimimi başarıyla tamamladım.",

      projectsTitle: "Öne Çıkan Projelerim",
      filterAll: "Tümü",
      filterWeb: "Web Geliştirme",
      filterGame: "Oyun Geliştirme",

      projectWebTitle: "Basit Web Sitesi Tasarımı",
      projectWebDesc: "HTML, CSS ve temel JavaScript kullanarak interaktif bir web sayfası tasarladım. Bu proje ile frontend geliştirme becerilerimi pekiştirdim ve kullanıcı arayüzü oluşturma deneyimi kazandım.",
      projectGameTitle: "Süper Lig Draft Simülatörü (Unity GameDev)",
      projectGameDesc: "Unity oyun motorunu kullanarak geliştirdiğim, Süper Lig oyuncularıyla takım kurma ve yapay zeka (AI) rakiplere karşı simülasyon maçları yapma odaklı kişisel bir hobi projesidir. Oyun içi mekanikler, kullanıcı arayüzü (UI) ve temel yapay zeka (AI) algoritmalarının programlanması, versiyon kontrol yönetimi ve oyun tasarımı alanlarında deneyim kazandım.",
      btnGithub: "GitHub",

      skillsTitle: "Teknik ve Temel Becerilerim",
      skillSqlTitle: "Microsoft SQL Server",
      skillSqlLevel: "Orta Seviye",
      skillMsOfficeTitle: "MS Office (Word, Excel, Outlook)",
      skillMsOfficeLevel: "İyi Seviye",
      skillPythonTitle: "Python",
      skillPythonLevel: "Temel Seviye",
      skillCsharpTitle: "C#",
      skillCsharpLevel: "Temel Seviye",
      skillAnalyticalTitle: "Analitik Düşünme",
      skillAnalyticalLevel: "İyi Seviye",
      skillTeamworkTitle: "Takım Çalışması",
      skillTeamworkLevel: "Çok İyi Seviye",
      skillGitTitle: "Git & GitHub",
      skillGitLevel: "Orta Seviye",
      skillCommunicationTitle: "Etkili İletişim",
      skillCommunicationLevel: "İyi Seviye",
      skillSocialMediaTitle: "Sosyal Medya Kullanımı",
      skillSocialMediaLevel: "Orta/İyi Seviye",

      contactTitle: "İletişim Kur",
      contactDescription: "Staj fırsatları, projeler veya sadece bir merhaba demek için benimle iletişime geçebilirsiniz!",
      formNamePh: "Adınız Soyadınız",
      formEmailPh: "E-posta Adresiniz",
      formSubjectPh: "Konu",
      formMessagePh: "Mesajınız",
      formSubmitBtn: "Mesaj Gönder",
      contactEmailVal: "adahaydarx@gmail.com",
      contactPhoneVal: "+90 543 591 11 11",
      contactLocationVal: "Pendik, İstanbul, Türkiye",

      formSuccess: "Mesajınız başarıyla gönderildi!",
      formError: "Mesaj gönderilirken bir hata oluştu.",
      formNetworkError: "Bir ağ hatası oluştu. Lütfen daha sonra tekrar deneyin.",

      footerText: "Ada Haydar Karakaya. Tüm Hakları Saklıdır."
    }
  },
  en: {
    translation: {
      pageTitle: "Ada Haydar Karakaya - Management Information Systems Student",
      logoName: "Ada Karakaya",
      navHome: "Home",
      navAbout: "About",
      navExperience: "Experience & Education",
      navProjects: "Projects",
      navSkills: "Skills",
      navContact: "Contact",

      heroTitle: "Hello, I'm Ada Haydar Karakaya!",
      heroDescriptionP1: "I am a ",
      heroDescriptionP1Highlight: "3rd-year Management Information Systems student",
      heroDescriptionP1End: " and ",
      heroTypewriter: "passionate about data analysis and automation.",
      heroDescriptionP2Start: "I am particularly interested in ",
      heroDescriptionP2Highlight: "SQL and database management",
      heroDescriptionP2End: " topics. With my analytical thinking skills and eagerness to learn, I am focused on developing myself in the field of technology. As a student who is prone to teamwork, responsible, and open to communication, I aim to put my theoretical knowledge into practice and gain new experiences during my internship.",
      heroBtnProjects: "View My Projects",
      heroBtnCV: "Download My CV",

      aboutTitle: "About Me",
      aboutTextP1: "As a 3rd-year Management Information Systems student, I am particularly interested in SQL and database management. With my analytical thinking skills and eagerness to learn, I am focused on developing myself in the field of technology.",
      aboutTextP2: "I am prone to teamwork, responsible, and open to communication. I aim to put my theoretical knowledge into practice and gain new experiences during my internship.",

      experienceTitle: "Education & Experience History",
      expItInternTitle: "IT Intern",
      expItInternCompany: "@MET-GÜN İnşaat",
      expItInternDate: "August 2025 - September 2025",
      expItInternDesc: "During my internship at MET-GÜN İnşaat, I aim to reinforce my theoretical knowledge with practical experiences by actively supporting IT system processes and to develop myself in a corporate IT environment.",
      expMisTitle: "Management Information Systems (B.Sc.)",
      expMisCompany: "@Istanbul Medipol University",
      expMisDate: "September 2023 - Ongoing",
      expMisDesc: "I am a 3rd-year Management Information Systems student. I am particularly interested in SQL and database management topics. Using my analytical thinking skills, I actively participate in core MIS courses such as Data Science, System Analysis, and Design. With my eagerness to learn and goal of continuous self-improvement in technology, I take part in projects as a student who is prone to teamwork and responsible.",
      expHighSchoolTitle: "High School Education",
      expHighSchoolCompany: "@Yakacık Doğa Anatolian High School",
      expHighSchoolDate: "September 2019 - June 2023",
      expHighSchoolDesc: "I successfully completed my high school education.",

      projectsTitle: "Featured Projects",
      filterAll: "All",
      filterWeb: "Web Development",
      filterGame: "Game Development",

      projectWebTitle: "Simple Website Design",
      projectWebDesc: "I designed an interactive web page using HTML, CSS, and basic JavaScript. With this project, I strengthened my frontend development skills and gained experience in creating user interfaces.",
      projectGameTitle: "Süper Lig Draft Simulator (Unity GameDev)",
      projectGameDesc: "This is a personal hobby project I developed using the Unity game engine, focused on building teams with Süper Lig players and playing simulation matches against AI opponents. I gained experience in in-game mechanics, user interface (UI) and basic artificial intelligence (AI) algorithms programming, version control management, and game design.",
      btnGithub: "GitHub",

      skillsTitle: "Technical and Core Skills",
      skillSqlTitle: "Microsoft SQL Server",
      skillSqlLevel: "Intermediate Level",
      skillMsOfficeTitle: "MS Office (Word, Excel, Outlook)",
      skillMsOfficeLevel: "Proficient Level",
      skillPythonTitle: "Python",
      skillPythonLevel: "Basic Level",
      skillCsharpTitle: "C#",
      skillCsharpLevel: "Basic Level",
      skillAnalyticalTitle: "Analytical Thinking",
      skillAnalyticalLevel: "Proficient Level",
      skillTeamworkTitle: "Teamwork",
      skillTeamworkLevel: "Very Good Level",
      skillGitTitle: "Git & GitHub",
      skillGitLevel: "Intermediate Level",
      skillCommunicationTitle: "Effective Communication",
      skillCommunicationLevel: "Proficient Level",
      skillSocialMediaTitle: "Social Media Usage",
      skillSocialMediaLevel: "Intermediate/Proficient Level",

      contactTitle: "Get In Touch",
      contactDescription: "Feel free to contact me for internship opportunities, projects, or just to say hello!",
      formNamePh: "Your Full Name",
      formEmailPh: "Your Email Address",
      formSubjectPh: "Subject",
      formMessagePh: "Your Message",
      formSubmitBtn: "Send Message",
      contactEmailVal: "adahaydarx@gmail.com",
      contactPhoneVal: "+90 543 591 11 11",
      contactLocationVal: "Pendik, Istanbul, Turkey",

      formSuccess: "Your message has been sent successfully!",
      formError: "An error occurred while sending the message.",
      formNetworkError: "A network error occurred. Please try again later.",

      footerText: "Ada Haydar Karakaya. All Rights Reserved."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('selectedLang') || 'tr',
    fallbackLng: 'tr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
