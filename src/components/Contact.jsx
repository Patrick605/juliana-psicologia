import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import styles from './Contact.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Contact() {
  return (
    <section id="contact" className={`section-container section-padding ${styles.contact}`}>
      <motion.div
        className={styles.wrapper}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <motion.h2 className="heading-secondary" variants={fadeUp}>Pronta para começar?</motion.h2>
        <motion.p className={styles.text} variants={fadeUp}>
          Agende sua sessão e dê o primeiro passo em direção ao seu bem-estar.
        </motion.p>
        
        <motion.div className={styles.ctaGroup} variants={fadeUp}>
          <a 
            href="https://wa.me/557183112461" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`btn-primary ${styles.whatsappBtn}`}
          >
            <Send className={styles.btnIcon} size={20} />
            Agendar via WhatsApp
          </a>
          
          <a 
            href="https://instagram.com/julianacerq" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.instaLink}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            @julianacerq
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
