import { motion } from 'framer-motion';
import { Heart, Brain, Sun, Sparkles } from 'lucide-react';
import styles from './Services.module.css';

const easing = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeUpObj = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: easing } }
};

export default function Services() {
  const services = [
    {
      icon: <Brain className={styles.icon} strokeWidth={1} />,
      title: "Ansiedade",
      text: "Gestão de pensamentos intrusivos e restauração da calma no presente."
    },
    {
      icon: <Sun className={styles.icon} strokeWidth={1} />,
      title: "Depressão",
      text: "Mapeamento suave e tratamento gradual para recuperação do ânimo vital."
    },
    {
      icon: <Heart className={styles.icon} strokeWidth={1} />,
      title: "Autoestima",
      text: "Solidificação da relação mais importante que você terá: consigo mesma."
    },
    {
      icon: <Sparkles className={styles.icon} strokeWidth={1} />,
      title: "Autoconhecimento",
      text: "Investigação da sua verdadeira narrativa para viver com mais precisão."
    }
  ];

  return (
    <section className={`section-padding ${styles.services}`}>
      <motion.div
        className="section-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
      >
        <div className={styles.header}>
          <motion.h2 className={styles.title} variants={fadeUpObj}>Focos de Atuação</motion.h2>
        </div>
        
        <div className={styles.grid}>
          {services.map((svc, i) => (
            <motion.div key={i} className={styles.card} variants={fadeUpObj}>
              <div className={styles.iconBox}>{svc.icon}</div>
              <h3 className={styles.cardTitle}>{svc.title}</h3>
              <p className={styles.cardText}>{svc.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
