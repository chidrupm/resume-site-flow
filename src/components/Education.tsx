
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  const educations = [
    {
      institution: "JSS Science and Technology University",
      degree: "Bachelor of Engineering",
      field: "Computer Science and Engineering",
      period: "Aug 2021 - Oct 2024",
      location: "Mysuru, India"
    },
    {
      institution: "JSS Science and Technology University",
      degree: "Diploma",
      field: "Computer Science and Engineering",
      period: "Aug 2018 - Aug 2021",
      location: "Mysuru, India"
    }
  ];

  return (
    <div className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Education</h2>
          <div className="h-1 w-20 bg-primary rounded mb-8"></div>
          
          <div className="space-y-6">
            {educations.map((edu, index) => (
              <Card key={index} className="border border-muted">
                <CardHeader className="pb-2">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                    <div>
                      <CardTitle className="text-xl font-bold">{edu.institution}</CardTitle>
                      <p className="text-lg font-medium text-muted-foreground">
                        {edu.degree} | {edu.field}
                      </p>
                    </div>
                    <Badge variant="secondary" className="md:text-right whitespace-nowrap">
                      {edu.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">
                    {edu.location}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
