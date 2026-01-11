import { motion } from "framer-motion";
import { useScrollReveal, scrollVariants } from "@/hooks/use-scroll-reveal";
import { Trophy, Award, Target, Briefcase } from "lucide-react";
import InteractiveElement from "@/components/InteractiveElement";

const Achievements = () => {
  const { ref, isInView } = useScrollReveal();

  const achievements = [
    {
      icon: Target,
      title: "Neural Network Architecture",
      date: "Dec 2025 - Present",
      description: "Engineered a scalar-valued autograd engine ('Micrograd') from scratch to master backpropagation math and computation graphs, mirroring PyTorch's internal logic without using external ML libraries.",
      link: "https://github.com/ergul13", // Kendi GitHub linkin
    },
    {
      icon: Briefcase,
      title: "Concurrent Systems Engineering",
      date: "Jan 2026",
      description: "Developed a complex multi-threaded traffic simulation in Java. Implemented custom thread synchronization, deadlock prevention algorithms, and real-time object interaction management.",
      link: "https://github.com/ergul13",
    },
    {
      icon: Trophy,
      title: "Algorithmic Optimization",
      date: "Ongoing",
      // LeetCode çözüyorum demek yerine "Time/Space Complexity" (Zaman/Alan karmaşıklığı) bildiğini vurguluyoruz.
      description: "Active practitioner of advanced data structures (Graphs, Trees, Dynamic Programming). Focused on writing memory-efficient Java solutions for complex algorithmic challenges.",
      link: "https://leetcode.com/", 
    },
    {
      icon: Award,
      title: "Cybersecurity & Linux Ecology",
      date: "Ongoing",
      // Linux kullanıcısı olduğunu "Advanced Proficiency" diyerek belirtiyoruz.
      description: "Advanced proficiency in Linux (Debian/Kali) environments. conducting network packet analysis and vulnerability assessments to understand system security layers.",
      link: "https://github.com/ergul13",
    },
  ];

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={scrollVariants.floatUp.initial}
          animate={isInView ? scrollVariants.floatUp.animate : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Engineering Focus</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            const variant = index % 2 === 0 ? scrollVariants.scattered : scrollVariants.scatteredRight;
            return (
              <InteractiveElement 
                key={index}
                as={achievement.link ? "a" : "div"}
                href={achievement.link}
                target={achievement.link ? "_blank" : undefined}
                rel={achievement.link ? "noopener noreferrer" : undefined}
                className="block"
              >
                <motion.div
                  initial={variant.initial}
                  animate={isInView ? variant.animate : {}}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.12,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="glass p-8 rounded-2xl h-full group"
                >
                  <div className="flex items-start space-x-4">
                    <motion.div 
                      className="flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:animate-glow-pulse">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h3>
                      <p className="text-secondary text-sm font-semibold mb-3">{achievement.date}</p>
                      <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              </InteractiveElement>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;