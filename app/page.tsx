import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, Briefcase, Sparkles } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Create Perfect Cover Letters in Minutes
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Upload your CV, paste the job description, and let our AI craft a personalized cover letter that
                    highlights your relevant skills and experience.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/create">
                    <Button size="lg" className="gap-1.5">
                      Get Started <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/examples">
                    <Button size="lg" variant="outline">
                      View Examples
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-full min-h-[300px] lg:min-h-[400px] rounded-lg overflow-hidden border bg-background p-6 shadow-lg">
                  <div className="space-y-4">
                    <div className="h-6 w-2/3 rounded-md bg-muted animate-pulse"></div>
                    <div className="h-4 w-full rounded-md bg-muted animate-pulse"></div>
                    <div className="h-4 w-full rounded-md bg-muted animate-pulse"></div>
                    <div className="h-4 w-3/4 rounded-md bg-muted animate-pulse"></div>
                    <div className="h-4 w-full rounded-md bg-muted animate-pulse"></div>
                    <div className="h-4 w-full rounded-md bg-muted animate-pulse"></div>
                    <div className="h-4 w-5/6 rounded-md bg-muted animate-pulse"></div>
                    <div className="h-4 w-full rounded-md bg-muted animate-pulse"></div>
                    <div className="h-4 w-3/4 rounded-md bg-muted animate-pulse"></div>
                  </div>
                  <div className="absolute top-3 right-3 flex space-x-1">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                    <div className="h-2 w-2 rounded-full bg-red-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our AI-powered platform makes creating tailored cover letters simple and effective
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">1. Upload Your CV</h3>
                <p className="text-muted-foreground">
                  Upload your resume or CV to provide information about your skills and experience.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">2. Add Job Description</h3>
                <p className="text-muted-foreground">
                  Paste the job description to help our AI understand what the employer is looking for.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">3. Generate & Customize</h3>
                <p className="text-muted-foreground">
                  Our AI generates a tailored cover letter that you can edit, refine, and download.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

