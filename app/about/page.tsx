import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <main className="container mx-auto px-4 py-16">
        <Card className="w-full max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-4xl font-bold">About Us</CardTitle>
            <CardDescription>Learn more about our Next.js website</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              We are passionate about creating beautiful and functional websites using the latest web technologies.
              Our goal is to provide a seamless user experience while showcasing the power of Next.js and modern UI libraries.
            </p>
            <p className="mb-4">
              This website is built with Next.js, React, and shadcn/ui, demonstrating how these technologies can be
              combined to create stunning web applications quickly and efficiently.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}