import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Brain,
  Database,
  Layers,
  Lightbulb,
  BarChart3,
  Users,
  MessageSquare,
  Zap,
  RefreshCw,
  Eye,
} from 'lucide-react';

const skillCategories = [
  {
    icon: () => (
      <span className="font-mono text-lg font-bold text-primary">&lt;/&gt;</span>
    ),
    customIcon: true,
    title: 'Programming',
    skills: ['Python', 'JavaScript', 'Java', 'HTML', 'CSS', 'SQL', 'C++'],
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    skills: [
      'Machine Learning',
      'Generative AI',
      'Large Language Models (LLMs)',
      'Prompt Engineering',
      'AI Chatbot Development',
      'AI Agent Fundamentals',
      'Natural Language Processing',
      'Retrieval-Augmented Generation (RAG)',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'Ollama',
      'Chatbase',
      'TensorFlow',
      'Neural Networks',
      'Transformers',
    ],
  },
  {
    icon: Database,
    title: 'Data & Databases',
    skills: [
      'Data Analysis',
      'Data Cleaning',
      'Exploratory Data Analysis (EDA)',
      'Data Visualization',
      'Data Pipeline Development',
      'Relational Databases',
      'Database Design',
      'MySQL',
      'MongoDB',
      'AWS',
    ],
  },
  {
    icon: Layers,
    title: 'Web & Tools',
    skills: [
      'React',
      'HTML',
      'CSS',
      'Git',
      'GitHub',
      'VS Code',
      'Netlify',
      'EmailJS',
      'REST APIs',
      'CI/CD',
    ],
  },
];

const tools = [
  'GitHub Copilot',
  'Amazon Q Developer',
  'ChatGPT',
  'Claude',
  'Lovable',
  'VS Code',
  'Netlify',
  'AWS',
  'MongoDB',
  'MySQL',
];

const softSkills = [
  { name: 'Problem Solving', icon: Lightbulb },
  { name: 'Analytical Thinking', icon: BarChart3 },
  { name: 'Team Collaboration', icon: Users },
  { name: 'Strong Communication', icon: MessageSquare },
  { name: 'Fast Learner', icon: Zap },
  { name: 'Adaptable', icon: RefreshCw },
  { name: 'Detail Oriented', icon: Eye },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-subtitle mb-4"
        >
          02 / Skills & Expertise
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-title mb-16"
        >
          What I
          <span className="text-gradient"> Do Best</span>
        </motion.h2>

        {/* Skill Category Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 card-hover group relative overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow:
                    'inset 0 0 60px hsl(175 80% 50% / 0.08)',
                }}
              />
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors relative z-10">
                {category.customIcon ? (
                  <category.icon />
                ) : (
                  <category.icon className="w-6 h-6 text-primary" />
                )}
              </div>
              <h3 className="font-display font-semibold text-lg mb-4 relative z-10">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 relative z-10">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-secondary/60 border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-center text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium mb-8">
            Tools & Platforms
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="inline-flex items-center px-4 py-2 rounded-full text-sm bg-card border border-primary/20 text-foreground hover:border-primary/50 hover:shadow-[0_0_20px_hsl(175_80%_50%_/_0.15)] transition-all duration-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-center text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium mb-8">
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1 + index * 0.05 }}
                className="flex items-center gap-2 border border-border rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground hover:border-primary/40 hover:text-foreground transition-all"
              >
                <skill.icon className="w-4 h-4 text-primary" />
                {skill.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
