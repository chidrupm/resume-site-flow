
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
          <div className="h-1 w-20 bg-primary rounded mb-8"></div>
          
          <div className="space-y-6 text-lg">
            <Card className="border border-muted">
              <CardContent className="pt-6">
                <p className="leading-relaxed">
                  Certified Azure professional with strong expertise in Observability, Cloud Infrastructure, and Automation. 
                  Skilled in building scalable systems, maintaining robust monitoring solutions, and collaborating cross-functionally 
                  to deliver high-performing cloud-native applications.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-muted">
              <CardContent className="pt-6">
                <p className="leading-relaxed">
                  Adept at proactive system analysis, performance tuning, anomaly detection, and capacity planning. 
                  With a passion for cloud technologies and software engineering, I focus on creating efficient, 
                  reliable solutions that drive business value.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-muted">
              <CardContent className="pt-6">
                <p className="leading-relaxed">
                  Throughout my career, I've worked with diverse teams to enhance product user interfaces, implement 
                  Agile frameworks, and develop comprehensive software design that improves efficiency and collaboration.
                  I enjoy tackling complex problems and finding innovative solutions using modern technologies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
