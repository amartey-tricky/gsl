import { MapPin, PhoneCall, Inbox } from "lucide-react";
import Link from "next/link";

export default function ContactDetails() {
  return (
    <div>
      <div className="m-8 md:my-16 flex items-center gap-4 md:gap-8">
        <MapPin className="md:w-16 md:h-16" />
        <p>5th Avenue, Tema Community 11</p>
      </div>
      <div className="m-8 md:my-16 flex items-center gap-4 md:gap-8">
        <PhoneCall className="md:w-16 md:h-16" />
        <p>
          <Link href="tel:0502609222" className="text-blue-500 hover:text-blue-700 underline">050 260 9222</Link><br/>
          <Link href="tel:0543388670" className="text-blue-500 hover:text-blue-700 underline">054 338 8670</Link>
        </p>
      </div>
      <div className="m-8 md:my-16 flex items-center gap-4 md:gap-8">
        <Inbox className="md:w-16 md:h-16" />
        <p>
          <Link href="mailto:goldenstonelogistics@gmail.com" className="text-blue-500 hover:text-blue-700 underline">Goldenstonelogistics@gmail.com</Link>
        </p>
      </div>
    </div>
  )
}