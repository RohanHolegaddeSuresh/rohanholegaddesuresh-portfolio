import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const hobbies = [
  {
    name: 'Football',
    description: 'Active football referee and player',
    emoji: '⚽',
  },
  {
    name: 'Cricket',
    description: 'Inter-college representation',
    emoji: '🏏',
  },
  {
    name: 'Badminton',
    description: 'Regular recreational player',
    emoji: '🏸',
  },
  {
    name: 'Swimming',
    description: 'Fitness and relaxation',
    emoji: '🏊',
  },
  {
    name: 'Running',
    description: 'Stay active and healthy',
    emoji: '🏃',
  },
  {
    name: 'Technology',
    description: 'Continuous learning',
    emoji: '💻',
  },
];

const HobbiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 lg:py-32 bg-card/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-subtitle mb-4 text-center"
        >
          05 / Hobbies & Sports
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-title mb-6 text-center"
        >
          Beyond
          <span className="text-gradient"> Code</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto"
        >
          Sports teach discipline, teamwork, and quick decision-making—skills that complement my technical expertise.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 text-center card-hover group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {hobby.emoji}
              </div>
              <h3 className="font-semibold mb-1">{hobby.name}</h3>
              <p className="text-xs text-muted-foreground">{hobby.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
