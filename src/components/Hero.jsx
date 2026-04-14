import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Hero() {
  return (
    <section className={`section-container section-padding ${styles.hero}`}>
      <motion.div 
        className={styles.content}
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } }
        }}
      >
        <motion.p className={styles.greeting} variants={fadeUp}>Bem-vinda(o) ao seu espaço de acolhimento.</motion.p>
        <motion.h1 className={styles.title} variants={fadeUp}>
          Juliana Cerqueira
        </motion.h1>
        <motion.h2 className={styles.subtitle} variants={fadeUp}>
          Psicóloga Clínica em Saúde Mental
        </motion.h2>
        <motion.p className={styles.description} variants={fadeUp}>
          Apoio emocional e profissional para você lidar com os desafios da vida, resgatar sua autoestima e encontrar equilíbrio em um ambiente seguro e livre de julgamentos.
        </motion.p>
        <motion.a 
          href="#contact" 
          className="btn-primary"
          variants={fadeUp}
        >
          Agendar Sessão
        </motion.a>
      </motion.div>
    </section>
  );
}
