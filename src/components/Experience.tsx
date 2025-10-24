import { useInView } from "react-intersection-observer";
import { Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import busTracking from "@/assets/project-bus-tracking.jpg";
import robotViz from "@/assets/project-robot-viz.jpg";
import ecommerce from "@/assets/project-ecommerce.jpg";
import quizApp from "@/assets/project-quiz-app.jpg";
import iotData from "@/assets/project-iot-data.jpg";

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Internship – Technician",
      company: "ESSE",
      location: "Sfax, Tunisia",
      date: "July 2025",
      description: "Development of mobile and robotic systems (Rose2, Gazibo, Rivz) for IoT visualization and real-time data monitoring.",
      technologies: ["ROS2", "Gazebo", "Rviz", "Mobile Development", "IoT"],
      image: robotViz,
    },
    {
      title: "Internship – Technician",
      company: "Centre de Recherche Sfax",
      location: "Sfax, Tunisia",
      date: "August 2024",
      description: "Developed real-time IoT data collection and visualization mobile solutions for research applications.",
      technologies: ["IoT", "Mobile App", "Data Visualization", "Real-time Systems"],
      image: iotData,
    },
    {
      title: "Internship – Final Study Project",
      company: "SORRETRAS Sfax",
      location: "Sfax, Tunisia",
      date: "February 2023 – Present",
      description: "IoT-based mobile application for real-time bus tracking and smart parking management system.",
      technologies: ["IoT", "GPS", "Mobile Development", "Real-time Tracking", "Smart City"],
      image: busTracking,
    },
    {
      title: "Internship – Technician",
      company: "LOGICOM Sfax",
      location: "Sfax, Tunisia",
      date: "August 2022",
      description: "Web and e-commerce application development using PHP and MySQL for business solutions.",
      technologies: ["PHP", "MySQL", "E-commerce", "Web Development"],
      image: ecommerce,
    },
    {
      title: "Internship – Technician",
      company: "TELNET Sfax",
      location: "Sfax, Tunisia",
      date: "August 2021",
      description: "Mobile quiz application for remote work feedback and employee engagement assessment.",
      technologies: ["Mobile Development", "Android", "Quiz System"],
      image: quizApp,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`space-y-12 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Hands-on projects and real-world applications
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="border-border hover:border-primary/50 transition-all duration-300 overflow-hidden group hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span className="font-medium text-foreground">{exp.company}</span>
                        <span>• {exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="bg-primary/10 text-primary border-primary/20"
                      >
                        {tech}
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

export default Experience;
