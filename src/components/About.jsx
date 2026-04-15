import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styles from './About.module.css';

const easing = [0.16, 1, 0.3, 1];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: easing } }
};

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="about" className={`section-container section-padding ${styles.about}`}>
      <motion.div 
        className={styles.grid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } }
        }}
      >
        <motion.div className={styles.textContent} variants={fadeUp}>
          <h2 className="heading-secondary">Sobre Mim</h2>
          <p className={styles.paragraph}>
            Olá, sou a Juliana. Minha missão é caminhar ao seu lado durante o seu processo de autoconhecimento e cura. Acredito que a terapia não é sobre consertar o que está quebrado, mas sobre entender, acolher e transformar a sua própria história.
          </p>
          <p className={styles.paragraph}>
            Com um olhar humano e empático, ofereço um espaço seguro para que possamos explorar suas emoções, medos e desejos. Cada pessoa é única, e aqui o seu ritmo sempre será respeitado.
          </p>
        </motion.div>
        
        <motion.div className={styles.imageContainer} variants={fadeUp}>
          <div className={styles.placeholderImage}>
            {/* We can use an elegant abstract shape or leave space for the actual photo */}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
