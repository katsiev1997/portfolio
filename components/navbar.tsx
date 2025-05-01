"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
	{ name: "Home", path: "/" },
	{ name: "About", path: "/about" },
	{ name: "Skills", path: "/skills" },
	{ name: "Projects", path: "/projects" },
	{ name: "Contact", path: "/contact" },
];

export default function Navbar() {
	const pathname = usePathname();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 px-5 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-16 items-center justify-between">
				<Link href="/" className="flex items-center space-x-2">
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{ duration: 0.5 }}
						className="font-bold text-xl"
					>
						Mikail Katsiev
					</motion.div>
				</Link>

				{/* Desktop navigation */}
				<nav className="hidden md:flex items-center gap-6">
					{navItems.map((item) => (
						<Link
							key={item.path}
							href={item.path}
							className={`relative text-sm font-medium transition-colors hover:text-primary ${
								pathname === item.path ? "text-primary" : "text-muted-foreground"
							}`}
						>
							{item.name}
							{pathname === item.path && (
								<motion.span
									layoutId="navbar-indicator"
									className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.3 }}
								/>
							)}
						</Link>
					))}
					<ThemeToggle />
				</nav>

				{/* Mobile menu button */}
				<div className="flex items-center gap-2 md:hidden">
					<ThemeToggle />
					<button
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
						aria-label="Toggle menu"
					>
						{mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
					</button>
				</div>
			</div>

			{/* Mobile navigation */}
			{mobileMenuOpen && (
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					transition={{ duration: 0.2 }}
					className="md:hidden"
				>
					<div className="container py-4 space-y-1">
						{navItems.map((item) => (
							<Link
								key={item.path}
								href={item.path}
								onClick={() => setMobileMenuOpen(false)}
								className={`block py-2 px-3 text-base rounded-md ${
									pathname === item.path
										? "bg-accent text-accent-foreground"
										: "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
								}`}
							>
								{item.name}
							</Link>
						))}
					</div>
				</motion.div>
			)}
		</header>
	);
}
