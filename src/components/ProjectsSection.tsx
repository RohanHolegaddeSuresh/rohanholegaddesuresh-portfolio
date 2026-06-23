import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, FileText, Star, ArrowUpRight, Github, FolderOpen, Globe } from 'lucide-react';

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
    description: 'AES & Blockchain-Based Access Control for Personal Health Records\nPublished- IJCESR, Vol. 8, Issue 7, 2021\nDesigned and tested a cloud-based PHR security system using AES encryption, Blockchain, and Attribute-Based Encryption for patient-controlled data access. Implemented token-based access control and blockchain verification to protect sensitive health data from unauthorised access. Addressed real-world challenges in healthcare data privacy and cloud security compliance',
    icon: FileText,
    isPublication: true,
  },
];

const projects = [
  {
    title: 'AI for Collaborative Software Development — Dissertation',
    tag: 'Masters Dissertation | COMP971 | 60 Credits | Grade: A-',
    description: 'A Systematic Mapping Study investigating the impact of AI-driven tools (GitHub Copilot, Amazon Q Developer, ChatGPT) on collaborative software development practices. Drawing from 55 peer-reviewed publications, it examines how these tools influence team productivity, coordination, communication, and software quality in distributed environments. Produced actionable recommendations for DevSecOps integration, AI governance frameworks, and responsible AI adoption in enterprise settings',
    supervisor: 'Associate Professor Tony Clear, Auckland University of Technology',
    github: 'https://github.com/RohanHolegaddeSuresh/my-dissertation-AI-Collaborative-Software-Development-Systematic-Mapping-Study',
  },
  {
    title: 'AgriLabour Connect — STEM Research',
    tag: 'STEM Research | ENGE817 | 15 Credits | Grade: B+',
    description: "A systematic literature review exploring Karnataka's agricultural labour shortage caused by rural-urban migration and government welfare schemes. Proposes AgriLabour Connect, a technology-driven platform integrating labour matching, training, and fair wage distribution to bridge the gap between farmers and labourers.",
    supervisor: 'Associate Professor Tony Clear, Auckland University of Technology',
    github: 'https://github.com/RohanHolegaddeSuresh/rohan_masters_academicwork/tree/main/STEM',
  },
  {
    title: 'AgriLabour Connect — Software Architecture',
    tag: 'Software Architecture | COMP806 | 15 Credits | Grade: A-',
    description: 'A continuation of the AgriLabour Connect project with two deliverables — (1) Architectural Design Documentation covering ADD methodology, 4+1 Architectural View Model, UML diagrams, and deployment models for a scalable government-integratable system; (2) Architecture Scenarios & Evaluation Report validating quality attributes (performance, security, usability, scalability, reliability) through structured scenario-based evaluation.',
    supervisor: 'Dr. Julia Ma, Senior Lecturer, AUT',
    github: 'https://github.com/RohanHolegaddeSuresh/rohan_masters_academicwork/tree/main/Software%20Architecture',
  },
  {
    title: 'NZ Job Application Tracker',
    tag: 'Personal Tool · React.js · Tailwind CSS · Netlify',
    description:
      'A full-stack job tracking web app built specifically for the New Zealand job market — addressing a real gap no existing tool covers. Designed as an immigrant job seeker on a Post-Study Work Visa, the app includes NZ-specific features such as AEWV accredited employer verification, NZ job source tracking (Trade Me, Seek, LinkedIn etc.), an NZ application checklist, and NZ offer review prompts to guide candidates through local hiring norms. Features live application status analytics, a visual application funnel, and CSV data export.',
    features: [
      'AEWV accredited employer checker',
      'NZ-specific application checklist & offer review prompts',
      'Live analytics dashboard & application funnel visualisation',
      'CSV export for all application data',
      'Built for immigrant job seekers in New Zealand',
    ],
    github: 'https://github.com/RohanHolegaddeSuresh/rohan-job-applications-tracker',
    liveSite: 'https://rohan-jobtracker.netlify.app/',
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
          Highlighted achievements and research projects
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
                <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{achievement.description}</p>
                
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

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-display font-semibold text-center mb-8 flex items-center justify-center gap-3">
            <FolderOpen className="w-5 h-5 text-primary" />
            Projects
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 card-hover group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full transform translate-x-16 -translate-y-16 group-hover:bg-primary/10 transition-colors" />
                
                <div className="relative">
                  <p className="text-xs text-primary font-medium mb-2">{project.tag}</p>
                  <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{project.supervisor}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                  
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    <Github className="w-3 h-3" /> GitHub <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            Additional projects and research papers are available on my GitHub repository.{' '}
            <a
              href="https://github.com/RohanHolegaddeSuresh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              <Github className="w-3 h-3" />
              github.com/RohanHolegaddeSuresh
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
