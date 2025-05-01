"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, GitBranch, Github } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Project {
	title: string;
	description: string;
	image: string;
	tags: string[];
	demoLink: string;
	codeLink: string;
}

interface ProjectCardProps {
	project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
	return (
		<motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
			<Card className="overflow-hidden h-full flex flex-col">
				<div className="relative h-48 overflow-hidden">
					<Image
						src={project.image || "/placeholder.svg"}
						alt={project.title}
						fill
						className="object-cover transition-transform duration-300 hover:scale-105"
					/>
				</div>
				<CardContent className="flex-grow p-6 space-y-4">
					<h3 className="text-xl font-bold">{project.title}</h3>
					<p className="text-muted-foreground">{project.description}</p>
					<div className="flex flex-wrap gap-2">
						{project.tags.map((tag, index) => (
							<Badge key={index} variant="secondary">
								{tag}
							</Badge>
						))}
					</div>
				</CardContent>
				<CardFooter className="p-6 pt-0 flex gap-2">
					<Button asChild variant="outline" size="sm">
						<Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
							<ExternalLink className="mr-2 h-4 w-4" />
							Demo
						</Link>
					</Button>
					<Button asChild variant="outline" size="sm">
						<Link href={project.codeLink} target="_blank" rel="noopener noreferrer">
							<GitBranch className="mr-2 h-4 w-4" />
							Code
						</Link>
					</Button>
				</CardFooter>
			</Card>
		</motion.div>
	);
}
