import { motion } from 'framer-motion';
import { Heart, Brain, Sun, Sparkles } from 'lucide-react';
import styles from './Services.module.css';

const easing = [0.25, 1, 0.5, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.2 } /* Slower stagger */
  }
};

const fadeUpObj = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.8, ease: easing } }
};

export default function Services() {
  const services = [
    {
      icon: <Brain className={styles.icon} strokeWidth={1} />,
      title: "Ansiedade",
      text: "Quando a mente não descansa. Criamos formas de suavizar o excesso de futuro."
    },
    {
      icon: <Sun className={styles.icon} strokeWidth={1} />,
      title: "Depressão",
      text: "Onde re-acendemos gradualmente a energia vital que parece ter esmaecido."
    },
    {
      icon: <Heart className={styles.icon} strokeWidth={1} />,
      title: "Auto-imagem",
      text: "Limpando o espelho que reflete quem você é, fortalecendo gentileza e amor próprio."
    },
    {
      icon: <Sparkles className={styles.icon} strokeWidth={1} />,
      title: "Narrativas Interiores",
      text: "Reescrevendo a forma como você conta a sua história para o mundo."
    }
  ];

  return (
    <section className={`section-padding ${styles.services}`}>
      <motion.div
        className="section-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-15%" }}
      >
        <div className={styles.header}>
          <motion.h2 className={styles.title} variants={fadeUpObj}>As Áreas de Cuidado</motion.h2>
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
