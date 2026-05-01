import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Footprints, Swords, Wind, Waves, Activity, Mountain, Mic, ExternalLink } from 'lucide-react';

const hobbies = [
  {
    name: 'Football',
    detail: 'Referee + Player · Both sides of the whistle',
    emoji: '⚽',
    icon: Footprints,
    tint: 'rgba(34, 197, 94, 0.06)',
    glowColor: 'rgba(34, 197, 94, 0.25)',
    borderColor: 'rgba(34, 197, 94, 0.3)',
    image: '/images/football.jpeg',
  },
  {
    name: 'Cricket',
    detail: 'Opening batsman · Represented college · Still sledges',
    emoji: '🏏',
    icon: Swords,
    tint: 'rgba(132, 204, 22, 0.06)',
    glowColor: 'rgba(132, 204, 22, 0.25)',
    borderColor: 'rgba(132, 204, 22, 0.3)',
    video: '/videos/cricket_clip.mp4',
  },
  {
    name: 'Badminton',
    detail: 'Smashes only · No mercy in doubles',
    emoji: '🏸',
    icon: Wind,
    tint: 'rgba(234, 179, 8, 0.06)',
    glowColor: 'rgba(234, 179, 8, 0.25)',
    borderColor: 'rgba(234, 179, 8, 0.3)',
    video: '/videos/badminton_clip.mp4',
  },
  {
    name: 'Swimming',
    detail: 'Early mornings · Clears the head better than coffee',
    emoji: '🏊',
    icon: Waves,
    tint: 'rgba(56, 189, 248, 0.06)',
    glowColor: 'rgba(56, 189, 248, 0.25)',
    borderColor: 'rgba(56, 189, 248, 0.3)',
    video: '/videos/swimming_clip.mp4',
  },
  {
    name: 'Running',
    detail: "Slow but consistent · It's a lifestyle, not a sprint",
    emoji: '🏃',
    icon: Activity,
    tint: 'rgba(249, 115, 22, 0.06)',
    glowColor: 'rgba(249, 115, 22, 0.25)',
    borderColor: 'rgba(249, 115, 22, 0.3)',
    image: '/images/running.jpeg',
  },
  {
    name: 'Hiking',
    detail: "Trails over treadmills · Still figuring out Auckland's best tracks",
    emoji: '🥾',
    icon: Mountain,
    tint: 'rgba(180, 131, 80, 0.06)',
    glowColor: 'rgba(180, 131, 80, 0.25)',
    borderColor: 'rgba(180, 131, 80, 0.3)',
    image: '/images/hiking.jpeg',
  },
  {
    name: 'Singing',
    detail: "Not just shower concerts · Here's proof",
    emoji: '🎙️',
    icon: Mic,
    tint: 'rgba(168, 85, 247, 0.06)',
    glowColor: 'rgba(168, 85, 247, 0.25)',
    borderColor: 'rgba(168, 85, 247, 0.3)',
    link: 'https://youtu.be/661y6qQB9mY?si=cCVjt39_VmnDIPMc',
  },
];

interface HobbyCardProps {
  hobby: typeof hobbies[number];
  index: number;
  isInView: boolean;
}

const HobbyCard = ({ hobby, index, isInView }: HobbyCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = hobby.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
      className="h-[220px]"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front Face */}
        <div
          className="absolute inset-0 rounded-2xl border border-border p-6 flex flex-col items-center justify-center gap-3 transition-shadow duration-300"
          style={{
            backfaceVisibility: 'hidden',
            backgroundColor: hobby.tint,
            boxShadow: isFlipped ? 'none' : `0 0 20px ${hobby.glowColor}`,
            borderColor: isFlipped ? undefined : hobby.borderColor,
          }}
        >
          <div className="text-4xl mb-1">{hobby.emoji}</div>
          <Icon className="w-4 h-4 text-muted-foreground/50" />
          <h3 className="text-base font-semibold text-foreground">{hobby.name}</h3>
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 rounded-2xl border border-border p-4 flex flex-col items-center justify-center gap-2 transition-shadow duration-300 overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            backgroundColor: hobby.tint,
            boxShadow: isFlipped ? `0 0 25px ${hobby.glowColor}` : 'none',
            borderColor: isFlipped ? hobby.borderColor : undefined,
          }}
        >
          {(hobby.video || hobby.image) ? (
            <>
              {hobby.video ? (
                <video
                  src={hobby.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full rounded-lg object-cover"
                  style={{ maxHeight: '140px' }}
                />
              ) : (
                <div className="w-full rounded-lg overflow-hidden" style={{ height: '140px' }}>
                  <img
                    src={hobby.image}
                    alt={hobby.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              )}
              <p className="text-xs text-muted-foreground text-center leading-relaxed mt-1">
                {hobby.detail}
              </p>
            </>
          ) : (
            <>
              <div className="text-2xl mb-1">{hobby.emoji}</div>
              <p className="text-xs text-muted-foreground text-center leading-relaxed">
                {hobby.detail}
              </p>
              {hobby.link && (
                <a
                  href={hobby.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  Watch <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

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
          Sports teach discipline, teamwork, and quick decision-making—skills that complement my technical expertise. (Hover on the cards below)
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {hobbies.map((hobby, index) => (
            <HobbyCard key={hobby.name} hobby={hobby} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
