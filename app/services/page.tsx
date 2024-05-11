import Link from 'next/link';
import { Building2, Plane, Ship, Box, Eye, BadgeJapaneseYen } from 'lucide-react';

export default function Services() {
  const Services = [
    {
      icon: Building2,
      title: 'Customs Brokerage',
      description: 'Our experienced customs brokers ensure efficient clearance and compliance with all import and export regulations.',
      link: '/services/customs-brokerage',
    },
    {
      icon: Plane,
      title: 'Air Freight',
      description: 'We offer reliable and expedited air freight services for your time-sensitive shipments.',
      link: '/services/air-freight',
    },
    {
      icon: Ship,
      title: 'Sea Freight FCL',
      description: 'Cost-effective full container load (FCL) sea freight services for larger shipments.',
      link: '/services/sea-freight-fcl',
    },
    {
      icon: Ship,
      title: 'Sea Freight LCL',
      description: 'Flexible less-than-container load (LCL) sea freight services for smaller shipments.',
      link: '/services/sea-freight-lcl',
    },
    {
      icon: Box,
      title: 'Groupage',
      description: 'Consolidate your shipments with others to save on transportation costs.',
      link: '/services/groupage',
    },
    {
      icon: Eye,
      title: 'Goods Inspection',
      description: 'Our quality control experts perform thorough inspections to ensure your goods meet required standards.',
      link: '/services/goods-inspection',
    },
    {
      icon: BadgeJapaneseYen,
      title: 'RMB Payment',
      description: 'We facilitate payments in Chinese Renminbi (RMB) for your convenience.',
      link: '/services/rmb-payment',
    },
  ];

  return (
    <main className="bg-white">
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 uppercase tracking-wide">
            Our Services
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Comprehensive Logistics Solutions
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            We offer a wide range of logistics services to meet your diverse needs, ensuring seamless operations from Ghana to China and back.
          </p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {Services.map((service) => (
              <div key={service.title} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <service.icon className="h-6 w-6 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {service.description}
                    </p>
                    <div className="mt-6">
                      <Link
                        href={service.link}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}