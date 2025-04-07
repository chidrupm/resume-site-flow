
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Certificates = () => {
  const certificates = [
    {
      name: "Azure Fundamentals AZ-900",
      issuer: "Microsoft"
    },
    {
      name: "The Complete 2024 Web Development Bootcamp",
      issuer: "Udemy"
    },
    {
      name: "Business Intelligence Using Power BI | Skill Nexus",
      issuer: ""
    },
    {
      name: "Azure Administrator Associate (AZ-104)",
      issuer: "Microsoft In Progress"
    }
  ];

  return (
    <div className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Certificates</h2>
          <div className="h-1 w-20 bg-primary rounded mb-8"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <Card key={index} className="border border-muted">
                <CardHeader>
                  <CardTitle className="text-lg font-bold">{cert.name}</CardTitle>
                  {cert.issuer && (
                    <Badge variant="secondary" className="w-fit mt-2">
                      {cert.issuer}
                    </Badge>
                  )}
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
