import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, FileText, Star, ArrowUpRight, Lock } from 'lucide-react';

const achievements = [
  {
    title: 'Employee of the Month',
    organization: 'Skills Beyond Education',
    date: 'January 2024',
    description: 'Recognized for outstanding contribution to web development projects and improved conversion rates.',
    icon: Star,
  },
  {
    title: 'Sales Excellence Recognition',
    organization: 'Shreyas Agencies',
    date: 'Nov – Dec 2022',
    description: 'Achieved exceptional sales performance and customer satisfaction metrics.',
    icon: Award,
  },
  {
    title: 'Research Publication',
    organization: 'Academic Research',
    date: '2021',
    description: 'Advanced Encryption Standard Based Access Control with Blockchain Security in Personal Health Records',
    icon: FileText,
    isPublication: true,
  },
];

const upcomingProjects = [
  {
    title: 'Master\'s Research Project',
    description: 'Advanced research in AI/ML applications - Details coming soon',
    status: 'In Progress',
  },
  {
    title: 'Machine Learning Portfolio',
    description: 'Comprehensive ML projects demonstrating deep learning expertise',
    status: 'Coming Soon',
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-subtitle mb-4 text-center"
        >
          04 / Projects & Achievements
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-title mb-4 text-center"
        >
          <span className="text-gradient">Projects</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto"
        >
          Highlighted achievements and ongoing research projects
        </motion.p>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 card-hover group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full transform translate-x-16 -translate-y-16 group-hover:bg-primary/10 transition-colors" />
              
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <achievement.icon className="w-6 h-6 text-primary" />
                </div>
                
                <p className="text-xs text-primary font-medium mb-2">{achievement.date}</p>
                <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{achievement.organization}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
                
                {achievement.isPublication && (
                  <a
                    href="https://troindia.in/journal/ijcesr/vol8iss7/113-118.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-4 text-sm text-primary hover:underline"
                  >
                    View Publication <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Upcoming Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-display font-semibold text-center mb-8 flex items-center justify-center gap-3">
            <Lock className="w-5 h-5 text-primary" />
            Upcoming Projects
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="bg-gradient-to-br from-card to-secondary/30 border border-border rounded-xl p-6 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded">
                  {project.status}
                </div>
                <h4 className="font-semibold mb-2 pr-24">{project.title}</h4>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
