import CldImage from "../cldiamge"
import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex flex-row items-center justify-between">
      <CldImage
      src="gsl_logo_crstj2"
      alt="GSL Logo"
      width={270}
      height={158}
      className="w-[100px]"
      priority="false"
       />
    </Link>
  )
}