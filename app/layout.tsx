import Footer from "@/components/footer";
import Header from "@/components/header";
import { inter } from "@/components/ui/fonts";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "GSL",
	description:
		"Your total logistics solution for importing and exporting goods.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.className}`}
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
