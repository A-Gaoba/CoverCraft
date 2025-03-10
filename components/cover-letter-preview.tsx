"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Edit2, Check } from "lucide-react"

interface CoverLetterPreviewProps {
  content: string
  onContentChange: (content: string) => void
}

export function CoverLetterPreview({ content, onContentChange }: CoverLetterPreviewProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedContent, setEditedContent] = useState(content)

  const handleSaveEdit = () => {
    onContentChange(editedContent)
    setIsEditing(false)
  }

  const handleCancelEdit = () => {
    setEditedContent(content)
    setIsEditing(false)
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Cover Letter Content</h3>
        {!isEditing ? (
          <Button variant="outline" size="sm" onClick={() => setIsEditing(true)} className="flex items-center gap-1">
            <Edit2 className="h-4 w-4" />
            Edit
          </Button>
        ) : (
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handleCancelEdit}>
              Cancel
            </Button>
            <Button size="sm" onClick={handleSaveEdit} className="flex items-center gap-1">
              <Check className="h-4 w-4" />
              Save
            </Button>
          </div>
        )}
      </div>

      {isEditing ? (
        <Textarea
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
          className="min-h-[400px] font-mono text-sm"
        />
      ) : (
        <Card className="p-6 bg-muted/30 whitespace-pre-wrap">
          {content ? (
            <div className="prose prose-sm dark:prose-invert max-w-none">
              {content.split("\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          ) : (
            <div className="text-center text-muted-foreground py-10">
              Your cover letter will appear here after generation
            </div>
          )}
        </Card>
      )}
    </div>
  )
}

