import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ExamplesPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-2">Example Cover Letters</h1>
      <p className="text-muted-foreground mb-6">
        Browse through these sample cover letters to get inspiration for your own.
      </p>

      <Tabs defaultValue="software-engineer" className="w-full">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          <TabsTrigger value="software-engineer">Software Engineer</TabsTrigger>
          <TabsTrigger value="marketing">Marketing Specialist</TabsTrigger>
          <TabsTrigger value="project-manager">Project Manager</TabsTrigger>
          <TabsTrigger value="data-analyst">Data Analyst</TabsTrigger>
        </TabsList>

        <TabsContent value="software-engineer" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Software Engineer Cover Letter</CardTitle>
              <CardDescription>Example cover letter for a mid-level software engineering position</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>March 10, 2025</p>
              <p>Dear Hiring Manager,</p>
              <p>
                I am writing to express my interest in the Software Engineer position at TechCorp, as advertised on your
                company website. With over five years of experience developing robust web applications using React,
                Node.js, and TypeScript, I am confident in my ability to contribute effectively to your engineering
                team.
              </p>
              <p>
                In my current role at ABC Technologies, I have led the development of a customer-facing dashboard that
                improved user engagement by 35%. I implemented CI/CD pipelines that reduced deployment time by 40% and
                collaborated with cross-functional teams to deliver features that directly addressed user needs. My
                experience aligns perfectly with your requirement for a developer who can work on complex, scalable
                applications while maintaining code quality.
              </p>
              <p>
                I am particularly excited about TechCorp's mission to make technology accessible to underserved
                communities. Your recent project to develop educational platforms for rural areas resonates with my
                personal values, and I would be thrilled to contribute my technical skills to such meaningful work.
              </p>
              <p>
                Thank you for considering my application. I look forward to the opportunity to discuss how my skills and
                experience can benefit TechCorp's engineering team.
              </p>
              <p>Sincerely,</p>
              <p>John Doe</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="marketing" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Marketing Specialist Cover Letter</CardTitle>
              <CardDescription>Example cover letter for a digital marketing position</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>March 10, 2025</p>
              <p>Dear Hiring Manager,</p>
              <p>
                I am excited to apply for the Marketing Specialist position at Brand Innovators, which I discovered on
                LinkedIn. With a background in digital marketing and a proven track record of increasing engagement
                across social media platforms, I believe I am well-positioned to help drive your company's marketing
                initiatives forward.
              </p>
              <p>
                During my time at Digital Pulse Marketing, I managed campaigns that increased client conversion rates by
                an average of 28%. I developed and implemented comprehensive social media strategies that grew audience
                engagement by 45% and collaborated with content creators to produce compelling materials that resonated
                with target demographics. My experience with analytics tools allowed me to continuously refine our
                approaches based on performance data.
              </p>
              <p>
                Brand Innovators' commitment to creating authentic connections between brands and consumers aligns
                perfectly with my own marketing philosophy. I admire your recent campaign for Sustainable Futures and
                would be thrilled to bring my creative thinking and analytical skills to your innovative team.
              </p>
              <p>
                I appreciate your consideration and look forward to discussing how my experience and passion for digital
                marketing can contribute to Brand Innovators' continued success.
              </p>
              <p>Sincerely,</p>
              <p>Jane Smith</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="project-manager" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Project Manager Cover Letter</CardTitle>
              <CardDescription>Example cover letter for a senior project management role</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>March 10, 2025</p>
              <p>Dear Hiring Manager,</p>
              <p>
                I am writing to express my interest in the Senior Project Manager position at Global Solutions, as
                advertised on your careers page. With over eight years of experience managing complex projects in the
                technology sector, I am confident in my ability to lead your project teams to successful outcomes.
              </p>
              <p>
                In my current role at Innovation Partners, I have successfully delivered projects with budgets exceeding
                $2 million, consistently meeting deadlines and quality standards. I implemented a new project management
                methodology that improved team efficiency by 25% and reduced project completion times by an average of
                two weeks. My experience in stakeholder management has enabled me to build strong relationships across
                departments and with external partners, ensuring alignment throughout project lifecycles.
              </p>
              <p>
                I am particularly impressed by Global Solutions' commitment to sustainable development and your recent
                expansion into renewable energy projects. My experience managing cross-functional teams would be
                valuable in navigating the complexities of these innovative initiatives, and I am excited about the
                possibility of contributing to work that has such positive environmental impact.
              </p>
              <p>
                Thank you for considering my application. I look forward to the opportunity to discuss how my project
                management expertise can help Global Solutions achieve its strategic objectives.
              </p>
              <p>Sincerely,</p>
              <p>Michael Johnson</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="data-analyst" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Data Analyst Cover Letter</CardTitle>
              <CardDescription>Example cover letter for a data analyst position</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>March 10, 2025</p>
              <p>Dear Hiring Manager,</p>
              <p>
                I am excited to apply for the Data Analyst position at Insight Analytics, which I found on your company
                website. With a strong background in statistical analysis and data visualization, combined with
                experience in SQL, Python, and Tableau, I am well-equipped to help your team extract meaningful insights
                from complex datasets.
              </p>
              <p>
                In my role at Data Driven Solutions, I developed dashboards that helped the marketing team optimize
                their campaign spending, resulting in a 20% increase in ROI. I automated reporting processes that saved
                the team approximately 15 hours per week and collaborated with product managers to implement data-driven
                features that increased user retention by 18%. My ability to translate technical findings into
                actionable business recommendations has been consistently valued by stakeholders.
              </p>
              <p>
                I am particularly drawn to Insight Analytics because of your focus on using data to solve real-world
                problems across industries. Your recent case study on healthcare analytics demonstrated the kind of
                impactful work I am passionate about, and I would be thrilled to contribute my analytical skills to such
                meaningful projects.
              </p>
              <p>
                Thank you for considering my application. I look forward to the possibility of discussing how my data
                analysis experience can benefit your team at Insight Analytics.
              </p>
              <p>Sincerely,</p>
              <p>Sarah Williams</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

