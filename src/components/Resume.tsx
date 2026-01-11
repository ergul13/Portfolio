import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

interface ResumeProps {
  onViewResume: () => void;
}

const Resume = ({ onViewResume }: ResumeProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      date: "2023 - Present",
      title: "AI & Deep Learning Projects",
      company: "Personal Studies",
      link: "#",
      points: [
        "Developing Neural Networks using Python and PyTorch.",
        "Learning about Convolutional Neural Networks (CNNs) and their applications.",
        "Experimenting with various Machine Learning algorithms and datasets.",
      ],
    },
    {
      date: "2023 - Present",
      title: "University Coursework",
      company: "Computer Engineering",
      link: "#",
      points: [
        "Completed Object-Oriented Programming (OOP) projects using Java.",
        "Studied Data Structures and Algorithms.",
        "Gained basic knowledge of Linux operating system and Git version control.",
      ],
    },
  ];

  const education = [
    {
      date: "2022 - Present",
      title: "B.Sc. Computer Engineering",
      institution: "Erciyes University",
      grade: "3rd Year Student",
    },
  ];

  return (
    <section id="resume" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-background" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my education and technical interests.
          </p>
        </motion.div>

        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-12 text-center text-primary"
          >
            Academic Projects
          </motion.h3>
          
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-accent to-primary opacity-30" />
            
            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className={`relative flex flex-col md:flex-row ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    } items-center gap-8`}
                  >
                    <div className="w-full md:w-[calc(50%-2rem)]">
                      <div className="glass p-6 rounded-xl hover:shadow-[var(--shadow-elegant)] transition-all duration-300 group">
                        <span className="text-secondary text-sm font-semibold block mb-2">{exp.date}</span>
                        <h4 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{exp.title}</h4>
                        <span className="text-primary font-medium block mb-3">{exp.company}</span>
                        <ul className="space-y-2 text-muted-foreground text-sm">
                          {exp.points.map((point, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-primary mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg z-10" />
                    <div className="hidden md:block w-[calc(50%-2rem)]" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-3xl font-bold mb-8 text-center text-primary"
          >
            Education
          </motion.h3>
          
          <div className="flex justify-center">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="glass p-6 rounded-xl hover:shadow-[var(--shadow-elegant)] transition-all duration-300 group max-w-md w-full text-center"
              >
                <span className="text-secondary text-sm font-semibold block mb-2">{edu.date}</span>
                <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{edu.title}</h4>
                <p className="text-primary mb-2 font-medium">{edu.institution}</p>
                <p className="text-muted-foreground text-sm">{edu.grade}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <Button
            size="lg"
            onClick={onViewResume}
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground"
          >
            <FileText className="mr-2 h-5 w-5" />
            View Full Resume
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;