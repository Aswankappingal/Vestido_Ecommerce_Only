"use client";
import React from 'react';
import styles from './PromoBanner.module.scss';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

export default function PromoBanner() {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]); // Parallax effect

    return (
        <section className={styles.promoBanner}>
            <motion.div style={{ y }} className={styles.parallaxWrapper}>
                <img
                    src="https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=1920&auto=format&fit=crop"
                    alt="Promo Background"
                    className={styles.bgImage}
                />
            </motion.div>

            <motion.div
                className={styles.content}
                initial={{ opacity: 0, y: 100, rotateX: 20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            >
                <h2>Neon <span>Nights</span> Collection</h2>
                <p>Limited edition cyber-aesthetic streetwear available now.</p>
                <Link href="/collections/neon-nights">
                    <button className={styles.btn}>Shop The Drop</button>
                </Link>
            </motion.div>
        </section>
    );
}
