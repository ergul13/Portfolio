import { motion } from "framer-motion";
import { useScrollReveal, scrollVariants } from "@/hooks/use-scroll-reveal";
import InteractiveElement from "@/components/InteractiveElement";

const About = () => {
  const { ref, isInView } = useScrollReveal();

  const skills = [
    { name: "Machine Learning", level: 80 },
    { name: "Deep Learning", level: 75 },
    { name: "Data Structures", level: 75 },
    { name: "Java", level: 65 },
    { name: "Python", level: 60 },
    { name: "PyTorch", level: 60 },    
    { name: "Git & GitHub", level: 70 },
    { name: "Linux Basics", level: 60 },
    { name: "SQL", level: 40 },
  ];

  const info = [
    { label: "Status", value: "3rd Year Student" },
    { label: "Focus", value: "Artificial Intelligence" },
    { label: "Favorite Tools", value: "PyTorch, GitHub, Books, Java, Google" },
    { label: "Location", value: "Kayseri, Türkiye" },
    { label: "Languages", value: "Turkish (Native), English(B2)" },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/50" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={scrollVariants.floatUp.initial}
          animate={isInView ? scrollVariants.floatUp.animate : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <InteractiveElement as="div" className="glass p-8 rounded-2xl">
            <motion.div
              initial={scrollVariants.scattered.initial}
              animate={isInView ? scrollVariants.scattered.animate : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-bold text-primary mb-6">Skills & Interests</h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.7, delay: 0.4 + index * 0.08 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-primary">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </InteractiveElement>

          <motion.div
            initial={scrollVariants.scatteredRight.initial}
            animate={isInView ? scrollVariants.scatteredRight.animate : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed text-lg">
              I am a Computer Engineering student with a strong interest in Artificial Intelligence.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My main focus is on Deep Learning and Machine Learning. I enjoy using PyTorch to build neural networks and experiment with different architectures. I also have a good understanding of Java and software development basics through my university projects. I am constantly learning new things to improve my skills in the AI field.
            </p>

            <div className="space-y-3 pt-4">
              {info.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.06 }}
                  className="flex flex-col sm:flex-row sm:items-center"
                >
                  <span className="text-primary font-semibold min-w-[140px] mb-1 sm:mb-0">{item.label}:</span>
                  <span className="text-foreground/90">{item.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;