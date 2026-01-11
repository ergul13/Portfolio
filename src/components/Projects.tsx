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
      title: "Medical AI: Breast Cancer Detection",
      description: "A high-precision diagnostic tool utilizing Convolutional Neural Networks (CNN) and YOLOv8 architectures. Features a custom data augmentation pipeline designed to maximize F1-scores and minimize false negatives in mammography analysis.",
      badges: ["PyTorch", "YOLOv8", "Computer Vision", "Medical Imaging"],
      icon: <Brain className="w-6 h-6 text-primary" />,
      link: "https://github.com/ergul13/breastdetection",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    },
    {
      title: "Brain Stroke Classification",
      description: "Advanced classification system leveraging ResNet50 enhanced with CBAM (Convolutional Block Attention Module). Integrated Genetic Algorithms for hyperparameter optimization to improve diagnostic accuracy on imbalanced medical datasets.",
      badges: ["ResNet50", "Genetic Algorithms", "Attention Mechanisms"],
      icon: <Brain className="w-6 h-6 text-primary" />,
      link: "https://github.com/ergul13/eru-ai-turing-stroke-classification",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
    },
    {
      title: "Deep Learning Fundamentals (Zero-to-Hero)",
      description: "An implementation of a scalar-value Autograd engine and Neural Network library built from first principles. Replicates PyTorch's internal backpropagation logic to demonstrate deep understanding of computational graphs and gradient descent.",
      badges: ["Python", "Mathematics", "Autograd", "LLM Architecture"],
      icon: <Network className="w-6 h-6 text-primary" />,
      link: "https://github.com/ergul13/zero-to-hero",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80",
    },
    {
      title: "Concurrent Traffic Control System",
      description: "A robust simulation of a traffic intersection engineered in Java. Utilizes advanced concurrency patterns (Semaphores, Monitors) to ensure thread safety and deadlock prevention in a real-time multi-agent environment.",
      badges: ["Java", "Concurrency", "Multi-threading", "System Design"],
      icon: <Cpu className="w-6 h-6 text-primary" />,
      link: "https://github.com/ergul13/javaproject",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    },
    {
      title: "Evolutionary Game Theory",
      description: "Simulation of the Iterated Prisoner's Dilemma based on Axelrod's Tournament. Analyzes the evolution of cooperative strategies (e.g., Tit-for-Tat) in competitive environments using agent-based modeling.",
      badges: ["Python", "Game Theory", "Agent-Based Modeling"],
      icon: <Trophy className="w-6 h-6 text-primary" />,
      link: "https://github.com/ergul13/game-theory",
      image: "https://images.unsplash.com/photo-1611974765270-ca1258634369?w=800&q=80",
    },
    {
      title: "Real Estate Price Prediction",
      description: "End-to-end Machine Learning project for housing price regression. Includes extensive Exploratory Data Analysis (EDA), feature engineering, and model evaluation pipelines to predict market values with high accuracy.",
      badges: ["Python", "Scikit-Learn", "Data Science", "Regression"],
      icon: <Home className="w-6 h-6 text-primary" />,
      link: "https://github.com/ergul13/prediction_of_house",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    },
    {
      title: "SME Management System (ERP)",
      description: "Full-stack desktop ERP application for small-to-medium enterprises. Features modular architecture with JavaFX, role-based security, real-time inventory tracking, and complex SQL reporting modules.",
      badges: ["Java", "JavaFX", "MySQL", "Software Architecture"],
      icon: <Database className="w-6 h-6 text-primary" />,
      link: "https://github.com/ergul13/project-repository", 
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    },
    {
      title: "Algorithmic Solutions Repository",
      description: "A comprehensive collection of optimized solutions for complex algorithmic problems (LeetCode Hard/Medium). Focuses on Time/Space Complexity analysis (Big O), Dynamic Programming, and Graph Theory.",
      badges: ["C++", "Java", "Algorithms", "Data Structures"],
      icon: <Code2 className="w-6 h-6 text-primary" />,
      link: "https://github.com/ergul13/leetcode",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    },
    {
      title: "Java Design Patterns & Architecture",
      description: "An in-depth reference repository demonstrating advanced Java concepts. Covers implementation of Design Patterns, Java Streams API, Functional Programming, and low-level memory management techniques.",
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
             A technical showcase of my engineering journey, ranging from Deep Learning research to production-grade software systems.
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