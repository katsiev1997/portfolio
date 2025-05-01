"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Layout, Server, Terminal, Workflow } from "lucide-react"

export default function SkillsPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="h-8 w-8 text-primary" />,
      skills: [
        { name: "React", proficiency: 90 },
        { name: "Next.js", proficiency: 85 },
        { name: "TypeScript", proficiency: 80 },
        { name: "Tailwind CSS", proficiency: 90 },
        { name: "Framer Motion", proficiency: 75 },
      ],
    },
    {
      title: "Backend",
      icon: <Server className="h-8 w-8 text-primary" />,
      skills: [
        { name: "Node.js", proficiency: 85 },
        { name: "Express", proficiency: 80 },
        { name: "NestJS", proficiency: 70 },
        { name: "GraphQL", proficiency: 75 },
        { name: "REST API", proficiency: 90 },
      ],
    },
    {
      title: "Database",
      icon: <Database className="h-8 w-8 text-primary" />,
      skills: [
        { name: "MongoDB", proficiency: 85 },
        { name: "PostgreSQL", proficiency: 80 },
        { name: "Prisma", proficiency: 75 },
        { name: "SQL", proficiency: 80 },
        { name: "Redis", proficiency: 70 },
      ],
    },
    {
      title: "DevOps",
      icon: <Terminal className="h-8 w-8 text-primary" />,
      skills: [
        { name: "Git", proficiency: 90 },
        { name: "Docker", proficiency: 75 },
        { name: "CI/CD", proficiency: 80 },
        { name: "AWS", proficiency: 70 },
        { name: "Vercel", proficiency: 85 },
      ],
    },
    {
      title: "Tools",
      icon: <Workflow className="h-8 w-8 text-primary" />,
      skills: [
        { name: "VS Code", proficiency: 95 },
        { name: "Figma", proficiency: 70 },
        { name: "Jira", proficiency: 80 },
        { name: "Postman", proficiency: 85 },
        { name: "npm/yarn", proficiency: 90 },
      ],
    },
    {
      title: "Languages",
      icon: <Code className="h-8 w-8 text-primary" />,
      skills: [
        { name: "JavaScript", proficiency: 95 },
        { name: "TypeScript", proficiency: 85 },
        { name: "HTML", proficiency: 90 },
        { name: "CSS", proficiency: 85 },
        { name: "Python", proficiency: 70 },
      ],
    },
  ]

  return (
    <div className="container py-12">
      <motion.div initial="hidden" animate="show" variants={container} className="mx-auto max-w-4xl space-y-12">
        <motion.div variants={item} className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter">My Skills</h1>
          <p className="text-xl text-muted-foreground">Technologies and tools I work with</p>
        </motion.div>

        <motion.div variants={container} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={item}>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    {category.icon}
                    <h2 className="text-xl font-bold">{category.title}</h2>
                  </div>
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>{skill.name}</span>
                          <span>{skill.proficiency}%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-secondary">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.proficiency}%` }}
                            transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                            className="h-full rounded-full bg-primary"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
