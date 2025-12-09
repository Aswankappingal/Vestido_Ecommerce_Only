"use client";
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Newsletter.module.scss';
import MagneticButton from '../MagneticButton/MagneticButton';

export default function Newsletter() {
    return (
        <section className={styles.newsletter}>
            <div className={styles.container}>
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    JOIN THE <br /> <span>CULT</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    Get exclusive access to drops, secret sales, and the future of fashion.
                </motion.p>

                <motion.form
                    className={styles.form}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <input type="email" placeholder="ENTER YOUR EMAIL" required />
                    <MagneticButton>
                        <button type="submit">SUBSCRIBE</button>
                    </MagneticButton>
                </motion.form>
            </div>
        </section>
    );
}
