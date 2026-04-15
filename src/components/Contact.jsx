import { motion } from 'framer-motion';
import styles from './Contact.module.css';

const easing = [0.25, 1, 0.5, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 2.0, ease: easing } }
};

export default function Contact() {
  return (
    <section id="contact" className={`section-padding ${styles.contact}`}>
      <motion.div
        className="section-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-15%" }}
      >
        <div className={styles.wrapper}>
          <motion.p className={styles.preHeadline} variants={fadeUp}>
            O SEU MOMENTO
          </motion.p>
          <motion.h2 className={styles.headline} variants={fadeUp}>
            O passo mais importante<br/>da sua jornada é o de agora.
          </motion.h2>
          
          <motion.div variants={fadeUp}>
            <a 
              href="https://wa.me/557183112461" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`btn-primary ${styles.ctaButton}`}
            >
              Iniciar Conversa
            </a>
          </motion.div>
          
          <motion.div className={styles.socials} variants={fadeUp}>
            <a 
              href="https://instagram.com/julianacerq" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.plainLink}
            >
              Instagram @julianacerq
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
