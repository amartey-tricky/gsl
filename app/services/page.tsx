import Link from "next/link";
import { Plane } from "lucide-react";

const Services = [
  {
    name: "Air Cargo",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        width="65"
        height="65"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
      </svg>
    ),
    href: "",
    passage: "",
  },
  {
    name: "RMB Payment",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        width="65"
        height="65"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
        <path d="m9 8 3 3v7" />
        <path d="m12 11 3-3" />
        <path d="M9 12h6" />
        <path d="M9 16h6" />
      </svg>
    ),
    href: "",
    passage: "",
  },
  {
    name: "Goods Inspection",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        width="65"
        height="65"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
    href: "",
    passage: "",
  },
  {
    name: "Groupage",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        width="65"
        height="65"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    href: "",
    passage: "",
  },
  {
    name: "Less Container Load (LCL)",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        width="65"
        height="65"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5" />
        <path d="M12 22V12" />
      </svg>
    ),
    href: "",
    passage: "",
  },
  {
    name: "Full Container Load",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        width="65"
        height="65"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z" />
        <path d="m7 16.5-4.74-2.85" />
        <path d="m7 16.5 5-3" />
        <path d="M7 16.5v5.17" />
        <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z" />
        <path d="m17 16.5-5-3" />
        <path d="m17 16.5 4.74-2.85" />
        <path d="M17 16.5v5.17" />
        <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z" />
        <path d="M12 8 7.26 5.15" />
        <path d="m12 8 4.74-2.85" />
        <path d="M12 13.5V8" />
      </svg>
    ),
    href: "",
    passage: "",
  },
  {
    name: "Customs Brokerage",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        width="65"
        height="65"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="m3 3 3 9-3 9 19-9Z" />
        <path d="M6 12h16" />
      </svg>
    ),
    href: "",
    passage: "",
  },
];

export default function page() {
  return (
    <main className="min-h-screen flex flex-col p-8 md:p-12">
      <section className="py-8">
        <h1 className="text-center font-semibold text-4xl md:text-6xl">
          Services
        </h1>
      </section>
      <section className="py-6 md:py-10 flex flex-col text-justify md:grid md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 md:justify-items-center">
        <p className="px-4 font-medium text-md">
          At Golden Stone Logistics, we bridge the gap between Ghana and the
          world, specializing in the seamless import and export of goods. Our
          expertise lies in facilitating trade between Ghana and China, offering
          a comprehensive suite of services tailored to businesses of all sizes.
          Whether you're importing electronics from Shenzhen or exporting cocoa
          beans to Europe, we handle everything from air and sea freight
          forwarding to customs clearance and inland transportation.
        </p>
        <p className="px-4 font-medium text-md">
          Our commitment extends beyond the China-Ghana corridor. With a global
          network of partners and a deep understanding of international trade
          regulations, we can help you navigate the complexities of exporting to
          any corner of the world. We strive to be your trusted logistics
          partner, ensuring your goods arrive on time and within budget,
          allowing you to focus on growing your business.
        </p>
      </section>
      <section>
        <h3 className="text-2xl md:text-4xl font-bold text-center text-nowrap">
          We Help You With
        </h3>
        <div className="flex flex-wrap flex-grow gap-4 md:gap-8 justify-evenly">
          {Services.map((service) => {
            return (
              <article
                key={service.name}
                className="w-[90%] md:w-[40%] py-8 md:py-12"
              >
                <Link
                  href={service.href}
                  className="group relative block h-64 sm:h-60 lg:h-80"
                >
                  <span className="absolute inset-0 border-2 border-dashed border-black" />

                  <div className="relative flex h-full transform items-end border-2 border-black transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                    <div className="p-4 pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                      {service.logo}

                      <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                        {service.name}
                      </h2>
                    </div>

                    <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                      <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                        {service.name}
                      </h3>

                      <p className="mt-4 text-sm sm:text-base">
                        {service.passage}
                      </p>

                      <p className="mt-8 font-bold">Read more</p>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
