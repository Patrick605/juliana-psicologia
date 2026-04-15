import { motion } from 'framer-motion';
import styles from './HowItWorks.module.css';

const easing = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: easing } }
};

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Agendamento",
      description: "Um primeiro contato simples. Escolhemos um horário com calma, ajustando-se à sua rotina para uma sessão inicial sem pressa."
    },
    {
      number: "02",
      title: "O Encontro",
      description: "Nosso espaço é de silêncio e escuta ativa. O primeiro encontro serve para construirmos confiança, no seu tempo."
    },
    {
      number: "03",
      title: "O Ponto de Virada",
      description: "Através de conversas guiadas e profundas, desenvolvemos clareza sobre suas questões para alcançar equilíbrio sustentável."
    }
  ];

  return (
    <section className={`section-padding ${styles.howItWorks}`}>
      <motion.div
        className="section-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
      >
        <div className={styles.header}>
          <motion.h2 className={styles.title} variants={fadeLeft}>O Processo</motion.h2>
        </div>
        
        <div className={styles.stepsLayout}>
          {steps.map((step, index) => (
            <motion.div key={index} className={styles.stepBlock} variants={fadeLeft}>
              <div className={styles.numberWrapper}>
                <span className={styles.number}>{step.number}</span>
              </div>
              <div className={styles.textContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
