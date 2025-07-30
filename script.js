document.addEventListener('DOMContentLoaded', function() {

    // Helper function for Intersection Observer
    const createObserver = (targetSelector, classNameToAdd, options = { threshold: 0.1 }) => {
        const elements = document.querySelectorAll(targetSelector);
        if (elements.length === 0) return;

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(classNameToAdd);
                    observer.unobserve(entry.target); // Stop observing after animation
                }
            });
        }, options);

        elements.forEach(element => {
            observer.observe(element);
        });
    };

    // hero-content için yeni bir observer oluşturabilirsiniz.
    const heroContent = document.querySelector('.hero-content');

    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                heroContent.classList.add('active');
                heroObserver.unobserve(heroContent); // Bir kez çalıştıktan sonra durdur
            }
        });
    }, {
        threshold: 0.2 // %20'si görünür olduğunda tetikle
    });

    if (heroContent) { // Elementin varlığını kontrol edin
        heroObserver.observe(heroContent);
    }

    // 1. Fade-in-up animations
    createObserver('.fade-in-up', 'appear');

    // 2. Typewriter Effect variables
    const typewriterElement = document.querySelector('.typewriter');
    let charIndex = 0;
    let deleting = false;
    let currentLanguageText = ""; // This will be set by updateContent
    let typeTimeout; // To store setTimeout ID for clearing

    // Typewriter loop function
    function type() {
        if (!typewriterElement) return; // Ensure element exists

        const fullText = currentLanguageText;

        if (deleting) {
            typewriterElement.textContent = fullText.substring(0, charIndex--);
        } else {
            typewriterElement.textContent = fullText.substring(0, charIndex++);
        }

        let typeSpeed = 100; // Typing speed
        if (deleting) {
            typeSpeed /= 2; // Deleting faster
        }

        if (!deleting && charIndex > fullText.length) {
            typeSpeed = 2000; // Pause after typing
            deleting = true;
        } else if (deleting && charIndex < 0) {
            deleting = false;
            charIndex = 0;
            typeSpeed = 500; // Pause before retyping
        }

        typeTimeout = setTimeout(type, typeSpeed);
    }

    // Function to restart typewriter with new text
    function restartTypewriter(newText) {
        if (typewriterElement) {
            clearTimeout(typeTimeout); // Clear any existing timeout
            currentLanguageText = newText;
            charIndex = 0;
            deleting = false;
            typewriterElement.textContent = ''; // Clear immediate text
            type(); // Start typing new text
        }
    }


    // 3. Skill bar animations
    const skillSection = document.getElementById('skills');
    if (skillSection) {
        const skillBars = document.querySelectorAll('.skill-level span');
        const skillObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    skillBars.forEach(bar => {
                        // Get the skill level from data-level attribute (e.g., "90%")
                        const level = bar.parentElement.dataset.level; // Parent element holds data-level
                        if (level) {
                            bar.style.width = level; // Set the width dynamically
                        }
                    });
                    observer.unobserve(entry.target); // Stop observing after animation
                }
            });
        }, { threshold: 0.5 }); // Trigger when 50% of the section is visible

        skillObserver.observe(skillSection);
    }


    // 4. Project Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.dataset.filter;

            // Remove 'active' from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add 'active' to clicked button
            this.classList.add('active');

            projectCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'flex'; // Show relevant cards
                } else {
                    card.style.display = 'none'; // Hide irrelevant cards
                }
            });
        });
    });

    // 5. Burger Menu
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    burgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        burgerMenu.classList.toggle('toggle');
        body.classList.toggle('no-scroll');
    });

    // Close menu when a nav link is clicked (for single-page navigation)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('nav-active')) {
                navLinks.classList.remove('nav-active');
                burgerMenu.classList.remove('toggle');
                body.classList.remove('no-scroll');
            }
        });
    });


    // 6. Scroll to Top Button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.id = 'scrollToTopBtn';
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // START: LANGUAGE SWITCHER FUNCTIONALITY

    const langButtons = document.querySelectorAll('.lang-btn');
    const htmlTag = document.documentElement;

    const translations = {
        'tr': {
            pageTitle: "Ada Haydar Karakaya - Yönetim Bilişim Sistemleri Öğrencisi",
            logoName: "Ada Karakaya",
            navHome: "Anasayfa",
            navAbout: "Hakkımda",
            navExperience: "Deneyim & Eğitim",
            navProjects: "Projeler",
            navSkills: "Beceriler",
            navContact: "İletişim",

            heroTitle: "Merhaba, ben Ada Haydar Karakaya!",
            heroDescriptionP1Full: "İstanbul Medipol Üniversitesi'nde <span class=\"highlight-text\">Yönetim Bilişim Sistemleri 3. sınıf öğrencisiyim</span> ve ",
            heroTypewriter: "veri analizi ve otomasyon konularına meraklıyım.",
            heroDescriptionP2Full: "Özellikle <span class=\"highlight-text\">SQL ve veri tabanı yönetimi</span> konularına ilgi duyuyorum. Analitik düşünme becerim ve öğrenmeye olan isteğimle, teknoloji alanında kendimi geliştirmeye odaklıyım. Takım çalışmasına yatkın, sorumluluk sahibi ve iletişime açık bir öğrenci olarak staj sürecinde teorik bilgilerimi pratiğe dökmeyi ve yeni deneyimler kazanmayı hedefliyorum.",
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
        },
        'en': {
            pageTitle: "Ada Haydar Karakaya - Management Information Systems Student",
            logoName: "Ada Karakaya",
            navHome: "Home",
            navAbout: "About",
            navExperience: "Experience & Education",
            navProjects: "Projects",
            navSkills: "Skills",
            navContact: "Contact",

            heroTitle: "Hello, I'm Ada Haydar Karakaya!",
            heroDescriptionP1Full: "I am a <span class=\"highlight-text\">3rd-year Management Information Systems student</span> and ",
            heroTypewriter: "passionate about data analysis and automation.",
            heroDescriptionP2Full: "I am particularly interested in <span class=\"highlight-text\">SQL and database management</span> topics. With my analytical thinking skills and eagerness to learn, I am focused on developing myself in the field of technology. As a student who is prone to teamwork, responsible, and open to communication, I aim to put my theoretical knowledge into practice and gain new experiences during my internship.",
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
    };

    function updateContent(lang) {
        console.log('Dil değiştirme tetiklendi, yeni dil:', lang);

        htmlTag.setAttribute('lang', lang);
        localStorage.setItem('selectedLang', lang);

        // Update active language button class
        langButtons.forEach(btn => {
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update all elements with data-key attribute
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.dataset.key; // This is kebab-case, e.g., "hero-title"

            // Convert kebab-case to camelCase
            const jsKey = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase()); // e.g., "heroTitle"

            // Check if the translation key exists
            if (translations[lang] && typeof translations[lang][jsKey] !== 'undefined') {
                // Special handling for input/textarea placeholders
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][jsKey];
                }
                // Special handling for paragraphs with embedded HTML (like hero descriptions)
                else if (key === 'hero-description-p1-full' || key === 'hero-description-p2-full') {
                    element.innerHTML = translations[lang][jsKey];
                }
                // For direct text content (most common case), including the page title
                else {
                    element.textContent = translations[lang][jsKey];
                }
            } else {
                // This warning will help you find missing translations or mismatched keys
                console.warn(`Translation not found or key missing: Language: ${lang}, data-key: ${key}, JavaScript Key: ${jsKey}`);
            }
        });

        // Update specific elements that don't use data-key for simplicity, e.g., <title> tag
        const pageTitleElement = document.querySelector('title'); // Select the title tag directly
        if (pageTitleElement && translations[lang] && translations[lang].pageTitle) {
            pageTitleElement.textContent = translations[lang].pageTitle;
        }


        // Restart typewriter with the new language text
        restartTypewriter(translations[lang].heroTypewriter);
    }

    // Initialize content based on saved language or default to Turkish
    const savedLang = localStorage.getItem('selectedLang') || 'tr';
    updateContent(savedLang); // Call once on load to set initial language and start typewriter

    // Add event listeners to language buttons
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.dataset.lang;
            updateContent(lang);
        });
    });

    // START: Scrollspy (Aktif Navigasyon Bağlantısı)

    const sections = document.querySelectorAll('section'); // Tüm section etiketlerini seçer
    const navLinksScroll = document.querySelectorAll('.nav-links a'); // Navigasyon bağlantılarını seçer

    function scrollActive() {
        const scrollY = window.scrollY;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50; // 50px yukarıdan tetikle (isteğe bağlı ayar)
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinksScroll.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').includes(sectionId)) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', scrollActive);
    // Sayfa yüklendiğinde de bir kez çalıştır ki başlangıç konumu doğru olsun
    window.addEventListener('load', scrollActive);

    // END: Scrollspy

    // START: CONTACT FORM SUBMISSION
    const contactForm = document.getElementById('contactForm');
    const formMessages = document.getElementById('form-messages');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(event) {
            event.preventDefault();

            formMessages.textContent = '';
            formMessages.classList.remove('success', 'error');
            formMessages.style.display = 'none';

            const formData = new FormData(this);
            const formEndpoint = this.action;

            try {
                const response = await fetch(formEndpoint, {
                    method: 'POST',
                    body: formData,
                    // BURAYA YENİ HEADERS EKLENDİ
                    headers: {
                        'Accept': 'application/json' // Bu satır, Formspree'ye JSON yanıtı istediğimizi bildirir
                    }
                });

                const currentLang = localStorage.getItem('selectedLang') || 'tr';

                if (response.ok) {
                    formMessages.textContent = translations[currentLang].formSuccess;
                    formMessages.classList.add('success');
                    contactForm.reset();
                } else {
                    const errorData = await response.json();
                    let errorMessage = translations[currentLang].formError;
                    if (errorData && errorData.errors) {
                        errorMessage += ' ' + errorData.errors.map(err => err.field ? `${err.field}: ${err.message}` : err.message).join(', ');
                    }
                    formMessages.textContent = errorMessage;
                    formMessages.classList.add('error');
                }
            } catch (error) {
                console.error('Form submission error:', error);
                const currentLang = localStorage.getItem('selectedLang') || 'tr';
                formMessages.textContent = translations[currentLang].formNetworkError;
                formMessages.classList.add('error');
            } finally {
                formMessages.style.display = 'block';
                setTimeout(() => {
                    formMessages.style.display = 'none';
                    formMessages.textContent = '';
                }, 5000);
            }
        });
    }
    // END: CONTACT FORM SUBMISSION

    // Update current year in footer
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

}); // End of DOMContentLoaded