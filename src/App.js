import React, { useState } from "react";

const ArrowUpRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const HandLogo = ({ className }) => (
  <img
    src="https://ik.imagekit.io/6iz6c073z/Png%20sem%20fundo/Nome1.png?updatedAt=1750806629889"
    alt="Hand Agency Logo"
    className={`h-20 w-auto transform transition-transform duration-300 hover:scale-105 ${className}`}
    onError={(e) => {
      e.target.onerror = null;
      e.target.src = "https://placehold.co/150x40/efefef/black?text=Logo";
    }}
  />
);

const translations = {
  pt: {
    location: "SÃO PAULO • RIO DE JANEIRO",
    whatWeDo: "O QUE FAZEMOS",
    education: "EDUCAÇÃO",
    contact: "CONTATO",
    heroTitle: "HAND é uma agência de branding ESG",
    heroParagraph:
      "Construímos posicionamento, linguagem e estrutura de marca com estratégia, criatividade e coerência. Nosso trabalho é guiado por critérios claros: ambientais, sociais e de governança (ESG), alinhando identidade e resultado de forma objetiva.",
    servicesTitle: "o que fazemos",
    service1Title: "Consultoria e análise ESG",
    service2Title: "Eventos",
    service3Title: "Construção e estratégia de marca",
    service4Title: "Projetos Criativos",
    service5Title: "Produção de conteúdo e educacional",
    serviceTagBranding: "BRANDING",
    serviceTagService: "SERVIÇO",
    educationTitle: "educação também faz parte do nosso universo",
    educationParagraph:
      "Acreditamos no conhecimento como caminho para a transformação. Educação não é acessório, é essência. Marcas que ensinam, inspiram e geram valor sao marcas que permanecem.",
    watchCourse: "assista nosso curso",
    esgSlogan: "ESGwashing é cafona e a gente tem bom gosto",
    footerLocation: "São Paulo e Rio de Janeiro",
    footerContact: "CONTATO",
    footerGreeting: "have a nice day"
  },
  en: {
    location: "SÃO PAULO • RIO DE JANEIRO",
    whatWeDo: "WHAT WE DO",
    education: "EDUCATION",
    contact: "CONTACT",
    heroTitle: "HAND is an ESG branding agency",
    heroParagraph:
      "We build positioning, language, and brand structure with strategy, creativity, and coherence. Our work is guided by clear criteria: environmental, social, and governance (ESG), aligning identity and results objectively.",
    servicesTitle: "what we do",
    service1Title: "ESG consulting and analysis",
    service2Title: "Events",
    service3Title: "Brand building and strategy",
    service4Title: "Creative Projects",
    service5Title: "Content and educational production",
    serviceTagBranding: "BRANDING",
    serviceTagService: "SERVICE",
    educationTitle: "education is also part of our universe",
    educationParagraph:
      "We believe in knowledge as the path to transformation. Education is not an accessory, it is essence. Brands that teach, inspire, and generate value are brands that remain.",
    watchCourse: "watch our course",
    esgSlogan: "ESGwashing is tacky and we have good taste",
    footerLocation: "São Paulo and Rio de Janeiro",
    footerContact: "CONTACT",
    footerGreeting: "have a nice day"
  }
};

export default function App() {
  const [language, setLanguage] = useState("pt");
  const t = translations[language] || translations.pt;

  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { key: "location", className: "text-gray-500 text-xs", target: "hero" },
    { key: "whatWeDo", className: "text-black", target: "services" },
    { key: "education", className: "text-black", target: "education" },
    { key: "contact", className: "text-black", target: "footer" },
  ];

  const serviceCards = [
    { id: 1, titleKey: "service1Title", tags: ["serviceTagBranding", "serviceTagService"], bgColor: "bg-[#d9d9d9]" },
    { id: 2, titleKey: "service2Title", tags: ["serviceTagBranding", "serviceTagService"], bgColor: "bg-[#ff4d4d]" },
    { id: 3, titleKey: "service3Title", tags: ["serviceTagBranding", "serviceTagService"], bgColor: "bg-[#d9d9d9]" },
    { id: 4, titleKey: "service4Title", tags: ["serviceTagBranding", "serviceTagService"], bgColor: "bg-[#ff4d4d]" },
    { id: 5, titleKey: "service5Title", tags: ["serviceTagBranding", "serviceTagService"], bgColor: "bg-[#d9d9d9]" },
  ];

  return (
    <div className="bg-[#F9F9F7] min-h-screen font-sans text-black">
      <div className="container mx-auto px-4 md:px-8">
        <header className="flex justify-between items-center py-6">
          <HandLogo />
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.target)}
                className={`text-sm font-medium tracking-wider ${item.className}`}
              >
                {t[item.key]}
              </button>
            ))}
            <button
              onClick={toggleLanguage}
              className="bg-gray-200 text-black font-bold py-2 px-4 rounded-full transition-colors hover:bg-gray-300"
            >
              {language === "pt" ? "EN" : "PT"}
            </button>
          </nav>
        </header>

        {/* Hero Section */}
        <section id="hero" className="grid grid-cols-1 md:grid-cols-2 items-center bg-white">
          <div className="bg-[#EFE7DA] flex justify-center items-center py-20 md:py-32">
            <img
              src="https://ik.imagekit.io/6iz6c073z/Png%20sem%20fundo/Logo1.png?updatedAt=1750806629388"
              alt="Logo da Hand"
              className="w-64 md:w-80 transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="p-8 md:pl-20 md:pr-8 text-right">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tighter">
              {t.heroTitle}
            </h1>
            <p className="mt-8 text-lg text-gray-700 max-w-xl font-bold ml-auto">
              {t.heroParagraph}
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <h2 className="text-center text-5xl font-bold mb-12 tracking-tighter">
            {t.servicesTitle}
          </h2>
          <div className="flex overflow-x-auto space-x-6 pb-4 -mx-4 px-4">
            {serviceCards.map((card) => (
              <div
                key={card.id}
                className={`group flex-shrink-0 w-[300px] h-[420px] rounded-lg p-6 flex flex-col justify-between ${card.bgColor} transition-transform hover:scale-105 shadow-md`}
              >
                <div>
                  <div className="flex space-x-2">
                    {card.tags.map((tagKey, idx) => (
                      <span
                        key={idx}
                        className="border border-black text-black text-xs font-semibold px-2 py-1 rounded-full"
                      >
                        {t[tagKey]}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-bold mt-4 leading-tight tracking-tight whitespace-pre-line">
                    {t[card.titleKey].replace(" e ", " e")}
                  </h3>
                </div>
                <div className="self-end">
                  <div className="w-12 h-12 border border-black rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                    <ArrowUpRightIcon />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="text-center py-20 md:py-32">
          <h2 className="text-5xl md:text-6xl font-bold max-w-4xl mx-auto leading-tight tracking-tighter">
            {t.educationTitle}
          </h2>
          <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
            {t.educationParagraph}
          </p>
          <div className="mt-10">
            <button className="bg-[#EAEAEA] text-black font-semibold py-4 px-8 rounded-full inline-flex items-center space-x-2 transition-transform hover:scale-105">
              <span>{t.watchCourse}</span>
              <ArrowUpRightIcon />
            </button>
          </div>
          <div className="mt-16 px-4">
            <p className="text-3xl md:text-4xl font-semibold text-gray-900 border-t border-b border-gray-300 py-6 px-4 inline-block tracking-wide">
              {t.esgSlogan}
            </p>
          </div>
        </section>

        <hr className="border-gray-300" />

        {/* Footer Section */}
        <footer id="footer" className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <HandLogo />
              <p className="font-medium">{t.footerLocation}</p>
            </div>
            <div className="md:text-right">
              <p className="font-bold">{t.footerContact}</p>
              <a href="mailto:oi@hand.ag" className="block hover:underline">
                oi@hand.ag
              </a>
              <a href="tel:+5511985682373" className="block hover:underline">
                +55 11 98568-2373
              </a>
            </div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-8xl md:text-9xl lg:text-[150px] font-bold tracking-tighter break-words">
              {t.footerGreeting}
            </h3>
          </div>
        </footer>
      </div>
    </div>
  );
}