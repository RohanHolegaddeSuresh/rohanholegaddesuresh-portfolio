import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink, Code, Headphones, Cpu, Globe, Clock } from 'lucide-react';

const techExperiences = [
  {
    title: 'Tech Support & Developer',
    company: 'Skills Beyond Education',
    location: 'Bangalore, India',
    period: 'Mar 2023 – Feb 2024',
    duration: '1 yr',
    type: 'Full-time',
    description: 'Website development and maintenance, backend testing, integrations (WhatsApp, chatbots, workflows), and operational support.',
    highlights: ['Web Development', 'API Integration', 'Backend Testing', 'Chatbot Implementation'],
    icon: Code,
    website: 'https://skillsbeyondeducation.com',
  },
  {
    title: 'Customer Service Representative',
    company: 'Shreyas Agencies',
    location: 'India',
    period: 'Aug 2022 – Jan 2023',
    duration: '6 mos',
    type: 'Full-time',
    description: 'Customer interaction, service scheduling, and administrative support. Recognized for sales excellence.',
    highlights: ['Customer Relations', 'Sales', 'Administration'],
    icon: Headphones,
  },
  {
    title: 'Software Developer Intern',
    company: 'Kapindra Precision Engineering (IIT Madras)',
    location: 'India',
    period: 'Nov 2021 – Jul 2022',
    duration: '9 mos',
    type: 'Internship',
    description: 'Developed software for sensor data collection and sorting systems, contributing to engineering solutions.',
    highlights: ['Software Development', 'Sensor Systems', 'Data Collection'],
    icon: Cpu,
    website: 'https://www.kapindra.com/',
  },
  {
    title: 'Web Development Intern',
    company: 'Gaurav Industries',
    location: 'India',
    period: 'Apr 2021 – Jul 2021',
    duration: '4 mos',
    type: 'Internship',
    description: 'Maintained and enhanced a B2B website, improving user experience and functionality.',
    highlights: ['B2B Website', 'Frontend Development', 'UX Enhancement'],
    icon: Globe,
  },
];

const aucklandRoles = [
  {
    title: 'Team Member',
    company: 'KFC',
    location: 'Ponsonby, Auckland',
    period: 'Jun 2024 – Present',
    type: 'Part-time',
    description: 'Providing excellent customer service, order preparation, and working effectively within a fast-paced team environment.',
    highlights: ['Customer Service', 'Team Collaboration', 'Time Management'],
  },
  {
    title: 'Football Referee',
    company: 'Football Fix',
    location: 'Albany Football Hub, Auckland',
    period: 'Apr 2024 – Present',
    type: 'Casual',
    description: 'Managing and refereeing scheduled football matches, ensuring fair play and maintaining game integrity.',
    highlights: ['Match Management', 'Decision Making', 'Conflict Resolution'],
  },
];

const TimelineCard = ({ exp, index, isLeft }: { exp: typeof techExperiences[0]; index: number; isLeft: boolean }) => {
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: true, margin: '-80px' });
  const IconComponent = exp.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: isLeft ? -60 : 60, y: 20 }}
      animate={isCardInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`relative lg:w-[calc(50%-2rem)] ${
        isLeft ? 'lg:mr-auto' : 'lg:ml-auto'
      }`}
    >
      {/* Timeline dot with glow */}
      <div
        className={`hidden lg:flex absolute top-8 z-10 ${
          isLeft ? '-right-[2.55rem]' : '-left-[2.55rem]'
        }`}
      >
        <span className="relative flex h-5 w-5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/40 opacity-75" />
          <span className="relative inline-flex rounded-full h-5 w-5 bg-primary border-4 border-background shadow-[0_0_12px_hsl(var(--primary)/0.4)]" />
        </span>
      </div>

      {/* Connector line to dot */}
      <div
        className={`hidden lg:block absolute top-[1.35rem] h-px bg-gradient-to-r ${
          isLeft
            ? 'right-0 w-8 from-border to-primary/60 translate-x-full'
            : 'left-0 w-8 from-primary/60 to-border -translate-x-full'
        }`}
      />

      {/* Card */}
      <div className="group bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-[0_8px_30px_hsl(var(--primary)/0.12)] hover:border-primary/40 hover:-translate-y-1">
        {/* Icon + badges row */}
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <IconComponent className="w-6 h-6 text-primary" />
          </div>
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
              {exp.type}
            </span>
            <span className="px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {exp.duration}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <Calendar className="w-3.5 h-3.5" />
          {exp.period}
        </div>

        <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">{exp.title}</h3>
        <div className="flex items-center gap-2 mb-2">
          <p className="text-primary font-medium">{exp.company}</p>
          {exp.website && (
            <a
              href={exp.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              title={`Visit ${exp.company}`}
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
        <p className="text-sm text-muted-foreground flex items-center gap-1 mb-4">
          <MapPin className="w-3 h-3" />
          {exp.location}
        </p>

        <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>

        <div className="flex flex-wrap gap-2">
          {exp.highlights.map((highlight) => (
            <span
              key={highlight}
              className="px-2 py-1 text-xs bg-secondary text-muted-foreground rounded"
            >
              {highlight}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const aucklandRef = useRef(null);
  const isAucklandInView = useInView(aucklandRef, { once: true, margin: '-100px' });

  // Scroll-driven timeline line
  const timelineContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineContainerRef,
    offset: ['start center', 'end center'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <>
      <section id="experience" className="py-24 lg:py-32 bg-card/30" ref={ref}>
        <div className="container mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-subtitle mb-4"
          >
            03 / Experience
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title mb-16"
          >
            Professional
            <span className="text-gradient"> Journey</span>
          </motion.h2>

          <div className="relative" ref={timelineContainerRef}>
            {/* Static timeline track */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border/30 transform -translate-x-1/2" />

            {/* Animated timeline line that draws as you scroll */}
            <motion.div
              className="hidden lg:block absolute left-1/2 top-0 w-0.5 bg-gradient-to-b from-primary via-primary/60 to-primary/20 transform -translate-x-1/2 origin-top"
              style={{ height: lineHeight }}
            />

            <div className="space-y-12 lg:space-y-16">
              {techExperiences.map((exp, index) => (
                <TimelineCard
                  key={index}
                  exp={exp}
                  index={index}
                  isLeft={index % 2 === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Currently in Auckland */}
      <section className="py-16 lg:py-20 bg-card/10" ref={aucklandRef}>
        <div className="container mx-auto px-6">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isAucklandInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-2xl lg:text-3xl font-display font-semibold mb-3"
          >
            Currently in <span className="text-gradient">Auckland</span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isAucklandInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground mb-10 max-w-xl"
          >
            While settling into Auckland, I've been taking on part-time work alongside my job search.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6">
            {aucklandRoles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isAucklandInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-card/60 border border-border/60 rounded-xl p-5 hover:border-primary/30 transition-colors"
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                    {role.type}
                  </span>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {role.period}
                  </span>
                </div>

                <h4 className="text-lg font-semibold mb-1">{role.title}</h4>
                <p className="text-primary/80 font-medium text-sm mb-1">{role.company}</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mb-3">
                  <MapPin className="w-3 h-3" />
                  {role.location}
                </p>

                <p className="text-muted-foreground text-sm mb-3">{role.description}</p>

                <div className="flex flex-wrap gap-2">
                  {role.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-2 py-1 text-xs bg-secondary text-muted-foreground rounded"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ExperienceSection;
