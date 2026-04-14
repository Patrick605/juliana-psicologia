import { motion } from 'framer-motion';
import { Heart, Brain, Sun, Sparkles } from 'lucide-react';
import styles from './Services.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Services() {
  const services = [
    {
      icon: <Brain className={styles.icon} strokeWidth={1.5} />,
      title: "Ansiedade",
      text: "Compreensão e controle dos pensamentos acelerados, trazendo mais calma para o seu dia a dia."
    },
    {
      icon: <Sun className={styles.icon} strokeWidth={1.5} />,
      title: "Depressão",
      text: "Apoio profundo para encontrar sentido, resgatar sua energia vital e atravessar os momentos escuros."
    },
    {
      icon: <Heart className={styles.icon} strokeWidth={1.5} />,
      title: "Autoestima",
      text: "Fortalecimento do amor próprio, ajudando você a reconhecer e valorizar quem realmente é."
    },
    {
      icon: <Sparkles className={styles.icon} strokeWidth={1.5} />,
      title: "Autoconhecimento",
      text: "Uma jornada de descoberta interior para viver com mais clareza e propósito."
    }
  ];

  return (
    <section className={`section-container section-padding ${styles.services}`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <motion.h2 className="heading-secondary" variants={fadeUp}>Áreas de Foco</motion.h2>
        
        <div className={styles.grid}>
          {services.map((svc, i) => (
            <motion.div key={i} className={styles.card} variants={fadeUp}>
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
