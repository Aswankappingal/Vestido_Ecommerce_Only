"use client";
import React from 'react';
import styles from './CategoryGrid.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';

const CATEGORIES = [
    { name: 'Men', image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=800&auto=format&fit=crop', link: '/men' },
    { name: 'Women', image: '/young-woman-blue-wall-stylish-bright-orange-glasses-posing-good-high-spirits.jpg', link: '/women' },
    { name: 'Accessories', image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=800&auto=format&fit=crop', link: '/accessories' },
];

export default function CategoryGrid() {
    return (
        <section className={styles.categories}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Shop By Category
                </motion.h2>

                <div className={styles.grid}>
                    {CATEGORIES.map((cat, index) => (
                        <Link href={cat.link} key={cat.name}>
                            <motion.div
                                className={styles.categoryCard}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <img src={cat.image} alt={cat.name} />
                                <div className={styles.overlay}>
                                    <h3>{cat.name}</h3>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
