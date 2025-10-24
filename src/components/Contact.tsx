import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "samerkammoun1278900@gmail.com",
      href: "mailto:samerkammoun1278900@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+216 29 323 977",
      href: "tel:+21629323977",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sfax, Tunisia",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/samer-kamoun-8bab72268/",
      color: "hover:text-blue-500",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/samer02",
      color: "hover:text-purple-500",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`space-y-12 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Let's discuss your next project or opportunity
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-primary/20">
                <CardContent className="p-6 space-y-6">
                  <h3 className="text-2xl font-semibold">Contact Information</h3>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-foreground hover:text-primary transition-colors font-medium"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-foreground font-medium">{info.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
                    <div className="flex gap-4">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-primary ${social.color}`}
                          aria-label={social.label}
                        >
                          <social.icon className="h-6 w-6" />
                        </a>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="border-border">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      required
                      className="border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      className="border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      required
                      className="border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me more about your project or inquiry..."
                      rows={6}
                      required
                      className="border-border focus:border-primary resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 shadow-glow-primary"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
