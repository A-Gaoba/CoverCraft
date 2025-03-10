"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Upload, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface FileUploaderProps {
  onTextExtracted: (text: string) => void
}

export function FileUploader({ onTextExtracted }: FileUploaderProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { toast } = useToast()

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0])
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFile(e.target.files[0])
    }
  }

  const handleFile = async (file: File) => {
    if (!file) return

    // Check file type
    const validTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "text/plain",
    ]
    if (!validTypes.includes(file.type)) {
      toast({
        title: "Invalid File Type",
        description: "Please upload a PDF, DOC, DOCX, or TXT file.",
        variant: "destructive",
      })
      return
    }

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File Too Large",
        description: "Please upload a file smaller than 5MB.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      // In a real app, you would send this file to your server for processing
      // For this demo, we'll simulate text extraction with a timeout
      const text = await extractTextFromFile(file)
      onTextExtracted(text)
    } catch (error) {
      toast({
        title: "Error Processing File",
        description: "There was an error processing your file. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  // This is a mock function - in a real app, you would use a proper text extraction service
  const extractTextFromFile = (file: File): Promise<string> => {
    return new Promise((resolve) => {
      // For demo purposes, we'll just read text files directly
      // In a real app, you would use a service like pdf.js or a backend API
      if (file.type === "text/plain") {
        const reader = new FileReader()
        reader.onload = (e) => {
          resolve((e.target?.result as string) || "")
        }
        reader.readAsText(file)
      } else {
        // Simulate processing time for non-text files
        setTimeout(() => {
          // This is mock data - in a real app, you would extract actual text from the file
          resolve(`
John Doe
Software Engineer

EXPERIENCE
Senior Frontend Developer | ABC Tech | 2020 - Present
- Developed responsive web applications using React and TypeScript
- Implemented CI/CD pipelines reducing deployment time by 40%
- Led a team of 3 junior developers on a major product redesign

Web Developer | XYZ Solutions | 2018 - 2020
- Built and maintained client websites using JavaScript, HTML, and CSS
- Collaborated with designers to implement UI/UX improvements
- Optimized website performance resulting in 30% faster load times

EDUCATION
Bachelor of Science in Computer Science
University of Technology | 2014 - 2018

SKILLS
JavaScript, TypeScript, React, Next.js, HTML, CSS, Git, Node.js, Express
          `)
        }, 1500)
      }
    })
  }

  return (
    <Card
      className={`border-2 border-dashed p-6 text-center ${
        isDragging ? "border-primary bg-primary/5" : "border-muted-foreground/25"
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-4">
          <Loader2 className="h-10 w-10 animate-spin text-muted-foreground" />
          <p className="mt-2 text-sm text-muted-foreground">Processing your file...</p>
        </div>
      ) : (
        <>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Upload className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mt-2 text-lg font-semibold">Upload your CV/Resume</h3>
          <p className="mt-1 text-sm text-muted-foreground">Drag and drop your file here, or click to browse</p>
          <input
            type="file"
            className="hidden"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx,.txt"
          />
          <Button variant="outline" onClick={() => fileInputRef.current?.click()} className="mt-4" size="sm">
            Select File
          </Button>
          <p className="mt-2 text-xs text-muted-foreground">Supports PDF, DOC, DOCX, and TXT files up to 5MB</p>
        </>
      )}
    </Card>
  )
}

