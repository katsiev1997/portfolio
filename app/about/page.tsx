"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="container py-12">
      <motion.div initial="hidden" animate="show" variants={container} className="mx-auto max-w-4xl space-y-12">
        <motion.div variants={item} className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter">About Me</h1>
          <p className="text-xl text-muted-foreground">Get to know me better</p>
        </motion.div>

        <motion.div variants={item} className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-square overflow-hidden rounded-xl">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Profile"
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Who am I?</h2>
            <p className="text-muted-foreground">
              I'm a passionate Full Stack Developer with over 5 years of experience building web applications. I
              specialize in React, Node.js, and modern web technologies.
            </p>
            <p className="text-muted-foreground">
              My journey in web development started when I was in college, and I've been hooked ever since. I love the
              blend of creativity and problem-solving that comes with building digital experiences.
            </p>
          </div>
        </motion.div>

        <motion.div variants={item} className="space-y-6">
          <h2 className="text-2xl font-bold text-center">My Journey</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-6 space-y-2">
                <h3 className="font-bold">Education</h3>
                <p className="text-sm text-muted-foreground">
                  Bachelor's in Computer Science from University of Technology (2015-2019)
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-2">
                <h3 className="font-bold">Work Experience</h3>
                <p className="text-sm text-muted-foreground">Senior Developer at Tech Solutions (2019-Present)</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-2">
                <h3 className="font-bold">Achievements</h3>
                <p className="text-sm text-muted-foreground">
                  Led development of award-winning web applications with 100k+ users
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        <motion.div variants={item} className="space-y-4">
          <h2 className="text-2xl font-bold text-center">My Goals</h2>
          <p className="text-center text-muted-foreground">
            I aim to create meaningful digital experiences that solve real problems. My goal is to continue learning and
            growing as a developer while contributing to projects that make a positive impact.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
