import Hero from "@/components/hero";
import {
  CircleCheck,
  Truck,
  Clock,
  Plane,
  Ship,
  Building2,
} from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Hero />
      <section className="max-w-7xl mx-auto px-4 py-8 md:py-16 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Key Features
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose Us
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our logistics solutions are designed to streamline your import and
            export operations, ensuring efficient and reliable services.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            <div className="rounded-lg bg-gray-100 p-6 text-center">
              <CircleCheck
                className="mx-auto h-12 w-12 text-indigo-600"
                aria-hidden="true"
              />
              <dt className="mt-5 font-semibold text-gray-900">
                Quality Control
              </dt>
              <dd className="mt-2 text-gray-500">
                Our rigorous quality control processes ensure your goods are
                handled with utmost care and precision.
              </dd>
            </div>

            <div className="rounded-lg bg-gray-100 p-6 text-center">
              <Truck
                className="mx-auto h-12 w-12 text-indigo-600"
                aria-hidden="true"
              />
              <dt className="mt-5 font-semibold text-gray-900">
                Reliable Delivery
              </dt>
              <dd className="mt-2 text-gray-500">
                We prioritize on-time delivery, minimizing delays and ensuring
                your goods reach their destination efficiently.
              </dd>
            </div>

            <div className="rounded-lg bg-gray-100 p-6 text-center">
              <Clock
                className="mx-auto h-12 w-12 text-indigo-600"
                aria-hidden="true"
              />
              <dt className="mt-5 font-semibold text-gray-900">
                Real-Time Tracking
              </dt>
              <dd className="mt-2 text-gray-500">
                Our advanced tracking system allows you to monitor the progress
                of your shipments in real-time, providing transparency and peace
                of mind.
              </dd>
            </div>
          </dl>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4  py-8 md:py-16 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Our Services
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Logistics Solutions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We offer a wide range of logistics services to meet your diverse
            needs, ensuring seamless operations from Ghana to China and back.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-4">
            <div className="rounded-lg bg-white p-6 shadow">
              <Plane className="mx-auto h-12 w-12 text-indigo-600" />
              <dt className="mt-5 font-semibold text-gray-900">Air Freight</dt>
              <dd className="mt-2 text-gray-500">
                Reliable and expedited air freight services for your
                time-sensitive shipments.
              </dd>
            </div>

            <div className="rounded-lg bg-white p-6 shadow">
              <Ship className="mx-auto h-12 w-12 text-indigo-600" />
              <dt className="mt-5 font-semibold text-gray-900">
                Sea Freight FCL
              </dt>
              <dd className="mt-2 text-gray-500">
                Cost-effective full container load (FCL) sea freight services
                for larger shipments.
              </dd>
            </div>

            <div className="rounded-lg bg-white p-6 shadow">
              <Ship className="mx-auto h-12 w-12 text-indigo-600" />
              <dt className="mt-5 font-semibold text-gray-900">
                Sea Freight LCL
              </dt>
              <dd className="mt-2 text-gray-500">
                Flexible less-than-container load (LCL) sea freight services for
                smaller shipments.
              </dd>
            </div>

            <div className="rounded-lg bg-white p-6 shadow">
              <Building2 className="mx-auto h-12 w-12 text-indigo-600" />
              <dt className="mt-5 font-semibold text-gray-900">
                Customs Brokerage
              </dt>
              <dd className="mt-2 text-gray-500">
                Efficient customs clearance and brokerage services to streamline
                your import and export processes.
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
