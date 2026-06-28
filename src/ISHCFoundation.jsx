import React, { useEffect, useRef, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  HeartPulse,
  Stethoscope,
  Users,
  Leaf,
  Sparkles,
  Instagram,
  Sprout,
  BookOpen,
  Image as ImageIcon,
  ShieldCheck,
  HandCoins,
  HeartHandshake,
  Newspaper,
  FileCheck2,
  Clock,
} from "lucide-react";

// ISHC Foundation — full multi-section single-page site (v4)
// Sections: Home, About, Our Work, Gallery, Transparency, Donate, Volunteer, Blog/News
// Palette derived from the official logo: navy / sky-blue / leaf-green.

const LOGO_SRC = "data:image/jpeg;base64,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";

const translations = {
  en: {
    navHome: "Home",
    navAbout: "About",
    navWork: "Our Work",
    navGallery: "Gallery",
    navTransparency: "Transparency",
    navDonate: "Donate",
    navVolunteer: "Volunteer",
    navBlog: "Blog",
    navContact: "Contact",
    navCta: "Get in Touch",

    eyebrowHero: "सेवा • शिक्षा • पर्यावरण • मानवता",
    heroSanskrit: "वसुधैव कुटुम्बकम्",
    heroSanskritSub: "\u201cThe whole world is one family.\u201d",
    heroTitle: "Health, dignity, and care for every community we reach.",
    heroBody:
      "ISHC Foundation works across health, education, animal welfare, and the environment — bringing low-cost healthcare, awareness, and relief support to people who need it most, especially in rural and underserved communities.",
    heroDonate: "Donate",
    heroVolunteer: "Join as Volunteer",
    heroNote: "Donation and volunteering are set up directly through our team for now — both buttons take you to our contact details.",
    statCamps: "Health camps held",
    statClinics: "Partner clinics & centers",
    statVillages: "Villages reached",
    statYears: "Years of grassroots service",

    noticeText:
      "ISHC Foundation was formally registered in December 2025. Before that, our team spent several years doing voluntary social work in education, environment, health, and public welfare. Some activities shown on this website are from that pre-registration period of service.",

    eyebrowAbout: "About Us",
    aboutStoryTitle: "Our Story",
    aboutStoryBody:
      "Long before ISHC Foundation existed on paper, its founding team was already showing up — at health camps, in classrooms, on riverbanks during clean-up drives. The Foundation was registered in December 2025 to formalize and scale work that had already been happening on the ground for years.",
    aboutPurposeTitle: "Why We Were Founded",
    aboutPurposeBody:
      "We saw the same gap again and again: people who needed care, education, or basic support couldn't always find an organized, trustworthy way to access it. ISHC Foundation exists to close that gap — with structure, accountability, and people who stay involved for the long run.",
    aboutFounderTitle: "Founder's Message",
    aboutFounderBody:
      "\u201cWe didn't start this Foundation to chase numbers. We started it because we'd already spent years showing up for our communities, and we wanted to do it properly — with the structure, transparency, and reach that real, lasting service deserves.\u201d",
    aboutFounderName: "— Founding Team, ISHC Foundation",
    visionTitle: "Vision",
    visionBody: "A society where health, education, and dignity reach every person, regardless of where they're born.",
    missionTitle: "Mission",
    missionBody: "To deliver accessible healthcare, education, and welfare support directly to underserved communities, in partnership with government bodies, NGOs, and CSR partners.",
    valuesCardTitle: "Values",
    valuesCardBody: "Inspire · Serve · Heal · Connect — service without discrimination, transparency in every action, and consistency over grand gestures.",

    eyebrowPillars: "Our Work",
    pillarsTitle: "What we do",
    pillarsSubtitle: "Each rooted in our founding charitable objectives.",
    pillarEnvTitle: "🌱 Environment",
    pillarEnvBody: "Tree plantation, water conservation, waste management, and biodiversity programs run with local communities.",
    pillarEduTitle: "📚 Education",
    pillarEduBody: "Basic education support, learning materials, and knowledge-discussion seminars (ज्ञान-विमर्श संगोष्ठी) for students and communities.",
    pillarHealthTitle: "🩺 Health",
    pillarHealthBody: "Low-cost clinics, health check-up camps, vaccination drives, blood donation camps, and maternal & child health initiatives.",
    pillarSevaTitle: "🤝 Human Service (मानव सेवा)",
    pillarSevaBody: "Food, clothing, shelter, and relief support for the poor and underprivileged, plus animal welfare and rescue work.",
    pillarSeedTitle: "🪴 Seed Distribution Drive",
    pillarSeedBody: "Bīj Vitran Abhiyān — distributing seeds and saplings to encourage local greening and self-sufficiency.",
    pillarSeminarTitle: "Knowledge Discussion Seminars",
    pillarSeminarBody: "Gyaan-Vimarsh Sangoshthi — community seminars on health awareness, nutrition, yoga, and wellness.",

    eyebrowGallery: "Gallery",
    galleryTitle: "Our work, in pictures",
    galleryComingSoon: "Coming soon",
    galleryBody: "We're putting together photos from our health camps, plantation drives, and community programs. Check back soon.",

    eyebrowTransparency: "Transparency",
    transparencyTitle: "What we'll always show you",
    transparencyIntro:
      "We believe trust is earned through openness, not claims. As our documentation comes together, we'll publish it here — registration certificates, tax approvals, annual reports, audits, and exactly how donations are used.",
    transparencyStatusTitle: "Current legal status",
    transparencyEntityName: "ISHC FOUNDATION",
    transparencyEntityType: "Registered Section 8 Company · Non-Profit Organisation",
    transparency12ATitle: "12A Registration (URN)",
    transparency12ANumber: "AAICI5364AE20261",
    transparency80GTitle: "80G Approval (URN)",
    transparency80GNumber: "AAICI5364AF20261",
    transparencyTimelineTitle: "Timeline",
    transparencyTimelineDec2025: "December 2025 — Foundation registered as a Section 8 Company",
    transparencyInProgressTitle: "In progress",
    transparencyInProgressBody: "CSR-1 registration, FCRA registration, audited annual reports, and donation utilization reports are all in progress and will be published here as they're completed.",
    transparencyDocsTitle: "Documents (coming soon)",
    docRegCert: "Registration Certificate",
    docPAN: "PAN",
    docAnnualReport: "Annual Report",
    docAuditReport: "Audit Report",
    docDonationUtil: "Donation Utilization Report",

    eyebrowDonate: "Donate",
    donateTitle: "Support our work",
    donateBody: "We're setting up our online donation system (QR code, UPI, and bank transfer details) — for now, please reach out to us directly and our team will guide you.",
    donateThanks: "Whatever you're able to give, thank you — every contribution helps us reach one more family, one more child, one more village.",

    eyebrowVolunteer: "Volunteer",
    volunteerTitle: "Join us as a volunteer",
    volunteerBody: "We're building our formal volunteer onboarding process. Until it's ready, the fastest way to join us is to reach out directly — tell us a little about yourself and where you'd like to help.",

    eyebrowBlog: "Blog / News",
    blogTitle: "Stories from the field",
    blogComingSoon: "Coming soon",
    blogBody: "We'll be publishing reports from every program and event here — health camps, plantation drives, seminars, and more.",

    contactTitle: "We're here when you need us.",
    contactBody: "Reach out — whether you want to volunteer, donate, partner with us, or bring a program to your community.",
    contactCall: "Call us",
    contactEmail: "Email us",
    contactInstagram: "Follow us",
    contactVisit: "Visit us",

    footerTagline: "सेवा • शिक्षा • पर्यावरण • मानवता — health, welfare, and care for every community.",
    footerSite: "Site",
    footerReach: "Reach us",
    footerRights: "All rights reserved.",
  },
  hi: {
    navHome: "होम",
    navAbout: "हमारे बारे में",
    navWork: "हमारा कार्य",
    navGallery: "गैलरी",
    navTransparency: "पारदर्शिता",
    navDonate: "दान करें",
    navVolunteer: "स्वयंसेवक",
    navBlog: "ब्लॉग",
    navContact: "संपर्क करें",
    navCta: "संपर्क करें",

    eyebrowHero: "सेवा • शिक्षा • पर्यावरण • मानवता",
    heroSanskrit: "वसुधैव कुटुम्बकम्",
    heroSanskritSub: "\u201cसारा विश्व एक परिवार है।\u201d",
    heroTitle: "हर समुदाय तक स्वास्थ्य, सम्मान और देखभाल।",
    heroBody:
      "ISHC फाउंडेशन स्वास्थ्य, शिक्षा, पशु कल्याण और पर्यावरण के क्षेत्र में काम करता है — कम लागत वाली स्वास्थ्य सेवा, जागरूकता और राहत सहायता उन लोगों तक पहुँचाते हैं जिन्हें इसकी सबसे ज़्यादा ज़रूरत है, खासकर ग्रामीण और वंचित समुदायों में।",
    heroDonate: "दान करें",
    heroVolunteer: "स्वयंसेवक बनें",
    heroNote: "दान और स्वयंसेवा अभी हमारी टीम के माध्यम से सीधे होती है — दोनों बटन आपको हमारे संपर्क विवरण तक ले जाएंगे।",
    statCamps: "आयोजित स्वास्थ्य शिविर",
    statClinics: "सहयोगी क्लीनिक और केंद्र",
    statVillages: "गाँवों तक पहुँच",
    statYears: "जमीनी सेवा के वर्ष",

    noticeText:
      "ISHC Foundation का औपचारिक पंजीकरण दिसंबर 2025 में हुआ। इसके पूर्व हमारी टीम पिछले कई वर्षों से शिक्षा, पर्यावरण, स्वास्थ्य एवं जनसेवा के क्षेत्र में स्वैच्छिक सामाजिक कार्य करती रही है। इस वेबसाइट पर प्रदर्शित कुछ गतिविधियाँ पंजीकरण-पूर्व सामाजिक सेवा कार्यों की हैं।",

    eyebrowAbout: "हमारे बारे में",
    aboutStoryTitle: "हमारी कहानी",
    aboutStoryBody:
      "ISHC फाउंडेशन के कागज़ पर अस्तित्व में आने से बहुत पहले, इसकी संस्थापक टीम पहले से ही मौजूद थी — स्वास्थ्य शिविरों में, कक्षाओं में, सफाई अभियानों के दौरान नदी किनारे। फाउंडेशन को दिसंबर 2025 में पंजीकृत किया गया, उस काम को औपचारिक रूप देने और बढ़ाने के लिए जो वर्षों से ज़मीन पर हो रहा था।",
    aboutPurposeTitle: "स्थापना का उद्देश्य",
    aboutPurposeBody:
      "हमने बार-बार एक ही कमी देखी: जिन लोगों को देखभाल, शिक्षा या बुनियादी सहायता की ज़रूरत थी, उन्हें हमेशा एक संगठित, भरोसेमंद रास्ता नहीं मिल पाता था। ISHC फाउंडेशन इस कमी को पाटने के लिए है — संरचना, जवाबदेही, और लोगों के साथ जो लंबे समय तक जुड़े रहें।",
    aboutFounderTitle: "संस्थापक का संदेश",
    aboutFounderBody:
      "\u201cहमने यह फाउंडेशन आंकड़ों के पीछे भागने के लिए शुरू नहीं किया। हमने इसे शुरू किया क्योंकि हम पहले से ही वर्षों से अपने समुदायों के लिए मौजूद थे, और हम इसे सही तरीके से करना चाहते थे — उस संरचना, पारदर्शिता और पहुँच के साथ जिसकी सच्ची, टिकाऊ सेवा हकदार है।\u201d",
    aboutFounderName: "— संस्थापक टीम, ISHC फाउंडेशन",
    visionTitle: "विज़न",
    visionBody: "एक ऐसा समाज जहाँ स्वास्थ्य, शिक्षा और सम्मान हर व्यक्ति तक पहुँचे, चाहे वह कहीं भी जन्मा हो।",
    missionTitle: "मिशन",
    missionBody: "सरकारी संस्थाओं, एनजीओ, और सीएसआर साझेदारों के साथ मिलकर, वंचित समुदायों तक सीधे सुलभ स्वास्थ्य सेवा, शिक्षा और कल्याण सहायता पहुँचाना।",
    valuesCardTitle: "मूल्य",
    valuesCardBody: "प्रेरित करें · सेवा करें · उपचार करें · जोड़ें — बिना भेदभाव सेवा, हर कार्य में पारदर्शिता, और बड़े दिखावे से ज़्यादा निरंतरता।",

    eyebrowPillars: "हमारा कार्य",
    pillarsTitle: "हम क्या करते हैं",
    pillarsSubtitle: "हर एक हमारे संस्थापक चैरिटेबल उद्देश्यों में निहित है।",
    pillarEnvTitle: "🌱 पर्यावरण",
    pillarEnvBody: "स्थानीय समुदायों के साथ वृक्षारोपण, जल संरक्षण, अपशिष्ट प्रबंधन, और जैव विविधता कार्यक्रम।",
    pillarEduTitle: "📚 शिक्षा",
    pillarEduBody: "बुनियादी शिक्षा सहायता, अध्ययन सामग्री, और छात्रों व समुदायों के लिए ज्ञान-विमर्श संगोष्ठी।",
    pillarHealthTitle: "🩺 स्वास्थ्य",
    pillarHealthBody: "कम लागत वाले क्लीनिक, स्वास्थ्य जांच शिविर, टीकाकरण अभियान, रक्तदान शिविर, और मातृ एवं शिशु स्वास्थ्य पहल।",
    pillarSevaTitle: "🤝 मानव सेवा",
    pillarSevaBody: "गरीब और वंचित लोगों के लिए भोजन, कपड़े, आश्रय, और राहत सहायता, साथ ही पशु कल्याण और बचाव कार्य।",
    pillarSeedTitle: "🪴 बीज वितरण अभियान",
    pillarSeedBody: "स्थानीय हरियाली और आत्मनिर्भरता को बढ़ावा देने के लिए बीज और पौधों का वितरण।",
    pillarSeminarTitle: "ज्ञान-विमर्श संगोष्ठी",
    pillarSeminarBody: "स्वास्थ्य जागरूकता, पोषण, योग, और कल्याण पर सामुदायिक संगोष्ठियाँ।",

    eyebrowGallery: "गैलरी",
    galleryTitle: "हमारा कार्य, तस्वीरों में",
    galleryComingSoon: "जल्द आ रहा है",
    galleryBody: "हम अपने स्वास्थ्य शिविरों, वृक्षारोपण अभियानों, और सामुदायिक कार्यक्रमों की तस्वीरें इकट्ठा कर रहे हैं। कृपया जल्द ही फिर देखें।",

    eyebrowTransparency: "पारदर्शिता",
    transparencyTitle: "जो हम हमेशा आपको दिखाएंगे",
    transparencyIntro:
      "हम मानते हैं कि विश्वास खुलेपन से कमाया जाता है, दावों से नहीं। जैसे-जैसे हमारे दस्तावेज़ तैयार होंगे, हम उन्हें यहाँ प्रकाशित करेंगे — पंजीकरण प्रमाणपत्र, कर अनुमोदन, वार्षिक रिपोर्ट, ऑडिट, और दान का उपयोग कैसे होता है।",
    transparencyStatusTitle: "वर्तमान कानूनी स्थिति",
    transparencyEntityName: "ISHC FOUNDATION",
    transparencyEntityType: "रजिस्टर्ड सेक्शन 8 कंपनी · नॉन-प्रॉफिट संगठन",
    transparency12ATitle: "12A रजिस्ट्रेशन (URN)",
    transparency12ANumber: "AAICI5364AE20261",
    transparency80GTitle: "80G अप्रूवल (URN)",
    transparency80GNumber: "AAICI5364AF20261",
    transparencyTimelineTitle: "समयरेखा",
    transparencyTimelineDec2025: "दिसंबर 2025 — फाउंडेशन सेक्शन 8 कंपनी के रूप में पंजीकृत",
    transparencyInProgressTitle: "प्रगति में",
    transparencyInProgressBody: "CSR-1 रजिस्ट्रेशन, FCRA रजिस्ट्रेशन, ऑडिटेड वार्षिक रिपोर्ट, और दान उपयोग रिपोर्ट सभी प्रगति में हैं और पूर्ण होने पर यहाँ प्रकाशित की जाएंगी।",
    transparencyDocsTitle: "दस्तावेज़ (जल्द आ रहे हैं)",
    docRegCert: "पंजीकरण प्रमाणपत्र",
    docPAN: "पैन",
    docAnnualReport: "वार्षिक रिपोर्ट",
    docAuditReport: "ऑडिट रिपोर्ट",
    docDonationUtil: "दान उपयोग रिपोर्ट",

    eyebrowDonate: "दान करें",
    donateTitle: "हमारे काम का समर्थन करें",
    donateBody: "हम अपनी ऑनलाइन दान प्रणाली (QR कोड, UPI, और बैंक ट्रांसफर विवरण) तैयार कर रहे हैं — अभी के लिए, कृपया सीधे हमसे संपर्क करें और हमारी टीम आपका मार्गदर्शन करेगी।",
    donateThanks: "आप जो भी दे सकें, धन्यवाद — हर योगदान हमें एक और परिवार, एक और बच्चे, एक और गाँव तक पहुँचने में मदद करता है।",

    eyebrowVolunteer: "स्वयंसेवक",
    volunteerTitle: "स्वयंसेवक के रूप में जुड़ें",
    volunteerBody: "हम अपनी औपचारिक स्वयंसेवक प्रक्रिया तैयार कर रहे हैं। जब तक यह तैयार न हो, हमसे जुड़ने का सबसे तेज़ तरीका है सीधे संपर्क करना — हमें अपने बारे में और आप कहाँ मदद करना चाहेंगे, बताएं।",

    eyebrowBlog: "ब्लॉग / न्यूज़",
    blogTitle: "मैदान से कहानियाँ",
    blogComingSoon: "जल्द आ रहा है",
    blogBody: "हम यहाँ हर कार्यक्रम और आयोजन की रिपोर्ट प्रकाशित करेंगे — स्वास्थ्य शिविर, वृक्षारोपण अभियान, संगोष्ठियाँ, और अधिक।",

    contactTitle: "जब आपको ज़रूरत हो, हम यहाँ हैं।",
    contactBody: "संपर्क करें — चाहे आप स्वयंसेवा करना चाहें, दान करना चाहें, हमारे साथ साझेदारी करना चाहें, या अपने समुदाय में कोई कार्यक्रम लाना चाहें।",
    contactCall: "हमें कॉल करें",
    contactEmail: "हमें ईमेल करें",
    contactInstagram: "हमें फॉलो करें",
    contactVisit: "हमसे मिलें",

    footerTagline: "सेवा • शिक्षा • पर्यावरण • मानवता — हर समुदाय के लिए स्वास्थ्य, कल्याण और देखभाल।",
    footerSite: "साइट",
    footerReach: "हमसे जुड़ें",
    footerRights: "सर्वाधिकार सुरक्षित।",
  },
};

export default function ISHCFoundation() {
  const [scrollY, setScrollY] = useState(0);
  const [lang, setLang] = useState("hi");
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

  const navItems = [
    { id: "home", label: t.navHome },
    { id: "about", label: t.navAbout },
    { id: "work", label: t.navWork },
    { id: "gallery", label: t.navGallery },
    { id: "transparency", label: t.navTransparency },
    { id: "donate", label: t.navDonate },
    { id: "volunteer", label: t.navVolunteer },
    { id: "blog", label: t.navBlog },
    { id: "contact", label: t.navContact },
  ];

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
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&family=Source+Sans+3:wght@400;500;600;700&family=Noto+Sans+Devanagari:wght@500;600;700&display=swap');

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        .display {
          font-family: 'Manrope', 'Noto Sans Devanagari', sans-serif;
          letter-spacing: -0.01em;
        }
        .devanagari {
          font-family: 'Noto Sans Devanagari', 'Manrope', sans-serif;
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
          font-size: 0.9rem;
          padding: 4px 0;
          white-space: nowrap;
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
          flex-shrink: 0;
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

        .pill-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #EAF4FB;
          color: #1B3A6B;
          font-weight: 700;
          font-size: 0.8rem;
          padding: 6px 14px;
          border-radius: 999px;
          border: 1px solid rgba(46,155,214,0.25);
        }

        .doc-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          background: #FFFFFF;
          border-radius: 10px;
          border: 1px solid rgba(27,58,107,0.08);
          margin-bottom: 10px;
        }

        section { position: relative; }

        a:focus-visible, button:focus-visible { outline: 3px solid #2E9BD6; outline-offset: 2px; }

        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }

        @media (max-width: 900px) {
          .nav-links { display: none !important; }
        }

        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .cards-grid { grid-template-columns: 1fr !important; }
          .contact-grid { grid-template-columns: 1fr 1fr !important; }
          .about-grid { grid-template-columns: 1fr !important; }
          .vmv-grid { grid-template-columns: 1fr !important; }
          .transparency-grid { grid-template-columns: 1fr !important; }
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
          background: "rgba(247,249,251,0.96)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid rgba(27,58,107,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            padding: "12px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <a href="#home" onClick={(e) => scrollToId(e, "home")} className="logo-img" style={{ display: "flex", alignItems: "center", height: 42 }}>
            <LogoMark height={42} />
          </a>
          <nav className="nav-links" style={{ display: "flex", gap: 20, alignItems: "center", overflowX: "auto" }}>
            {navItems.slice(0, -1).map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={(e) => scrollToId(e, item.id)} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
            <button
              className="lang-toggle"
              onClick={() => setLang(lang === "en" ? "hi" : "en")}
              aria-label="Switch language / भाषा बदलें"
            >
              {lang === "en" ? "हिं" : "EN"}
            </button>
            <a href="#contact" onClick={(e) => scrollToId(e, "contact")} className="btn-secondary" style={{ fontSize: "0.88rem", padding: "9px 18px" }}>
              {t.navCta}
            </a>
          </div>
        </div>
      </header>

      {/* REGISTRATION NOTICE BANNER */}
      <div style={{ background: "#EAF4FB", borderBottom: "1px solid rgba(46,155,214,0.2)", padding: "10px 24px" }}>
        <p style={{ maxWidth: 1000, margin: "0 auto", fontSize: "0.82rem", lineHeight: 1.6, color: "#3A4A5E", textAlign: "center" }}>
          {t.noticeText}
        </p>
      </div>

      {/* HOME / HERO */}
      <section id="home" ref={heroRef} style={{ padding: "0", overflow: "hidden" }}>
        <GlobeBackground offset={scrollY * 0.12} />
        <div
          className="hero-grid"
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "70px 24px 70px",
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
              className="devanagari"
              style={{
                color: "#2E9BD6",
                fontWeight: 700,
                fontSize: "1.05rem",
                marginBottom: 8,
              }}
            >
              {t.eyebrowHero}
            </p>
            <p className="display devanagari" style={{ fontSize: "1.4rem", fontWeight: 700, color: "#6CB33F", marginBottom: 4 }}>
              {t.heroSanskrit}
            </p>
            <p style={{ fontSize: "0.95rem", color: "#6B7686", fontStyle: "italic", marginBottom: 26 }}>{t.heroSanskritSub}</p>

            <h1
              className="display"
              style={{
                fontSize: "clamp(2rem, 4.4vw, 3rem)",
                lineHeight: 1.2,
                fontWeight: 800,
                margin: "0 0 22px",
                color: "#1B3A6B",
              }}
            >
              {t.heroTitle}
            </h1>
            <p style={{ fontSize: "1.08rem", lineHeight: 1.7, color: "#4B5667", marginBottom: 30, maxWidth: 540 }}>
              {t.heroBody}
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 14 }}>
              <a href="#contact" onClick={(e) => scrollToId(e, "contact")} className="btn-primary">
                {t.heroDonate} <ArrowRight size={18} />
              </a>
              <a href="#contact" onClick={(e) => scrollToId(e, "contact")} className="btn-secondary">
                {t.heroVolunteer}
              </a>
            </div>
            <p style={{ fontSize: "0.84rem", color: "#8893A3", maxWidth: 480 }}>{t.heroNote}</p>
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
          <Stat number="5+" label={t.statYears} />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "100px 24px", background: "#F7F9FB" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <SectionEyebrow color="#6CB33F">{t.eyebrowAbout}</SectionEyebrow>

          <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, marginBottom: 28 }}>
            <AboutCard title={t.aboutStoryTitle} body={t.aboutStoryBody} />
            <AboutCard title={t.aboutPurposeTitle} body={t.aboutPurposeBody} />
          </div>

          <div
            style={{
              background: "#1B3A6B",
              borderRadius: 16,
              padding: "44px 40px",
              marginBottom: 40,
              color: "#FFFFFF",
            }}
          >
            <h3 className="display" style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: 16, color: "#9CCBE8" }}>
              {t.aboutFounderTitle}
            </h3>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.75, fontStyle: "italic", marginBottom: 16, maxWidth: 800 }}>
              {t.aboutFounderBody}
            </p>
            <p style={{ fontSize: "0.92rem", color: "#9CCBE8", fontWeight: 600 }}>{t.aboutFounderName}</p>
          </div>

          <div className="vmv-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            <VMVCard icon={<Sparkles size={22} color="#FFFFFF" />} bg="#2E9BD6" title={t.visionTitle} body={t.visionBody} />
            <VMVCard icon={<ArrowRight size={22} color="#FFFFFF" />} bg="#6CB33F" title={t.missionTitle} body={t.missionBody} />
            <VMVCard icon={<HeartHandshake size={22} color="#FFFFFF" />} bg="#1B3A6B" title={t.valuesCardTitle} body={t.valuesCardBody} />
          </div>
        </div>
      </section>

      {/* OUR WORK */}
      <section id="work" style={{ padding: "20px 24px 110px", background: "#F7F9FB" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 20 }}>
            <SectionEyebrow color="#C9A227" center>{t.eyebrowPillars}</SectionEyebrow>
            <h2 className="display" style={{ fontSize: "clamp(1.7rem, 3.2vw, 2.3rem)", fontWeight: 800, color: "#1B3A6B", marginBottom: 12, textAlign: "center" }}>
              {t.pillarsTitle}
            </h2>
            <p style={{ color: "#6B7686", fontSize: "1rem", marginBottom: 48, textAlign: "center" }}>{t.pillarsSubtitle}</p>
          </div>

          <div className="cards-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 26 }}>
            <PillarCard icon={<Leaf size={24} color="#FFFFFF" />} bg="#6CB33F" title={t.pillarEnvTitle} text={t.pillarEnvBody} />
            <PillarCard icon={<BookOpen size={24} color="#FFFFFF" />} bg="#2E9BD6" title={t.pillarEduTitle} text={t.pillarEduBody} />
            <PillarCard icon={<HeartPulse size={24} color="#FFFFFF" />} bg="#1B3A6B" title={t.pillarHealthTitle} text={t.pillarHealthBody} />
            <PillarCard icon={<Users size={24} color="#FFFFFF" />} bg="#3F9D63" title={t.pillarSevaTitle} text={t.pillarSevaBody} />
            <PillarCard icon={<Sprout size={24} color="#FFFFFF" />} bg="#6CB33F" title={t.pillarSeedTitle} text={t.pillarSeedBody} />
            <PillarCard icon={<Stethoscope size={24} color="#FFFFFF" />} bg="#2E9BD6" title={t.pillarSeminarTitle} text={t.pillarSeminarBody} />
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" style={{ padding: "90px 24px", background: "linear-gradient(135deg, #1B3A6B 0%, #1F6FA8 55%, #4FA84C 100%)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", color: "#FFFFFF" }}>
          <ImageIcon size={32} color="#FFFFFF" style={{ marginBottom: 16, opacity: 0.9 }} />
          <p style={{ fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", fontSize: "0.8rem", opacity: 0.85, marginBottom: 10 }}>
            {t.eyebrowGallery}
          </p>
          <h2 className="display" style={{ fontSize: "clamp(1.6rem, 3vw, 2.1rem)", fontWeight: 800, marginBottom: 14 }}>
            {t.galleryTitle}
          </h2>
          <span className="pill-badge" style={{ background: "rgba(255,255,255,0.15)", color: "#FFFFFF", border: "1px solid rgba(255,255,255,0.3)" }}>
            <Clock size={14} /> {t.galleryComingSoon}
          </span>
          <p style={{ fontSize: "1.02rem", lineHeight: 1.7, opacity: 0.92, maxWidth: 520, margin: "18px auto 0" }}>
            {t.galleryBody}
          </p>
        </div>
      </section>

      {/* TRANSPARENCY */}
      <section id="transparency" style={{ padding: "100px 24px", background: "#F7F9FB" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <SectionEyebrow color="#2E9BD6" center>{t.eyebrowTransparency}</SectionEyebrow>
          <h2 className="display" style={{ fontSize: "clamp(1.7rem, 3.2vw, 2.3rem)", fontWeight: 800, color: "#1B3A6B", marginBottom: 16, textAlign: "center" }}>
            {t.transparencyTitle}
          </h2>
          <p style={{ color: "#4B5667", fontSize: "1.02rem", lineHeight: 1.7, textAlign: "center", maxWidth: 720, margin: "0 auto 48px" }}>
            {t.transparencyIntro}
          </p>

          <div
            style={{
              background: "#FFFFFF",
              borderRadius: 16,
              border: "1px solid rgba(27,58,107,0.08)",
              padding: "36px 36px",
              marginBottom: 32,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
              <ShieldCheck size={22} color="#6CB33F" />
              <h3 className="display" style={{ fontSize: "1.1rem", fontWeight: 700, color: "#1B3A6B" }}>
                {t.transparencyStatusTitle}
              </h3>
            </div>
            <p className="display" style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1B3A6B", marginTop: 14 }}>
              {t.transparencyEntityName}
            </p>
            <p style={{ fontSize: "0.95rem", color: "#6B7686", marginBottom: 24 }}>{t.transparencyEntityType}</p>

            <div className="transparency-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 24 }}>
              <RegNumberCard label={t.transparency12ATitle} number={t.transparency12ANumber} />
              <RegNumberCard label={t.transparency80GTitle} number={t.transparency80GNumber} />
            </div>

            <div style={{ borderTop: "1px solid rgba(27,58,107,0.08)", paddingTop: 20 }}>
              <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1B3A6B", marginBottom: 8 }}>{t.transparencyTimelineTitle}</p>
              <p style={{ fontSize: "0.92rem", color: "#4B5667" }}>{t.transparencyTimelineDec2025}</p>
            </div>
          </div>

          <div
            style={{
              background: "#FFF8E8",
              border: "1px solid rgba(201,162,39,0.25)",
              borderRadius: 16,
              padding: "28px 32px",
              marginBottom: 36,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <Clock size={18} color="#C9A227" />
              <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#8A6D1A" }}>{t.transparencyInProgressTitle}</h4>
            </div>
            <p style={{ fontSize: "0.92rem", color: "#6B5A1F", lineHeight: 1.65 }}>{t.transparencyInProgressBody}</p>
          </div>

          <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1B3A6B", marginBottom: 14 }}>{t.transparencyDocsTitle}</h4>
          <DocRow icon={<FileCheck2 size={18} color="#2E9BD6" />} label={t.docRegCert} />
          <DocRow icon={<FileCheck2 size={18} color="#2E9BD6" />} label={t.docPAN} />
          <DocRow icon={<FileCheck2 size={18} color="#2E9BD6" />} label={t.docAnnualReport} />
          <DocRow icon={<FileCheck2 size={18} color="#2E9BD6" />} label={t.docAuditReport} />
          <DocRow icon={<FileCheck2 size={18} color="#2E9BD6" />} label={t.docDonationUtil} />
        </div>
      </section>

      {/* DONATE */}
      <section id="donate" style={{ padding: "90px 24px", background: "#1B3A6B" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", color: "#FFFFFF" }}>
          <HandCoins size={30} color="#6CB33F" style={{ marginBottom: 16 }} />
          <p style={{ fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", fontSize: "0.8rem", color: "#9CCBE8", marginBottom: 10 }}>
            {t.eyebrowDonate}
          </p>
          <h2 className="display" style={{ fontSize: "clamp(1.6rem, 3vw, 2.1rem)", fontWeight: 800, marginBottom: 18 }}>
            {t.donateTitle}
          </h2>
          <p style={{ fontSize: "1.02rem", lineHeight: 1.7, opacity: 0.92, maxWidth: 560, margin: "0 auto 18px" }}>
            {t.donateBody}
          </p>
          <p style={{ fontSize: "0.96rem", lineHeight: 1.6, opacity: 0.8, maxWidth: 520, margin: "0 auto 30px", fontStyle: "italic" }}>
            {t.donateThanks}
          </p>
          <a href="#contact" onClick={(e) => scrollToId(e, "contact")} className="btn-primary">
            {t.navContact} <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* VOLUNTEER */}
      <section id="volunteer" style={{ padding: "90px 24px", background: "#F7F9FB" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <HeartHandshake size={30} color="#2E9BD6" style={{ marginBottom: 16 }} />
          <SectionEyebrow color="#2E9BD6" center>{t.eyebrowVolunteer}</SectionEyebrow>
          <h2 className="display" style={{ fontSize: "clamp(1.6rem, 3vw, 2.1rem)", fontWeight: 800, color: "#1B3A6B", marginBottom: 18 }}>
            {t.volunteerTitle}
          </h2>
          <p style={{ fontSize: "1.02rem", lineHeight: 1.7, color: "#4B5667", maxWidth: 560, margin: "0 auto 30px" }}>
            {t.volunteerBody}
          </p>
          <a href="#contact" onClick={(e) => scrollToId(e, "contact")} className="btn-primary">
            {t.navContact} <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* BLOG / NEWS */}
      <section id="blog" style={{ padding: "90px 24px", background: "#EAF4FB" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <Newspaper size={30} color="#1B3A6B" style={{ marginBottom: 16 }} />
          <SectionEyebrow color="#1B3A6B" center>{t.eyebrowBlog}</SectionEyebrow>
          <h2 className="display" style={{ fontSize: "clamp(1.6rem, 3vw, 2.1rem)", fontWeight: 800, color: "#1B3A6B", marginBottom: 14 }}>
            {t.blogTitle}
          </h2>
          <span className="pill-badge" style={{ marginBottom: 18 }}>
            <Clock size={14} /> {t.blogComingSoon}
          </span>
          <p style={{ fontSize: "1.02rem", lineHeight: 1.7, color: "#4B5667", maxWidth: 560, margin: "18px auto 0" }}>
            {t.blogBody}
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
            {navItems.slice(0, -1).map((item) => (
              <FooterLink key={item.id} href={`#${item.id}`} onClick={(e) => scrollToId(e, item.id)}>
                {item.label}
              </FooterLink>
            ))}
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

function SectionEyebrow({ children, color, center }) {
  return (
    <p
      style={{
        color,
        fontWeight: 800,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        fontSize: "0.82rem",
        marginBottom: 16,
        textAlign: center ? "center" : "left",
      }}
    >
      {children}
    </p>
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

function AboutCard({ title, body }) {
  return (
    <div className="card">
      <h3 className="display" style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 12, color: "#1B3A6B" }}>
        {title}
      </h3>
      <p style={{ fontSize: "0.98rem", lineHeight: 1.7, color: "#4B5667" }}>{body}</p>
    </div>
  );
}

function VMVCard({ icon, bg, title, body }) {
  return (
    <div className="card">
      <div className="icon-badge" style={{ background: bg }}>
        {icon}
      </div>
      <h3 className="display" style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 10, color: "#1B3A6B" }}>
        {title}
      </h3>
      <p style={{ fontSize: "0.94rem", lineHeight: 1.6, color: "#4B5667" }}>{body}</p>
    </div>
  );
}

function PillarCard({ icon, bg, title, text }) {
  return (
    <div className="card">
      <div className="icon-badge" style={{ background: bg }}>
        {icon}
      </div>
      <h3 className="display" style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 10, color: "#1B3A6B" }}>
        {title}
      </h3>
      <p style={{ fontSize: "0.94rem", lineHeight: 1.65, color: "#4B5667" }}>{text}</p>
    </div>
  );
}

function RegNumberCard({ label, number }) {
  return (
    <div style={{ background: "#F7F9FB", borderRadius: 10, padding: "16px 20px", border: "1px solid rgba(27,58,107,0.06)" }}>
      <p style={{ fontSize: "0.78rem", fontWeight: 700, color: "#2E9BD6", textTransform: "uppercase", letterSpacing: "0.03em", marginBottom: 6 }}>
        {label}
      </p>
      <p className="display" style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1B3A6B", letterSpacing: "0.02em" }}>
        {number}
      </p>
    </div>
  );
}

function DocRow({ icon, label }) {
  return (
    <div className="doc-row">
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {icon}
        <span style={{ fontSize: "0.95rem", color: "#1F2937", fontWeight: 600 }}>{label}</span>
      </div>
      <span className="pill-badge" style={{ fontSize: "0.72rem", padding: "4px 10px" }}>
        <Clock size={12} />
      </span>
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
      src={LOGO_SRC}
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
