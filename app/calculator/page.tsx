import CalculatorForm from "@/components/calculatorform"

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between p-8 md:p-12 text-slate-500">
      <section>
        <h1 className="capitalize text-4xl md:text-6xl font-semibold text-center p-4 md:p-8">estimated cost calculator</h1>
        <CalculatorForm />
      </section>
    </main>
  )
}