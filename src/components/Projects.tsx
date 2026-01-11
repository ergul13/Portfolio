import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import ParallaxContainer from "@/components/ParallaxContainer";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Medical Imaging AI (Stroke & Cancer)",
      // "Beyinde inme ve meme kanseri" projelerini tek bir güçlü başlıkta topladık.
      description: "Developed deep learning models (CNNs) for early detection of Breast Cancer and Brain Stroke using medical imaging datasets. Focused on minimizing false negatives in critical diagnostic predictions and data augmentation techniques.",
      badges: ["Medical AI", "Computer Vision", "Healthcare"],
      // link: "https://github.com/ergul13", // Varsa linkini aç
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80", // Medical / AI görseli
    },
    {
      title: "'Micrograd' Autograd Engine",
      // "Zero to hero" serisindeki en teknik iş.
      description: "Implemented a scalar-valued autograd engine and a neural network library from scratch. Replicated PyTorch's backpropagation logic to understand the mathematical calculus of gradients without relying on external libraries.",
      badges: ["Deep Learning", "Mathematics", "Python"],
      link: "https://github.com/ergul13", 
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80", // Neural Network görseli
    },
    {
      title: "Concurrent Traffic Simulation",
      // "Java Traffic" projesi.
      description: "Engineered a multi-threaded traffic control system using Java. Implemented custom semaphores and deadlock prevention algorithms to manage real-time intersection logic and object synchronization.",
      badges: ["Java", "Concurrency", "System Design"],
      link: "https://github.com/ergul13",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80", // Network / Traffic abstract
    },
    {
      title: "Business Automation System (ERP)",
      // "Kahvehane otomasyonu"nu kurumsal bir ERP sistemi gibi gösterdik.
      description: "Designed a comprehensive desktop application for business management (Cafe/Retail). Features include inventory tracking, order processing, and sales reporting with a robust SQL database architecture and intuitive GUI.",
      badges: ["Java", "SQL", "Database Design"],
      // link: "https://github.com/ergul13",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", // Analytics / Dashboard görseli
    },
    {
      title: "Cybersecurity & Network Analysis",
      description: "Practical implementation of network defense strategies using Kali Linux. Includes packet analysis with Wireshark, vulnerability scanning, and system hardening against common attack vectors.",
      badges: ["Kali Linux", "Network Security", "Ethical Hacking"],
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80", // Hacker görseli
    },
    {
      title: "Algorithmic Optimization Repository",
      // "Java Tutorial"ı basit ders notları değil, optimize edilmiş çözüm arşivi yaptık.
      description: "A curated collection of highly optimized Java solutions for complex algorithmic problems. Focuses on clean code principles, Time/Space Complexity analysis, and advanced data structures.",
      badges: ["Algorithms", "Clean Code", "Education"],
      link: "https://github.com/ergul13",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80", // Code görseli
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Engineering <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
             A showcase of technical implementations ranging from AI architecture to system automation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ParallaxContainer key={index} strength={5}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="glass rounded-2xl overflow-hidden group hover:shadow-[var(--shadow-elegant)] transition-all duration-300"
              >
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                        <ExternalLink className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.badges.map((badge, i) => (
                        <Badge key={i} variant="outline" className="text-xs border-primary/30 text-primary">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </a>
              ) : (
                <>
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-60" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-3 text-foreground">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.badges.map((badge, i) => (
                        <Badge key={i} variant="outline" className="text-xs border-primary/30 text-primary">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </>
              )}
              </motion.div>
            </ParallaxContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;