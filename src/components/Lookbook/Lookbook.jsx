"use client";
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Lookbook.module.scss';
import MagneticButton from '../MagneticButton/MagneticButton';

export default function Lookbook() {
    return (
        <section className={styles.lookbook}>
            <div className={styles.container}>
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Editorial <span>Vol. 04 // Urban Decay</span>
                </motion.h2>

                <div className={styles.grid}>
                    <motion.div
                        className={`${styles.item} ${styles.item1}`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop" alt="Model 1" />
                    </motion.div>

                    <motion.div
                        className={`${styles.item} ${styles.item2}`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <img src="https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?q=80&w=800&auto=format&fit=crop" alt="Model 2" />
                    </motion.div>

                    <motion.div
                        className={`${styles.item} ${styles.item3}`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop" alt="Model 3" />
                    </motion.div>

                    <div className={styles.caption}>
                        <h3>Redefining the<br />Concrete Jungle.</h3>
                        <p>Our latest collection merges tactical utility with high-fashion silhouettes. Designed for those who move through the shadows.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
