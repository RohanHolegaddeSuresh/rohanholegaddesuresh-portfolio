import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const recommendations = [
  {
    name: 'Capt Preetham Madhukar',
    title: 'CEO & Founder',
    company: 'Skills Beyond Education',
    initials: 'PM',
    quote:
      'Rohan has shown the spirit of excellence and the way he carried himself at work. Punctual, prompt, and highly dedicated at his work. Rohan developed slowly and steadily by working every day in close quarters in the founder\'s office to become more confident and developing a winning mindset. He was a willing learner, eager to take up new work outside the scope and willing to experiment and develop his abilities in other areas of the business like marketing, sales, and HR — even though his primary role was that of tech support, which he carried out admirably. Rohan is an asset to any company or team he works for, and I wish him the best in his studies and future endeavours.',
  },
  {
    name: 'Pruthvi Prakasha',
    title: 'TypeScript Engineer',
    company: 'McKenzie — Ireland',
    initials: 'PP',
    quote:
      'I highly recommend Rohan for JavaScript and frontend projects. His sincere dedication and strong work ethic consistently elevate project outcomes. Rohan impresses with his meticulous planning and organized approach to tasks, ensuring both efficiency and quality. His technical proficiency in JavaScript and frontend development is exceptional, contributing significantly to project success. Beyond technical skills, Rohan fosters a positive and collaborative work environment, enhancing team dynamics. His clear communication and ability to simplify complex concepts make him a valuable asset. I wholeheartedly endorse him for future projects.',
  },
];

const RecommendationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="recommendations" className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-subtitle mb-4"
        >
          04 / Recommendations
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-title mb-6"
        >
          Kind
          <span className="text-gradient"> Words</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground mb-16 max-w-2xl"
        >
          What colleagues say about working with me.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {recommendations.map((rec, index) => (
            <motion.div
              key={rec.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              className="bg-card border border-border rounded-xl p-8 card-hover relative"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />

              <p className="text-muted-foreground text-sm italic leading-relaxed mb-8">
                "{rec.quote}"
              </p>

              <div className="flex items-center gap-4">
                <Avatar className="h-11 w-11">
                  <AvatarFallback className="bg-primary/10 text-primary text-sm font-semibold">
                    {rec.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-sm">{rec.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {rec.title}, {rec.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendationsSection;
