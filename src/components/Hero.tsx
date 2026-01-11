import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download } from "lucide-react";
import { useState, useEffect } from "react";
import MagneticButton from "@/components/MagneticButton";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = [
    "Computer Engineering Student",
    "AI Enthusiast",
    "ML & DL & Software Developer"
  ];
  
  useEffect(() => {
    const role = roles[currentIndex % roles.length];
    let charIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (charIndex <= role.length) {
        setDisplayedText(role.substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentIndex((prev) => prev + 1);
        }, 2000);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, [currentIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsla(173_80%_40%/0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsla(217_91%_60%/0.15),transparent_50%)]" />
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-lg font-medium mb-4 block">Hello!</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              I'm <span className="gradient-text">M. Ergül Akgül</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-16 mb-8"
          >
            <h2 className="text-2xl md:text-4xl font-semibold text-primary">
              {displayedText}
              <span className="animate-pulse">|</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-2 mb-8"
          >
            <p className="text-xl md:text-2xl text-foreground/90">
              Passionate about Deep Learning & Machine Learning
            </p>
            <p className="text-lg md:text-xl text-muted-foreground">
              3rd Year Engineering Student @ Kayseri, Türkiye
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <MagneticButton strength={0.4}>
              <Button size="lg" variant="outline" className="dark:text-blue-400" asChild>
                <a href="https://www.linkedin.com/in/ergul13/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
                </a>
              </Button>
            </MagneticButton>

            <MagneticButton strength={0.4}>
              <Button size="lg" variant="outline" className="dark:text-gray-200" asChild>
                <a href="https://github.com/ergul13" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" /> Github
                </a>
              </Button>
            </MagneticButton>

            <MagneticButton strength={0.4}>
              <Button size="lg" variant="outline" className="dark:text-[#FFD700]" asChild>
                <a href="https://huggingface.co/ergulakgul" target="_blank" rel="noopener noreferrer">
                  <span className="mr-2">🤗</span> Hugging Face
                </a>
              </Button>
            </MagneticButton>

            <MagneticButton strength={0.4}>
              <Button size="lg" variant="outline" asChild>
                <a href="https://drive.google.com/file/d/1hbJm4P5iVKie6YyCDErF08t_N7Ted_BB/view?usp=sharing" download>
                  <Download className="mr-2 h-5 w-5" /> Download CV
                </a>
              </Button>
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;