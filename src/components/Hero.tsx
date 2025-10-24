import { Download, Mail, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          {/* Profile Photo */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-50 animate-pulse" />
            <img
              src={profilePhoto}
              alt="Samer Kammoun"
              className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-primary/20 shadow-glow-primary"
            />
          </div>

          {/* Name and Title */}
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground">
              Samer Kammoun
            </h1>
            <h2 className="text-xl md:text-2xl text-secondary font-medium">
              Electronic Communication Systems Engineering Student
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              IoT & Embedded Systems Developer
            </p>
          </div>

          {/* Introduction */}
          <p className="text-base md:text-lg text-primary-foreground/70 max-w-2xl leading-relaxed">
            I am an ambitious and motivated individual with a solid background in programming 
            and IoT systems. Passionate about innovation, I strive to connect the digital and 
            physical worlds through smart technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-primary"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-secondary text-secondary hover:bg-secondary/10"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("experience")}
              className="border-accent text-accent hover:bg-accent/10"
            >
              <Briefcase className="mr-2 h-5 w-5" />
              View My Work
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
