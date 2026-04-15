import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Hero.module.css';

const easing = [0.16, 1, 0.3, 1]; // Apple-style cubic-bezier

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.4, ease: easing } }
};

export default function Hero() {
  const { scrollY } = useScroll();
  // Very soft parallax for the entire hero text container going up subtly as you scroll down
  const yParallax = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacityParallax = useTransform(scrollY, [0, 800], [1, 0]);

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
          Acolhimento & Transformação
        </motion.p>
        <motion.h1 className={styles.title} variants={fadeUp}>
          Encontre clareza<br/>na sua própria história.
        </motion.h1>
        <motion.p className={styles.description} variants={fadeUp}>
          Um espaço seguro e empático de escuta clínica em saúde mental. Guiando você no processo de entender suas emoções e construir uma vida com mais propósito.
        </motion.p>
        <motion.div variants={fadeUp} className={styles.ctaWrapper}>
          <a href="#contact" className="btn-primary">
            Agendar Consulta
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
