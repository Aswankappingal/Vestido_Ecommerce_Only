"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Search, Menu } from 'lucide-react';
import styles from './Navbar.module.scss';
import clsx from 'clsx';
import MagneticButton from '../MagneticButton/MagneticButton';
import MobileMenu from '../MobileMenu/MobileMenu';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    });

    return (
        <>
            <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

            <motion.nav
                className={clsx(styles.navbar, scrolled && styles.scrolled)}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className={clsx("container", styles.navContainer)}>
                    <Link href="/" className={styles.logo}>
                        Vesti<span>do</span>
                    </Link>

                    <div className={styles.menu}>
                        {['Collections', 'New Arrival', 'Accessories', 'Sale'].map((item) => (
                            <Link key={item} href={`/${item.toLowerCase().replace(' ', '-')}`}>
                                <div style={{ display: 'inline-block' }}>
                                    <MagneticButton>
                                        {item}
                                    </MagneticButton>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className={styles.actions}>
                        <MagneticButton className={styles.iconBtn}>
                            <Search size={20} />
                        </MagneticButton>
                        <MagneticButton className={styles.iconBtn}>
                            <ShoppingBag size={20} />
                        </MagneticButton>
                        <MagneticButton className={styles.iconBtn}>
                            <button onClick={() => setIsMenuOpen(true)} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}>
                                <Menu size={20} />
                            </button>
                        </MagneticButton>
                    </div>
                </div>
            </motion.nav>
        </>
    );
}
