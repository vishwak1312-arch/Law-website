// ─── SITE-WIDE DATA & CONSTANTS ───

export const siteConfig = {
  name: process.env.NEXT_PUBLIC_LAW_FIRM_NAME || "Vamshi Associations",
  attorney: process.env.NEXT_PUBLIC_ATTORNEY_NAME || "Vamshi",
  title: "Trusted Legal Representation | Vamshi Associations",
  description: "Vamshi Associations provides premium legal services in corporate law, family law, criminal defense, and more. Schedule your confidential consultation today.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://vamshi.com",
  phone: process.env.NEXT_PUBLIC_ATTORNEY_PHONE || "9160108188",
  email: process.env.NEXT_PUBLIC_ATTORNEY_EMAIL || "vishwak1312@gmail.com",
  emergencyPhone: "(555) 234-9999",
  address: process.env.NEXT_PUBLIC_OFFICE_ADDRESS || "1200 Legal Avenue, Suite 450, New York, NY 10001",
  whatsapp: process.env.NEXT_PUBLIC_ATTORNEY_WHATSAPP || "919160108188",
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/vamshi/consultation",
  tawkToId: process.env.NEXT_PUBLIC_TAWKTO_ID || "YOUR_TAWKTO_ID",
  googleMapsEmbed: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215!2d-73.9857!3d40.7484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjIiTiA3M8KwNTknMDguNSJX!5e0!3m2!1sen!2sus!4v1",
  hours: {
    weekday: "Mon–Fri: 8:00 AM – 6:00 PM",
    saturday: "Sat: 9:00 AM – 1:00 PM",
    sunday: "Sun: Closed",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Practice Areas", href: "/practice-areas" },
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
  { slug: "immigration-law", title: "Immigration Law", icon: "Globe", description: "Navigating visa applications, green cards, and citizenship processes.", details: "Our immigration attorneys help individuals and families navigate the complex U.S. immigration system. We handle visa applications, green card petitions, naturalization, asylum cases, deportation defense, and employer-sponsored immigration programs." },
  { slug: "intellectual-property", title: "Intellectual Property", icon: "Lightbulb", description: "Safeguarding your innovations, trademarks, copyrights, and trade secrets.", details: "Protecting your intellectual property is crucial in today's competitive landscape. Our IP practice handles trademark registration and enforcement, copyright protection, patent applications, trade secret litigation, and licensing agreements." },
  { slug: "civil-litigation", title: "Civil Litigation", icon: "Scale", description: "Resolving complex civil disputes through strategic litigation and negotiation.", details: "When disputes cannot be resolved amicably, our litigation team provides aggressive, strategic representation. We handle breach of contract, business torts, partnership disputes, collections, injunctive relief, and appellate advocacy." },
];

export const testimonials = [
  { name: "Sarah Thompson", role: "Business Owner", photo: "/attorney-portrait.png", rating: 5, review: "Vamshi provided exceptional legal counsel during our corporate restructuring. His attention to detail and strategic thinking saved our company millions. I cannot recommend him highly enough." },
  { name: "Michael Rodriguez", role: "Real Estate Developer", photo: "/attorney-portrait.png", rating: 5, review: "Outstanding representation in a complex property dispute. Attorney Vamshi's thorough preparation and courtroom presence led to a favorable settlement. His team is professional and responsive." },
  { name: "Emily Chen", role: "Tech Entrepreneur", photo: "/attorney-portrait.png", rating: 5, review: "Vamshi Associations handled our intellectual property portfolio with incredible expertise. They secured multiple trademarks and patents efficiently. Their knowledge of IP law is unmatched." },
  { name: "David Williams", role: "Healthcare Executive", photo: "/attorney-portrait.png", rating: 5, review: "During a critical employment dispute, Vamshi provided calm, strategic guidance that resolved the matter favorably. His communication throughout the process was exemplary." },
  { name: "Jennifer Martinez", role: "Family Client", photo: "/attorney-portrait.png", rating: 5, review: "Going through my divorce was incredibly difficult, but Attorney Vamshi handled everything with compassion and professionalism. He fought for my rights while keeping my children's best interests first." },
];

export const blogPosts = [
  { slug: "understanding-business-formation", title: "Understanding Business Formation: LLC vs Corporation", excerpt: "Choosing the right business entity is one of the most important decisions an entrepreneur will make. Learn the key differences between LLCs and corporations.", category: "Business Law", date: "2026-05-28", image: "/blog-legal.png", readTime: "5 min read" },
  { slug: "family-law-custody-guide", title: "A Parent's Guide to Child Custody Proceedings", excerpt: "Navigating child custody can be overwhelming. This comprehensive guide covers the types of custody, factors courts consider, and how to protect your parental rights.", category: "Family Law", date: "2026-05-20", image: "/blog-legal.png", readTime: "8 min read" },
  { slug: "protecting-intellectual-property", title: "5 Essential Steps to Protect Your Intellectual Property", excerpt: "In today's digital economy, protecting your intellectual property is more critical than ever. Discover the five essential steps every business owner should take.", category: "IP Law", date: "2026-05-15", image: "/blog-legal.png", readTime: "6 min read" },
  { slug: "employment-law-rights", title: "Know Your Rights: Employee Protections Under Federal Law", excerpt: "Federal employment laws provide crucial protections for workers. Learn about your rights regarding discrimination, wages, safety, and more.", category: "Employment Law", date: "2026-05-10", image: "/blog-legal.png", readTime: "7 min read" },
  { slug: "immigration-visa-updates", title: "2026 Immigration Visa Updates: What You Need to Know", excerpt: "Stay informed about the latest changes to U.S. immigration policy, visa processing times, and new pathways to permanent residency.", category: "Immigration", date: "2026-05-05", image: "/blog-legal.png", readTime: "6 min read" },
  { slug: "real-estate-closing-checklist", title: "The Ultimate Real Estate Closing Checklist", excerpt: "Don't let anything slip through the cracks. Our comprehensive closing checklist ensures a smooth real estate transaction from contract to keys.", category: "Property Law", date: "2026-04-28", image: "/blog-legal.png", readTime: "5 min read" },
];

export const faqs = [
  { question: "How much does a consultation cost?", answer: "We offer a complimentary 15-minute initial phone consultation to discuss your legal matter. For in-depth consultations, fees vary based on the complexity of your case. Contact our office for specific pricing." },
  { question: "What areas of law do you practice?", answer: "We practice corporate law, family law, criminal defense, property law, employment law, immigration law, intellectual property, and civil litigation. Our diverse practice areas allow us to serve clients with a wide range of legal needs." },
  { question: "How quickly can I speak to an attorney?", answer: "We strive to respond to all inquiries within 24 hours. For urgent matters, call our emergency line for immediate assistance. You can also schedule a consultation through our online booking system." },
  { question: "Do you offer virtual consultations?", answer: "Yes! We offer consultations via Zoom, phone, and in-person meetings. Our virtual consultation options make it convenient for clients regardless of location." },
  { question: "What geographic areas do you serve?", answer: "While our offices are located in New York, we serve clients throughout New York State and can handle federal matters nationwide. We also offer virtual consultations for clients in other states." },
  { question: "How are your fees structured?", answer: "We offer flexible fee arrangements including hourly rates, flat fees, contingency fees, and retainer agreements depending on the nature of your case. We discuss all fee structures transparently during your initial consultation." },
  { question: "What should I bring to my first meeting?", answer: "Please bring any relevant documents related to your legal matter, including contracts, correspondence, court documents, and a list of questions. The more information you provide, the better we can assess your case." },
  { question: "Do you offer payment plans?", answer: "Yes, we understand that legal services can be a significant investment. We offer flexible payment plans and accept credit cards, checks, and online payments through our secure payment portal." },
];

export const caseStats = [
  { label: "Cases Won", value: 500, suffix: "+" },
  { label: "Years Experience", value: 10, suffix: "+" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
  { label: "Awards & Recognitions", value: 25, suffix: "+" },
];

export const locations = [
  { city: "New York", slug: "new-york", address: "1200 Legal Avenue, Suite 450, New York, NY 10001", phone: "(555) 234-5678", description: "Our flagship office in the heart of Manhattan serves clients throughout the New York metropolitan area." },
  { city: "Brooklyn", slug: "brooklyn", address: "800 Court Street, Suite 200, Brooklyn, NY 11201", phone: "(555) 234-5679", description: "Conveniently located in downtown Brooklyn, serving Kings County and surrounding communities." },
  { city: "Queens", slug: "queens", address: "150 Jamaica Avenue, Suite 300, Queens, NY 11432", phone: "(555) 234-5680", description: "Our Queens office provides accessible legal services to one of the most diverse communities in the nation." },
];
