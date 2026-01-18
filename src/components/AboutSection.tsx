import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, MapPin, Target } from 'lucide-react';

const education = [
  {
    degree: 'Master of Computer and Information Sciences',
    institution: 'Auckland University of Technology',
    location: 'Auckland, New Zealand',
    period: 'Feb 2024 – Dec 2025',
  },
  {
    degree: 'Bachelor of Engineering in Information Science & Engineering',
    institution: 'BMS College of Engineering',
    location: 'Bangalore, India',
    period: '2017 – 2022',
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 lg:py-32 bg-card/30" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* About Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="section-subtitle mb-4"
            >
              01 / About Me
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="section-title mb-8"
            >
              More About
              <span className="text-gradient"> Myself</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-muted-foreground"
            >
              <p className="text-lg leading-relaxed">
                I'm a tech-focused professional with a strong foundation in software development, 
                web technologies, machine learning, and data-driven systems. Originally from India, 
                I've embarked on a journey to New Zealand to pursue higher education and expand my horizons.
              </p>
              <p className="leading-relaxed">
                Currently completing my Master's degree at Auckland University of Technology, 
                I'm actively seeking roles aligned with my academic background. I bring not just 
                technical expertise, but also discipline, leadership, and teamwork skills developed 
                through sports and professional experiences.
              </p>
              <p className="leading-relaxed">
                Beyond tech, I'm passionate about sports—football refereeing, badminton, cricket, 
                and swimming keep me active and teach me invaluable lessons about teamwork and quick decision-making.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex items-center gap-3 text-sm"
            >
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">Sandringham, Auckland, New Zealand</span>
            </motion.div>
          </div>

          {/* Education Timeline */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-3 mb-8"
            >
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-display font-semibold">Education</h3>
            </motion.div>

            <div className="space-y-8 relative">
              {/* Timeline line */}
              <div className="absolute left-[5px] top-3 bottom-3 w-px bg-border" />

              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                  className="relative pl-8"
                >
                  <div className="timeline-dot absolute left-0 top-2" />
                  <div className="bg-card border border-border rounded-xl p-6 card-hover">
                    <p className="text-xs text-primary font-medium mb-2">{edu.period}</p>
                    <h4 className="font-semibold text-lg mb-1">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground mt-1">{edu.location}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Career Goals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 p-6 bg-gradient-to-br from-primary/10 to-accent/5 rounded-xl border border-primary/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-5 h-5 text-primary" />
                <h4 className="font-semibold">Career Goals</h4>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Securing a role relevant to computer science where I can contribute to organizational 
                growth while continuously learning and developing innovative solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
