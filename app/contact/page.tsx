import ContactForm from "@/components/contactform";
import ContactDetails from "@/components/contactdetails";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col p-8 md:p-12">
      <section>
        <h1 className="capitalize font-bold text-4xl md:text-6xl p-8 md:p-14 text-center">contact us</h1>
      </section>
      <section className="flex flex-col justify-evenly min-h-screen md:grid grid-cols-2 md:gap-6 max-w-screen-2xl p-6 md:p-8">
        <div>
          <ContactDetails />
        </div>
        <hr className="block w-full mx-auto border-slate-500 md:hidden" />
        <div>
        <ContactForm />
        </div>
      </section>
    </main>
  )
}