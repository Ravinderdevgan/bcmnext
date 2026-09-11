import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import ContactForm from "@/components/contactform";

export const metadata = {
  title: "Contact Us | Digital Marketing Agency | Brandscare Media",

  description:
    "Contact Brandscare Media for digital marketing, social media marketing, performance marketing, SEO, ORM, influencer marketing, branding and web development services.",

  keywords:
    "contact Brandscare Media, digital marketing agency India, social media marketing agency, performance marketing agency, SEO services India, online reputation management, influencer marketing agency, web development company India, branding agency, MERN development",

  alternates: {
    canonical: "https://brandscaremedia.com/Contact-Us",
  },

  openGraph: {
    title: "Contact Us | Brandscare Media",
    description:
      "Connect with Brandscare Media for digital marketing, branding, SEO, social media marketing, performance marketing and web development services.",
    url: "https://brandscaremedia.com/Contact-Us",
    siteName: "Brandscare Media",
    type: "website",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Brandscare Media",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Brandscare Media",
    description:
      "Talk to Brandscare Media about your digital growth, marketing and web development requirements.",
    images: ["/images/og-default.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactUsPage() {
  return (
    <main className="overflow-hidden">

      <section className="relative bg-white px-5 py-16 md:px-10 md:py-24 lg:px-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

          {/* LEFT CONTENT */}
          <div className="animate-fade-up">
            <p className="mb-3 font-poppins text-sm font-semibold uppercase tracking-[0.2em] text-O">
              Let&apos;s Grow Together
            </p>

            <h1 className="font-poppins text-4xl font-bold leading-tight text-B md:text-5xl lg:text-6xl">
              Let&apos;s Build Something
              <span className="block text-O">
                Amazing Together
              </span>
            </h1>

            <p className="mt-6 max-w-xl font-poppins text-base leading-8 text-gray-600 md:text-lg">
              Whether you want to grow your brand, generate more leads,
              improve your online presence, or build a powerful website,
              our team is ready to help you turn your ideas into real
              digital growth.
            </p>

            <div className="mt-8">
              <Image
                src="/images/Contact-us.svg"
                alt="Contact Brandscare Media"
                width={500}
                height={450}
                priority
                className="h-auto w-full max-w-md object-contain"
              />
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="animate-fade-up [animation-delay:150ms]">
            <ContactForm />
          </div>
        </div>
      </section>


      <section className="bg-gray-50 px-5 py-16 md:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="font-poppins text-sm font-semibold uppercase tracking-[0.2em] text-O">
              Get In Touch
            </p>

            <h2 className="mt-3 font-poppins text-3xl font-bold text-B md:text-4xl">
              Have a Project in Mind?
            </h2>

            <p className="mt-4 font-poppins leading-7 text-gray-600">
              Tell us what you&apos;re looking to achieve and let&apos;s
              discuss how we can make it happen.
            </p>
          </div>


          <div className="grid gap-6 md:grid-cols-3">

            <a
              href="tel:+919958977700"
              className="group rounded-2xl bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-B transition-colors duration-300 group-hover:bg-B group-hover:text-white">
                <FaPhoneAlt className="text-xl" />
              </div>

              <h3 className="font-poppins text-xl font-bold text-B">
                Call Us
              </h3>

              <p className="mt-2 font-poppins text-gray-600">
                +91 99589 77700
              </p>
            </a>


            <a
              href="mailto:info@brandscaremedia.com"
              className="group rounded-2xl bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-orange-50 text-O transition-colors duration-300 group-hover:bg-O group-hover:text-white">
                <FaEnvelope className="text-xl" />
              </div>

              <h3 className="font-poppins text-xl font-bold text-B">
                Email Us
              </h3>

              <p className="mt-2 break-all font-poppins text-gray-600">
                info@brandscaremedia.com
              </p>
            </a>


            <div className="group rounded-2xl bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-B transition-colors duration-300 group-hover:bg-B group-hover:text-white">
                <FaMapMarkerAlt className="text-xl" />
              </div>

              <h3 className="font-poppins text-xl font-bold text-B">
                Our Offices
              </h3>

              <p className="mt-2 font-poppins leading-7 text-gray-600">
                Delhi NCR, India
              </p>
            </div>

          </div>
        </div>
      </section>


      <section className="bg-white px-5 py-16 md:px-10 md:py-24 lg:px-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

          {/* IMAGE */}
          <div className="order-2 flex justify-center md:order-1">
            <Image
              src="/images/Email-marketing.svg"
              alt="Digital marketing consultation"
              width={500}
              height={450}
              loading="lazy"
              className="h-auto w-full max-w-md object-contain"
            />
          </div>


          <div className="order-1 md:order-2">
            <p className="font-poppins text-sm font-semibold uppercase tracking-[0.2em] text-O">
              Specialized Services
            </p>

            <h2 className="mt-3 font-poppins text-3xl font-bold leading-tight text-B md:text-4xl">
              Looking for Something
              <span className="block text-O">
                More Specific?
              </span>
            </h2>

            <p className="mt-5 font-poppins leading-8 text-gray-600">
              We also work with influencers, creators, businesses and
              brands looking for customized digital growth solutions.
              Choose the option that best matches your requirement.
            </p>

            {/* <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <Link
                href="/influencercontact"
                className="rounded-lg bg-B px-7 py-3 text-center font-poppins font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg"
              >
                CONTACT_US
              </Link>

              <Link
                href="/brandContact"
                className="rounded-lg border-2 border-O px-7 py-3 text-center font-poppins font-semibold text-O transition-all duration-300 hover:-translate-y-1 hover:bg-O hover:text-white hover:shadow-lg"
              >
                CONTACT_US
              </Link>

            </div> */}



<div className="mt-8 flex flex-col gap-4 sm:flex-row">

  <Link
    href="/influencercontact"
    className="rounded-lg bg-B px-7 py-3 text-center font-poppins font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg"
  >
    For Influencers
  </Link>

  <Link
    href="/brandContact"
    className="rounded-lg border-2 border-O px-7 py-3 text-center font-poppins font-semibold text-O transition-all duration-300 hover:-translate-y-1 hover:bg-O hover:text-white hover:shadow-lg"
  >
    For Brands & Businesses
  </Link>

</div>

          </div>

        </div>
      </section>


      <section className="bg-B px-5 py-16 md:px-10 md:py-20 lg:px-20">
        <div className="mx-auto max-w-5xl text-center">

          <Image
            src="/images/tag.svg"
            alt="Brandscare Media"
            width={90}
            height={90}
            loading="lazy"
            className="mx-auto mb-6 h-16 w-16 object-contain"
          />

          <h2 className="font-poppins text-3xl font-bold text-white md:text-5xl">
            Ready to Take Your Brand
            <span className="block text-O">
              to the Next Level?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl font-poppins leading-8 text-blue-100">
            Let&apos;s create a digital strategy that doesn&apos;t just
            look good, but delivers measurable results.
          </p>

          <Link
            href="#top"
            className="mt-8 inline-block rounded-lg bg-O px-8 py-3 font-poppins font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-lg"
          >
            Start Your Growth Journey
          </Link>

        </div>
      </section>

    </main>
  );
}