
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Waves, Mountain, Trophy, BookOpen } from "lucide-react";

const Hobbies = () => {
  const hobbies = [
    {
      name: "Surfing",
      icon: Waves,
      description: "Catching waves and experiencing the thrill of riding the ocean. I enjoy surfing during my free time at various beaches around the world."
    },
    {
      name: "Skiing",
      icon: Mountain,
      description: "Gliding down snow-covered slopes, enjoying winter sports and the beautiful mountain scenery. I try to go skiing at least once a year."
    },
    {
      name: "Football",
      icon: Trophy,
      description: "Playing and watching football games. I'm part of a local team and we practice regularly to improve our skills and teamwork."
    },
    {
      name: "Reading",
      icon: BookOpen,
      description: "Exploring new worlds and gaining knowledge through books. I particularly enjoy technical literature, science fiction, and personal development books."
    }
  ];

  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Hobbies</h2>
          <div className="h-1 w-20 bg-primary rounded mb-8"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hobbies.map((hobby, index) => (
              <Card key={index} className="border border-muted">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <hobby.icon size={24} />
                    </div>
                    <CardTitle className="text-xl">{hobby.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{hobby.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
