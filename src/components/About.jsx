import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styles from './About.module.css';

const easing = [0.16, 1, 0.3, 1];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: easing } }
};

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="about" className={`section-padding ${styles.about}`} ref={containerRef}>
      <motion.div 
        className={`section-container ${styles.grid}`}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
      >
        <div className={styles.imageCol}>
          <motion.div 
            className={styles.imageContainer}
            variants={fadeUp}
          >
            <motion.img 
              src="/juliana-perfil.jpg" 
              alt="Juliana Cerqueira - Psicóloga" 
              className={styles.profileImage} 
              style={{ y: imageY }} 
            />
          </motion.div>
        </div>

        <div className={styles.textCol}>
          <motion.h2 className={styles.heading} variants={fadeUp}>
            Uma jornada em direção a você.
          </motion.h2>
          
          <motion.div variants={fadeUp}>
            <p className={styles.paragraph}>
              Acredito que a terapia não é sobre "consertar" quem você é. É um processo delicado de tirar as camadas e reencontrar a sua essência.
            </p>
            <p className={styles.paragraph}>
              Ofereço um espaço meticulosamente livre de julgamentos. Um ambiente onde as pausas são respeitadas e as emoções acolhidas em sua totalidade.
            </p>
            <p className={styles.paragraph}>
              Cada pessoa possui um ritmo único. Meu trabalho é caminhar ao seu lado.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
