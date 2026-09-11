import Image from "next/image";
import Link from "next/link";

import {
  FaUserTie,
  FaCamera,
  FaVideo,
  FaStore,
  FaLaptopCode,
  FaPaintBrush,
  FaCode,
  FaMagic,
  FaDumbbell,
  FaHome,
  FaChalkboardTeacher,
  FaYoutube,
  FaBlog,
  FaBriefcase,
  FaRocket,
  FaSearch,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaBullhorn,
  FaChartLine,
  FaUsers,
  FaRobot,
  FaLaugh,
  FaMobileAlt,
  FaGoogle,
} from "react-icons/fa";

export const metadata = {
  title: "Our Services | Digital Marketing & Web Development | Brandscare Media",
  description:
    "Explore Brandscare Media's digital marketing, social media marketing, SEO, performance marketing, ORM, influencer marketing, content creation, marketing automation, web development and mobile app development services.",
  keywords:
    "Brandscare Media services, digital marketing agency India, digital marketing services India, social media marketing, social media management, performance marketing, PPC advertising, ORM, influencer marketing, content creation, SEO services, SEO agency India, local SEO, Google Business Profile optimization, Instagram marketing, Facebook marketing, YouTube marketing, LinkedIn marketing, marketing automation, meme marketing, UGC creation, reel promotion, Twitter trends, web development company, website development, custom website development, MERN development, mobile app development, ecommerce solutions, UI UX design, performance optimization",
  alternates: {
    canonical: "https://brandscaremedia.com/Ourservice",
  },
  openGraph: {
    title: "Our Services | Digital Marketing & Web Development | Brandscare Media",
    description:
      "Digital marketing, SEO, social media, performance marketing, influencer marketing, web development and complete digital growth services by Brandscare Media.",
    url: "https://brandscaremedia.com/Ourservice",
    siteName: "Brandscare Media",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://brandscaremedia.com/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Brandscare Media Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Brandscare Media",
    description:
      "Explore digital marketing, SEO, social media, web development and growth services by Brandscare Media.",
    images: ["https://brandscaremedia.com/images/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const webservices = [
  {
    title: "Custom Website Development",
    icon: FaCode,
    description:
      "High-performance, fully custom-coded websites built using modern technologies and optimized for speed, scalability and business growth.",
  },
  {
    title: "Mobile App Development",
    icon: FaMobileAlt,
    description:
      "Powerful and user-friendly mobile applications designed to deliver smooth experiences across modern devices and platforms.",
  },
  {
    title: "Full-Stack MERN Development",
    icon: FaLaptopCode,
    description:
      "Complete MERN stack development using MongoDB, Express, React and Node.js with focus on performance, security and scalability.",
  },
  {
    title: "E-Commerce Solutions",
    icon: FaStore,
    description:
      "Scalable online stores with secure payment integration, smooth user experience, product management and conversion-focused architecture.",
  },
  {
    title: "UI/UX Design",
    icon: FaPaintBrush,
    description:
      "Clean, intuitive and conversion-focused interfaces designed around user experience, brand identity and business goals.",
  },
  {
    title: "Performance Optimization",
    icon: FaRocket,
    description:
      "Speed-focused optimization to reduce loading times, improve Core Web Vitals, enhance user experience and support SEO performance.",
  },
];

const clients = [
  {
    title: "Influencers",
    icon: FaUserTie,
    description:
      "Build a stronger personal brand, increase visibility and turn your audience into a valuable digital community.",
  },
  {
    title: "Photographers",
    icon: FaCamera,
    description:
      "Showcase your portfolio, reach new audiences and build a recognizable photography brand online.",
  },
  {
    title: "Videographers",
    icon: FaVideo,
    description:
      "Promote your work through engaging content, social media strategies and performance-driven campaigns.",
  },
  {
    title: "Shop Owners",
    icon: FaStore,
    description:
      "Grow local and online sales through social media, paid advertising, local SEO and digital marketing.",
  },
  {
    title: "Freelancers",
    icon: FaLaptopCode,
    description:
      "Build authority, generate leads and create a professional online presence that converts visitors into clients.",
  },
  {
    title: "Graphic Designers",
    icon: FaPaintBrush,
    description:
      "Showcase creative work, strengthen your personal brand and reach businesses looking for design services.",
  },
  {
    title: "Web Developers",
    icon: FaCode,
    description:
      "Improve visibility, personal branding and lead generation with strategic digital marketing.",
  },
  {
    title: "Makeup Artists",
    icon: FaMagic,
    description:
      "Grow your beauty brand through reels, influencer collaborations, local SEO and social media marketing.",
  },
  {
    title: "Models",
    icon: FaUserTie,
    description:
      "Build a professional digital identity and increase visibility across relevant social platforms.",
  },
  {
    title: "Fitness Trainers",
    icon: FaDumbbell,
    description:
      "Attract new clients and build authority through content, social media and performance marketing.",
  },
  {
    title: "Real Estate Agents",
    icon: FaHome,
    description:
      "Generate property leads and improve local visibility through targeted digital marketing campaigns.",
  },
  {
    title: "Coaches & Mentors",
    icon: FaChalkboardTeacher,
    description:
      "Build trust, authority and a consistent online presence that helps convert your audience into clients.",
  },
  {
    title: "YouTubers",
    icon: FaYoutube,
    description:
      "Improve channel visibility, audience growth, engagement and content discoverability.",
  },
  {
    title: "Bloggers",
    icon: FaBlog,
    description:
      "Grow organic traffic, improve search visibility and build a recognizable content brand.",
  },
  {
    title: "Small Business Owners",
    icon: FaBriefcase,
    description:
      "Create a complete digital presence and attract more customers through measurable marketing strategies.",
  },
  {
    title: "Startups",
    icon: FaRocket,
    description:
      "Build awareness, generate qualified leads and create scalable digital growth systems.",
  },
];

const services = [
  {
    id: "cardone",
    title: "Social Media Marketing (SMM)",
    icon: FaUsers,
    description:
      "We create strategic social media campaigns that make your brand more visible, more engaging and more memorable. Our focus is not only on posting content but on building a complete marketing system that attracts, engages and converts your audience.",
    points: [
      "Instagram, Facebook, LinkedIn, YouTube and X strategies",
      "Content strategy and monthly content frameworks",
      "Community building and audience engagement",
      "Trend research and platform-specific content",
      "Performance tracking and monthly reporting",
      "Conversion-focused social media campaigns",
    ],
    result:
      "3X stronger engagement, better brand visibility and a conversion-ready community.",
  },
  {
    id: "cardtwo",
    title: "Performance Marketing (PPC & Paid Ads)",
    icon: FaBullhorn,
    description:
      "Reach the right audience at the right time with data-driven paid marketing campaigns designed to generate leads, sales and measurable business growth.",
    points: [
      "Google Search, Display and YouTube Ads",
      "Meta Ads and social media advertising",
      "Audience targeting and segmentation",
      "Remarketing and retargeting campaigns",
      "A/B testing of creatives and landing pages",
      "Real-time campaign tracking and optimization",
    ],
    result:
      "Our campaigns are designed for qualified leads, stronger ROAS and profit-focused scaling.",
  },
  {
    id: "cardthree",
    title: "Online Reputation Management (ORM)",
    icon: FaSearch,
    description:
      "Your online reputation directly influences customer trust. We monitor, manage and improve your digital reputation across important platforms.",
    points: [
      "Review and reputation monitoring",
      "Negative and positive review management",
      "Brand mention monitoring",
      "Google visibility improvement",
      "Profile cleanup and optimization",
      "Crisis reputation management",
    ],
    result:
      "Build stronger credibility, improve positive sentiment and increase customer trust.",
  },
  {
    id: "cardfour",
    title: "Content Creation & Copywriting",
    icon: FaPaintBrush,
    description:
      "Great marketing starts with great communication. We create content and copy that communicates your value clearly while keeping your audience engaged.",
    points: [
      "Social media creatives and captions",
      "Ad copy and campaign messaging",
      "Website content and landing page copy",
      "Blog and SEO-focused articles",
      "Brand storytelling and messaging",
      "Reels, Shorts and YouTube scripts",
    ],
    result:
      "Stronger engagement, clearer brand identity and content built to support search and conversions.",
  },
  {
    id: "cardfive",
    title: "Influencer Marketing",
    icon: FaUserTie,
    description:
      "We connect brands with relevant creators and influencers to build trust, awareness and meaningful engagement with the right audience.",
    points: [
      "Influencer identification and shortlisting",
      "Creator contracting and campaign planning",
      "Creative direction and campaign management",
      "Micro and multi-influencer campaigns",
      "Performance analytics and ROI tracking",
      "Campaign optimization",
    ],
    result:
      "Higher awareness, authentic engagement and measurable influencer campaign results.",
  },
  {
    id: "cardsix",
    title: "Twitter Trends Service",
    icon: FaBullhorn,
    description:
      "Stay ahead of conversations and trends on X with research-driven trend monitoring and content opportunities.",
    points: [
      "Trending topics and hashtag research",
      "Location-based trend monitoring",
      "Hashtag analytics",
      "Audience sentiment analysis",
      "Competitor trend monitoring",
      "Trend-based content recommendations",
      "Real-time alerts and opportunities",
    ],
    result:
      "Increase organic reach, discover viral-friendly content opportunities and improve engagement.",
  },
  {
    id: "cardseven",
    title: "SEO Services",
    icon: FaSearch,
    description:
      "Our SEO strategies help your business become more visible on search engines and attract qualified users who are actively looking for your products or services.",
    points: [
      "Keyword research and search intent analysis",
      "On-page SEO optimization",
      "Technical SEO",
      "Local SEO",
      "Google Business Profile optimization",
      "SEO content and blog strategy",
      "Internal linking and website structure",
      "SEO performance reporting",
    ],
    result:
      "Better organic visibility, qualified traffic, stronger rankings and long-term digital growth.",
  },
  {
    id: "cardeight",
    title: "Social Media Management",
    icon: FaUsers,
    description:
      "We manage your social media presence consistently so your brand stays active, relevant and connected with your audience.",
    points: [
      "Complete social media account management",
      "Monthly content calendar",
      "Content scheduling and publishing",
      "Creative coordination",
      "Captions and hashtag strategy",
      "Community management",
      "Performance reporting",
    ],
    result:
      "A consistent brand presence, stronger engagement and a growing online community.",
  },
  {
    id: "cardnine",
    title: "Instagram Marketing",
    icon: FaInstagram,
    description:
      "Turn Instagram into a powerful growth channel with content, reels and audience strategies designed around your business goals.",
    points: [
      "Instagram content strategy",
      "Reels and Stories strategy",
      "Hashtag and keyword optimization",
      "Audience growth strategies",
      "Creator collaborations",
      "Engagement optimization",
      "Performance tracking",
    ],
    result:
      "Increase reach, engagement, brand awareness and opportunities for leads and conversions.",
  },
  {
    id: "cardten",
    title: "Facebook Marketing",
    icon: FaFacebook,
    description:
      "Build a stronger Facebook presence and reach potential customers through organic content and targeted advertising.",
    points: [
      "Facebook page management",
      "Organic content strategy",
      "Facebook advertising",
      "Audience targeting",
      "Lead generation campaigns",
      "Retargeting campaigns",
      "Campaign performance optimization",
    ],
    result:
      "Better reach, qualified leads, stronger engagement and improved campaign performance.",
  },
  {
    id: "cardeleven",
    title: "YouTube Marketing",
    icon: FaYoutube,
    description:
      "Grow your YouTube presence with content strategy, YouTube SEO and audience-focused marketing.",
    points: [
      "YouTube channel strategy",
      "Title and description optimization",
      "YouTube SEO",
      "Shorts and long-form content strategy",
      "Thumbnail recommendations",
      "Audience growth strategy",
      "YouTube Ads",
    ],
    result:
      "Improved discoverability, audience retention, engagement and channel growth.",
  },
  {
    id: "cardtwelve",
    title: "LinkedIn Marketing",
    icon: FaLinkedin,
    description:
      "Build authority and generate B2B opportunities through professional content and LinkedIn marketing strategies.",
    points: [
      "LinkedIn profile optimization",
      "Personal branding",
      "Company page management",
      "B2B content strategy",
      "Thought leadership content",
      "Lead generation",
      "Audience and competitor research",
    ],
    result:
      "Stronger authority, B2B visibility, valuable connections and qualified leads.",
  },
  {
    id: "cardthirteen",
    title: "Marketing Automation",
    icon: FaRobot,
    description:
      "Automate repetitive marketing processes and create smoother customer journeys while keeping your leads engaged.",
    points: [
      "Lead nurturing",
      "Email automation",
      "Customer follow-up automation",
      "Audience segmentation",
      "Automated workflows",
      "Customer notifications",
      "Performance monitoring",
    ],
    result:
      "Faster follow-ups, less repetitive work, better customer journeys and improved marketing efficiency.",
  },
  {
    id: "cardfourteen",
    title: "Meme Marketing",
    icon: FaLaugh,
    description:
      "Use culture, trends and humor to make your brand more relatable and increase organic social media visibility.",
    points: [
      "Trend and meme research",
      "Branded meme creation",
      "Popular format adaptation",
      "Community-focused content",
      "Platform-specific meme strategies",
      "Real-time trend monitoring",
    ],
    result:
      "More reach, shares, relatability and brand visibility.",
  },
  {
    id: "cardfifteen",
    title: "UGC Creation",
    icon: FaCamera,
    description:
      "Create authentic user-generated-style content that makes your products and services feel more relatable and trustworthy.",
    points: [
      "Creator research",
      "Product content concepts",
      "UGC scripts and creative direction",
      "Testimonials and review content",
      "Short-form UGC videos",
      "UGC advertising creatives",
    ],
    result:
      "Higher trust, authentic communication, stronger ad creatives and better conversion opportunities.",
  },
  {
    id: "cardsixteen",
    title: "Reel Promotion",
    icon: FaVideo,
    description:
      "Give your short-form videos a stronger opportunity to reach the right audience through strategic organic and paid promotion.",
    points: [
      "Reel content strategy",
      "Trend and audio research",
      "Audience targeting",
      "Organic reach strategies",
      "Paid reel promotion",
      "Engagement optimization",
      "Performance analytics",
    ],
    result:
      "Higher reach, views, engagement, discovery and better reel performance.",
  },
  {
    id: "cardseventeen",
    title: "Google Business Profile & Local SEO",
    icon: FaGoogle,
    description:
      "Help customers discover your business when they search locally. We optimize your Google Business Profile and local presence to improve visibility and enquiries.",
    points: [
      "Google Business Profile optimization",
      "Local keyword strategy",
      "Business information optimization",
      "Local content strategy",
      "Review and reputation management",
      "Local search visibility monitoring",
    ],
    result:
      "Better local visibility, more calls and enquiries, stronger trust and qualified local leads.",
  },
];

export default function OurServicePage() {
  return (



<main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-orange-50/40 to-blue-50/40 px-6 py-16 md:px-20">

  <div
    className="pointer-events-none absolute inset-0 overflow-hidden"
    aria-hidden="true"
  >
    <div className="service-orb-orange absolute -left-32 top-20 h-80 w-80 rounded-full" />

    <div className="service-orb-blue absolute -right-32 top-[30%] h-96 w-96 rounded-full" />

    <div className="service-orb-orange-two absolute bottom-10 left-[35%] h-72 w-72 rounded-full" />

    <div className="service-orb-blue-two absolute right-[25%] top-[55%] h-60 w-60 rounded-full" />
  </div>

  <div className="relative z-10">
  </div>



      <div className="relative z-10 mx-auto max-w-7xl">

        <section className="mx-auto max-w-4xl text-center">
          <span className="inline-block rounded-full border border-orange-200 bg-white/80 px-5 py-2 text-sm font-semibold text-[#f36f21] shadow-sm backdrop-blur">
            Brandscare Media
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-[#1f4c8b] md:text-6xl">
            Digital Marketing & Web Development Services
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 md:text-lg">
            We help businesses, creators and brands grow with result-driven
            digital marketing, social media marketing, SEO, performance
            marketing, influencer marketing and high-performance web
            development.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-[#f36f21] px-7 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >
              Start Your Growth
            </Link>

            <Link
              href="/portfolio"
              className="rounded-full border-2 border-[#1f4c8b] bg-white/80 px-7 py-3 font-semibold text-[#1f4c8b] transition hover:-translate-y-1 hover:bg-[#1f4c8b] hover:text-white"
            >
              View Our Work
            </Link>
          </div>
        </section>

        <section className="mt-24">
          <div className="mb-12 text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#f36f21]">
              What We Do
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#1f4c8b] md:text-5xl">
              Complete Digital Growth Services
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-gray-600">
              From visibility and marketing to technology and conversion, we
              create digital solutions that help your business grow.
            </p>
          </div>

          <div className="space-y-5">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <details
                  key={service.id}
                  className="group overflow-hidden rounded-2xl border border-gray-200 bg-white/85 shadow-md backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <summary className="flex cursor-pointer list-none items-center gap-4 p-5 md:p-7">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-xl text-[#f36f21]">
                      <Icon />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[#1f4c8b] md:text-2xl">
                        {service.title}
                      </h3>

                      <p className="mt-1 line-clamp-2 text-sm text-gray-500 md:text-base">
                        {service.description}
                      </p>
                    </div>

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1f4c8b] text-xl font-bold text-white transition group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <div className="border-t border-gray-100 px-5 pb-7 pt-5 md:px-7">
                    <div className="grid gap-8 md:grid-cols-2">
                      <div>
                        <h4 className="mb-4 font-bold text-[#f36f21]">
                          What We Provide
                        </h4>

                        <ul className="space-y-3">
                          {service.points.map((point, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-3 text-sm leading-6 text-gray-600 md:text-base"
                            >
                              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#f36f21]" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-2xl bg-gradient-to-br from-orange-50 to-blue-50 p-6">
                        <span className="text-sm font-bold uppercase tracking-wider text-[#f36f21]">
                          Expected Impact
                        </span>

                        <p className="mt-4 text-lg font-semibold leading-8 text-[#1f4c8b]">
                          {service.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </details>
              );
            })}
          </div>
        </section>

        <section className="mt-28">
          <div className="mb-12 text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#f36f21]">
              Who We Build For
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#1f4c8b] md:text-5xl">
              Digital Growth For Every Kind Of Business
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-gray-600">
              Whether you are a creator, freelancer, startup or established
              business, our strategies are built around your goals.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {clients.map((client) => {
              const Icon = client.icon;

              return (
                <div
                  key={client.title}
                  className="group rounded-2xl border border-gray-200 bg-white/85 p-6 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-50 to-blue-50 text-xl text-[#f36f21] transition group-hover:scale-110">
                    <Icon />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[#1f4c8b]">
                    {client.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {client.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-28 overflow-hidden rounded-3xl bg-white/90 shadow-xl backdrop-blur">
          <div className="grid items-center gap-10 p-8 md:grid-cols-2 md:p-14">
            <div>
              <p className="font-semibold uppercase tracking-[0.25em] text-[#f36f21]">
                Technology & Development
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-[#1f4c8b] md:text-5xl">
                Websites Built For Speed, SEO & Growth
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Your website is more than just a digital identity. It should
                load quickly, provide a smooth user experience, perform well in
                search engines and support your business goals.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Custom Development",
                  "SEO-Friendly Architecture",
                  "Mobile Responsive",
                  "Fast Loading",
                  "Scalable Technology",
                  "Conversion-Focused UX",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-orange-50 px-4 py-3 text-sm font-semibold text-[#1f4c8b]"
                  >
                    ✓ {item}
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="mt-8 inline-block rounded-full bg-[#1f4c8b] px-7 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#f36f21]"
              >
                Discuss Your Project
              </Link>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute h-72 w-72 rounded-full bg-orange-100 blur-3xl" />

              <Image
                src="/images/Media.svg"
                alt="Web development and digital media services"
                width={550}
                height={450}
                className="relative h-auto w-full max-w-lg"
              />
            </div>
          </div>
        </section>

        <section className="mt-28 overflow-hidden rounded-3xl bg-gradient-to-br from-[#1f4c8b] to-[#16385f] px-7 py-14 text-center shadow-2xl md:px-16">
          <p className="font-semibold uppercase tracking-[0.25em] text-orange-300">
            One Digital Growth Partner
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-bold text-white md:text-5xl">
            From Marketing To Technology, We Help Your Brand Grow
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-100">
            Build your brand, reach the right audience, generate qualified
            leads and create a stronger digital presence with Brandscare
            Media.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-[#f36f21] px-8 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-orange-600"
          >
            Let's Grow Together
          </Link>
        </section>
      </div>




      
    </main>
  );
}