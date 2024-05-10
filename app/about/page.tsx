import CldImage from "@/components/cldiamge";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col p-8 md:p-12">
      <section className="py-8">
        <h1 className=" text-center text-4xl md:text-6xl font-semibold">
          About Us
        </h1>
      </section>
      <section className="my-8 md:my-10 text-justify lg:grid lg:grid-cols-2 lg:gap-4 xl:gap-8">
        <CldImage
          src="gsl/pexels-jefe-king-907960151-19926887_p6qxnd"
          alt="ship at a port"
          width={820}
          height={720}
          className="hidden lg:flex lg:my-auto"
        />
        <article>
          <p className="lg:mb-4">
            Our vision is to be the premier logistics bridge between Ghana and
            China, facilitating seamless and efficient import and export for
            businesses of all sizes.We strive to become the trusted partner for
            companies seeking to navigate the complexities of international
            trade, offering a comprehensive suite of services tailored to their
            specific needs. By leveraging our deep understanding of both markets
            and our commitment to innovation, we aim to empower businesses to
            reach new markets, optimize their supply chains, and ultimately,
            achieve their full potential.
          </p>
          <CldImage
            src="gsl/pexels-jefe-king-907960151-19926887_p6qxnd"
            alt="ship at a port"
            width={430}
            height={220}
            className="block lg:hidden my-10 mx-auto"
          />
          <p>
            Beyond the China-Ghana corridor, we envision a future where our
            expertise extends to a global network. We aspire to be a leading
            player in the international logistics landscape, connecting
            businesses across continents and fostering economic growth through
            the efficient movement of goods.
          </p>
        </article>
      </section>
      <section className="my-10 md:my-16 text-justify lg:grid lg:grid-cols-2 lg:gap-4 xl:gap-8">
        <article>
          <p className="lg:mb-4">
            Our mission is to empower businesses of all sizes to navigate the
            complexities of import and export seamlessly between Ghana and
            China. We achieve this by providing a comprehensive suite of
            customized logistics services, encompassing efficient transportation
            solutions, meticulous customs clearance procedures, and expert
            guidance through every step of the journey. We prioritize
            transparency and reliability, ensuring our clients receive their
            goods on time, within budget, and with complete peace of mind. Our
            unwavering commitment to exceeding client expectations positions us
            as a trusted partner, fostering long-term relationships built on
            mutual success.
          </p>
          <CldImage
            src="gsl/pexels-pixabay-358220_ozpmar"
            alt="ship at a port"
            width={430}
            height={220}
            className="block lg:hidden my-10 mx-auto"
          />
          <p>
            Looking beyond the China-Ghana corridor, we aim to extend our
            expertise and establish ourselves as a leading force in
            international logistics. By leveraging our established network,
            embracing technological advancements, and fostering a culture of
            innovation, we strive to connect businesses across continents,
            facilitate the efficient movement of goods, and ultimately
            contribute to the growth and prosperity of global trade.
          </p>
        </article>
        <CldImage
            src="gsl/pexels-pixabay-358220_ozpmar"
            alt="ship at a port"
            width={920}
            height={820}
            className=" my-auto sm:hidden lg:flex"
          />
      </section>
    </main>
  );
}
