import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "JavaScript", "PHP", "SQL", "Bootstrap", "WordPress", "Angular", "React"],
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    },
    {
      title: "Mobile Development",
      skills: ["Java", "Flutter", "Kotlin"],
      color: "bg-green-500/10 text-green-500 border-green-500/20",
    },
    {
      title: "Programming Languages",
      skills: ["C++", "Python", "Pascal", "Java"],
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    },
    {
      title: "Embedded Systems",
      skills: ["Arduino", "Raspberry Pi", "STM32", "ESP32", "LabView", "VHDL", "Matlab"],
      color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    },
    {
      title: "Artificial Intelligence",
      skills: ["Deep Learning", "Machine Learning"],
      color: "bg-pink-500/10 text-pink-500 border-pink-500/20",
    },
    {
      title: "Database",
      skills: ["PostgreSQL", "MySQL", "Firebase"],
      color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
    },
    {
      title: "Business Intelligence",
      skills: ["Talend", "Power BI"],
      color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`space-y-12 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A comprehensive toolkit for building innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
              >
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-primary" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="outline"
                        className={`${category.color} transition-all duration-300 hover:scale-105`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
