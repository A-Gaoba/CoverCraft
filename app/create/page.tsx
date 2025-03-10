"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FileUploader } from "@/components/file-uploader"
import { CoverLetterPreview } from "@/components/cover-letter-preview"
import { Loader2, FileText, Briefcase, Sparkles } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { generateCoverLetter } from "@/lib/generate-cover-letter"

export default function CreatePage() {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("upload")
  const [cvText, setCvText] = useState("")
  const [jobDescription, setJobDescription] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [coverLetter, setCoverLetter] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  const handleCvUpload = (text: string) => {
    setCvText(text)
    setActiveTab("job")
    toast({
      title: "CV Uploaded",
      description: "Your CV has been successfully processed.",
    })
  }

  const handleGenerate = async () => {
    if (!cvText) {
      toast({
        title: "Missing CV",
        description: "Please upload or paste your CV first.",
        variant: "destructive",
      })
      return
    }

    if (!jobDescription) {
      toast({
        title: "Missing Job Description",
        description: "Please provide the job description.",
        variant: "destructive",
      })
      return
    }

    setIsGenerating(true)
    try {
      const letter = await generateCoverLetter(cvText, jobDescription, name, email, phone)
      setCoverLetter(letter)
      setActiveTab("preview")
      toast({
        title: "Cover Letter Generated",
        description: "Your personalized cover letter is ready to review.",
      })
    } catch (error) {
      toast({
        title: "Generation Failed",
        description: "There was an error generating your cover letter. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Create Your Cover Letter</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="upload" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">CV/Resume</span>
              </TabsTrigger>
              <TabsTrigger value="job" className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                <span className="hidden sm:inline">Job Description</span>
              </TabsTrigger>
              <TabsTrigger value="preview" className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                <span className="hidden sm:inline">Cover Letter</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="upload" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-2">Upload Your CV/Resume</h2>
                      <p className="text-muted-foreground mb-4">
                        Upload your CV or paste its content below to help us understand your skills and experience.
                      </p>
                      <FileUploader onTextExtracted={handleCvUpload} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cv-text">Or paste your CV content here</Label>
                      <Textarea
                        id="cv-text"
                        placeholder="Paste the content of your CV/resume here..."
                        className="min-h-[200px]"
                        value={cvText}
                        onChange={(e) => setCvText(e.target.value)}
                      />
                    </div>

                    <div className="flex justify-end">
                      <Button onClick={() => setActiveTab("job")} disabled={!cvText.trim()}>
                        Next
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="job" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-2">Job Description</h2>
                      <p className="text-muted-foreground mb-4">
                        Paste the job description to help our AI understand what the employer is looking for.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="job-description">Job Description</Label>
                      <Textarea
                        id="job-description"
                        placeholder="Paste the job description here..."
                        className="min-h-[200px]"
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                      />
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Personal Information (Optional)</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john.doe@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            placeholder="+1 (555) 123-4567"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button variant="outline" onClick={() => setActiveTab("upload")}>
                        Back
                      </Button>
                      <Button onClick={handleGenerate} disabled={!jobDescription.trim() || isGenerating}>
                        {isGenerating ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Generating...
                          </>
                        ) : (
                          "Generate Cover Letter"
                        )}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="preview" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-2">Your Cover Letter</h2>
                      <p className="text-muted-foreground mb-4">
                        Review, edit, and download your personalized cover letter.
                      </p>
                    </div>

                    <CoverLetterPreview content={coverLetter} onContentChange={setCoverLetter} />

                    <div className="flex justify-between">
                      <Button variant="outline" onClick={() => setActiveTab("job")}>
                        Back
                      </Button>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          onClick={() => {
                            navigator.clipboard.writeText(coverLetter)
                            toast({
                              title: "Copied to Clipboard",
                              description: "Your cover letter has been copied to the clipboard.",
                            })
                          }}
                        >
                          Copy to Clipboard
                        </Button>
                        <Button
                          onClick={() => {
                            const blob = new Blob([coverLetter], { type: "text/plain" })
                            const url = URL.createObjectURL(blob)
                            const a = document.createElement("a")
                            a.href = url
                            a.download = "cover-letter.txt"
                            document.body.appendChild(a)
                            a.click()
                            document.body.removeChild(a)
                            URL.revokeObjectURL(url)
                            toast({
                              title: "Download Started",
                              description: "Your cover letter is being downloaded.",
                            })
                          }}
                        >
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="hidden lg:block">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4">Tips for a Great Cover Letter</h2>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xs font-medium text-primary">1</span>
                  </div>
                  <p className="text-sm">Tailor your letter to the specific job and company</p>
                </li>
                <li className="flex gap-2">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xs font-medium text-primary">2</span>
                  </div>
                  <p className="text-sm">Highlight relevant skills and experiences</p>
                </li>
                <li className="flex gap-2">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xs font-medium text-primary">3</span>
                  </div>
                  <p className="text-sm">Show enthusiasm for the role and company</p>
                </li>
                <li className="flex gap-2">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xs font-medium text-primary">4</span>
                  </div>
                  <p className="text-sm">Keep it concise - aim for 3-4 paragraphs</p>
                </li>
                <li className="flex gap-2">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xs font-medium text-primary">5</span>
                  </div>
                  <p className="text-sm">Proofread carefully for errors</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

