import { motion } from 'framer-motion';
import styles from './HowItWorks.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Primeiro Contato",
      description: "Você entra em contato via WhatsApp e agendamos o melhor horário para a sua sessão inicial."
    },
    {
      number: "02",
      title: "Acolhimento",
      description: "Nosso primeiro encontro é focado em ouvir você, entender suas necessidades e estabelecer um vínculo de confiança."
    },
    {
      number: "03",
      title: "O Processo",
      description: "Caminhamos no seu ritmo, em sessões semanais, construindo ferramentas para o seu bem-estar emocional."
    }
  ];

  return (
    <section className={`section-container section-padding ${styles.howItWorks}`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <motion.h2 className="heading-secondary" variants={fadeUp}>Como funciona?</motion.h2>
        
        <div className={styles.stepsGrid}>
          {steps.map((step, index) => (
            <motion.div key={index} className={styles.stepCard} variants={fadeUp}>
              <span className={styles.number}>{step.number}</span>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardDescription}>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
