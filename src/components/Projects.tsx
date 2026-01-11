import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Code2, Cpu, Network, Database, Brain, Trophy, Home, BookOpen } from "lucide-react";
import ParallaxContainer from "@/components/ParallaxContainer";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Mammography AI: High-Sensitivity Detection",
      description: "Addressed high false-negative rates in mammography by engineering a YOLOv8-based detection pipeline with custom augmentations. Achieved 94% F1-score, significantly outperforming baseline models in identifying early-stage tumors.",
      badges: ["PyTorch", "YOLOv8", "Computer Vision", "Medical Imaging"],
      icon: <Brain className="w-6 h-6 text-primary" />,
      link: "https://github.com/ergul13/breastdetection",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    },
    {
      title: "NeuroScan: Evolutionary Stroke Diagnosis",
      description: "Solved class imbalance in medical scans by integrating Genetic Algorithms with ResNet50 + CBAM Attention modules. Optimized feature selection to boost minority class sensitivity by 12%, ensuring reliable diagnosis.",
      badges: ["ResNet50", "Genetic Algorithms", "Attention Mechanisms"],
      icon: <Brain className="w-6 h-6 text-primary" />,
      link: "https://github.com/ergul13/eru-ai-turing-stroke-classification",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
    },
    {
      title: "Autograd Engine: Neural Nets from First Principles",
      description: "Deconstructed deep learning abstractions by building a scalar-value Autograd engine from scratch. Replicated PyTorch's backpropagation logic, proving ability to implement complex gradient descent algorithms without libraries.",
      badges: ["Python", "Mathematics", "Autograd", "LLM Architecture"],
      icon: <Network className="w-6 h-6 text-primary" />,
      link: "https://github.com/ergul13/zero-to-hero",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80",
    },
    {
      title: "Concurrent Nexus: Deadlock-Free Traffic Control",
      description: "Eliminated race conditions in traffic modeling by designing a multi-threaded Java system with Semaphores and Monitors. Ensured 100% deadlock-free synchronization across 50+ concurrent agents in real-time simulations.",
      badges: ["Java", "Concurrency", "Multi-threading", "System Design"],
      icon: <Cpu className="w-6 h-6 text-primary" />,
      link: "https://github.com/ergul13/javaproject",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    },
    {
      title: "Evolutionary Strategy Simulator",
      description: "Investigated cooperative dynamics by simulating Axelrod's Tournament with agent-based modeling. Demonstrated the evolutionary dominance of deterministic strategies like 'Tit-for-Tat' over 10,000+ generations.",
      badges: ["Python", "Game Theory", "Agent-Based Modeling"],
      icon: <Trophy className="w-6 h-6 text-primary" />,
      link: "https://github.com/ergul13/game-theory",
      image: "https://images.unsplash.com/photo-1611974765270-ca1258634369?w=800&q=80",
    },
    {
      title: "Real Estate Analytics: Market Regression",
      description: "Tackled market valuation volatility by developing a robust regression pipeline with advanced feature engineering. Reduced Root Mean Square Error (RMSE) by 18% through ensemble modeling and extensive EDA.",
      badges: ["Python", "Scikit-Learn", "Data Science", "Regression"],
      icon: <Home className="w-6 h-6 text-primary" />,
      link: "https://github.com/ergul13/prediction_of_house",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    },
    {
      title: "SME Nexus: Modular ERP System",
      description: "Streamlined SME operations by architecting a modular JavaFX ERP system with Role-Based Access Control. Cut manual reporting time by 40% via optimized SQL queries and automated inventory tracking.",
      badges: ["Java", "JavaFX", "MySQL", "Software Architecture"],
      icon: <Database className="w-6 h-6 text-primary" />,
      link: "https://github.com/ergul13/project-repository", 
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    },
    {
      title: "Algorithm Vault: High-Performance Solutions",
      description: "Targeted computational efficiency by curating O(n)/O(log n) solutions for complex graph and DP problems. Consistently benchmarked in the top 1% for runtime execution on competitive coding platforms.",
      badges: ["C++", "Java", "Algorithms", "Data Structures"],
      icon: <Code2 className="w-6 h-6 text-primary" />,
      link: "https://github.com/ergul13/leetcode",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    },
    {
      title: "Java Architecture: Patterns & Internals",
      description: "Bridged the gap between theory and practice by implementing GOF Design Patterns and memory optimizations. Created a reference architecture for scalable OOP systems and functional stream processing.",
      badges: ["Java", "Design Patterns", "Clean Code", "OOP"],
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      link: "https://github.com/ergul13/javatutorial",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80",
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
             A technical showcase of engineering problems solved through deep learning research, system architecture, and algorithmic optimization.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ParallaxContainer key={index} strength={5}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="glass rounded-2xl overflow-hidden group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 h-full flex flex-col"
              >
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
                  <div className="relative overflow-hidden h-48 flex-shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    
                    {/* Icon Badge */}
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center shadow-sm text-primary">
                      {project.icon}
                    </div>

                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                        <ExternalLink className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.badges.map((badge, i) => (
                        <Badge key={i} variant="outline" className="text-xs border-primary/30 text-primary">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </a>
              ) : (
                <div className="flex flex-col h-full">
                  <div className="relative overflow-hidden h-48 flex-shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-60" />
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center shadow-sm text-primary">
                      {project.icon}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold mb-3 text-foreground">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.badges.map((badge, i) => (
                        <Badge key={i} variant="outline" className="text-xs border-primary/30 text-primary">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
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