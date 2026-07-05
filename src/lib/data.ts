// ─── SITE-WIDE DATA & CONSTANTS ───

export const siteConfig = {
  name: process.env.NEXT_PUBLIC_LAW_FIRM_NAME || "DSP Law Associates",
  attorney: process.env.NEXT_PUBLIC_ATTORNEY_NAME || "V. Vamshi Krishnaa",
  title: "Trusted Legal Representation | DSP Law Associates",
  description: "DSP Law Associates provides premium legal services in corporate law, family law, criminal defense, and more. Schedule your confidential consultation today.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://dsplawassociates.com",
  phone: process.env.NEXT_PUBLIC_ATTORNEY_PHONE || "9963121717",
  phone2: "9246568560",
  email: process.env.NEXT_PUBLIC_ATTORNEY_EMAIL || "Dsplawassociates@zohomail.in",
  emergencyPhone: "9963121717",
  address: process.env.NEXT_PUBLIC_OFFICE_ADDRESS || "Hyderabad, Telangana, India",
  whatsapp: process.env.NEXT_PUBLIC_ATTORNEY_WHATSAPP || "919963121717",
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/dsplawassociates/consultation",
  tawkToId: process.env.NEXT_PUBLIC_TAWKTO_ID || "YOUR_TAWKTO_ID",
  googleMapsEmbed: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0!2d78.4867!3d17.3850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2sin!4v1",
  hours: {
    weekday: "Mon–Fri: 4:00 PM – 8:00 PM (Physical Meeting)",
    saturday: "Online: 10:00 AM – 12:00 PM & 3:00 PM – 8:00 PM",
    sunday: "Sun: By Appointment Only",
  },
  appointmentHours: {
    physical: {
      label: "Physical Meeting",
      days: "Monday – Friday",
      time: "4:00 PM – 8:00 PM",
    },
    online: {
      label: "Online Consultation",
      days: "All Days",
      slots: [
        { time: "10:00 AM – 12:00 PM" },
        { time: "3:00 PM – 8:00 PM" },
      ],
    },
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Pricing", href: "/pricing" },
  { label: "Case Results", href: "/case-results" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const practiceAreas = [
  { slug: "corporate-law", title: "Corporate Law", icon: "Building2", description: "Strategic counsel for businesses of all sizes — formation, mergers, compliance, and governance.", details: "Our corporate law practice provides comprehensive legal solutions for businesses at every stage of growth. From entity formation and corporate governance to mergers and acquisitions, we deliver strategic counsel that protects your interests and drives business success. We work closely with entrepreneurs, startups, and established companies to navigate complex regulatory environments, negotiate commercial transactions, and resolve disputes." },
  { slug: "family-law", title: "Family Law", icon: "Heart", description: "Compassionate representation in divorce, custody, support, and adoption matters.", details: "Family legal matters require both legal expertise and emotional sensitivity. Our family law practice handles divorce and separation, child custody and visitation, spousal and child support, property division, adoption, and prenuptial agreements. We prioritize your family's well-being while aggressively protecting your rights." },
  { slug: "criminal-defense", title: "Criminal Defense", icon: "Shield", description: "Aggressive defense strategies for misdemeanor and felony charges.", details: "When your freedom is at stake, you need an attorney who will fight for you. Our criminal defense practice handles cases ranging from misdemeanors to serious felonies. We provide aggressive, strategic defense while protecting your constitutional rights. From investigation through trial and appeal, we stand by your side." },
  { slug: "property-law", title: "Property Law", icon: "Home", description: "Expert guidance in real estate transactions, disputes, and property rights.", details: "Whether you're buying, selling, leasing, or dealing with property disputes, our real estate attorneys provide comprehensive legal services. We handle residential and commercial transactions, title issues, zoning matters, landlord-tenant disputes, and construction law." },
  { slug: "employment-law", title: "Employment Law", icon: "Briefcase", description: "Protecting employee and employer rights in workplace disputes.", details: "Our employment law practice represents both employers and employees in workplace matters. We handle wrongful termination, discrimination claims, harassment cases, wage disputes, employment contracts, non-compete agreements, and regulatory compliance." },
  { slug: "immigration-law", title: "Immigration Law", icon: "Globe", description: "Navigating visa applications, green cards, and citizenship processes.", details: "Our immigration attorneys help individuals and families navigate the complex immigration system. We handle visa applications, green card petitions, naturalization, asylum cases, deportation defense, and employer-sponsored immigration programs." },
  { slug: "intellectual-property", title: "Intellectual Property", icon: "Lightbulb", description: "Safeguarding your innovations, trademarks, copyrights, and trade secrets.", details: "Protecting your intellectual property is crucial in today's competitive landscape. Our IP practice handles trademark registration and enforcement, copyright protection, patent applications, trade secret litigation, and licensing agreements." },
  { slug: "civil-litigation", title: "Civil Litigation", icon: "Scale", description: "Resolving complex civil disputes through strategic litigation and negotiation.", details: "When disputes cannot be resolved amicably, our litigation team provides aggressive, strategic representation. We handle breach of contract, business torts, partnership disputes, collections, injunctive relief, and appellate advocacy." },
];

export const testimonials = [
  { name: "Sarah Thompson", role: "Business Owner", photo: "/attorney-casual.jpg", rating: 5, review: "DSP Law Associates provided exceptional legal counsel during our corporate restructuring. Their attention to detail and strategic thinking saved our company millions. I cannot recommend them highly enough." },
  { name: "Michael Rodriguez", role: "Real Estate Developer", photo: "/attorney-casual.jpg", rating: 5, review: "Outstanding representation in a complex property dispute. Advocate Vamshi Krishnaa's thorough preparation and courtroom presence led to a favorable settlement. The team is professional and responsive." },
  { name: "Emily Chen", role: "Tech Entrepreneur", photo: "/attorney-casual.jpg", rating: 5, review: "DSP Law Associates handled our intellectual property portfolio with incredible expertise. They secured multiple trademarks and patents efficiently. Their knowledge of IP law is unmatched." },
  { name: "David Williams", role: "Healthcare Executive", photo: "/attorney-casual.jpg", rating: 5, review: "During a critical employment dispute, Advocate Vamshi Krishnaa provided calm, strategic guidance that resolved the matter favorably. Communication throughout the process was exemplary." },
  { name: "Jennifer Martinez", role: "Family Client", photo: "/attorney-casual.jpg", rating: 5, review: "Going through my divorce was incredibly difficult, but DSP Law Associates handled everything with compassion and professionalism. They fought for my rights while keeping my children's best interests first." },
];

export const blogPosts = [
  { slug: "understanding-business-formation", title: "Understanding Business Formation: LLC vs Corporation", excerpt: "Choosing the right business entity is one of the most important decisions an entrepreneur will make. Learn the key differences between LLCs and corporations.", category: "Business Law", date: "2026-05-28", image: "/blog-legal.png", readTime: "5 min read" },
  { slug: "family-law-custody-guide", title: "A Parent's Guide to Child Custody Proceedings", excerpt: "Navigating child custody can be overwhelming. This comprehensive guide covers the types of custody, factors courts consider, and how to protect your parental rights.", category: "Family Law", date: "2026-05-20", image: "/blog-legal.png", readTime: "8 min read" },
  { slug: "protecting-intellectual-property", title: "5 Essential Steps to Protect Your Intellectual Property", excerpt: "In today's digital economy, protecting your intellectual property is more critical than ever. Discover the five essential steps every business owner should take.", category: "IP Law", date: "2026-05-15", image: "/blog-legal.png", readTime: "6 min read" },
  { slug: "employment-law-rights", title: "Know Your Rights: Employee Protections Under Federal Law", excerpt: "Federal employment laws provide crucial protections for workers. Learn about your rights regarding discrimination, wages, safety, and more.", category: "Employment Law", date: "2026-05-10", image: "/blog-legal.png", readTime: "7 min read" },
  { slug: "immigration-visa-updates", title: "2026 Immigration Visa Updates: What You Need to Know", excerpt: "Stay informed about the latest changes to immigration policy, visa processing times, and new pathways to permanent residency.", category: "Immigration", date: "2026-05-05", image: "/blog-legal.png", readTime: "6 min read" },
  { slug: "real-estate-closing-checklist", title: "The Ultimate Real Estate Closing Checklist", excerpt: "Don't let anything slip through the cracks. Our comprehensive closing checklist ensures a smooth real estate transaction from contract to keys.", category: "Property Law", date: "2026-04-28", image: "/blog-legal.png", readTime: "5 min read" },
];

export const faqs = [
  { question: "How much does a consultation cost?", answer: "We offer a complimentary 15-minute initial phone consultation to discuss your legal matter. For in-depth consultations, fees vary based on the complexity of your case. Contact our office for specific pricing." },
  { question: "What areas of law do you practice?", answer: "We practice corporate law, family law, criminal defense, property law, employment law, immigration law, intellectual property, and civil litigation. Our diverse practice areas allow us to serve clients with a wide range of legal needs." },
  { question: "How quickly can I speak to an attorney?", answer: "We strive to respond to all inquiries within 24 hours. For urgent matters, call our office directly at 9963121717 or 9246568560. You can also schedule a consultation through our online booking system." },
  { question: "Do you offer virtual consultations?", answer: "Yes! We offer online consultations from 10:00 AM to 12:00 PM and 3:00 PM to 8:00 PM. Physical meetings are available on weekdays from 4:00 PM to 8:00 PM." },
  { question: "What geographic areas do you serve?", answer: "Our office is located in Hyderabad, Telangana. We serve clients throughout Telangana and Andhra Pradesh, and can handle matters across India. We also offer virtual consultations for remote clients." },
  { question: "How are your fees structured?", answer: "We offer flexible fee arrangements including hourly rates, flat fees, contingency fees, and retainer agreements depending on the nature of your case. We discuss all fee structures transparently during your initial consultation." },
  { question: "What should I bring to my first meeting?", answer: "Please bring any relevant documents related to your legal matter, including contracts, correspondence, court documents, and a list of questions. The more information you provide, the better we can assess your case." },
  { question: "Do you offer payment plans?", answer: "Yes, we understand that legal services can be a significant investment. We offer flexible payment plans and accept various payment methods through our secure payment portal." },
];

export const caseStats = [
  { label: "Cases Won", value: 500, suffix: "+" },
  { label: "Years Experience", value: 20, suffix: "+" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
  { label: "Awards & Recognitions", value: 25, suffix: "+" },
];

export const locations = [
  { city: "Hyderabad", slug: "hyderabad", address: "Hyderabad, Telangana – 500056", phone: "9963121717", description: "Our main office in Hyderabad serves clients throughout Telangana and Andhra Pradesh." },
];

// ─── RESUME / PROFILE DATA ───

export const advocateProfile = {
  name: "V. Vamshi Krishnaa",
  headline: "Head – Customer Finance | EV & Mobility | Banking & NBFC Ecosystem Leader",
  summary: "Dynamic finance and sales professional with extensive experience in retail finance and customer finance solutions, targeting to leverage expertise in the auto finance industry, particularly in commercial vehicle and tractor financing, within a Hyderabad-based organization.",
  email: "vjvamsee@gmail.com",
  phone: "+91-9966022444",
  dateOfBirth: "July 16, 1982",
  languages: ["English", "Hindi", "Telugu"],
  address: "Hyderabad, Telangana – 500056",
};

export const profileSummaryPoints = [
  "Extensive Industry Experience: Gained nearly 20 years of progressive experience in the finance sector, with deep expertise in retail finance, customer financing solutions, and channel management.",
  "Strategic Leadership Role: Currently working as Head – Customer Finance & Insurance at Blue Energy Motors Limited, leading enterprise-wide initiatives to strengthen financing ecosystems for electric mobility and sustainable solutions.",
  "Multi-Vertical Domain Expertise: Demonstrates comprehensive exposure across NBFCs, banking, captive finance, and OEM ecosystems, with hands-on experience in commercial vehicles, construction equipment, tractors, two-wheelers, and passenger vehicles.",
  "Large-Scale Team Leadership: Proven track record of managing and scaling high-performing teams of 30+ professionals, driving productivity, accountability, and sustained performance excellence.",
  "Business Transformation & Market Impact: Spearheaded the design and launch of innovative financing programs, achieving 80% retail penetration and enhancing customer acquisition and retention metrics.",
  "Entrepreneurial & Build-from-Scratch Capability: Played a pivotal role in establishing finance ecosystems from the ground up in startup environments, including onboarding 15+ banks, NBFCs, and new-age financiers prior to product launch.",
  "Regulatory & Risk Governance Expertise: Possesses strong command over regulatory compliance frameworks in finance and insurance operations, ensuring adherence to multi-state regulatory requirements and maintaining robust portfolio quality.",
  "Strategic Partnership & Ecosystem Expansion: Recognized for onboarding high-value strategic stakeholders and expanding partner ecosystems, contributing to measurable business growth and long-term alliance building.",
  "Customer-Centric Innovation & Future Readiness: Exhibits strong capability in designing customer-focused financing solutions aligned with evolving market trends, particularly in electric vehicles and alternative fuel ecosystems.",
];

export const coreCompetencies = [
  "Retail Finance Strategy",
  "Customer Acquisition & Conversion",
  "Channel & Distribution Management",
  "Sustainable Mobility Financing",
  "Financial Operations & Portfolio Management",
  "Market Expansion & Growth Strategy",
  "Strategic Partnerships & Stakeholder Management",
  "Regulatory Compliance & Governance",
  "Innovative Financing Solutions",
  "Team Leadership & Performance Optimization",
  "Problem Solving & Decision Making",
  "Customer Experience & Relationship Management",
];

export const softSkills = [
  "Strategic Leadership",
  "Stakeholder Management",
  "Negotiation Skills",
  "Adaptability",
  "Problem Solving",
];

export const education = [
  { degree: "Master of Science (Psychology)", institution: "Dr. B.R. Ambedkar University, Hyderabad", year: "" },
  { degree: "Bachelor of Laws (LLB)", institution: "Osmania University, Hyderabad", year: "2016" },
  { degree: "Master of Business Administration (MBA), Marketing", institution: "Kakatiya University, Hyderabad", year: "2005" },
  { degree: "Bachelor of Science (General Sciences)", institution: "Kakatiya University, Hyderabad", year: "2002" },
];

export const workExperience = [
  {
    title: "Head – Customer Finance & Insurance",
    company: "Blue Energy Motors",
    period: "Sep 2025 – Present",
    highlights: [
      "Spearheading end-to-end customer finance and insurance strategy to accelerate adoption of electric mobility solutions",
      "Forging strategic alliances with banks, NBFCs, and insurance providers to expand financing accessibility",
      "Architecting innovative customer financing programs aligned with sustainability goals and market expansion plans",
      "Orchestrating cross-functional initiatives to enhance customer acquisition, retention, and lifetime value",
      "Governing regulatory compliance across multi-state operations, ensuring adherence to evolving financial and insurance norms",
      "Driving portfolio performance, risk optimization, and customer satisfaction metrics to support scalable growth",
    ],
  },
  {
    title: "Retail Finance – South & West Region",
    company: "TIVOLT Electric Vehicles Pvt. Ltd.",
    period: "May 2024 – Aug 2025",
    highlights: [
      "Established and scaled partnerships with 15+ banks, NBFCs, and fintech lenders, strengthening EV financing ecosystem",
      "Designed and deployed innovative credit frameworks for SCV & LCV segments, accelerating approvals by 40%",
      "Optimized regional distribution network across South India, enhancing dealer productivity and channel efficiency",
      "Engineered customized financing solutions, driving 25% improvement in sales conversion rates",
      "Maintained zero portfolio delinquency while achieving 98% partner satisfaction, ensuring strong risk governance",
    ],
  },
  {
    title: "Zonal Retail Manager – AP, TS, TN & Kerala",
    company: "Mahindra & Mahindra",
    period: "Nov 2021 – May 2024",
    highlights: [
      "Drove 80% retail finance penetration across a four-state region through strategic lender engagement",
      "Transformed retail processes, reducing cycle time by 35 days via operational optimization and collaboration",
      "Delivered ₹50+ Cr incremental business by launching targeted financing schemes for commercial vehicles",
      "Led, coached, and scaled a team of 20+ professionals, achieving 95%+ target attainment consistently",
      "Recognized with AFS Quarterly Divisional Award for leadership excellence and business impact",
    ],
  },
  {
    title: "Regional Marketing Finance Manager – AP & TS",
    company: "VE Commercial Vehicles Ltd.",
    period: "Feb 2017 – Nov 2021",
    highlights: [
      "Built and led a high-performing regional finance function, driving business expansion across two states",
      "Onboarded 25+ distribution partners, enabling 35% business growth through channel expansion",
      "Strengthened compliance frameworks, ensuring 100% adherence to retail and channel finance regulations",
      "Earned multiple promotions and accolades for consistent performance excellence and leadership impact",
    ],
  },
  {
    title: "Deputy Manager – CVCE (Telangana State)",
    company: "Axis Bank Ltd.",
    period: "Oct 2014 – Jan 2017",
    highlights: [
      "Managed a ₹100+ Cr commercial vehicle finance portfolio with zero delinquency, ensuring robust risk control",
      "Accelerated business growth by 40% increase in new accounts and achieving 110% of annual targets",
      "Led and mentored a team of 15+ professionals, driving high-performance sales outcomes",
      "Honored with Outstanding Performer Award (2015–16) and All India Best Sales Manager (2014–15)",
    ],
  },
  {
    title: "Area Business Manager – Telangana",
    company: "Cholamandalam Investment & Finance Company",
    period: "Aug 2011 – Jun 2014",
    highlights: [
      "Expanded regional business through strategic sales execution and customer acquisition initiatives, driving portfolio growth",
      "Strengthened stakeholder relationships by delivering tailored financial solutions, improving retention and repeat business",
    ],
  },
  {
    title: "Sales Manager",
    company: "Tata Motor Finance Ltd.",
    period: "Mar 2007 – Jun 2011",
    highlights: [
      "Drove revenue growth through targeted sales strategies, market expansion, and identification of new business opportunities via consultative selling",
      "Strengthened client relationships by proactively resolving issues, enhancing customer experience, retention, and long-term loyalty",
    ],
  },
];

export const awardsAndRecognition = [
  "Excellence Award (FY 2024–25): Honored for onboarding high-value strategic partners, expanding the ecosystem, and building sustainable alliances that accelerated business growth.",
  "AFS Quarterly Divisional Excellence Award (FY 2023): Recognized for surpassing divisional growth, profitability, and portfolio performance benchmarks through strategic execution.",
  "Excellence Award – Regional Collections Performance (Mar 2023): Achieved top-ranked collections performance, strengthening cash flow and asset quality.",
  "Outstanding Performer – Axis Bank (2015–16): Delivered consistent overachievement of sales targets while maintaining superior portfolio quality and risk metrics.",
  "All-India Best Sales Manager – Axis Bank (2014–15): Ranked #1 nationally for revenue growth, leadership, and large portfolio execution.",
  "Outstanding Performer – Cholamandalam Investment & Finance Co. (2010–13): Recognized for sustained excellence in sales and collections; promoted to Area Business Head.",
  "All-India Best Sales Manager – Tata Motor Finance Ltd. (2007–2010): Drove market-leading performance; advanced to manage strategic OEM and fleet accounts across Telangana.",
  "Best Performer – Roche Diagnostics India Ltd. (FY 2006–07): Delivered high-impact business growth and strengthened key customer relationships in a competitive healthcare market.",
];

export const careerTimeline = [
  { period: "2007-2011", company: "Tata Motors Finance" },
  { period: "2011-2014", company: "Chola" },
  { period: "2014-2017", company: "Axis Bank" },
  { period: "2017-2021", company: "VE Commercial Vehicles" },
  { period: "2021-2024", company: "Mahindra" },
  { period: "2024-2025", company: "TIVOLT" },
  { period: "2025-Present", company: "Blue Energy Motors" },
];
