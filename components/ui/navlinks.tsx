import Link from "next/link";
import clsx from "clsx";

const Links = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/services",
    text: "Services",
  },
  {
    href: "/about",
    text: "About",
  },
  {
    href: "/contact",
    text: "Contact",
  },
  {
    href: "/calculator",
    text: "Cost Calculator",
  },
]

export function NavLinks() {
  return (
    <nav className="hidden lg:flex gap-12 text-xl">
      {Links.map((link) => {
        return(
          <Link key={link.text} href={link.href} prefetch className={clsx("font-medium hover:text-2xl hover:text-[#d54c08] ease-linear duration-200")}>{link.text}</Link>
        )
      })}
    </nav>
  )
}