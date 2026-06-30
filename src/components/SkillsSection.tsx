import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import {
  Code2,
  Brain,
  Database,
  Layers,
  Zap,
  FolderKanban,
  Rocket,
  Star,
  TrendingUp,
  Sparkles,
  ArrowRight,
  Cpu,
  Network,
  Box,
} from 'lucide-react';

type Category = {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: typeof Code2;
  skills: string[];
  whereUsed: string[];
  featured: string;
};

const categories: Category[] = [
  {
    id: 'programming',
    number: '01',
    title: 'Programming',
    description: 'Languages I use to build and bring ideas to life',
    icon: Code2,
    skills: ['Python', 'JavaScript', 'Java', 'C++', 'SQL', 'HTML', 'CSS'],
    whereUsed: [
      'AI Portfolio Chatbot',
      'NZ Job Tracker',
      'AgriLabour Connect',
      'Research Publication',
    ],
    featured: 'Personal Portfolio',
  },
  {
    id: 'ai',
    number: '02',
    title: 'AI & Machine Learning',
    description: 'Tools and frameworks powering my AI work',
    icon: Brain,
    skills: [
      'Machine Learning',
      'Generative AI',
      'LLMs',
      'Prompt Engineering',
      'AI Chatbot Development',
      'AI Agent Fundamentals',
      'NLP',
      'RAG',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'Ollama',
      'Chatbase',
      'TensorFlow',
    ],
    whereUsed: ['Portfolio AI Chatbot', 'Dissertation Research', 'NZ Job Tracker'],
    featured: 'AI Virtual Agent',
  },
  {
    id: 'data',
    number: '03',
    title: 'Data & Databases',
    description: 'How I store, clean and make sense of data',
    icon: Database,
    skills: [
      'Data Analysis',
      'Data Cleaning',
      'EDA',
      'Data Visualization',
      'Data Pipeline Development',
      'Relational Databases',
      'Database Design',
      'MySQL',
      'MongoDB',
      'AWS',
    ],
    whereUsed: ['Dissertation Mapping Study', 'AgriLabour Connect', 'Job Tracker Analytics'],
    featured: "Master's Dissertation",
  },
  {
    id: 'web',
    number: '04',
    title: 'Web & Tools',
    description: 'The stack I use to build and ship things',
    icon: Layers,
    skills: ['React', 'HTML', 'CSS', 'Git', 'GitHub', 'VS Code', 'Netlify', 'EmailJS', 'REST APIs', 'CI/CD'],
    whereUsed: ['Portfolio Website', 'NZ Job Tracker', 'AgriLabour Connect'],
    featured: 'NZ Job Application Tracker',
  },
];

const stats = [
  { icon: Zap, value: '40+', label: 'Technologies' },
  { icon: FolderKanban, value: '4', label: 'Skill Categories' },
  { icon: Rocket, value: '5+', label: 'Projects Powered' },
  { icon: Star, value: '∞', label: 'Always Learning' },
];

const exploring = [
  { name: 'LangChain', percent: 60, icon: Network },
  { name: 'RAG Pipelines', percent: 70, icon: Cpu },
  { name: 'PyTorch', percent: 45, icon: Sparkles },
  { name: 'Hugging Face', percent: 55, icon: Box },
];

const quotes = [
  { text: `Any sufficiently advanced technology is indistinguishable from magic.`, author: `Arthur C. Clarke` },
  { text: `The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.`, author: `Isaac Asimov` },
  { text: `It has become appallingly obvious that our technology has exceeded our humanity.`, author: `Albert Einstein` },
  { text: `The real problem is not whether machines think but whether men do.`, author: `B. F. Skinner` },
  { text: `The future is still so much bigger than the past.`, author: `Tim Berners-Lee` },
  { text: `Science and technology are what we can do; morality is what we agree we should do.`, author: `Anonymous scientific maxim` },
  { text: `The machine does not isolate man from the great problems of nature but plunges him more deeply into them.`, author: `Antoine de Saint-Exupéry` },
  { text: `Technology is a useful servant but a dangerous master.`, author: `Christian Lous Lange` },
  { text: `We are still in the first minutes of the first day of the Internet revolution.`, author: `Scott Cook` },
  { text: `The internet is becoming the town square for the global village of tomorrow.`, author: `Bill Gates` },
  { text: `Innovation is the specific instrument of entrepreneurship.`, author: `Peter Drucker` },
  { text: `What is now proved was once only imagined.`, author: `William Blake` },
  { text: `The most powerful weapon on earth is the human soul on fire.`, author: `Ferdinand Foch` },
  { text: `Science is a way of thinking much more than it is a body of knowledge.`, author: `Carl Sagan` },
  { text: `The advance of technology is based on making it fit in so that you don't really even notice it.`, author: `Bill Gates` },
  { text: `Computers are incredibly fast, accurate, and stupid; humans are incredibly slow, inaccurate, and brilliant.`, author: `Albert Einstein` },
  { text: `We can't solve problems by using the same kind of thinking we used when we created them.`, author: `Albert Einstein` },
  { text: `The Web is more a social creation than a technical one.`, author: `Tim Berners-Lee` },
  { text: `The future belongs to those who prepare for it today.`, author: `Malcolm X` },
  { text: `Science can amuse and fascinate us all, but it is engineering that changes the world.`, author: `Isaac Asimov` },
  { text: `The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency.`, author: `Bill Gates` },
  { text: `The real danger is not that computers will begin to think like men, but that men will begin to think like computers.`, author: `Sydney J. Harris` },
  { text: `The future is not something we enter; the future is something we create.`, author: `Leonard I. Sweet` },
  { text: `Knowledge is power.`, author: `Francis Bacon` },
];

const QuotesRotator = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          <p className="text-xs italic text-foreground/90 leading-snug">
            &ldquo;{quotes[index].text}&rdquo;
          </p>
          <p className="text-[10px] uppercase tracking-wider text-primary mt-2">
            &mdash; {quotes[index].author}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// Proficiency dots
const Dots = ({ filled, total = 5 }: { filled: number; total?: number }) => (
  <div className="flex gap-1">
    {Array.from({ length: total }).map((_, i) => (
      <span
        key={i}
        className={`h-1.5 w-1.5 rounded-full ${
          i < filled ? 'bg-primary shadow-[0_0_6px_hsl(175_80%_50%/0.8)]' : 'bg-muted'
        }`}
      />
    ))}
  </div>
);

// Tiny animated line graph for proficiency card
const MiniGraph = () => (
  <svg viewBox="0 0 120 40" className="w-full h-10">
    <defs>
      <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="hsl(175 80% 50%)" stopOpacity="0.5" />
        <stop offset="100%" stopColor="hsl(175 80% 50%)" stopOpacity="0" />
      </linearGradient>
    </defs>
    <motion.path
      d="M0,32 L20,28 L40,30 L60,20 L80,16 L100,10 L120,6"
      fill="none"
      stroke="hsl(175 80% 50%)"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.8, ease: 'easeInOut' }}
    />
    <path
      d="M0,32 L20,28 L40,30 L60,20 L80,16 L100,10 L120,6 L120,40 L0,40 Z"
      fill="url(#grad)"
    />
  </svg>
);

// Interconnection diagram
const InterconnectionDiagram = () => {
  const nodes = [
    { id: 'Python', x: 80, y: 80 },
    { id: 'Machine Learning', x: 240, y: 50 },
    { id: 'Pandas', x: 400, y: 90 },
    { id: 'SQL', x: 560, y: 60 },
    { id: 'Data Visualization', x: 720, y: 110 },
    { id: 'React', x: 560, y: 200 },
    { id: 'APIs', x: 320, y: 210 },
  ];
  const links = [
    { from: 'Python', to: 'Machine Learning', type: 'strong' },
    { from: 'Machine Learning', to: 'Pandas', type: 'strong' },
    { from: 'Pandas', to: 'SQL', type: 'medium' },
    { from: 'SQL', to: 'Data Visualization', type: 'medium' },
    { from: 'Pandas', to: 'Data Visualization', type: 'support' },
    { from: 'React', to: 'APIs', type: 'strong' },
    { from: 'APIs', to: 'Python', type: 'medium' },
    { from: 'APIs', to: 'SQL', type: 'support' },
  ];
  const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

  const strokeFor = (t: string) =>
    t === 'strong'
      ? { dash: '0', op: 0.9 }
      : t === 'medium'
      ? { dash: '6 4', op: 0.7 }
      : { dash: '2 4', op: 0.45 };

  return (
    <div className="w-full">
      <svg viewBox="0 0 800 280" className="w-full h-auto">
        {links.map((l, i) => {
          const a = nodeMap[l.from];
          const b = nodeMap[l.to];
          const s = strokeFor(l.type);
          return (
            <motion.line
              key={i}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="hsl(175 80% 50%)"
              strokeWidth="1.5"
              strokeDasharray={s.dash}
              strokeOpacity={s.op}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: i * 0.1 }}
            />
          );
        })}
        {nodes.map((n, i) => (
          <motion.g
            key={n.id}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.08 }}
          >
            <circle
              cx={n.x}
              cy={n.y}
              r="28"
              fill="hsl(175 80% 50% / 0.08)"
              stroke="hsl(175 80% 50%)"
              strokeWidth="1.5"
            />
            <circle cx={n.x} cy={n.y} r="4" fill="hsl(175 80% 50%)" />
            <text
              x={n.x}
              y={n.y + 48}
              textAnchor="middle"
              className="fill-foreground"
              fontSize="11"
              fontWeight="500"
            >
              {n.id}
            </text>
          </motion.g>
        ))}
      </svg>
      <div className="flex flex-wrap justify-center gap-6 mt-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="inline-block w-6 h-px bg-primary" /> Stronger Connection
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-6 border-t border-dashed border-primary" /> Medium Connection
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-6 border-t border-dotted border-primary/60" /> Supports
        </div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [view, setView] = useState<'explorer' | 'list'>('explorer');
  const [activeId, setActiveId] = useState(categories[0].id);
  const active = categories.find((c) => c.id === activeId)!;

  // counter for proficiency
  const [pct, setPct] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let v = 0;
    const t = setInterval(() => {
      v += 2;
      if (v >= 85) {
        v = 85;
        clearInterval(t);
      }
      setPct(v);
    }, 20);
    return () => clearInterval(t);
  }, [isInView]);

  return (
    <section id="skills" className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
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
              className="section-title mb-4"
            >
              What I <span className="text-gradient">Do Best</span>
            </motion.h2>
            <p className="text-muted-foreground max-w-2xl">
              A dynamic toolkit of technologies and concepts I use to build intelligent solutions.
            </p>
          </div>
          <div className="flex items-center gap-1 p-1 rounded-full border border-border bg-card/50 self-start lg:self-end">
            {(['explorer', 'list'] as const).map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`px-4 py-2 text-xs uppercase tracking-wider rounded-full transition-all ${
                  view === v
                    ? 'bg-primary/15 text-primary shadow-[0_0_15px_hsl(175_80%_50%/0.25)]'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {v === 'explorer' ? 'Explorer View' : 'List View'}
              </button>
            ))}
          </div>
        </div>

        {/* Stats + Quote */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              className="bg-card border border-border rounded-xl p-4 hover:border-primary/40 transition-colors"
            >
              <s.icon className="w-5 h-5 text-primary mb-2" />
              <div className="font-display text-2xl font-bold">{s.value}</div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="col-span-2 lg:col-span-1 bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-xl p-4"
          >
            <QuotesRotator />
          </motion.div>
        </div>

        {view === 'list' ? (
          /* List view */
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {categories.map((c) => (
              <div key={c.id} className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <c.icon className="w-6 h-6 text-primary" />
                  <h3 className="font-display font-semibold text-lg">
                    <span className="text-primary mr-2">{c.number}</span>
                    {c.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {c.skills.map((s) => (
                    <span
                      key={s}
                      className="inline-flex px-2.5 py-1 rounded-full text-xs bg-secondary/60 border border-border text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Explorer view */
          <div className="grid lg:grid-cols-12 gap-6 mb-16">
            {/* Left sidebar */}
            <div className="lg:col-span-3 space-y-4">
              <div className="bg-card border border-border rounded-xl p-2">
                {categories.map((c) => {
                  const isActive = c.id === activeId;
                  return (
                    <button
                      key={c.id}
                      onClick={() => setActiveId(c.id)}
                      className={`w-full text-left flex items-center gap-3 px-3 py-3 rounded-lg transition-all relative ${
                        isActive
                          ? 'bg-primary/10 text-foreground shadow-[inset_3px_0_0_hsl(175_80%_50%),0_0_20px_hsl(175_80%_50%/0.15)]'
                          : 'text-muted-foreground hover:text-foreground hover:bg-secondary/40'
                      }`}
                    >
                      <span
                        className={`text-xs font-mono ${
                          isActive ? 'text-primary' : 'text-muted-foreground/60'
                        }`}
                      >
                        {c.number}
                      </span>
                      <c.icon className={`w-4 h-4 ${isActive ? 'text-primary' : ''}`} />
                      <span className="text-sm font-medium">{c.title}</span>
                    </button>
                  );
                })}
              </div>

              <div className="bg-card border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <h4 className="text-sm font-semibold">Skills Proficiency</h4>
                </div>
                <div className="font-display text-3xl font-bold text-primary mb-1">{pct}%</div>
                <p className="text-xs text-muted-foreground mb-3">Continuous Growth</p>
                <MiniGraph />
              </div>
            </div>

            {/* Middle detail panel */}
            <div className="lg:col-span-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card border border-border rounded-xl p-6 h-full"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <p className="text-xs font-mono text-primary mb-1">{active.number}</p>
                      <h3 className="font-display text-2xl font-bold">{active.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{active.description}</p>
                    </div>
                    <span className="shrink-0 px-3 py-1 rounded-full text-xs bg-primary/10 text-primary border border-primary/30">
                      {active.skills.length} Technologies
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 my-6">
                    {active.skills.map((skill, i) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.04 }}
                        className="flex flex-col items-center text-center group"
                      >
                        <div className="w-14 h-14 rounded-full bg-secondary/40 border border-border flex items-center justify-center mb-2 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_hsl(175_80%_50%/0.25)] transition-all">
                          <span className="text-xs font-bold text-primary">
                            {skill
                              .split(' ')
                              .map((w) => w[0])
                              .join('')
                              .slice(0, 3)}
                          </span>
                        </div>
                        <p className="text-xs font-medium leading-tight mb-1.5">{skill}</p>
                        <Dots filled={3 + (i % 3)} />
                      </motion.div>
                    ))}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-border">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
                        Where I Use Them
                      </p>
                      <ul className="space-y-1.5">
                        {active.whereUsed.map((p) => (
                          <li key={p} className="text-sm flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-primary" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
                        Featured Project
                      </p>
                      <a
                        href="#projects"
                        className="block p-3 rounded-lg border border-primary/20 bg-primary/5 hover:border-primary/50 transition-colors"
                      >
                        <p className="text-sm font-semibold">{active.featured}</p>
                        <p className="text-xs text-muted-foreground">Tap to explore</p>
                      </a>
                      <a
                        href="#projects"
                        className="inline-flex items-center gap-1 text-sm text-primary hover:gap-2 transition-all mt-3"
                      >
                        View Projects <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right panel — exploring */}
            <div className="lg:col-span-3">
              <div className="bg-card border border-border rounded-xl p-5 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <h4 className="text-sm font-semibold">Tech I'm Exploring</h4>
                </div>
                <div className="space-y-5">
                  {exploring.map((e) => {
                    const dots = 10;
                    const filled = Math.round((e.percent / 100) * dots);
                    return (
                      <div key={e.name}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <e.icon className="w-3.5 h-3.5 text-primary" />
                            <span className="text-sm font-medium">{e.name}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">{e.percent}%</span>
                        </div>
                        <div className="flex gap-1">
                          {Array.from({ length: dots }).map((_, i) => (
                            <span
                              key={i}
                              className={`flex-1 h-1.5 rounded-full ${
                                i < filled
                                  ? 'bg-primary shadow-[0_0_6px_hsl(175_80%_50%/0.7)]'
                                  : 'bg-muted'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Interconnection diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-card border border-border rounded-xl p-6 lg:p-8"
        >
          <div className="text-center mb-6">
            <h3 className="font-display text-xl font-semibold mb-1">Skills Interconnection</h3>
            <p className="text-sm text-muted-foreground">
              How my core skills connect and reinforce each other
            </p>
          </div>
          <InterconnectionDiagram />
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
