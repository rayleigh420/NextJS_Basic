import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "NextJS Basic",
	description: "NextJS Project of Rayleigh",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
