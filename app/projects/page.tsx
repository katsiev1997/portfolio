"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/project-card";

export default function ProjectsPage() {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0 },
	};

	const projects = [
		{
			title: "HAISCAN",
			description: "AI animal's health scanner",
			image: "/haiscan.png?height=300&width=500",
			tags: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
			demoLink: "https://haiscan.com",
			codeLink: "https://github.com",
		},
		{
			title: "IT-stand",
			description: "IT STAND — a community of IT specialists",
			image: "/it-stand.png?height=300&width=500",
			tags: ["React", "Node.js", "Socket.io", "PostgreSQL"],
			demoLink: "https://itstand.org",
			codeLink: "https://github.com",
		},
		{
			title: "Lingo",
			description: "Learn, practice, and master new languages with Lingo.",
			image: "/lingo.png?height=300&width=500",
			tags: ["Next.js", "Tailwind CSS", "Stripe", "PostgreSQL"],
			demoLink: "https://lingo-self.vercel.app",
			codeLink: "https://github.com/katsiev1997/lingo",
		},
		{
			title: "IHSAN",
			description:
				"Charity Fund of the Republic of Ingushetia 'IHSAN' (SINCERITY)",
			image: "/ihsan.png?height=300&width=500",
			tags: ["Next.js", "GraphQL", "MongoDB", "AWS S3"],
			demoLink: "https://ihsan-theta.vercel.app/",
			codeLink: "https://github.com/katsiev1997/ihsan",
		},
		{
			title: "Finance platform",
			description:
				"A personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion.",
			image: "/finance.png?height=300&width=500",
			tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
			demoLink: "https://finance-tutorial-black.vercel.app/",
			codeLink: "https://github.com/katsiev1997/finance-tutorial",
		},
	];

	return (
		<div className="container py-12">
			<motion.div
				initial="hidden"
				animate="show"
				variants={container}
				className="mx-auto max-w-6xl space-y-12"
			>
				<motion.div variants={item} className="text-center space-y-4">
					<h1 className="text-4xl font-bold tracking-tighter">My Projects</h1>
					<p className="text-xl text-muted-foreground">
						A showcase of my recent work
					</p>
				</motion.div>

				<motion.div
					variants={container}
					className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
				>
					{projects.map((project, index) => (
						<motion.div key={index} variants={item}>
							<ProjectCard project={project} />
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</div>
	);
}
