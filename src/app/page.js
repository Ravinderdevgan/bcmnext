import Gallery from "@/components/layout/gallery";

import Link from "next/link";
import Image from "next/image";

import AnimatedText from "@/components/animatedtext";
// import Test from "@/components/Test";

export const metadata = {
title: "Best Digital Marketing Agency in India | Brandscare Media",

description:
"Brandscare Media is a digital marketing agency offering social media marketing, performance marketing, SEO, influencer marketing, online reputation management and web development services.",

keywords: [
"Brandscare Media",
"digital marketing agency India",
"best digital marketing agency",
"social media marketing",
"performance marketing",
"SEO services",
"influencer marketing",
"online reputation management",
"web development company",
"digital marketing company India",
],

alternates: {
canonical: "https://brandscaremedia.com/",
},

openGraph: {
title: "Best Digital Marketing Agency in India | Brandscare Media",
description:
"Grow your brand with social media marketing, performance marketing, SEO, influencer marketing and powerful digital strategies.",
url: "https://brandscaremedia.com/",
siteName: "Brandscare Media",
locale: "en_IN",
type: "website",
images: [
{
url: "https://brandscaremedia.com/images/og-default.jpg",
width: 1200,
height: 630,
alt: "Brandscare Media Digital Marketing Agency",
},
],
},

twitter: {
card: "summary_large_image",
title: "Best Digital Marketing Agency in India | Brandscare Media",
description:
"Digital marketing, SEO, social media, performance marketing and branding solutions by Brandscare Media.",
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

const keywords = [
"Performance Marketing",
"Online Reputation Management",
"Social Media Marketing",
"Marketing Automation",
"Twitter Trends",
"SEO",
"Influencer Marketing",
"Social Media Management",
"Instagram Marketing",
"Facebook Marketing",
"Twitter Marketing",
"YouTube Marketing",
"LinkedIn Marketing",
"Meme Marketing",
"UGC Creation",
"Reel Promotion",
];

const coreServices = [
{
title: "Social Media Marketing",
description:
"Expert social media strategies designed to increase your brand visibility, engagement, audience trust, and long-term growth across major platforms.",
},
{
title: "Performance Marketing",
description:
"Data-driven paid advertising campaigns focused on qualified leads, conversions, measurable ROI, and scalable business growth.",
},
{
title: "Reputation Management",
description:
"Strategic online reputation management designed to build trust, improve brand sentiment, manage reviews, and strengthen your digital presence.",
},
];

export default function Home() {
return ( <main className="relative min-h-screen overflow-hidden bg-white text-white">


  <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center font-poppins">

    <div className="mx-auto max-w-5xl">

      <div className="flex  justify-center p-6 md:p-10">
        <AnimatedText
          text="Transform Your Brand Into a Digital Powerhouse"
          className="text-center text-4xl text-O font-extrabold leading-tight md:text-6xl"
        />
      </div>

      <p className="mx-auto mt-4 max-w-3xl bg-gradient-to-r from-O to-B bg-clip-text text-xl text-transparent md:text-2xl">
        We don’t just manage your marketing — we build ecosystems
        that make your brand visible, trusted, and profitable.
      </p>

      <div className="mt-8 flex justify-center">

        <Link
          href="/Contact-Us"
          className="rounded-full bg-O px-7 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-B"
        >
          Start Your Growth Journey
        </Link>

      </div>

    </div>

  </section>



  <section className="relative bg-white px-6 py-20 md:px-16">

    <h2 className="mb-8 text-center text-3xl font-bold text-black md:text-4xl">
      Trusted by Ambitious Brands that Believe in Real Growth
    </h2>

    <p className="mx-auto max-w-3xl text-center font-poppins text-xl text-black md:text-2xl">
      From startups finding their voice to established brands
      expanding globally, we’ve helped businesses dominate digital
      spaces with strategic clarity and creative precision.
    </p>

  </section>



  <section className="relative bg-gray-50 px-6 py-20 md:px-16">

    <h2 className="mb-8 rounded-xl border-2 border-zinc-600 px-4 py-4 text-center text-2xl font-bold text-O md:text-4xl">
      Where Innovation Meets Real{" "}
      <span className="text-B">Development</span>
    </h2>

    <p className="mx-auto mb-10 max-w-3xl text-center font-poppins text-xl text-B md:text-2xl">
      Every website and app we build is{" "}
      <span className="text-2xl font-bold text-O md:text-3xl">
        custom-coded
      </span>{" "}
      with the{" "}
      <span className="text-2xl font-bold text-O md:text-3xl">
        MERN stack
      </span>{" "}
      delivering speed, security, and complete control over your
      digital ecosystem.
    </p>


    <section className="rounded-b-[50%] rounded-t-3xl bg-[#1f4cbb] py-16 text-center text-white">

      <h2 className="text-3xl font-bold">
        Ready to Build Something Amazing?
      </h2>

      <p className="mt-3 px-4 opacity-90">
        Let’s build a fast, scalable and professional digital
        experience for your brand.
      </p>

      <Link
        href="/contact"
        className="mt-6 inline-block rounded-full bg-[#f36f21] px-6 py-3 font-semibold transition-all duration-300 hover:scale-105"
      >
        Contact Us
      </Link>

    </section>

  </section>



  <section className="bg-white px-6 py-20 md:px-16">

    <Image
      src="/images/Online-reviews.svg"
      alt="Online reputation management and digital marketing services"
      width={900}
      height={500}
      className="mx-auto mb-10 h-auto w-full max-w-3xl"
    />


    <h2 className="mb-12 text-center text-3xl font-bold text-B md:text-4xl">

      Our{" "}

      <span className="text-O">
        <span className="text-B">C</span>ore
      </span>{" "}

      <span className="text-B">
        <span className="text-O">Ex</span>pertise
      </span>

    </h2>


    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">

      {coreServices.map((service) => (

        <article
          key={service.title}
          className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >

          <h3 className="mb-3 text-xl font-semibold text-B">
            {service.title}
          </h3>

          <p className="leading-relaxed text-O">
            {service.description}
          </p>

        </article>

      ))}

    </div>



    <div className="mt-16">
      <Gallery/>
      {/* <Test /> */}
    </div>


    <div className="mt-10 flex border-t border-gray-800 pt-5 md:hidden">

      <ul className="flex flex-wrap items-center justify-center gap-3">

        {keywords.map((keyword) => (

          <li
            key={keyword}
            className="text-O underline transition-colors duration-300 hover:text-B"
          >
            {keyword}
          </li>

        ))}

      </ul>

    </div>

  </section>



  <section className="bg-gray-50 px-6 py-20">

    <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-r from-[#f36f21] to-[#1f4cbb] p-10 text-center text-white shadow-xl md:p-16">

      <h2 className="text-3xl font-bold md:text-4xl">
        Ready to Transform Your Brand?
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
        Let’s create a powerful digital strategy that increases
        visibility, builds trust and drives measurable growth.
      </p>

      <Link
        href="/contact"
        className="mt-7 inline-block rounded-full bg-white px-7 py-3 font-semibold text-B transition-all duration-300 hover:scale-105 hover:bg-black hover:text-white"
      >
        Get Started
      </Link>

    </div>

  </section>

</main>

);
}
