
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      company: "Let's Pro",
      position: "Software Engineer",
      location: "India",
      achievements: [
        "Assist a team of 5 engineers to enhance product UI, increasing user engagement by 30% and implementing Agile frameworks to drive continuous integration practices.",
        "Developed and documented a comprehensive Software Design that improved the efficiency of relational databases by 30%, utilizing clear written guidelines that enhanced team collaboration and reinforced verbal communication during project meetings.",
        "Collaborated closely with cross-functional teams, bringing code reviews and best practices to reduce deployment cycles by 40%."
      ]
    },
    {
      company: "RiverTon Trust Financial and Services",
      position: "Cloud Engineer",
      location: "India",
      achievements: [
        "Worked on Azure-based cloud solutions, including VM provisioning, container orchestration using Kubernetes, and CI/CD pipeline automation.",
        "Innovation tech entrepreneur with expertise in Azure Cloud, AI integration, and financial solutions.",
        "Designed and developed the company website using Azure Cloud."
      ]
    },
    {
      company: "Mantra Surf Club",
      position: "Business Executive",
      location: "India",
      achievements: [
        "Focus on identifying growth opportunities, building partnerships, and enhancing the club's presence in the market.",
        "My role involves strategizing and implementing initiatives that drive revenue and promote the club's unique offerings."
      ]
    },
    {
      company: "Wearyourege [Freelance]",
      position: "Web Developer",
      location: "India",
      achievements: [
        "Designed and developed scalable web applications using React.js and Node.js, ensuring cross-browser compatibility and secure payment integrations.",
        "Facilitated workshops aimed at fostering a professional culture of open-mind teamwork among developers and design managers, which provided valuable insights through researching user feedback; this initiative resulted in a 25% improvement in customer satisfaction scores over six months.",
        "Implemented new protocols for managing the Web Infrastructure that encouraged input from Designers, which improved our project turnaround time by 25%, reinforcing a Dedicated team Culture within a Collaborative Environment."
      ]
    },
    {
      company: "Hewlett Packard Enterprise",
      position: "Software Engineer",
      location: "Remote",
      achievements: [
        "Developed a RESTful web service using Java Spring Boot, deploying to cloud environments, adhering to cloud best practices for system scalability.",
        "Worked on unit tests and collaborated with engineers to improve application architecture and delivery, ensuring smooth deployment across Windows and Linux platforms.",
        "Participated in end-to-end system design, taking full ownership from development to production."
      ]
    }
  ];

  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Professional Experience</h2>
          <div className="h-1 w-20 bg-primary rounded mb-8"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="border border-muted relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <div>
                      <CardTitle className="text-xl font-bold">{exp.position}</CardTitle>
                      <p className="text-lg font-medium text-muted-foreground">{exp.company}</p>
                    </div>
                    <Badge variant="secondary" className="w-fit">
                      {exp.location}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-base">{achievement}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
