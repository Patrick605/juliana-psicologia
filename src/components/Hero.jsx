import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Hero.module.css';

const easing = [0.25, 1, 0.5, 1];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.4
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.8, ease: easing } }
};

// Character stagger effect for the headline
const textContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.6 }
  }
};

const charAnim = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { duration: 1.6, ease: easing } 
  }
};

export default function Hero() {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, -120]);
  const opacityParallax = useTransform(scrollY, [0, 800], [1, 0]);

  const headlineLines = [
    "Acolhimento profundo",
    "para uma mente serena."
  ];

  return (
    <section className={`section-container section-padding ${styles.hero}`}>
      <motion.div 
        className={styles.content}
        style={{ y: yParallax, opacity: opacityParallax }}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.p className={styles.greeting} variants={fadeUp}>
          Psicologia Clínica & Acolhimento
        </motion.p>
        
        <motion.h1 className={styles.title} variants={textContainer}>
          {headlineLines.map((line, lineIndex) => (
            <span key={lineIndex} className={styles.lineBreak}>
              {line.split("").map((char, index) => (
                <motion.span key={index} variants={charAnim} className={styles.char}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        <motion.p className={styles.description} variants={fadeUp}>
          Um espaço pensado para você desacelerar, respirar fundo e reconstruir sua relação com as próprias emoções. Sem pressa, no seu tempo.
        </motion.p>
        
        <motion.div variants={fadeUp} className={styles.ctaWrapper}>
          <a href="#contact" className="btn-primary">
            Agendar o seu momento
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
