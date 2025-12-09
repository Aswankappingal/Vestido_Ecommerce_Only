"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './MobileMenu.module.scss';
import Link from 'next/link';
import { X } from 'lucide-react';

export default function MobileMenu({ isOpen, onClose }) {
    const menuVariants = {
        closed: { y: "-100%" },
        open: {
            y: 0,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
        }
    };

    const linkVariants = {
        closed: { y: 80, opacity: 0 },
        open: (i) => ({
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, delay: 0.1 + (i * 0.1), ease: [0.76, 0, 0.24, 1] }
        })
    };

    const LINKS = ['Collections', 'New Arrival', 'Accessories', 'Sale'];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className={styles.mobileMenu}
                    variants={menuVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                >
                    <button className={styles.closeBtn} onClick={onClose}>
                        <X size={24} />
                    </button>

                    <div className={styles.links}>
                        {LINKS.map((item, i) => (
                            <motion.div key={item} custom={i} variants={linkVariants}>
                                <Link href={`/${item.toLowerCase().replace(' ', '-')}`} data-text={item} onClick={onClose}>
                                    {item}
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className={styles.footer}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Link href="#">Instagram</Link>
                        <Link href="#">Twitter</Link>
                        <Link href="#">Support</Link>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
