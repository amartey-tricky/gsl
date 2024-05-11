// app/page.jsx
import Link from "next/link";

export default function Hero() {
  return (
    <section className="max-w-7xl min-h-[calc(100vh-158px)] mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Seamless Logistics Solutions
        </h1>
        <p className="max-w-xl mx-auto mt-5 text-xl text-gray-500">
          Streamlining import and export operations between Ghana and China.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
