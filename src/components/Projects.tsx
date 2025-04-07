
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Stuttering Dysfluency Assessment Using Deep Learning Techniques System",
      technologies: ["TensorFlow", "PyTorch", "Visual Studio code"],
      description: [
        "Developed a deep learning system for assessing speech dysfluency levels, deploying it via cloud services for scalability.",
        "Created actionable insights for speech therapy using advanced algorithms and data analysis, improving diagnostic accuracy.",
        "Focused on creating actionable insights for speech therapy, which required overcoming technical challenges and aligning with best practices in system development.",
        "Developed a comprehensive software solution that improved customer satisfaction by 25% by effectively communicating with customers throughout the planning and implementation phases, leading to a more tailored product."
      ]
    },
    {
      title: "Scalable E-commerce Platform On Azure",
      technologies: ["React.js", "PostgreSQL", "Node.js", "Azure cloud services"],
      description: [
        "Developed a full-stack e-commerce platform with React, Node.js and Azure cloud services.",
        "Utilized Azure App services, AKS, Azure SQL, and Blob Storage for scalability and high availability.",
        "Implemented CI/CD pipelines using Azure DevOps and Git."
      ]
    },
    {
      title: "DevSecOps - Secrets Management on AKS",
      technologies: ["Azure", "Kubernetes", "Terraform", "Python"],
      description: [
        "Implemented Secrets Management on the Kubernetes Clusters setup on Azure Platform using Azure Kubernetes Service (AKS).",
        "Using this project I have secured the Sensitive Information by storing the information on the Azure Vault by integrating Azure vault with AKS using Managed Identities.",
        "Secured the StatefulSets by reading the sensitive information from Azure vault and mounting the secrets from vault.",
        "Learned how to set up Azure Kubernetes Service Using Terraform and also integrated the vault setup using Terraform.",
        "Alternative I have also used Python to implement the similar setup using Azure SDK."
      ]
    }
  ];

  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Selected Projects</h2>
          <div className="h-1 w-20 bg-primary rounded mb-8"></div>
          
          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card key={index} className="border border-muted">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    {project.description.map((desc, descIndex) => (
                      <li key={descIndex} className="text-base">{desc}</li>
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

export default Projects;
