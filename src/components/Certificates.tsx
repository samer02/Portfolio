import { useInView } from "react-intersection-observer";
import { Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Certificates = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certificates = [
    {
      name: "ESS-RCEY-Lab",
      type: "Research Certificate",
      description: "Advanced research in embedded systems and IoT technologies",
    },
    {
      name: "Tomorrow Lab",
      type: "Innovation Certificate",
      description: "Innovation and technology development program",
    },
  ];

  const clubs = [
    {
      name: "IEEE-Enet'Com",
      role: "Member",
      description: "Institute of Electrical and Electronics Engineers student branch",
    },
    {
      name: "Aeromodelling Club",
      role: "Member",
      description: "Design and development of aerial robotics and drones",
    },
    {
      name: "Microsoft Club",
      role: "Member",
      description: "Microsoft technologies and software development community",
    },
  ];

  return (
    <section id="certificates" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`space-y-12 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Certificates & <span className="bg-gradient-primary bg-clip-text text-transparent">Clubs</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Professional development and community engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Certificates */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-semibold">Certificates</h3>
              </div>
              {certificates.map((cert, index) => (
                <Card
                  key={index}
                  className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
                >
                  <CardContent className="p-6 space-y-2">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Award className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold">{cert.name}</h4>
                        <p className="text-sm text-primary">{cert.type}</p>
                        <p className="text-sm text-muted-foreground mt-2">
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Clubs */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-8 w-8 text-secondary" />
                <h3 className="text-2xl font-semibold">Clubs & Organizations</h3>
              </div>
              {clubs.map((club, index) => (
                <Card
                  key={index}
                  className="border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-lg group"
                >
                  <CardContent className="p-6 space-y-2">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Users className="h-6 w-6 text-secondary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold">{club.name}</h4>
                        <p className="text-sm text-secondary">{club.role}</p>
                        <p className="text-sm text-muted-foreground mt-2">
                          {club.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
