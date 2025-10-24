import { useInView } from "react-intersection-observer";
import { GraduationCap, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Education = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: "3rd Year - Electronic Communication Systems Engineering",
      institution: "National School of Electronics and Telecommunications of Sfax (ENET'Com)",
      year: "2025–2026",
      status: "In Progress",
    },
    {
      degree: "2nd Year - Electronic Communication Systems Engineering",
      institution: "National School of Electronics and Telecommunications of Sfax (ENET'Com)",
      year: "2024–2025",
      status: "Completed",
    },
    {
      degree: "1st Year - Electronic Communication Systems Engineering",
      institution: "National School of Electronics and Telecommunications of Sfax (ENET'Com)",
      year: "2023–2024",
      status: "Completed",
    },
    {
      degree: "Bachelor's Degree in Internet of Things",
      institution: "National School of Electronics and Telecommunications of Sfax (ENET'Com)",
      year: "2020–2023",
      status: "With Honors",
    },
    {
      degree: "Baccalaureate in Computer Science",
      institution: "Sadak Feki High School, Sfax",
      year: "2020",
      status: "Completed",
    },
  ];

  return (
    <section id="education" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`space-y-12 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Education <span className="bg-gradient-primary bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Building a strong foundation in engineering and technology
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden md:block" />

            <div className="space-y-8">
              {education.map((item, index) => (
                <Card
                  key={index}
                  className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg ml-0 md:ml-16"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="hidden md:flex w-12 h-12 bg-gradient-primary rounded-full items-center justify-center -ml-[4.5rem] flex-shrink-0 shadow-glow-primary">
                        <GraduationCap className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{item.year}</span>
                          <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                            {item.status}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {item.degree}
                        </h3>
                        <p className="text-muted-foreground">{item.institution}</p>
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

export default Education;
