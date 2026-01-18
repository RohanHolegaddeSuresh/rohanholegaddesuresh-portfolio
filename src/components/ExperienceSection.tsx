import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Football Referee',
    company: 'Football Fix',
    location: 'Albany Football Hub, Auckland',
    period: 'Apr 2024 – Present',
    type: 'Casual',
    description: 'Managing and refereeing scheduled football matches, ensuring fair play and maintaining game integrity.',
    highlights: ['Match Management', 'Decision Making', 'Conflict Resolution'],
  },
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
    title: 'Tech Support & Developer',
    company: 'Skills Beyond Education',
    location: 'Bangalore, India',
    period: 'Mar 2023 – Feb 2024',
    type: 'Full-time',
    description: 'Website development and maintenance, backend testing, integrations (WhatsApp, chatbots, workflows), and operational support.',
    highlights: ['Web Development', 'API Integration', 'Backend Testing', 'Chatbot Implementation'],
  },
  {
    title: 'Software Developer Intern',
    company: 'Kapindra Precision Engineering (IIT Madras)',
    location: 'India',
    period: 'Nov 2021 – Jul 2022',
    type: 'Internship',
    description: 'Developed software for sensor data collection and sorting systems, contributing to engineering solutions.',
    highlights: ['Software Development', 'Sensor Systems', 'Data Collection'],
  },
  {
    title: 'Web Development Intern',
    company: 'Gaurav Industries',
    location: 'India',
    period: 'Apr 2021 – Jul 2021',
    type: 'Internship',
    description: 'Maintained and enhanced a B2B website, improving user experience and functionality.',
    highlights: ['B2B Website', 'Frontend Development', 'UX Enhancement'],
  },
  {
    title: 'Customer Service Representative',
    company: 'Shreyas Agencies',
    location: 'India',
    period: 'Aug 2022 – Jan 2023',
    type: 'Full-time',
    description: 'Customer interaction, service scheduling, and administrative support. Recognized for sales excellence.',
    highlights: ['Customer Relations', 'Sales', 'Administration'],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
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

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border transform -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className={`relative lg:w-1/2 ${
                  index % 2 === 0 ? 'lg:pr-12 lg:ml-0' : 'lg:pl-12 lg:ml-auto'
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`hidden lg:flex absolute top-6 w-4 h-4 rounded-full bg-primary border-4 border-background ${
                    index % 2 === 0 ? 'right-0 translate-x-1/2 lg:-right-2' : 'left-0 -translate-x-1/2 lg:-left-2'
                  }`}
                />

                <div className="bg-card border border-border rounded-xl p-6 card-hover">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {exp.type}
                    </span>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                  <p className="text-primary font-medium mb-2">{exp.company}</p>
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
