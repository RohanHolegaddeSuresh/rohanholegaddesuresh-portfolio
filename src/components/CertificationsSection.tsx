import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { ArrowUpRight, Award } from 'lucide-react';

type Cert = {
  name: string;
  org: string;
  url: string;
};

type Category = {
  title: string;
  icon: string;
  certs: Cert[];
};

const categories: Category[] = [
  {
    title: 'AI & Machine Learning',
    icon: '🤖',
    certs: [
      { name: 'Claude 101', org: 'Anthropic Education', url: 'https://verify.skilljar.com/c/a8a9q9gbi5oy' },
      { name: 'AI Fluency: Framework and Foundations', org: 'Anthropic Education', url: 'https://verify.skilljar.com/c/2jhop2z9yiaz' },
      { name: 'Introduction to Artificial Intelligence', org: 'IBM (Coursera)', url: 'https://www.coursera.org/account/accomplishments/verify/PBHEMCAZBSZJ' },
      { name: 'Automated Machine Learning: Google & Apple', org: 'AIBrain, Udemy', url: 'https://www.udemy.com/certificate/UC-01d7e3ba-4058-42eb-a3f3-91ef11acfb58/' },
      { name: 'Building a Future with Robots', org: 'University of Sheffield', url: 'https://www.futurelearn.com/certificates/4za1u9e' },
    ],
  },
  {
    title: 'Data Science & Analytics',
    icon: '📊',
    certs: [
      { name: 'What is Data Science?', org: 'IBM (Coursera)', url: 'https://www.coursera.org/account/accomplishments/verify/MERM6DQ3NJB3' },
      { name: 'Data Science Orientation', org: 'IBM (Coursera)', url: 'https://www.credly.com/badges/609a3fbc-6dfc-4b22-8170-bba0814a688b' },
      { name: 'Foundations: Data, Data, Everywhere', org: 'Google (Coursera)', url: 'https://www.coursera.org/account/accomplishments/verify/L534DP78DHX4' },
      { name: 'Ultimate Python Bootcamp for Data Science & ML', org: 'Udemy', url: 'https://www.udemy.com/certificate/UC-f14112dd-4192-49ad-b070-0d3c2638c046/' },
      { name: 'Accenture Data Analytics and Visualization Job Simulation', org: 'Forage', url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_75A2MMyPTCHbcM9CY_1711796392291_completion_certificate.pdf' },
    ],
  },
  {
    title: 'Cloud & Infrastructure',
    icon: '☁️',
    certs: [
      { name: 'AWS Knowledge: Cloud Essentials', org: 'AWS', url: 'https://www.credly.com/badges/39a1c916-41c5-4f29-87c9-8f53f2e8e84c/linked_in_profile' },
      { name: 'AWS Knowledge: Networking Core', org: 'AWS', url: 'https://www.credly.com/badges/92544597-56d5-4133-ac93-d06efc55520d/public_url' },
      { name: 'AWS S3 Basics', org: 'Coursera', url: 'https://www.coursera.org/account/accomplishments/verify/MAG9KX3L8BMU' },
      { name: 'Google Cloud Platform Fundamentals: Core Infrastructure', org: 'Coursera', url: 'https://www.coursera.org/account/accomplishments/verify/KWMJURA5VDMW' },
      { name: 'Essential Google Cloud Infrastructure: Foundation', org: 'Coursera', url: 'https://www.coursera.org/account/accomplishments/verify/EPJ7NMEKG7T2' },
      { name: 'Essential Google Cloud Infrastructure: Core Services', org: 'Coursera', url: 'https://www.coursera.org/account/accomplishments/verify/H2TXZKMNMK5L' },
      { name: 'Elastic Google Cloud Infrastructure: Scaling and Automation', org: 'Coursera', url: 'https://www.coursera.org/account/accomplishments/verify/D44AETHB4QLJ' },
      { name: 'Reliable Google Cloud Infrastructure: Design and Process', org: 'Coursera', url: 'https://www.coursera.org/account/accomplishments/verify/KJLWCJKRUETV' },
      { name: 'NGINX, Apache, SSL Encryption', org: 'YouAccel, Udemy', url: 'https://www.udemy.com/certificate/UC-329c714e-4368-4407-834c-6371ed551c2d/' },
    ],
  },
  {
    title: 'Software Engineering & Development',
    icon: '💻',
    certs: [
      { name: 'J.P. Morgan Software Engineering Job Simulation', org: 'Forage', url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_75A2MMyPTCHbcM9CY_1711795759074_completion_certificate.pdf' },
      { name: 'Python and Flask Framework Complete', org: 'Udemy', url: 'https://www.udemy.com/certificate/UC-68fa34f4-39b0-43c5-95b7-483c051f6706/' },
      { name: 'CSS and JavaScript Crash Course', org: 'Udemy', url: 'https://www.udemy.com/certificate/UC-d223682f-d9b2-4241-8948-720695799c3e/' },
      { name: 'JavaScript for Beginners', org: 'Udemy', url: 'https://www.udemy.com/certificate/UC-63087bfa-0258-4045-abff-75d185acf81b/' },
    ],
  },
  {
    title: 'Security & Cybersecurity',
    icon: '🔐',
    certs: [
      { name: 'Software Security', org: 'University of Maryland (Coursera)', url: 'https://www.coursera.org/account/accomplishments/verify/KHFH52NVRJE7' },
      { name: 'AIG Shields Up: Cybersecurity Job Simulation', org: 'Forage', url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/AIG/2ZFnEGEDKTQMtEv9C_AIG_75A2MMyPTCHbcM9CY_1711794610315_completion_certificate.pdf' },
    ],
  },
];

const totalCerts = categories.reduce((sum, c) => sum + c.certs.length, 0);

const Counter = ({ to, isInView }: { to: number; isInView: boolean }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, to, { duration: 1.8, ease: 'easeOut' });
    const unsub = rounded.on('change', (v) => {
      if (ref.current) ref.current.textContent = String(v);
    });
    return () => {
      controls.stop();
      unsub();
    };
  }, [isInView, to, count, rounded]);

  return <span ref={ref}>0</span>;
};

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-subtitle mb-4 text-center"
        >
          05 / Certifications & Learning
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-title mb-6 text-center"
        >
          <span className="text-gradient">Certifications & Learning</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-primary/30 bg-primary/5 shadow-[0_0_30px_-10px_hsl(var(--primary)/0.5)]">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-lg font-display font-semibold">
              <span className="text-gradient">
                <Counter to={totalCerts} isInView={isInView} />
              </span>
              <span className="text-foreground"> Certifications & Counting</span>
            </span>
          </div>
        </motion.div>

        <div className="space-y-16">
          {categories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + catIdx * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl md:text-2xl font-display font-semibold text-primary drop-shadow-[0_0_12px_hsl(var(--primary)/0.45)]">
                  {category.title}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
                <span className="text-xs text-muted-foreground font-medium">
                  {category.certs.length} {category.certs.length === 1 ? 'cert' : 'certs'}
                </span>
              </div>

              <div className="flex flex-wrap gap-4">
                {category.certs.map((cert, idx) => (
                  <motion.a
                    key={cert.url}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + catIdx * 0.1 + idx * 0.04 }}
                    className="group relative flex-1 min-w-[260px] max-w-[360px] bg-card border border-border rounded-xl p-5 overflow-hidden transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_25px_-5px_hsl(var(--primary)/0.4)] hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative flex flex-col h-full">
                      <h4 className="text-sm font-semibold leading-snug mb-2 group-hover:text-primary transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-muted-foreground mb-4 flex-1">{cert.org}</p>
                      <span className="inline-flex items-center gap-1 self-start text-xs font-medium text-primary px-2.5 py-1 rounded-md border border-primary/30 bg-primary/5 group-hover:bg-primary/10 transition-colors">
                        Verify <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
