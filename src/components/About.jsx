import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styles from './About.module.css';

const easing = [0.25, 1, 0.5, 1];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 2.0, ease: easing } }
};

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section id="about" className={`section-padding ${styles.about}`} ref={containerRef}>
      <motion.div 
        className={`section-container ${styles.grid}`}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-15%" }}
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
            Silêncio, escuta e<br/>transformação.
          </motion.h2>
          
          <motion.div variants={fadeUp}>
            <p className={styles.paragraph}>
              Acredito que muito do nosso sofrimento vem da tentativa de silenciar quem somos. Meu trabalho é ajudar você a ouvir sua própria voz novamente, com gentileza.
            </p>
            <p className={styles.paragraph}>
              Ofereço um ambiente de absoluto respeito. Aqui, as pausas importam tanto quanto as palavras, e cada processo de cura dita o seu próprio ritmo.
            </p>
            <p className={styles.paragraph}>
              Você não precisa ter todas as respostas quando entra. Apenas o desejo de se encontrar.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
