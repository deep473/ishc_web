import React, { useEffect, useRef, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  HeartPulse,
  Stethoscope,
  Users,
  PawPrint,
  Leaf,
  Sparkles,
  Instagram,
} from "lucide-react";

// ISHC Foundation — landing page v3
// Palette derived from the official logo: navy / sky-blue / leaf-green.
// Content rebuilt around the foundation's 5 official charitable objects.

const translations = {
  en: {
    navAbout: "About",
    navPillars: "What We Do",
    navContact: "Contact",
    navCta: "Get in Touch",
    eyebrowHero: "Inspire · Serve · Heal · Connect",
    heroTitle: "Health, dignity, and care for every community we reach.",
    heroBody:
      "ISHC Foundation works across health, education, animal welfare, and the environment — bringing low-cost healthcare, awareness, and relief support to people who need it most, especially in rural and underserved communities.",
    heroCtaPrimary: "See what we do",
    heroCtaSecondary: "Talk to us",
    statCamps: "Health camps held",
    statClinics: "Partner clinics & centers",
    statVillages: "Villages reached",
    statYears: "Years of service",
    eyebrowAbout: "Who we are",
    aboutTitle: "A foundation built for people who are often the last to be reached.",
    aboutBody:
      "ISHC Foundation was set up to close the gap between people and the care they need — through health awareness, low-cost medical services, community welfare camps, and relief support for the poor and underprivileged. We work alongside government bodies, NGOs, and corporate CSR partners, and we extend that same care to animals and the environment we all share.",
    eyebrowPillars: "What we do",
    pillarsTitle: "Five ways we serve",
    pillarsSubtitle: "Each rooted in our founding charitable objectives.",
    pillar1Title: "Health Awareness & Wellness",
    pillar1Body:
      "Education and campaigns on preventive healthcare, hygiene, nutrition, yoga, fitness, and mental wellness for the public.",
    pillar2Title: "Healthcare Delivery",
    pillar2Body:
      "Low-cost clinics, diagnostic centers, ambulances, mobile medical vans, and telehealth — focused on rural and tribal communities.",
    pillar3Title: "Community Welfare Camps",
    pillar3Body:
      "Health check-up camps, vaccination drives, blood donation camps, and maternal & child health initiatives, run with partner organizations.",
    pillar4Title: "Animal Welfare",
    pillar4Body:
      "Rescue, shelter, and veterinary care for street animals and livestock, plus adoption programs and anti-cruelty awareness.",
    pillar5Title: "Environment & Sustainability",
    pillar5Body:
      "Tree plantation, water conservation, waste management, and biodiversity programs run with local communities.",
    valuesTitle: "Inspire · Serve · Heal · Connect",
    valuesBody:
      "Four words that guide every program we run — from a single health camp in a village to a long-term partnership with a hospital.",
    contactTitle: "We're here when you need us.",
    contactBody:
      "Reach out — whether you want to volunteer, partner with us, or bring a program to your community.",
    contactCall: "Call us",
    contactEmail: "Email us",
    contactInstagram: "Follow us",
    contactVisit: "Visit us",
    footerTagline: "Inspire · Serve · Heal · Connect — health, welfare, and care for every community.",
    footerSite: "Site",
    footerReach: "Reach us",
    footerRights: "All rights reserved.",
  },
  hi: {
    navAbout: "हमारे बारे में",
    navPillars: "हम क्या करते हैं",
    navContact: "संपर्क करें",
    navCta: "संपर्क करें",
    eyebrowHero: "प्रेरित करें · सेवा करें · उपचार करें · जोड़ें",
    heroTitle: "हर समुदाय तक स्वास्थ्य, सम्मान और देखभाल।",
    heroBody:
      "ISHC फाउंडेशन स्वास्थ्य, शिक्षा, पशु कल्याण और पर्यावरण के क्षेत्र में काम करता है — कम लागत वाली स्वास्थ्य सेवा, जागरूकता और राहत सहायता उन लोगों तक पहुँचाते हैं जिन्हें इसकी सबसे ज़्यादा ज़रूरत है, खासकर ग्रामीण और वंचित समुदायों में।",
    heroCtaPrimary: "हम क्या करते हैं देखें",
    heroCtaSecondary: "हमसे बात करें",
    statCamps: "आयोजित स्वास्थ्य शिविर",
    statClinics: "सहयोगी क्लीनिक और केंद्र",
    statVillages: "गाँवों तक पहुँच",
    statYears: "सेवा के वर्ष",
    eyebrowAbout: "हम कौन हैं",
    aboutTitle: "एक फाउंडेशन जो अक्सर सबसे आख़िर में पहुँचने वालों के लिए बना है।",
    aboutBody:
      "ISHC फाउंडेशन की स्थापना लोगों और उनकी आवश्यक देखभाल के बीच की खाई को पाटने के लिए की गई — स्वास्थ्य जागरूकता, कम लागत वाली चिकित्सा सेवाओं, सामुदायिक कल्याण शिविरों, और गरीब व वंचित लोगों के लिए राहत सहायता के माध्यम से। हम सरकारी संस्थाओं, एनजीओ, और कॉर्पोरेट सीएसआर साझेदारों के साथ मिलकर काम करते हैं, और यही देखभाल पशुओं और हमारे साझा पर्यावरण तक भी बढ़ाते हैं।",
    eyebrowPillars: "हम क्या करते हैं",
    pillarsTitle: "सेवा के पाँच तरीके",
    pillarsSubtitle: "हर एक हमारे संस्थापक चैरिटेबल उद्देश्यों में निहित है।",
    pillar1Title: "स्वास्थ्य जागरूकता और कल्याण",
    pillar1Body:
      "रोकथाम योग्य स्वास्थ्य, स्वच्छता, पोषण, योग, फिटनेस और मानसिक कल्याण पर जनता के लिए शिक्षा और अभियान।",
    pillar2Title: "स्वास्थ्य सेवा वितरण",
    pillar2Body:
      "कम लागत वाले क्लीनिक, डायग्नोस्टिक सेंटर, एम्बुलेंस, मोबाइल मेडिकल वैन, और टेलीहेल्थ — ग्रामीण और आदिवासी समुदायों पर केंद्रित।",
    pillar3Title: "सामुदायिक कल्याण शिविर",
    pillar3Body:
      "स्वास्थ्य जांच शिविर, टीकाकरण अभियान, रक्तदान शिविर, और मातृ एवं शिशु स्वास्थ्य पहल, साझेदार संगठनों के साथ आयोजित।",
    pillar4Title: "पशु कल्याण",
    pillar4Body:
      "गली के जानवरों और पशुधन के लिए बचाव, आश्रय, और पशु चिकित्सा सेवा, साथ ही गोद लेने के कार्यक्रम और क्रूरता-विरोधी जागरूकता।",
    pillar5Title: "पर्यावरण और स्थिरता",
    pillar5Body:
      "स्थानीय समुदायों के साथ वृक्षारोपण, जल संरक्षण, अपशिष्ट प्रबंधन, और जैव विविधता कार्यक्रम।",
    valuesTitle: "प्रेरित करें · सेवा करें · उपचार करें · जोड़ें",
    valuesBody:
      "चार शब्द जो हमारे हर कार्यक्रम का मार्गदर्शन करते हैं — एक गाँव के स्वास्थ्य शिविर से लेकर किसी अस्पताल के साथ दीर्घकालिक साझेदारी तक।",
    contactTitle: "जब आपको ज़रूरत हो, हम यहाँ हैं।",
    contactBody:
      "संपर्क करें — चाहे आप स्वयंसेवा करना चाहें, हमारे साथ साझेदारी करना चाहें, या अपने समुदाय में कोई कार्यक्रम लाना चाहें।",
    contactCall: "हमें कॉल करें",
    contactEmail: "हमें ईमेल करें",
    contactInstagram: "हमें फॉलो करें",
    contactVisit: "हमसे मिलें",
    footerTagline: "प्रेरित करें · सेवा करें · उपचार करें · जोड़ें — हर समुदाय के लिए स्वास्थ्य, कल्याण और देखभाल।",
    footerSite: "साइट",
    footerReach: "हमसे जुड़ें",
    footerRights: "सर्वाधिकार सुरक्षित।",
  },
};

export default function ISHCFoundation() {
  const [scrollY, setScrollY] = useState(0);
  const [lang, setLang] = useState("en");
  const heroRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const t = translations[lang];

  const scrollToId = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 70;
      const top = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        fontFamily: "'Source Sans 3', 'Segoe UI', sans-serif",
        background: "#F7F9FB",
        color: "#1F2937",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&family=Source+Sans+3:wght@400;500;600;700&display=swap');

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        .display {
          font-family: 'Manrope', sans-serif;
          letter-spacing: -0.01em;
        }

        .globe-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          opacity: 0.5;
        }

        .nav-link {
          position: relative;
          color: #1F2937;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
          padding: 4px 0;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          left: 0; bottom: 0;
          width: 0%;
          height: 2px;
          background: #2E9BD6;
          transition: width 0.25s ease;
        }
        .nav-link:hover::after { width: 100%; }

        .lang-toggle {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #EAF4FB;
          border: 1px solid rgba(46,155,214,0.3);
          border-radius: 999px;
          padding: 6px 14px;
          font-weight: 700;
          font-size: 0.85rem;
          color: #1B3A6B;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .lang-toggle:hover { background: #D9ECF8; }
        .lang-toggle:focus-visible { outline: 3px solid #2E9BD6; outline-offset: 2px; }

        .btn-primary {
          background: linear-gradient(135deg, #2E9BD6 0%, #6CB33F 100%);
          color: #FFFFFF;
          border: none;
          padding: 14px 28px;
          border-radius: 6px;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(46,155,214,0.3); }
        .btn-primary:focus-visible { outline: 3px solid #1B3A6B; outline-offset: 2px; }

        .btn-secondary {
          background: transparent;
          color: #1B3A6B;
          border: 1.5px solid #1B3A6B;
          padding: 13px 26px;
          border-radius: 6px;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .btn-secondary:hover { background: #1B3A6B; color: #FFFFFF; }
        .btn-secondary:focus-visible { outline: 3px solid #2E9BD6; outline-offset: 2px; }

        .card {
          background: #FFFFFF;
          border-radius: 12px;
          padding: 34px 28px;
          box-shadow: 0 2px 14px rgba(27,58,107,0.07);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          border: 1px solid rgba(27,58,107,0.06);
        }
        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(27,58,107,0.12);
        }

        .icon-badge {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }

        section { position: relative; }

        a:focus-visible, button:focus-visible { outline: 3px solid #2E9BD6; outline-offset: 2px; }

        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }

        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .cards-grid { grid-template-columns: 1fr !important; }
          .contact-grid { grid-template-columns: 1fr 1fr !important; }
          .nav-links { display: none !important; }
          .footer-grid { grid-template-columns: 1fr !important; }
          .logo-img { height: 34px !important; }
        }
      `}</style>

      {/* NAV */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(247,249,251,0.94)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid rgba(27,58,107,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "14px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20,
          }}
        >
          <div className="logo-img" style={{ display: "flex", alignItems: "center", height: 44 }}>
            <LogoMark height={44} />
          </div>
          <nav className="nav-links" style={{ display: "flex", gap: 32, alignItems: "center" }}>
            <a href="#about" onClick={(e) => scrollToId(e, "about")} className="nav-link">{t.navAbout}</a>
            <a href="#pillars" onClick={(e) => scrollToId(e, "pillars")} className="nav-link">{t.navPillars}</a>
            <a href="#contact" onClick={(e) => scrollToId(e, "contact")} className="nav-link">{t.navContact}</a>
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <button
              className="lang-toggle"
              onClick={() => setLang(lang === "en" ? "hi" : "en")}
              aria-label="Switch language / भाषा बदलें"
            >
              {lang === "en" ? "हिं" : "EN"}
            </button>
            <a href="#contact" onClick={(e) => scrollToId(e, "contact")} className="btn-secondary" style={{ fontSize: "0.9rem", padding: "10px 20px" }}>
              {t.navCta}
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section ref={heroRef} style={{ padding: "0", overflow: "hidden" }}>
        <GlobeBackground offset={scrollY * 0.12} />
        <div
          className="hero-grid"
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "90px 24px 80px",
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 56,
            alignItems: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div>
            <p
              style={{
                color: "#2E9BD6",
                fontWeight: 800,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                fontSize: "0.82rem",
                marginBottom: 18,
              }}
            >
              {t.eyebrowHero}
            </p>
            <h1
              className="display"
              style={{
                fontSize: "clamp(2.1rem, 4.6vw, 3.2rem)",
                lineHeight: 1.2,
                fontWeight: 800,
                margin: "0 0 24px",
                color: "#1B3A6B",
              }}
            >
              {t.heroTitle}
            </h1>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.7, color: "#4B5667", marginBottom: 36, maxWidth: 540 }}>
              {t.heroBody}
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="#pillars" onClick={(e) => scrollToId(e, "pillars")} className="btn-primary">
                {t.heroCtaPrimary} <ArrowRight size={18} />
              </a>
              <a href="#contact" onClick={(e) => scrollToId(e, "contact")} className="btn-secondary">
                {t.heroCtaSecondary}
              </a>
            </div>
          </div>

          <HeroArt />
        </div>
      </section>

      {/* STATS STRIP */}
      <section style={{ background: "#1B3A6B", padding: "44px 24px" }}>
        <div
          className="stats-grid"
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 32,
            textAlign: "center",
          }}
        >
          <Stat number="250+" label={t.statCamps} />
          <Stat number="40+" label={t.statClinics} />
          <Stat number="120+" label={t.statVillages} />
          <Stat number="5" label={t.statYears} />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "100px 24px", background: "#F7F9FB" }}>
        <div style={{ maxWidth: 780, margin: "0 auto", textAlign: "center" }}>
          <p
            style={{
              color: "#6CB33F",
              fontWeight: 800,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              fontSize: "0.82rem",
              marginBottom: 16,
            }}
          >
            {t.eyebrowAbout}
          </p>
          <h2 className="display" style={{ fontSize: "clamp(1.7rem, 3.2vw, 2.3rem)", fontWeight: 800, marginBottom: 22, color: "#1B3A6B" }}>
            {t.aboutTitle}
          </h2>
          <p style={{ fontSize: "1.08rem", lineHeight: 1.8, color: "#4B5667" }}>
            {t.aboutBody}
          </p>
        </div>
      </section>

      {/* PILLARS */}
      <section id="pillars" style={{ padding: "20px 24px 110px", background: "#F7F9FB" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 20 }}>
            <p
              style={{
                color: "#6CB33F",
                fontWeight: 800,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                fontSize: "0.82rem",
                marginBottom: 16,
              }}
            >
              {t.eyebrowPillars}
            </p>
            <h2 className="display" style={{ fontSize: "clamp(1.7rem, 3.2vw, 2.3rem)", fontWeight: 800, color: "#1B3A6B", marginBottom: 12 }}>
              {t.pillarsTitle}
            </h2>
            <p style={{ color: "#6B7686", fontSize: "1rem", marginBottom: 48 }}>{t.pillarsSubtitle}</p>
          </div>

          <div className="cards-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 26 }}>
            <PillarCard icon={<HeartPulse size={24} color="#FFFFFF" />} bg="#2E9BD6" title={t.pillar1Title} text={t.pillar1Body} />
            <PillarCard icon={<Stethoscope size={24} color="#FFFFFF" />} bg="#1B3A6B" title={t.pillar2Title} text={t.pillar2Body} />
            <PillarCard icon={<Users size={24} color="#FFFFFF" />} bg="#6CB33F" title={t.pillar3Title} text={t.pillar3Body} />
            <PillarCard icon={<PawPrint size={24} color="#FFFFFF" />} bg="#3F9D63" title={t.pillar4Title} text={t.pillar4Body} />
            <PillarCard icon={<Leaf size={24} color="#FFFFFF" />} bg="#6CB33F" title={t.pillar5Title} text={t.pillar5Body} />
          </div>
        </div>
      </section>

      {/* VALUES STRIP */}
      <section style={{ background: "linear-gradient(135deg, #1B3A6B 0%, #1F6FA8 55%, #4FA84C 100%)", padding: "76px 24px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", color: "#FFFFFF" }}>
          <Sparkles size={26} color="#FFFFFF" style={{ marginBottom: 18, opacity: 0.9 }} />
          <h3 className="display" style={{ fontSize: "clamp(1.4rem, 2.6vw, 1.9rem)", fontWeight: 800, marginBottom: 14 }}>
            {t.valuesTitle}
          </h3>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, opacity: 0.92, maxWidth: 560, margin: "0 auto" }}>
            {t.valuesBody}
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "100px 24px", background: "#F7F9FB" }}>
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            background: "#FFFFFF",
            borderRadius: 16,
            padding: "56px 48px",
            boxShadow: "0 4px 24px rgba(27,58,107,0.08)",
            border: "1px solid rgba(27,58,107,0.06)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 className="display" style={{ fontSize: "clamp(1.6rem, 3vw, 2.1rem)", fontWeight: 800, color: "#1B3A6B", marginBottom: 14 }}>
              {t.contactTitle}
            </h2>
            <p style={{ color: "#4B5667", fontSize: "1.04rem" }}>
              {t.contactBody}
            </p>
          </div>

          <div
            className="contact-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 28,
              textAlign: "center",
            }}
          >
            <ContactItem icon={<Phone size={20} color="#2E9BD6" />} label={t.contactCall} value="+91 78693 17111" href="tel:+917869317111" />
            <ContactItem icon={<Mail size={20} color="#2E9BD6" />} label={t.contactEmail} value="ishcfoundation@gmail.com" href="mailto:ishcfoundation@gmail.com" />
            <ContactItem icon={<Instagram size={20} color="#2E9BD6" />} label={t.contactInstagram} value="@ishc_foundation" href="https://www.instagram.com/ishc_foundation" />
            <ContactItem icon={<MapPin size={20} color="#2E9BD6" />} label={t.contactVisit} value="Indore, Madhya Pradesh, India" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#142A4D", color: "#C7D2E0", padding: "48px 24px 28px" }}>
        <div
          className="footer-grid"
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr",
            gap: 32,
            paddingBottom: 32,
            borderBottom: "1px solid rgba(199,210,224,0.15)",
          }}
        >
          <div>
            <div style={{ marginBottom: 14, background: "#FFFFFF", display: "inline-block", padding: "8px 14px", borderRadius: 8 }}>
              <LogoMark height={32} />
            </div>
            <p style={{ fontSize: "0.92rem", lineHeight: 1.6, maxWidth: 320, color: "#9FAEC4" }}>
              {t.footerTagline}
            </p>
          </div>
          <div>
            <h4 style={{ color: "#FFFFFF", fontSize: "0.92rem", marginBottom: 14 }}>{t.footerSite}</h4>
            <FooterLink href="#about" onClick={(e) => scrollToId(e, "about")}>{t.navAbout}</FooterLink>
            <FooterLink href="#pillars" onClick={(e) => scrollToId(e, "pillars")}>{t.navPillars}</FooterLink>
            <FooterLink href="#contact" onClick={(e) => scrollToId(e, "contact")}>{t.navContact}</FooterLink>
          </div>
          <div>
            <h4 style={{ color: "#FFFFFF", fontSize: "0.92rem", marginBottom: 14 }}>{t.footerReach}</h4>
            <p style={{ fontSize: "0.9rem", color: "#9FAEC4", marginBottom: 8 }}>ishcfoundation@gmail.com</p>
            <p style={{ fontSize: "0.9rem", color: "#9FAEC4", marginBottom: 14 }}>ishcfoundation.com</p>
            <a
              href="https://www.instagram.com/ishc_foundation"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: "0.9rem",
                color: "#9FAEC4",
                textDecoration: "none",
              }}
            >
              <Instagram size={16} /> @ishc_foundation
            </a>
          </div>
        </div>
        <p style={{ textAlign: "center", fontSize: "0.82rem", color: "#74839B", marginTop: 24 }}>
          © {new Date().getFullYear()} ISHC Foundation. {t.footerRights}
        </p>
      </footer>
    </div>
  );
}

function Stat({ number, label }) {
  return (
    <div>
      <div className="display" style={{ fontSize: "clamp(1.7rem, 2.8vw, 2.3rem)", fontWeight: 800, color: "#6CB33F" }}>
        {number}
      </div>
      <div style={{ fontSize: "0.86rem", color: "#C7D2E0", marginTop: 6, letterSpacing: "0.01em" }}>{label}</div>
    </div>
  );
}

function PillarCard({ icon, bg, title, text }) {
  return (
    <div className="card">
      <div className="icon-badge" style={{ background: bg }}>
        {icon}
      </div>
      <h3 className="display" style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 10, color: "#1B3A6B" }}>
        {title}
      </h3>
      <p style={{ fontSize: "0.96rem", lineHeight: 1.65, color: "#4B5667" }}>{text}</p>
    </div>
  );
}

function ContactItem({ icon, label, value, href }) {
  const content = (
    <>
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: "50%",
          background: "#EAF4FB",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 12px",
        }}
      >
        {icon}
      </div>
      <div style={{ fontSize: "0.8rem", color: "#2E9BD6", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 4 }}>
        {label}
      </div>
      <div style={{ fontSize: "0.96rem", color: "#1F2937", fontWeight: 600 }}>{value}</div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        style={{ display: "block", textDecoration: "none" }}
      >
        {content}
      </a>
    );
  }

  return <div>{content}</div>;
}

function FooterLink({ href, onClick, children }) {
  return (
    <a
      href={href}
      onClick={onClick}
      style={{
        display: "block",
        fontSize: "0.9rem",
        color: "#9FAEC4",
        textDecoration: "none",
        marginBottom: 10,
      }}
    >
      {children}
    </a>
  );
}

// The official ISHC Foundation logo, served from the public folder.
function LogoMark({ height = 40 }) {
  return (
    <img
      src="/logo.jpeg"
      alt="ISHC Foundation"
      style={{ height, display: "block", width: "auto" }}
    />
  );
}

// Signature element: echoes the logo's globe — concentric arcs suggesting
// global reach and connection, in the brand's blue-to-green gradient.
function GlobeBackground({ offset = 0 }) {
  return (
    <svg
      className="globe-bg"
      viewBox="0 0 1200 700"
      preserveAspectRatio="xMidYMid slice"
      style={{ transform: `translateY(${offset}px)` }}
    >
      <defs>
        <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2E9BD6" />
          <stop offset="100%" stopColor="#6CB33F" />
        </linearGradient>
      </defs>
      <circle cx="980" cy="160" r="260" stroke="url(#arcGrad)" strokeWidth="1.5" fill="none" opacity="0.18" />
      <circle cx="980" cy="160" r="200" stroke="url(#arcGrad)" strokeWidth="1.5" fill="none" opacity="0.15" />
      <circle cx="980" cy="160" r="140" stroke="url(#arcGrad)" strokeWidth="1.5" fill="none" opacity="0.12" />
    </svg>
  );
}

// Hero art: a globe motif consistent with the brand mark, with a rising arc
// gesturing at the "connect/serve" idea — restrained, not a stock illustration.
function HeroArt() {
  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      <svg viewBox="0 0 460 460" style={{ width: "100%", maxWidth: 420, display: "block", margin: "0 auto" }}>
        <defs>
          <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2E9BD6" />
            <stop offset="100%" stopColor="#6CB33F" />
          </linearGradient>
        </defs>
        <circle cx="230" cy="230" r="190" fill="url(#heroGrad)" opacity="0.12" />
        <circle cx="230" cy="230" r="140" fill="url(#heroGrad)" opacity="0.16" />
        <circle cx="230" cy="230" r="95" fill="url(#heroGrad)" />
        <path d="M195,250 c-12,-16 -40,-10 -40,16 c0,24 40,50 75,68 c35,-18 75,-44 75,-68 c0,-26 -28,-32 -40,-16 c-10,14 -20,22 -35,22 c-15,0 -25,-8 -35,-22 z" fill="#FFFFFF" opacity="0.95" />
        <path d="M120,300 C160,260 210,330 260,280 C310,230 350,300 390,260" stroke="#1B3A6B" strokeWidth="3" fill="none" opacity="0.25" strokeLinecap="round" />
      </svg>
    </div>
  );
}
