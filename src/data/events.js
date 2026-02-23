export const events = [
    {
        id: 1,
        slug: "youthconnekt-forum-2026",
        title: "YouthConnekt Forum 2026",
        title_en: "YouthConnekt Forum 2026",
        title_ar: "منتدى يوث كونيكت 2026",
        date: "2026-05-15",
        time: "08:00",
        endTime: "18:00",
        location: "Palais de la Culture, N'Djamena",
        type: "Forum",
        status: "upcoming",
        description: "Le grand rendez-vous annuel de la jeunesse tchadienne. Panels, ateliers, pitchs de startups et réseautage au programme. Plus de 2000 jeunes attendus pour deux jours d'inspiration et de connexion.",
        description_en: "The major annual meeting of Chadian youth. Panels, workshops, startup pitches and networking. Over 2000 young people expected for two days of inspiration and connection.",
        description_ar: "الموعد السنوي الكبير للشباب التشادي. نقاشات وورش عمل وعروض الشركات الناشئة وتواصل.",
        speakers: [
            { name: "Dr. Amina Mahamat", role: "Ministre de la Jeunesse" },
            { name: "Ibrahim Oumar", role: "CEO, TechChad" },
            { name: "Fatima Al-Rashid", role: "Directrice, UNESCO Tchad" }
        ],
        program: [
            { time: "08:00", activity: "Accueil et enregistrement" },
            { time: "09:00", activity: "Cérémonie d'ouverture officielle" },
            { time: "10:30", activity: "Panel: Les jeunes et l'emploi au Tchad" },
            { time: "12:00", activity: "Pause déjeuner & Networking" },
            { time: "14:00", activity: "Ateliers thématiques (4 tracks)" },
            { time: "16:00", activity: "Pitch de startups — finale" },
            { time: "17:30", activity: "Remise des prix & Clôture" }
        ],
        eventPartners: ["PNUD Tchad", "Union Européenne", "AFD", "Orange Tchad"],
        image: null,
        gallery: [],
        tags: ["forum", "jeunesse", "networking"]
    },
    {
        id: 2,
        slug: "hackathon-digitchad-2026",
        title: "DigitChad Hackathon 2026",
        title_en: "DigitChad Hackathon 2026",
        title_ar: "هاكاثون ديجيت تشاد 2026",
        date: "2026-04-18",
        time: "09:00",
        endTime: "18:00",
        location: "Hub Innovation, N'Djamena",
        type: "Hackathon",
        status: "upcoming",
        description: "48h pour créer des solutions numériques aux défis du Tchad. Santé, agriculture, éducation, mobilité — choisissez votre thématique et innovez ! Prix total : 15 000 000 FCFA.",
        description_en: "48 hours to create digital solutions to Chad's challenges. Health, agriculture, education, mobility — choose your theme and innovate! Total prizes: 15,000,000 FCFA.",
        description_ar: "48 ساعة لابتكار حلول رقمية لتحديات تشاد. الصحة والزراعة والتعليم. المجموع الإجمالي للجوائز 15 مليون فرنك.",
        speakers: [
            { name: "Moussa Kaboré", role: "CTO, AfriTech" },
            { name: "Salwa Hassan", role: "Ingénieure IA, Google Afrique" }
        ],
        program: [
            { time: "Jour 1 09:00", activity: "Lancement et formation des équipes" },
            { time: "Jour 1 12:00", activity: "Début du hackathon" },
            { time: "Jour 2 09:00", activity: "Mentorat intensif" },
            { time: "Jour 2 15:00", activity: "Finales et pitchs" },
            { time: "Jour 2 17:00", activity: "Remise des prix" }
        ],
        eventPartners: ["Microsoft Afrique", "Orange Digital Center", "MTN"],
        image: null,
        gallery: [],
        tags: ["hackathon", "innovation", "numérique"]
    },
    {
        id: 3,
        slug: "atelier-entrepreneuriat-filles-2026",
        title: "Atelier Entrepreneuriat au Féminin",
        title_en: "Women in Entrepreneurship Workshop",
        title_ar: "ورشة ريادة الأعمال للمرأة",
        date: "2026-03-30",
        time: "09:00",
        endTime: "17:00",
        location: "Centre Culturel Français, N'Djamena",
        type: "Atelier",
        status: "upcoming",
        description: "Une journée dédiée aux femmes entrepreneures et à celles qui souhaitent le devenir. Coaching, mise en réseau, témoignages inspirants et accès à des ressources pratiques pour lancer son projet.",
        description_en: "A day dedicated to women entrepreneurs and those who aspire to be. Coaching, networking, inspiring testimonials and access to practical resources to launch your project.",
        description_ar: "يوم مخصص لرائدات الأعمال والنساء اللواتي يطمحن لذلك. تدريب وتواصل وشهادات ملهمة.",
        speakers: [
            { name: "Aïcha Moussa", role: "Fondatrice, Femmes Leaders Tchad" },
            { name: "Clarisse Rassem", role: "CEO, AgroFem SARL" }
        ],
        program: [
            { time: "09:00", activity: "Accueil et café networking" },
            { time: "10:00", activity: "Panel: Parcours d'entrepreneures tchadiennes" },
            { time: "12:00", activity: "Atelier: Business model canvas" },
            { time: "14:00", activity: "Coaching individuel (sessions 20 min)" },
            { time: "16:00", activity: "Pitch court & Réseautage" }
        ],
        eventPartners: ["UN Women", "GIZ", "Chambre de Commerce du Tchad"],
        image: null,
        gallery: [],
        tags: ["femmes", "entrepreneuriat", "atelier"]
    },
    {
        id: 4,
        slug: "forum-emploi-ndjamena-octobre-2025",
        title: "Forum Emploi N'Djamena",
        title_en: "N'Djamena Employment Forum",
        title_ar: "منتدى التوظيف نجامينا",
        date: "2025-10-20",
        time: "08:00",
        endTime: "17:00",
        location: "Radisson Blu, N'Djamena",
        type: "Forum",
        status: "past",
        description: "Le Forum Emploi a réuni 45 entreprises et plus de 1500 jeunes chercheurs d'emploi. Plus de 300 entretiens ont été conduits sur place et 87 offres de stage et d'emploi ont été signées.",
        description_en: "The Employment Forum brought together 45 companies and over 1,500 young job seekers. More than 300 interviews were conducted on site and 87 internship and job offers were signed.",
        description_ar: "جمع منتدى التوظيف 45 شركة وأكثر من 1500 شاب باحث عن عمل. 87 عرض عمل تم التوقيع عليه.",
        speakers: [],
        program: [],
        eventPartners: ["CCIT", "BAD Tchad", "Orange Tchad"],
        image: null,
        gallery: ["/images/events/forum-emploi-1.jpg", "/images/events/forum-emploi-2.jpg"],
        tags: ["emploi", "forum", "recrutement"]
    }
]

export function getEvent(slug) {
    return events.find(e => e.slug === slug)
}

export function getUpcomingEvents(n = 3) {
    return events.filter(e => e.status === 'upcoming').slice(0, n)
}
