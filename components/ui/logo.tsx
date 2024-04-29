import CldImage from "../cldiamge"
import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex flex-row items-center justify-between">
      <CldImage
      src="gsl_omvqsx"
      alt="GSL Logo"
      width={270}
      height={158}
      loading="lazy"
       />
    </Link>
  )
}