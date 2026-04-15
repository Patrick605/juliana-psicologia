import { motion } from 'framer-motion';
import styles from './Contact.module.css';

const easing = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: easing } }
};

export default function Contact() {
  return (
    <section id="contact" className={`section-padding ${styles.contact}`}>
      <motion.div
        className="section-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
      >
        <div className={styles.wrapper}>
          <motion.h2 className={styles.headline} variants={fadeUp}>
            O primeiro passo é decidir começar.
          </motion.h2>
          
          <motion.div variants={fadeUp}>
            <a 
              href="https://wa.me/557183112461" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`btn-primary ${styles.ctaButton}`}
            >
              Falar com Juliana no WhatsApp
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
