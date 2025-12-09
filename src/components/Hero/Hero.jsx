"use client";
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.scss';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import MagneticButton from '../MagneticButton/MagneticButton';
import { splitString } from '../../utils/textUtils';

export default function Hero() {
    const titleText = "VOGUE FORWARD";
    const subText = "Experience the antigravity aesthetic. Where dark meets neon in a symphony of style.";

    return (
        <section className={styles.hero}>
            <div className={styles.background}>
                <motion.img
                    src="/clothes-hanging.jpg"
                    alt="Futuristic Fashion Heros"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                />
            </div>

            <div className={styles.content}>
                <h1>
                    {splitString(titleText)}
                </h1>

                <p>
                    {subText}
                </p>

                <motion.div
                    className={styles.ctaGroup}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                    <Link href="/products">
                        <MagneticButton className={`${styles.btn} ${styles.primary}`}>
                            Shop Now
                        </MagneticButton>
                    </Link>
                    <Link href="/collections">
                        <MagneticButton className={`${styles.btn} ${styles.secondary}`}>
                            Explore <ArrowRight size={16} style={{ display: 'inline', marginLeft: '8px' }} />
                        </MagneticButton>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
