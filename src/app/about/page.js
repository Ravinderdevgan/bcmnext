import Image from "next/image";

import {
FaLinkedin,
FaRocket,
FaHandHoldingHeart,
FaChartLine,
FaLightbulb,
FaArrowRight,
} from "react-icons/fa";

const teamMembers = [
{
name: "Chandramani Singh",
role: "Founder & Chief Growth Strategist",
bio1: [
"Visionary founder known for innovative digital branding and result-driven marketing strategies.",
"Expertise spans across digital strategy, brand positioning, viral content marketing, and high-performance ad campaigns.",
"Believes in blending creativity with analytics-turning ideas into digital experiences that customers remember.",
],
linkedin:
"https://www.linkedin.com/in/chandramani-singh-4b8566286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
},
{
name: "Varsha",
role: "Founder & Creative Director",
bio1: [
"The creative powerhouse leading content innovation, brand storytelling, and design direction.",
"Expertise lies in visual branding, content design, and creating attention-grabbing digital experiences.",
"Focuses on developing fresh, viral-ready content strategies that help clients stand out.",
],
linkedin:
"https://www.linkedin.com/in/varsha-sihan-9a363126a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
},
];

const coreValues = [
{
title: "Transparency",
desc: "No hidden results. No inflated reports.",
icon: <FaChartLine />,
},
{
title: "Care",
desc: "We treat every brand like our own.",
icon: <FaHandHoldingHeart />,
},
{
title: "Performance",
desc: "Every idea must show real numbers.",
icon: <FaRocket />,
},
{
title: "Innovation",
desc: "Always one step ahead of the trend.",
icon: <FaLightbulb />,
},
];

const missionVision = [
{
title: "Our Mission",
desc: "To help brands achieve long-term digital success through transparency, innovation, and measurable performance.",
},
{
title: "Our Vision",
desc: "To be India’s most trusted digital growth partner where creativity meets accountability.",
},
];

export const metadata = {
title: "About Brandscare Media | Digital Marketing Agency India",

description:
"Learn about Brandscare Media, a digital marketing agency focused on creative branding, social media marketing, performance marketing, SEO, web development and measurable business growth.",

keywords: [
"about Brandscare Media",
"digital marketing company India",
"digital marketing agency India",
"marketing experts team",
"branding agency India",
"social media experts",
"creative agency India",
"performance marketing agency",
"SEO company India",
"web development company India",
],

alternates: {
canonical: "https://brandscaremedia.com/about",
},

openGraph: {
title: "About Brandscare Media | Digital Marketing Agency India",

description:
  "Discover the people, mission, values and digital expertise behind Brandscare Media.",

url: "https://brandscaremedia.com/about",

siteName: "Brandscare Media",

locale: "en_IN",

type: "website",

images: [
  {
    url: "https://brandscaremedia.com/images/og-default.jpg",
    width: 1200,
    height: 630,
    alt: "About Brandscare Media",
  },
],

},

twitter: {
card: "summary_large_image",

title: "About Brandscare Media | Digital Marketing Agency India",

description:
  "Meet Brandscare Media and discover our mission, values and digital growth expertise.",

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

export default function About() {
return (
<main className="relative min-h-screen overflow-hidden bg-zinc-300 px-6 pt-16 pb-28 md:px-20 md:py-16">

  <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-b-full">

    <Image
      src="/images/sm.jpg"
      alt=""
      fill
      priority
      sizes="100vw"
      className="object-cover object-center opacity-30"
    />

    <div className="absolute inset-0 bg-black/30" />

  </div>



  <section className="relative z-10 mx-auto mb-12 max-w-3xl text-center animate-fade-up">

    <h1 className="mb-4 rounded-xl text-4xl font-bold text-black">

      We Don’t Just Run Campaigns{" "}

      <span className="text-black">
        We Build Brands that Last
      </span>

    </h1>

    <p className="font-mono text-3xl text-gray-950 hover:rounded-2xl hover:border-b-4 hover:border-white">

      Brands Care Media was founded on one belief{" "}

      <span className="font-semibold">
        real marketing starts with care.
      </span>{" "}

      We blend creativity data and human psychology to help brands grow
      ethically sustainably and profitably.

    </p>

  </section>



  <section className="relative z-10 mb-12 grid grid-cols-1 gap-12 rounded-xl md:grid-cols-2">


    <div className="flex items-center justify-center">

      <Image
        src="/images/Growth.svg"
        alt="Digital growth strategy and business development"
        width={500}
        height={500}
        sizes="(max-width: 768px) 100vw, 500px"
        className="h-auto w-full max-w-md"
      />

    </div>


    {missionVision.map((item, index) => (

      <article
        key={item.title}
        className="animate-fade-up rounded-s-full rounded-tr-full bg-orange-400 p-9 shadow-lg"
        style={{
          animationDelay: `${index * 100}ms`,
        }}
      >

        <div className="mb-4 flex items-center gap-4">

          <div className="rounded-full bg-O p-3">

            <Image
              src="/images/Growth.svg"
              width={32}
              height={32}
              alt=""
              className="h-8 w-8"
            />

          </div>

          <h2 className="text-3xl font-bold text-B">
            {item.title}
          </h2>

        </div>

        <p className="text-lg leading-relaxed text-white md:text-3xl">
          {item.desc}
        </p>

      </article>

    ))}

  </section>



  <section className="relative z-10 rounded-2xl bg-white py-20">

    <div className="mx-auto max-w-7xl px-6">

      <div className="mb-16 text-center">

        <h2 className="text-4xl font-bold md:text-5xl">
          Engineering Digital Experiences With Real Code
        </h2>

        <p className="mx-auto mt-6 max-w-3xl leading-relaxed text-gray-600">
          At BrandsCare Media, we specialize in building high-performance
          websites and scalable mobile applications using modern
          technologies. We don’t rely on templates or shortcuts — every
          project is custom-coded to ensure speed, security, and long-term
          growth.
        </p>

      </div>


      <div className="grid items-center gap-12 md:grid-cols-2">


        <div>

          <h3 className="mb-4 text-2xl font-semibold text-[#1f4cbb]">
            Our Mission
          </h3>

          <p className="mb-6 leading-relaxed text-gray-600">
            To empower businesses with reliable, scalable, and
            performance-driven digital products built using the MERN stack
            and modern development standards.
          </p>

          <ul className="space-y-3 text-gray-700">

            <li className="flex items-center gap-3">
              <FaArrowRight />
              Custom MERN Stack Development
            </li>

            <li className="flex items-center gap-3">
              <FaArrowRight />
              Performance & Security Focused Architecture
            </li>

            <li className="flex items-center gap-3">
              <FaArrowRight />
              Scalable & Future-Ready Solutions
            </li>

            <li className="flex items-center gap-3">
              <FaArrowRight />
              Clean UI/UX With Real Engineering
            </li>

          </ul>

        </div>



        <div
          className="rounded-2xl bg-gradient-to-r from-[#f36f21] to-[#1f4cbb] p-10 text-white shadow-xl"
        >

          <h3 className="mb-4 text-2xl font-bold">
            Why BrandsCare Media?
          </h3>

          <p className="leading-relaxed opacity-95">
            We focus on building digital products that not only look
            modern but perform exceptionally. Our approach combines strong
            backend architecture with smooth frontend experiences.
          </p>

        </div>

      </div>

    </div>

  </section>



  <section className="relative z-10 mb-24 mt-10 text-center">


    <div
      className="mb-4 inline-block animate-fade-up rounded-full bg-orange-100 p-3"
    >

      <Image
        src="/images/Launch.svg"
        alt="Innovation and digital growth"
        width={80}
        height={80}
        sizes="80px"
        className="mx-auto"
      />

    </div>


    <h2 className="mb-12 text-4xl font-bold text-gray-800">
      Our Core Values
    </h2>


    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">

      {coreValues.map((item, index) => (

        <article
          key={item.title}
          className="group animate-fade-up rounded-2xl border border-slate-100 bg-gradient-to-t from-O to-B p-8 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
          style={{
            animationDelay: `${index * 100}ms`,
          }}
        >

          <div className="mb-4 flex justify-center text-4xl text-slate-200 transition-transform duration-300 group-hover:scale-105">
            {item.icon}
          </div>

          <h3 className="mb-2 text-xl font-bold text-slate-900">
            {item.title}
          </h3>

          <p className="text-slate-100">
            {item.desc}
          </p>

        </article>

      ))}

    </div>

  </section>


  {/* ================= TEAM ================= */}

  <section className="relative z-10 mb-12 text-center">

    <h2 className="text-4xl font-bold text-slate-800">
      Meet the Minds
    </h2>

    <p className="mb-4 mt-2 text-slate-500">
      The visionaries behind the magic
    </p>


    <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-8 px-4">

      {teamMembers.map((member, index) => (

        <article
          key={member.name}
          className="group relative w-full animate-fade-up overflow-hidden rounded-3xl bg-white shadow-xl transition-shadow duration-300 hover:shadow-2xl sm:w-80 md:w-96"
          style={{
            animationDelay: `${index * 100}ms`,
          }}
        >

          {/* Decorative Background */}

          <div className="relative h-32 bg-gradient-to-r from-B to-B">

            <div className="absolute inset-0 bg-black/10" />

          </div>


          <div className="relative -mt-12 px-8 pb-8">

            {/* Profile Placeholder */}

            <div className="mb-4 inline-block rounded-2xl bg-amber-100 p-2 shadow-sm">

              <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-O text-3xl font-bold text-white">
                {member.name.charAt(0)}
              </div>

            </div>


            <h3 className="text-2xl font-bold text-B">
              {member.name}
            </h3>

            <p className="mb-4 font-medium text-orange-600">
              {member.role}
            </p>


            <div className="mb-6 space-y-3">

              {member.bio1.map((line) => (

                <p
                  key={line}
                  className="text-sm leading-relaxed text-slate-600"
                >

                  <span className="mr-2 text-orange-500">
                    ➜
                  </span>

                  {line}

                </p>

              ))}


              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Connect with ${member.name} on LinkedIn`}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 py-3 font-semibold text-blue-700 transition-colors duration-300 hover:bg-blue-600 hover:text-white"
              >

                <FaLinkedin size={20} />

                Connect on LinkedIn

              </a>

            </div>

          </div>

        </article>

      ))}

    </div>

  </section>


</main>
);
}
