
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const technicalSkills = [
    {
      category: "Languages & Frameworks",
      skills: ["JavaScript (ES6)", "TypeScript", "React.js", "Node.js", "Express.js", "Spring Boot"],
    },
    {
      category: "Web Technologies",
      skills: ["HTML5", "CSS3", "RESTful APIs", "DOM"],
    },
    {
      category: "Project Management",
      skills: ["Agile Methodologies", "Scrum", "Jira"],
    },
    {
      category: "DevOps and Cloud Platforms",
      skills: ["Docker", "Kubernetes", "Jenkins", "Terraform", "Ansible"],
    },
    {
      category: "Database Management",
      skills: ["PostgreSQL", "MySQL", "MongoDB"],
    },
    {
      category: "Developer Tools",
      skills: ["VS Code", "Gitlab", "Github", "Azure DevOps"],
    },
    {
      category: "Operating Systems",
      skills: ["Linux", "Windows", "Mac"],
    },
  ];

  const softSkills = [
    "Code Reviews",
    "Problem-solving",
    "Cross-team collaboration",
    "Real-world problem diagnosis",
    "Objective",
    "Project Support",
    "Responsibility",
    "Technical Issues",
    "SaaS",
    "Teamwork",
    "Version Control"
  ];

  return (
    <div className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Technical Skills</h2>
          <div className="h-1 w-20 bg-primary rounded mb-8"></div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              {technicalSkills.map((skillGroup, index) => (
                <Card key={index} className="border border-muted">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.skills.map((skill, skillIdx) => (
                        <Badge key={skillIdx} variant="secondary" className="text-sm py-1.5">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div>
              <Card className="border border-muted h-full">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {softSkills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-sm py-1.5">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
