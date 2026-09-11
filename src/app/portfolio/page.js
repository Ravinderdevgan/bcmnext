import Image from "next/image";
import Link from "next/link";

const caseStudies = [
  {
    id: 1,
    title: "Political Campaign Management",
    category: "Political & Public Campaigns",
    img: "/images/parties.jpg",
    services: [
      {
        heading: "Online Reputation Management (ORM)",
        desc: "We monitor digital conversations, manage public sentiment, enhance credibility, and maintain a clean digital reputation by handling misinformation.",
      },
      {
        heading: "Twitter/X Trend Management",
        desc: "Create high-visibility hashtag campaigns and optimize trending topics to drive large-scale participation and increase awareness around key messages.",
      },
      {
        heading: "Influencer Outreach & Collaboration",
        desc: "Public personalities, digital creators, and community voices collaborate to amplify campaign communication through transparent and compliant partnerships.",
      },
      {
        heading: "Global Reach & Digital Promotion",
        desc: "Your message is promoted across major social networks with large-scale visibility. Multi-platform strategies help create nationwide and international digital reach.",
      },
      {
        heading: "Political Campaign Management",
        desc: "Structured, ethical, and research-driven campaign support including communication planning, content strategy, event coordination, analytics, and digital monitoring.",
      },
    ],
  },

  {
    id: 2,
    title: "Clothing & Fashion Brands",
    category: "Fashion & Lifestyle",
    img: "/images/WhatsApp Image 2025-12-02 at 5.06.22 PM.jpeg",
    services: [
      {
        heading: "Influencer Collaboration Visits",
        desc: "Top fashion influencers visit your store, try your outfits, create styling content and bring visibility to your brand.",
      },
      {
        heading: "Fashion Events & Brand Promotions",
        desc: "From pop-up showcases to launch parties, we organize and host fashion-forward promotional events that highlight your clothing line.",
      },
      {
        heading: "High-Impact Social Media Content",
        desc: "Trend-driven fashion content, reels and photoshoots designed to increase engagement, spark conversations and attract a style-loving audience.",
      },
      {
        heading: "Multi-Platform Promotion",
        desc: "Your clothing brand can be promoted across Instagram, YouTube, Facebook and other relevant platforms to build stronger brand recall.",
      },
    ],
  },

  {
    id: 3,
    title: "Beauty & Personal Care Brands",
    category: "Beauty & Personal Care",
    img: "/images/WhatsApp Image 2025-12-02 at 5.08.15 PM.jpeg",
    services: [
      {
        heading: "UGC Videos That Feel Real",
        desc: "Authentic creator-made UGC videos that showcase beauty products in a natural, relatable and high-impact way.",
      },
      {
        heading: "High-Impact Digital Reach",
        desc: "Strategic campaigns designed to increase visibility and create stronger connections with beauty-focused audiences.",
      },
      {
        heading: "Genuine Reviews & Social Buzz",
        desc: "Real customers and creators help build trusted reviews, testimonials and positive conversations across social media.",
      },
      {
        heading: "Celebrity & Influencer Promotion",
        desc: "Beauty products can be promoted through relevant celebrities and high-value influencers to increase credibility and attention.",
      },
      {
        heading: "Sales-Focused Campaigns",
        desc: "Powerful content, creator collaborations and targeted promotion designed to support stronger sales performance.",
      },
    ],
  },

  {
    id: 4,
    title: "Movie & Entertainment Industry",
    category: "Entertainment & Media",
    img: "/images/WhatsApp Image 2025-12-02 at 5.05.58 PM.jpeg",
    services: [
      {
        heading: "Faster Audience Growth",
        desc: "High-performance digital strategies designed to increase audience growth and strengthen online visibility.",
      },
      {
        heading: "Reach in Millions",
        desc: "Multi-platform promotion designed to generate significant visibility and expand audience reach.",
      },
      {
        heading: "Large Influencer Network",
        desc: "Access to a broad network of influencers across relevant categories for targeted entertainment promotion.",
      },
      {
        heading: "Higher Engagement",
        desc: "Authentic content combined with targeted promotion helps create stronger audience engagement.",
      },
      {
        heading: "360° Social Media Promotion",
        desc: "Promotion across Instagram, Facebook, YouTube, Snapchat, TikTok and other relevant social platforms.",
      },
    ],
  },
];

export const metadata = {
  title: "Our Portfolio | Digital Marketing Case Studies | Brandscare Media",

  description:
    "Explore Brandscare Media's digital marketing portfolio featuring campaigns across political communication, fashion, beauty, personal care, movies and entertainment.",

  keywords: [
    "Brandscare Media portfolio",
    "digital marketing projects",
    "digital marketing case studies",
    "social media campaigns",
    "branding work",
    "client case studies",
    "marketing results",
    "digital marketing agency India",
    "social media marketing campaigns",
    "influencer marketing campaigns",
    "performance marketing results",
    "online reputation management",
    "fashion brand marketing",
    "beauty brand marketing",
    "entertainment marketing",
  ],

  alternates: {
    canonical: "https://brandscaremedia.com/Profile",
  },

  openGraph: {
    title: "Our Portfolio | Digital Marketing Case Studies | Brandscare Media",

    description:
      "Explore Brandscare Media's digital marketing campaigns, brand strategies and industry-focused case studies.",

    url: "https://brandscaremedia.com/Profile",

    siteName: "Brandscare Media",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Brandscare Media Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Our Portfolio | Brandscare Media",

    description:
      "Explore Brandscare Media's digital marketing campaigns and industry-focused case studies.",

    images: ["/images/og-default.jpg"],
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

export default function Profile() {
  return (
    <main className="min-h-screen bg-slate-50 px-5 py-12 pb-28 md:px-10 md:py-20 md:pb-20 lg:px-20">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="mx-auto max-w-7xl">

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-B via-[#244f88] to-[#142f55] px-6 py-14 shadow-xl md:px-12 md:py-20">

          {/* Decorative shapes */}

          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-O/20 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-4xl text-center animate-fade-up">

            <span className="inline-block rounded-full bg-O px-5 py-2 font-poppins text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Our Portfolio
            </span>

            <h1 className="mt-6 font-poppins text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Real Brands.
              <span className="block text-O">
                Real Stories. Real Results.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl font-poppins text-base leading-8 text-blue-100 md:text-lg">
              Explore how Brandscare Media combines strategy, creativity,
              social media, influencer marketing and digital growth to
              help brands build stronger online presence.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          PORTFOLIO INTRO
      ====================================================== */}

      <section className="mx-auto mt-14 max-w-4xl text-center">

        <p className="font-poppins text-sm font-semibold uppercase tracking-[0.2em] text-O">
          Selected Work
        </p>

        <h2 className="mt-3 font-poppins text-3xl font-bold text-B md:text-4xl">
          Strategies Built Around Real Business Goals
        </h2>

        <p className="mt-5 font-poppins leading-8 text-gray-600">
          Every campaign has a different audience, challenge and objective.
          Our approach combines creative storytelling with digital
          strategy to create meaningful brand visibility and growth.
        </p>

      </section>


      {/* =====================================================
          CASE STUDIES
      ====================================================== */}

      <section className="mx-auto mt-14 grid max-w-7xl gap-8 md:grid-cols-2">

        {caseStudies.map((caseStudy, index) => (

          <article
            key={caseStudy.id}
            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl animate-fade-up"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >

            {/* IMAGE */}

            <div className="relative aspect-[16/9] overflow-hidden">

              <Image
                src={caseStudy.img}
                alt={`${caseStudy.title} - Brandscare Media portfolio`}
                fill
                loading={index === 0 ? "eager" : "lazy"}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5">

                <span className="inline-block rounded-full bg-O px-4 py-1.5 font-poppins text-xs font-semibold uppercase tracking-wide text-white">
                  {caseStudy.category}
                </span>

              </div>

            </div>


            {/* CONTENT */}

            <div className="p-7 md:p-8">

              <div className="mb-7">

                <div className="mb-3 flex items-center gap-3">

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-B font-poppins text-sm font-bold text-white">
                    0{caseStudy.id}
                  </span>

                  <span className="h-px flex-1 bg-slate-200" />

                </div>

                <h2 className="font-poppins text-2xl font-bold leading-tight text-B md:text-3xl">
                  {caseStudy.title}
                </h2>

              </div>


              {/* SERVICES */}

              <div className="space-y-5">

                {caseStudy.services.map((service) => (

                  <div
                    key={service.heading}
                    className="border-l-2 border-O pl-4"
                  >

                    <h3 className="font-poppins text-base font-bold text-slate-800 md:text-lg">
                      {service.heading}
                    </h3>

                    <p className="mt-1.5 font-poppins text-sm leading-7 text-slate-600">
                      {service.desc}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </article>

        ))}

      </section>


      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="mx-auto mt-16 max-w-7xl">

        <div className="relative overflow-hidden rounded-3xl bg-B px-6 py-14 text-center shadow-xl md:px-12">

          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-O/20 blur-3xl" />

          <div className="relative z-10">

            <p className="font-poppins text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
              Your Brand Could Be Next
            </p>

            <h2 className="mt-4 font-poppins text-3xl font-bold text-white md:text-5xl">
              Ready to Build Your
              <span className="block text-O">
                Digital Success Story?
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl font-poppins leading-8 text-blue-100">
              Let&apos;s discuss your goals and create a digital strategy
              designed around your brand.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-block rounded-xl bg-O px-8 py-3.5 font-poppins font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-lg"
            >
              Start a Conversation
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}