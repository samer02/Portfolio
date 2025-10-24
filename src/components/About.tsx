import { useInView } from "react-intersection-observer";
import { GraduationCap, Code, Cpu } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Expertise in web and mobile application development with modern frameworks",
    },
    {
      icon: Cpu,
      title: "IoT & Embedded Systems",
      description: "Specialized in connected devices and embedded programming",
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description: "Always exploring new technologies and innovative solutions",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`space-y-12 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Passionate engineering student dedicated to bridging the gap between 
              digital innovation and physical reality
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20 shadow-lg">
              <CardContent className="p-8 space-y-6">
                <p className="text-lg leading-relaxed">
                  As an Electronic Communication Systems Engineering student at ENET'Com, 
                  I specialize in the Internet of Things (IoT) and embedded systems development. 
                  My journey in technology is driven by a passion for creating innovative solutions 
                  that connect the digital and physical worlds.
                </p>
                <p className="text-lg leading-relaxed">
                  With a solid foundation in software development, hardware programming, and 
                  system integration, I bring a comprehensive approach to solving complex 
                  technical challenges. My experience spans from mobile application development 
                  to IoT-based systems, always with a focus on practical, real-world applications.
                </p>
                <p className="text-lg leading-relaxed">
                  I am constantly seeking opportunities to learn, grow, and contribute to 
                  projects that push the boundaries of what's possible with connected technologies.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary group"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
