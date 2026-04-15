import { motion } from 'framer-motion';
import styles from './HowItWorks.module.css';

const easing = [0.25, 1, 0.5, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.4 } /* Slower stagger */
  }
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.8, ease: easing } }
};

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "O Ponto de Partida",
      description: "Um primeiro contato sutil e sem roteiro rígido. Definimos um momento para conversarmos com a calma que a sua rotina necessita."
    },
    {
      number: "02",
      title: "Tempo para Ouvir",
      description: "O espaço aqui prioriza o seu silêncio tanto quanto as suas palavras. O vínculo terapêutico é tecido à mão, no seu ritmo."
    },
    {
      number: "03",
      title: "Descoberta",
      description: "Tiramos as camadas pesadas do dia a dia para que você possa entender verdadeiramente de onde vêm as suas dores."
    }
  ];

  return (
    <section className={`section-padding ${styles.howItWorks}`}>
      <motion.div
        className="section-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-15%" }}
      >
        <div className={styles.header}>
          <motion.h2 className={styles.title} variants={fadeLeft}>A Caminhada</motion.h2>
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
