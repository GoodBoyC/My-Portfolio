// Portfolio data — Emmanuel Chinda's professional design work
// 
// 📝 TO ADD NEW PROJECTS:
// 1. Add image to: public/images/your-image.jpg
// 2. Add project details below in the "projects" array
// 3. See HOW_TO_UPDATE_PORTFOLIO.md for full guide

export const personal = {
  name: "Emmanuel Chinda",
  title: "Graphic Designer & Computer Operator",
  tagline:
    "I create clean layouts, bold typography, and purposeful visuals that help businesses communicate clearly and stand out.",
  location: "Port Harcourt, Nigeria",
  email: "emmanuelchinda0@gmail.com",
  phone: "+234 906 733 8953",
  summary:
    "I'm Emmanuel — a graphic designer and computer operator based in Port Harcourt, Rivers State. I combine creative design skills with strong technical computer expertise to deliver work that's both beautiful and efficient. Whether you need brand design, marketing materials, or professional document services, I bring precision and professionalism to every project.",
  resumeUrl: "#",
};

export const services = [
  {
    title: "Graphic Design",
    description:
      "Logos, flyers, posters, and social media graphics that capture attention and communicate your brand message effectively.",
    icon: "Palette",
  },
  {
    title: "Brand Identity",
    description:
      "Complete brand packages including logos, business cards, letterheads, and brand guidelines for a cohesive professional image.",
    icon: "Sparkles",
  },
  {
    title: "Document Design",
    description:
      "Professional resumes, CVs, cover letters, proposals, and business documents formatted to international standards.",
    icon: "Newspaper",
  },
  {
    title: "Printing Services",
    description:
      "High-quality printing, photocopying, binding, and laminating for documents, presentations, and marketing materials.",
    icon: "Package",
  },
  {
    title: "Data Entry & Typing",
    description:
      "Fast, accurate typing and data entry services for forms, databases, manuscripts, and bulk document processing.",
    icon: "Keyboard",
  },
  {
    title: "Online Services",
    description:
      "Email management, online form filling, registration, research, and general virtual assistant support.",
    icon: "Globe",
  },
];

export const tools = [
  {
    category: "Design Software",
    items: ["Canva", "Figma", "Photoshop", "Illustrator", "CorelDRAW"],
  },
  {
    category: "Office Software",
    items: ["Microsoft Word", "Excel", "PowerPoint", "Google Workspace", "PDF Tools"],
  },
  {
    category: "Technical Skills",
    items: ["Typing (60+ WPM)", "Data Entry", "Internet Research", "Email Management", "File Management"],
  },
  {
    category: "Equipment",
    items: ["Printers", "Scanners", "Laminators", "Binding Machines", "High-speed Internet"],
  },
];

// ============================================================================
// 📍 ADD NEW PROJECTS BELOW THIS LINE
// Copy the template and paste it here (at the top of the list)
// ============================================================================

export const projects = [
  // ┌─────────────────────────────────────────────────────────────────────────┐
  // │ 📋 PROJECT TEMPLATE - COPY FROM HERE                                    │
  // ├─────────────────────────────────────────────────────────────────────────┤
  // {                                                                         │
  //   title: "Project Name — What It Is",                                     │
  //   client: "Client Name",                                                  │
  //   category: "Logo Design", // or: Print Design, Social Media, Packaging   │
  //   year: "2025",                                                           │
  //   description:                                                            │
  //     "Describe what you created in 1-2 sentences.",                        │
  //   image: "/images/your-image-filename.jpg",                               │
  //   accent: "from-gray-600 to-gray-800", // See color options in guide      │
  //   story: {                                                                │
  //     problem:                                                              │
  //       "What problem did the client have?",                                │
  //     solution:                                                             │
  //       "What did you create to solve it?",                                 │
  //     designThinking:                                                       │
  //       "Why did you choose these colors, layout, typography?",             │
  //     clientNote:                                                           │
  //       "This design was exactly what [Client] needed — result/benefit.",   │
  //   },                                                                      │
  // },                                                                        │
  // └─────────────────────────────────────────────────────────────────────────┘

  {
    title: "Luvia Global — Meeting Flyer",
    client: "Luvia Global",
    category: "Flyer Design",
    year: "2026",
    description:
      "A vibrant restaurant menu flyer showcasing Nigerian fast food and bar offerings. Bold red background creates appetite appeal, circular food photos highlight key dishes, and a clear drink lineup shows beverage options. Payment method icons (MTN, Glo, Airtel, 9mobile) make it easy for customers to know they can pay via transfer.",
    image: "/images/de-tasty.jpg",
    accent: "from-red-600 to-red-800",
    story: {
      problem:
        "The restaurant needed a menu flyer that could work both as a printed handout and social media post — something that would make people hungry and drive immediate orders.",
      solution:
        "I used a bold red color scheme (known to stimulate appetite), arranged food photos in overlapping circles for visual interest, and organized the menu into scannable columns with clear pricing contact info.",
      designThinking:
        "Red is the #1 color for food brands — it creates urgency and appetite. The circular photo frames feel friendly and approachable. Showing both food AND drinks communicates they're a full restaurant + bar. Payment icons remove friction for customers.",
      clientNote:
        "This flyer was exactly what De Tasty needed — an eye-catching menu that makes people want to order immediately and clearly communicates all their offerings.",
    },
  },
  {
    title: "De Tasty Fastfood & Bar — Menu Flyer",
    client: "De Tasty Fastfood & Bar",
    category: "Print Design",
    year: "2026",
    description:
      "A vibrant restaurant menu flyer showcasing Nigerian fast food and bar offerings. Bold red background creates appetite appeal, circular food photos highlight key dishes, and a clear drink lineup shows beverage options. Payment method icons (MTN, Glo, Airtel, 9mobile) make it easy for customers to know they can pay via transfer.",
    image: "/images/de-tasty.jpg",
    accent: "from-red-600 to-red-800",
    story: {
      problem:
        "The restaurant needed a menu flyer that could work both as a printed handout and social media post — something that would make people hungry and drive immediate orders.",
      solution:
        "I used a bold red color scheme (known to stimulate appetite), arranged food photos in overlapping circles for visual interest, and organized the menu into scannable columns with clear pricing contact info.",
      designThinking:
        "Red is the #1 color for food brands — it creates urgency and appetite. The circular photo frames feel friendly and approachable. Showing both food AND drinks communicates they're a full restaurant + bar. Payment icons remove friction for customers.",
      clientNote:
        "This flyer was exactly what De Tasty needed — an eye-catching menu that makes people want to order immediately and clearly communicates all their offerings.",
    },
  },
  {
    title: "Favy's Zobo Drink — Product Label",
    client: "Favy's Natural Products",
    category: "Packaging / Print",
    year: "2026",
    description:
      "A product label and promotional flyer for a natural zobo drink brand. Dynamic splash photography, bold 3D typography for 'ZOBO', and ingredient callouts emphasize the natural, healthy positioning. Green badges highlight '100% Natural' and 'No Sugar, No Preservatives'.",
    image: "/images/favys-zobo.jpg",
    accent: "from-red-700 to-red-900",
    story: {
      problem:
        "Favy's needed packaging that would stand out on shelves and communicate that their zobo is premium, natural, and healthier than competitors — without sounding preachy.",
      solution:
        "I created a bold splash visual as the hero, used 3D lettering for the brand name to make it pop, and added clear ingredient lists and benefit badges to educate customers at a glance.",
      designThinking:
        "The red color connects to the actual zobo drink color — authenticity matters. The splash adds energy and freshness. Green badges signal 'natural' and 'healthy'. Listing ingredients builds trust with health-conscious buyers.",
      clientNote:
        "This label was exactly what Favy's needed — a premium look that justifies a higher price point and clearly communicates the natural, healthy benefits.",
    },
  },
  {
    title: "Favy's Tigernut Drink — Product Label",
    client: "Favy's Natural Products",
    category: "Packaging / Print",
    year: "2026",
    description:
      "A companion product label for Favy's Tigernut Drink, maintaining brand consistency with the Zobo label while establishing its own identity. Cream background suggests the drink's color, with ingredient photography (tigernuts, coconut, dates, banana) and a milk splash visual.",
    image: "/images/favys-tigernut.jpg",
    accent: "from-amber-600 to-amber-800",
    story: {
      problem:
        "The tigernut drink needed to feel like part of the Favy's family while having its own personality — creamy, nutritious, and naturally sweet.",
      solution:
        "I used a cream/beige background to match the drink's color, showed all the natural ingredients visually, and maintained the same badge system ('No Sugar Added', '100% Natural') for brand recognition.",
      designThinking:
        "Cream background = instant visual cue that this is different from the red zobo. Showing actual ingredients (not just listing them) makes it feel more natural and trustworthy. The splash visual adds movement and freshness.",
      clientNote:
        "This label was exactly what Favy's needed — consistent branding across their product line while giving each drink its own distinct identity.",
    },
  },
  {
    title: "Rachikelly Perfumes & Cosmetics — Promotional Flyer",
    client: "Rachikelly Perfumes & Cosmetics",
    category: "Social Media / Print",
    year: "2026",
    description:
      "A luxury beauty promotional flyer for a perfume and cosmetics retailer. Elegant pink gradient background, sophisticated serif typography, and a glamorous hero image with bold makeup. Product grid showcases perfumes, body sprays, and luxury cosmetics with the tagline 'Your Scent, Your Signature'.",
    image: "/images/rachikelly.jpg",
    accent: "from-pink-600 to-pink-800",
    story: {
      problem:
        "Rachikelly needed a flyer that felt premium and luxurious — something that would attract customers looking for high-quality perfumes and cosmetics, not bargain hunters.",
      solution:
        "I used a soft pink gradient (feminine but sophisticated), elegant serif fonts for the brand name, and arranged products in a clean grid with a glamorous model to create aspiration.",
      designThinking:
        "Pink is classic for beauty, but I kept it muted and elegant, not bright and cheap. The serif font for 'Rachikelly' feels high-end. The model's confident pose and bold makeup communicate empowerment. Product photos show variety without clutter.",
      clientNote:
        "This flyer was exactly what Rachikelly needed — a luxurious, aspirational design that attracts customers who value quality and are willing to invest in premium beauty products.",
    },
  },
  {
    title: "Luvia Global — Brand Logo",
    client: "Luvia Global",
    category: "Logo Design",
    year: "2025",
    description:
      "A wellness brand logo featuring a circular globe network with interconnected nodes, representing global reach and personal connections. The heart icon at the center emphasizes care and wellbeing, while the green color palette communicates health, growth, and natural living.",
    image: "/images/luvia-global.jpg",
    accent: "from-green-600 to-emerald-700",
    story: {
      problem:
        "Luvia Global needed a logo that communicated their mission of promoting global wholeness through personal wellbeing — something that felt both international and deeply personal.",
      solution:
        "I created a circular emblem with interconnected nodes forming a globe-like pattern, placed a heart at the center to represent care, and used varying shades of green to convey health and vitality.",
      designThinking:
        "The circular shape suggests completeness and unity. The network pattern represents connections — both global and personal. Green is universally associated with health, wellness, and nature. The clean typography keeps it modern and professional.",
      clientNote:
        "This logo was exactly what Luvia Global needed — a memorable emblem that communicates their wellness mission while feeling professional and trustworthy for a health-focused brand.",
    },
  },
  {
    title: "Harry Dynasty Logistics — Investment Flyer",
    client: "Harry Dynasty Logistics",
    category: "Print Design",
    year: "2025",
    description:
      "A business flyer explaining their bike hire-purchase investment program. I organized dense information into scannable sections with clear hierarchy, used their brand colors (maroon and gold) consistently, and added a motorcycle illustration to make the investment concept more tangible.",
    image: "/images/harry-dynasty.jpg",
    accent: "from-gray-600 to-gray-800",
    story: {
      problem:
        "The client needed to explain a complex investment model to potential investors who might not understand hire-purchase agreements.",
      solution:
        "I broke the content into logical sections: what they do, how it works, benefits (numbered for easy scanning), and a concrete example with actual numbers. The motorcycle illustration helps viewers immediately understand what they're investing in.",
      designThinking:
        "I chose maroon as the primary color because it feels trustworthy and professional. Gold accents suggest value and returns. The layout flows top-to-bottom with clear visual breaks between sections.",
      clientNote:
        "This design was exactly what Harry Dynasty needed — a clear, professional flyer that makes their investment opportunity easy to understand at a glance.",
    },
  },
  {
    title: "AFWECAN — Organizational Logo",
    client: "AFWECAN",
    category: "Logo Design",
    year: "2025",
    description:
      "A logo for an organization focused on Africa. The design centers on the African continent in deep green, with East Africa highlighted in warm brown and a small heart icon showing their area of focus. Concentric gold rings create a sense of unity and connection.",
    image: "/images/afwecan-logo.jpg",
    accent: "from-gray-500 to-gray-700",
    story: {
      problem:
        "The organization needed a logo that represented pan-African unity while highlighting their specific focus region, without feeling generic or cliché.",
      solution:
        "I used the actual Africa map silhouette instead of abstract shapes, highlighted their focus region in a contrasting color, and added a subtle heart to show care and mission-driven work.",
      designThinking:
        "Green represents growth and the African landscape. Brown/bronze suggests earth and heritage. The concentric circles create a medallion effect that feels official and established.",
      clientNote:
        "This logo was exactly what AFWECAN needed — a professional emblem that communicates their pan-African mission while highlighting their specific focus area.",
    },
  },
  {
    title: "Orlu Beauty Salon — Services Flyer",
    client: "Orlu Beauty Salon",
    category: "Social Media / Print",
    year: "2025",
    description:
      "A vibrant promotional flyer for a beauty salon showcasing their full range of services. I used a rich purple gradient background that feels luxurious and feminine, paired with a glamorous hero image and eight service photos in a clean grid.",
    image: "/images/orlu-beauty-salon.jpg",
    accent: "from-gray-600 to-gray-900",
    story: {
      problem:
        "The salon needed a flyer that could work both as a social media post and as a printed handout, showcasing many services without looking cluttered.",
      solution:
        "I used a grid system to organize the service photos uniformly, grouped the text into clear sections, and used color blocking to create visual structure.",
      designThinking:
        "Purple is associated with beauty, luxury, and creativity — perfect for a salon. The yellow/gold accents draw attention to key elements like the logo and booking info. The model's gaze directs attention toward the services list.",
      clientNote:
        "This flyer was exactly what Orlu Beauty Salon needed — a vibrant, professional design that showcases all their services and attracts new customers.",
    },
  },
  {
    title: "Paulique Creations Hub — TGIF Social Post",
    client: "Paulique Creations Hub",
    category: "Social Media",
    year: "2025",
    description:
      "A fun, energetic social media post celebrating Friday. The design features a joyful woman on an orange beanbag, large playful 'TGIF' typography, and 3D heart notification icons suggesting likes and engagement.",
    image: "/images/paulique-tgif.jpg",
    accent: "from-gray-700 to-gray-900",
    story: {
      problem:
        "The client wanted a recurring social media template for Friday posts that would engage their audience and encourage shares and comments.",
      solution:
        "I created a template with a relatable moment (celebrating Friday), bold typography that stops the scroll, and interactive elements like the speech bubble that invite responses.",
      designThinking:
        "Orange is energetic, friendly, and associated with creativity — perfect for a design hub. The halftone dot pattern adds texture without overwhelming the image.",
      clientNote:
        "This social post was exactly what Paulique Creations Hub needed — an engaging, shareable template that builds community and keeps their audience coming back every Friday.",
    },
  },
  {
    title: "Dara Oasis Ltd — Grocery Delivery Flyer",
    client: "Dara Oasis Ltd",
    category: "Print / Social Media",
    year: "2025",
    description:
      "A fresh, vibrant flyer for a grocery delivery service in Port Harcourt. The hero visual shows a smartphone with a basket of fresh produce emerging from the screen — a clever metaphor for app-based ordering.",
    image: "/images/dara-oasis.jpg",
    accent: "from-gray-500 to-gray-800",
    story: {
      problem:
        "The client needed to communicate that they deliver fresh groceries quickly, targeting busy professionals and families in Port Harcourt who want convenience without sacrificing quality.",
      solution:
        "I used the smartphone-to-basket visual to instantly communicate 'order from your phone, get fresh food delivered.' The green color palette reinforces freshness and health.",
      designThinking:
        "Green is the obvious choice for fresh food, but I paired it with bright yellow to create contrast and energy. The blob-shaped text boxes feel organic and friendly, not corporate.",
      clientNote:
        "This flyer was exactly what Dara Oasis needed — a fresh, eye-catching design that clearly communicates their value proposition and makes it easy for customers to order.",
    },
  },
];

export const experience = [
  {
    role: "Freelance Graphic Designer & Computer Operator",
    company: "Self-employed",
    period: "2024 — Present",
    description:
      "Providing graphic design, document services, printing, and computer operator services to clients across food & beverage, beauty, logistics, wellness, and creative industries. Managing full project lifecycles from concept to final delivery.",
  },
  {
    role: "Computer Operator",
    company: "Business Cafe Services",
    period: "2023 — Present",
    description:
      "Offering typing, data entry, printing, scanning, online registration, form filling, and general computer services. Serving students, job seekers, and businesses with fast, reliable support.",
  },
];
