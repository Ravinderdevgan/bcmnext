import Image from "next/image";
import Link from "next/link";

import InfluencerForm from "@/components/influencerform";

export const metadata = {
  title: "Influencer Marketing & Creator Partnerships | Brandscare Media",

  description:
    "Join Brandscare Media for influencer marketing, creator campaigns, social media collaborations, personal branding and digital growth opportunities.",

  keywords: [
    "Brandscare Media influencer contact",
    "influencer marketing agency India",
    "influencer marketing",
    "creator marketing",
    "social media marketing",
    "personal branding",
    "Instagram marketing",
    "YouTube marketing",
    "Twitter marketing",
    "digital marketing agency India",
  ],

  alternates: {
    canonical: "https://brandscaremedia.com/influencercontact",
  },

  openGraph: {
    title: "Influencer Marketing & Creator Partnerships | Brandscare Media",
    description:
      "Connect with Brandscare Media for influencer marketing, creator campaigns and digital growth opportunities.",

    url: "https://brandscaremedia.com/influencercontact",

    siteName: "Brandscare Media",

    type: "website",

    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Brandscare Media Influencer Marketing",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Influencer Marketing & Creator Partnerships | Brandscare Media",

    description:
      "Partner with Brandscare Media for influencer campaigns, creator collaborations and digital growth.",

    images: ["/images/og-default.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function InfluencerContact() {
  return (
    <main className="min-h-screen bg-gray-50 px-5 py-12 pb-28 md:px-10 md:py-20 md:pb-20 lg:px-20">

     

      <section className="mx-auto max-w-7xl">

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-B to-[#163968] px-6 py-12 shadow-xl md:px-12 md:py-16">

         

          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-O/20 blur-2xl" />

          <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />


          <div className="relative z-10 grid items-center gap-10 md:grid-cols-2">

            {/* LEFT */}

            <div className="animate-fade-up text-center md:text-left">

              <span className="inline-block rounded-full bg-O px-5 py-2 font-poppins text-sm font-semibold uppercase tracking-wider text-white">
                Creator Partnerships
              </span>

              <h1 className="mt-5 font-poppins text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                Let&apos;s Create
                <span className="block text-O">
                  Something Powerful
                </span>
              </h1>

              <p className="mt-6 max-w-xl font-poppins text-base leading-8 text-blue-100 md:text-lg">
                Are you an influencer, creator or digital personality?
                Partner with Brandscare Media and turn your audience,
                creativity and influence into meaningful brand
                collaborations.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row md:justify-start">

                <a
                  href="#influencer-form"
                  className="rounded-xl bg-O px-7 py-3 text-center font-poppins font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-lg"
                >
                  Apply for Collaboration
                </a>

                <Link
                  href="/contact"
                  className="rounded-xl border border-white/40 bg-white/10 px-7 py-3 text-center font-poppins font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-B"
                >
                  General Enquiry
                </Link>

              </div>

            </div>


       

            <div className="flex justify-center md:justify-end">

              <div className="relative flex h-64 w-64 items-center justify-center rounded-full bg-white/10 p-8 backdrop-blur-sm md:h-80 md:w-80">

                <div className="absolute inset-5 rounded-full border border-white/20" />

                <Image
                  src="/images/Form.svg"
                  alt="Influencer collaboration with Brandscare Media"
                  width={300}
                  height={300}
                  priority
                  className="relative z-10 h-52 w-52 object-contain md:h-64 md:w-64"
                />

              </div>

            </div>

          </div>

        </div>

      </section>




      <section className="mx-auto mt-14 max-w-7xl">

        <div className="mx-auto mb-10 max-w-2xl text-center">

          <p className="font-poppins text-sm font-semibold uppercase tracking-[0.2em] text-O">
            Why Partner With Us?
          </p>

          <h2 className="mt-3 font-poppins text-3xl font-bold text-B md:text-4xl">
            Grow Your Influence With the Right Brands
          </h2>

          <p className="mt-4 font-poppins leading-7 text-gray-600">
            We connect creators with opportunities that match their
            audience, content style and personal brand.
          </p>

        </div>


        <div className="grid gap-6 md:grid-cols-3">

        

          <article className="rounded-2xl bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-orange-50 text-2xl text-O">
              ✦
            </div>

            <h3 className="font-poppins text-xl font-bold text-B">
              Brand Collaborations
            </h3>

            <p className="mt-3 font-poppins leading-7 text-gray-600">
              Get opportunities to collaborate with brands and
              businesses looking for authentic creators.
            </p>

          </article>


         

          <article className="rounded-2xl bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-2xl text-B">
              ↗
            </div>

            <h3 className="font-poppins text-xl font-bold text-B">
              Grow Your Personal Brand
            </h3>

            <p className="mt-3 font-poppins leading-7 text-gray-600">
              Build stronger digital visibility with strategic
              campaigns and content opportunities.
            </p>

          </article>


         

          <article className="rounded-2xl bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-orange-50 text-2xl text-O">
              ◎
            </div>

            <h3 className="font-poppins text-xl font-bold text-B">
              Long-Term Partnerships
            </h3>

            <p className="mt-3 font-poppins leading-7 text-gray-600">
              We believe in meaningful creator relationships rather
              than one-time promotional campaigns.
            </p>

          </article>

        </div>

      </section>


    

      <section
        id="influencer-form"
        className="mx-auto mt-16 max-w-7xl scroll-mt-24"
      >

        <div className="grid overflow-hidden rounded-3xl bg-white shadow-xl lg:grid-cols-[0.8fr_1.2fr]">

       

          <div className="relative overflow-hidden bg-gradient-to-br from-B to-[#163968] p-8 text-white md:p-12">

            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-O/20 blur-3xl" />

            <div className="relative z-10">

              <span className="font-poppins text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
                Get Started
              </span>

              <h2 className="mt-4 font-poppins text-3xl font-bold md:text-4xl">
                Tell Us About
                <span className="block text-O">
                  Your Profile
                </span>
              </h2>

              <p className="mt-5 font-poppins leading-8 text-blue-100">
                Fill in your details and our team will review your
                profile for suitable influencer and creator
                collaboration opportunities.
              </p>


              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-O font-bold">
                    ✓
                  </span>

                  <span className="font-poppins">
                    Influencer Campaigns
                  </span>
                </div>


                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-O font-bold">
                    ✓
                  </span>

                  <span className="font-poppins">
                    Social Media Collaborations
                  </span>
                </div>


                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-O font-bold">
                    ✓
                  </span>

                  <span className="font-poppins">
                    Personal Branding Opportunities
                  </span>
                </div>

              </div>

            </div>

          </div>


          

          <div className="p-6 md:p-10 lg:p-12">

            <div className="mb-6">

              <h2 className="font-poppins text-2xl font-bold text-B md:text-3xl">
                Influencer Contact Form
              </h2>

              <p className="mt-2 font-poppins text-sm leading-6 text-gray-500">
                Share your information below and we&apos;ll get back
                to you regarding potential collaborations.
              </p>

            </div>

            <InfluencerForm />

          </div>

        </div>

      </section>

      <div className="mx-auto mt-10 flex max-w-7xl justify-center">

        <Link
          href="/contact"
          className="rounded-full border-2 border-B px-7 py-3 font-poppins font-semibold text-B transition-all duration-300 hover:bg-B hover:text-white"
        >
          ← Back to Contact
        </Link>

      </div>

    </main>
  );
}