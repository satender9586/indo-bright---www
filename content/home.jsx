import { IconArrowRight, IconDigital, IconFinance, IconGraph, IconPaper } from "./svgs";

export const SECTION_HERO_PROPS = {
  labelProps: { children: "" },
  titleProps: {
    as: "h1",
    children: "Powering Indian Dreams: Startups & MSME Solutions",
  },
  descProps: {
    className: "text-lg",
    children:
      "Unlock your Indian startup's potential with our specialized incorporation services, designed to support MSMEs in establishing a strong foundation for business success.",
  },
  imgProps: {
    alt: "section img",
    width: 1000,
    height: 1000,
    src: "https://images.unsplash.com/photo-1581091877018-dac6a371d50f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80",
  },
  calProps: {
    dark: false,
    size: 1,
    icon: <IconArrowRight className="w-6 h-6" />,
    children: "Get Started",
  },
  padding: 0,
};

export const SECTION_ONE_PROPS = {
  labelProps: { children: "About Us" },
  titleProps: { children: "We are a Team for your Startup" },
  descProps: {
    className: "text-lg",
    children:
      "Our driving force is to provide unwavering support to Micro, Small, and Medium Enterprises (MSMEs) by offering valuable insights into government schemes that profoundly impact their business growth. In today's ever-evolving landscape, the Indian government actively seeks out innovative companies through the Start-up India innovation scheme, which encompasses a diverse range of schemes to facilitate their scaling efforts.",
  },
  imgProps: {
    alt: "section img",
    width: 1000,
    height: 1000,
    src: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
  },
};

export const SECTION_TWO_PROPS = {
  labelProps: { children: "Our Services" },
  titleProps: { children: "Incorporate and Succeed!" },
  descProps: {
    className: "text-lg",
    children:
      "Unlock your business's full potential with our expert assistance in incorporating your company and accessing a wide range of government schemes and digital solutions. Stay ahead of the competition and maximize growth opportunities in the dynamic Indian market.",
  },
  imgProps: {
    alt: "section img",
    width: 1000,
    height: 1000,
    src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2971&q=80",
  },
};

export const SECTION_LAST_PROPS = {
  titleProps: { as: "h4", children: "Simplifying Complexity by Being Clear" },
  imgProps: {
    alt: "section img",
    width: 1000,
    height: 1000,
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80",
  },
  calProps: {
    dark: true,
    size: 1,
    icon: <IconArrowRight className="w-6 h-6" />,
    children: "Let's connect",
  },
};

export const CATEGORIES = [
  {
    title: "Start-up India",
    icon: <IconGraph className="w-32 h-32 text-primary/75" />,
    name: "company-registration",
    desc: "Unlock your entrepreneurial potential with our expert guidance to navigate the Indian market and launch your startup successfully.",
  },
  {
    title: "Finance",
    icon: <IconFinance className="w-32 h-32 text-primary/75" />,
    name: "company-registration",
    desc: "Maximize your financial potential with our tailored solutions, leveraging government schemes and incentives to optimize your business growth.",
  },
  {
    title: "Certification",
    icon: <IconPaper className="w-32 h-32 text-primary/75" />,
    name: "company-registration",
    desc: "Stay ahead of the competition and build trust with stakeholders through our comprehensive certification services, ensuring compliance and quality standards.",
  },
  {
    title: "Digital Solutions",
    icon: <IconDigital className="w-32 h-32 text-primary/75" />,
    name: "company-registration",
    desc: "Transform your business for the digital age with our cutting-edge digital solutions and empowering you to streamline operations.",
  },
];

export const FAQ_PROPS = {
  items: [
    {
      id: 1,
      question: "What are the steps to incorporate a startup in India?",
      answer:
        "The steps to incorporate a startup in India typically include business name registration, obtaining Director Identification Number (DIN) and Digital Signature Certificate (DSC), drafting the Memorandum of Association (MoA) and Articles of Association (AoA), and filing the incorporation documents with the Registrar of Companies (RoC).",
    },
    {
      id: 2,
      question:
        "What are the benefits of registering as a Micro, Small, and Medium Enterprise (MSME)?",
      answer:
        "Registering as an MSME offers benefits such as access to government schemes and subsidies, priority sector lending, protection against delayed payments, eligibility for tax benefits, and enhanced market opportunities.",
    },
    {
      id: 3,
      question:
        "What is the difference between a private limited company and a sole proprietorship for startups?",
      answer:
        "A private limited company is a separate legal entity, providing limited liability protection to its owners and allowing for multiple shareholders, while a sole proprietorship is an unincorporated business owned and operated by a single individual, offering simplicity but without limited liability.",
    },
    {
      id: 4,
      question:
        "Is it mandatory to have a Permanent Account Number (PAN) for incorporating a startup in India?",
      answer:
        "Yes, obtaining a PAN is mandatory for incorporating a startup in India. PAN is required for various tax and regulatory purposes, including opening a bank account, filing tax returns, and conducting financial transactions.",
    },
    {
      id: 5,
      question:
        "Can a foreign national or Non-Resident Indian (NRI) incorporate a startup in India?",
      answer:
        "Yes, foreign nationals and NRIs are allowed to incorporate a startup in India. However, certain conditions and regulatory requirements, such as obtaining the necessary approvals, may apply based on the nature of the business and the foreign national's residency status.",
    },
  ],
};

// SEO optimized keywords: startup incorporation, steps to incorporate a startup, business name registration, Director Identification Number, DIN, Digital Signature Certificate, Memorandum of Association, Articles of Association, Registrar of Companies
// SEO optimized keywords: MSME registration, benefits of MSME registration, government schemes, subsidies, priority sector lending, delayed payment protection, tax benefits, market opportunities
// SEO optimized keywords: private limited company, sole proprietorship, difference between private limited company and sole proprietorship, limited liability, single owner business
// SEO optimized keywords: Permanent Account Number, PAN, PAN for startup incorporation, tax compliance, financial transactions
// SEO optimized keywords: incorporating a startup in India for foreign nationals, Non-Resident Indian, NRI, regulatory requirements, necessary approvals




export const TESTIMONIALS = [
  {
    quote: "The customer service at Indobright is unparalleled. I had an issue, and they went above and beyond to resolve it quickly and efficiently. I'm truly impressed and grateful for their dedication to customer satisfaction.",
    companyName: "SURYA INDUSTRIES", name: "Sandeep Baghel."
  },
  {
    quote: "My experience with Indobright was fantastic from start to finish. The attention to details, cooperating Operation Team and overall, my complete funding process exceeded my expectations. I highly recommend it to anyone looking for an exceptional fundings.",
    companyName: "KENYS ENTERPISE", name: "Sajjan Chauhan"
  },
  {
    quote: "Working with Indobright has been a game-changer for my business. Their strategic guidance and insights have helped us navigate complex challenges and make informed decisions. We've seen a remarkable improvement in our overall business performance.",
    companyName: "SHIVANI CHEMICALS", name: "Alpesh Patel"
  },
  {
    quote: "When we faced a critical financial crunch in our business, we turned to Indobright for help. Their team quickly evaluated my business profile and provided effective solutions. Their problem-solving approach is unmatched, and we're grateful for the positive impact on our business.",
    companyName: "HARDA AUTOMATIONS", name: "Pankaj Jain"
  },
  {
    quote: "What stood out about Indobright was their ability to provide tailored solutions. They took the time to understand our business needs and offered personalized advice during the incorporation process. It's a testament to their commitment to client success.",
    companyName: "S.P. TECHNO SERVICES PVT. LTD.", name: "Mayank Sahu"
  },
  {
    quote: "Thanks to Indobright Services Pvt Ltd, our business processes are now more efficient and streamlined. They analyzed our workflows, identified bottlenecks, and implemented practical solutions. The results were immediate, and we've experienced a significant increase in productivity.",
    companyName: "AKASH ENTERPRISE", name: "Akash Radadiya"
  },
  {
    quote: "Navigating the startup landscape can be overwhelming, but Indobright made the process seamless. Their strategic planning and market analysis gave our business a strong foundation. We're now on a clear path to sustainable growth.",
    companyName:"HRUDANANDA PUHAN NPT PAPERS PVT.LTD.", name: "Hrudananda Puhan",
  },
  {
    quote: "We were contemplating international expansion, and Indobright Services played a crucial role in making it a reality. Their market research, cultural insights, and strategic planning paved the way for a successful expansion. We couldn't be happier with the results.",
    companyName: "AMRUTAM OILS PRIVATE LTD.", name: "Yashdeep Sharma"
  },
  {
    quote: "The financial advice and planning provided by this Company have been instrumental in our financial success. Their team helped us create a solid financial strategy, manage costs, and optimize our budget. Our bottom line has significantly improved as a result.",
    companyName: "JAYANT WELDING WORKS", name: "Jayant Kumar Singh"
  },

  {
    quote: "We needed to incorporate our business quickly, and Incorporation Service delivered by Indobright was phenomenal. Their prompt response, attention to detail, and reliability made the entire process stress-free. We highly recommend their services to anyone looking to start a new venture.",
    companyName: "ASIA MACHINE TOOLS PVT LTD.", name: "Guru Siradhana"
  },
  {
    quote: "Working with Indobright Services Pvt Ltd has been a pleasure. Their professionalism and expertise shine through in every interaction. The consultants are knowledgeable, approachable, and truly dedicated to the success of their clients. I highly recommend their services.",
    companyName: "SHAKTI TRADERS", name: "Siddharth Mishra"
  },
  {
    quote: "Securing funding for our startup was a challenging journey, but Indobright Services was there every step of the way. Their insights into investor expectations, pitch refinement, and networking strategies were pivotal in attracting the right investors.",
    companyName: "MAHARAJA HOTEL AND RESORTS", name: "Roshan Jha"
  },
  {
    quote: "We owe the successful launch of our startup to the invaluable guidance provided by Indobright Services. From refining our business model to creating a solid go-to-market strategy, their expertise was instrumental. We couldn't be happier with the results.",
    companyName: "SHREEJI INDUSTRIES", name: "Payal Soni"
  },
  {
    quote: "Beyond the consultancy services, the company provided invaluable mentorship and support. Their team not only helped us with business strategies but also acted as mentors, guiding us through the challenges every startup faces. We're grateful for their ongoing support.",
    companyName: "AGARWAL TRADING COMPANY", name: "Pankaj Agarwal."
  },
  {
    quote: "We turned to Indobright Business Consultancy for FSSAI certification, and it was the best decision for our business. Their experts provided clear guidance, answered all our queries, and helped us understand the importance of food safety standards. Highly recommended for their expertise and professionalism.",
    companyName: "PRIMEX AGRO PVT. LTD.", name: "Shubham Raghuwansi."
  },
  {
    quote: "We were on a tight schedule to get our FSSAI certification, and Indobright exceeded our expectations. Their prompt response, attention to deadlines, and thorough understanding of the certification process were commendable. We're grateful for their timely assistance.",
    companyName: "VEERA FOODS PVT. LTD.", name: "Shobhit Porwal"
  },
  {
    quote: "The expertise of Incorporation Service was evident from the start. Their knowledgeable team guided us through the entire incorporation process, offering valuable insights and ensuring all legal requirements were met. We couldn't be more satisfied with their professionalism.",
    companyName: "SURBHI EXPORTS PVT. LTD.", name: "Umang Sethi"
  },
  {
    quote: "In the ever-evolving digital landscape, IBS stands out for their adaptive strategies. They stay ahead of industry trends, ensuring our campaigns are always fresh and effective. Their proactive approach keeps us ahead of the competition.",
    companyName: "3RD EYE CONSULTANCY SERVICES", name: "Pankaj Tiwari"
  },
  {
    quote: "Since partnering with Indobright Services Pvt Ltd, our win rate in tender bids has noticeably increased. Their thorough market analysis, bid optimization, and strategic advice have given us a competitive edge. We appreciate their commitment to our success in the procurement landscape.",
    companyName: "PRAGATI METAL WORKS", name: "Arun Chakraborty."
  },
  {
    quote: "Ensuring compliance with PSARA regulations was made easy by this Company. Their team provided invaluable support, guiding us through the intricacies of the licensing requirements. We now operate with confidence, knowing we are in full compliance.",
    companyName: "PREMIER SECURITIES LTD.", name: "Mahesh Jani"
  },
]