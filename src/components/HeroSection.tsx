import { motion } from 'framer-motion';
import { ArrowDown, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen hero-gradient flex items-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-24 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="section-subtitle mb-6"
            >
              Computer & Information Sciences Graduate
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-[0.9] mb-6"
            >
              Rohan
              <br />
              <span className="text-gradient">Holegadde</span>
              <br />
              Suresh<span className="text-primary">,</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-muted-foreground text-lg max-w-md mb-8"
            >
              Aspiring Software Engineer with expertise in AI/ML, web development, and data-driven systems. Based in Auckland, New Zealand.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Button size="lg" className="group">
                <a href="#projects" className="flex items-center gap-2">
                  View Portfolio
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg">
                <a href="#contact" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Contact Me
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex items-center gap-6"
            >
              <div className="accent-line" />
              <span className="text-sm text-muted-foreground uppercase tracking-widest">
                By Hardwork & Determination
              </span>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-primary/20 rounded-3xl transform rotate-3 scale-105" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent rounded-3xl transform -rotate-3 scale-102" />
              
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src={profilePhoto}
                  alt="Rohan Holegadde Suresh - Software Engineer"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -right-4 top-1/4 bg-card border border-border rounded-lg p-4 shadow-xl"
              >
                <p className="text-xs text-muted-foreground mb-1">Masters</p>
                <p className="text-sm font-semibold">AUT, Auckland</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -left-4 bottom-1/4 bg-card border border-border rounded-lg p-4 shadow-xl"
              >
                <p className="text-xs text-muted-foreground mb-1">Focus</p>
                <p className="text-sm font-semibold text-primary">AI & ML</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
