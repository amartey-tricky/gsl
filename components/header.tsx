"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Logo } from "./ui/logo";
import { NavLinks } from "./ui/navlinks";

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
];

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className="w-full backdrop-blur-lg sticky top-0">
			<div className="flex items-center justify-between text-slate-600 py-4 px-12">
				<Logo />
				<NavLinks />
				<button
					type="button"
					onClick={toggleMenu}
					className="lg:hidden"
					aria-controls="mobile menu"
				>
					<span className="sr-only">Open Menu</span>
					{isOpen ? <X /> : <Menu />}
				</button>
			</div>
			<div
				className={
					isOpen
						? "left-0 top-0 relative md:w-[65%] bg-[#d54c08fb] opacity-95 backdrop-blur-lg z-50 flex flex-col gap-8 text-slate-200 items-center p-8"
						: "hidden"
				}
			>
				{Links.map((link) => {
					return (
						<Link key={link.text} href={link.href}>
							{link.text}
						</Link>
					);
				})}
			</div>
		</header>
	);
}
