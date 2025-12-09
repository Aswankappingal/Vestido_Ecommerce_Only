"use client";
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './TrendingCarousel.module.scss';
import Link from 'next/link';

const TRENDING_ITEMS = [
    { id: 1, name: "Void Walker", price: "$240", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop" },
    { id: 2, name: "Neon Glitch", price: "$180", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop" },
    { id: 3, name: "Cyber Samurai", price: "$320", img: "/men-fashion-editorial-outdoors.jpg" },
    { id: 4, name: "Digital Nomad", price: "$150", img: "https://images.unsplash.com/photo-1504199367641-aba8151af406?q=80&w=800&auto=format&fit=crop" },
    { id: 5, name: "Night City", price: "$210", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop" },
];

export default function TrendingCarousel() {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (containerRef.current) {
            setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
        }
    }, []);

    return (
        <section className={styles.carouselSection} ref={sectionRef}>
            <div className={styles.header}>
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    Trending <span>Now</span>
                </motion.h2>
                <span className={styles.dragParams}>[ DRAG TO EXPLORE ]</span>
            </div>

            <motion.div
                className={styles.carouselContainer}
                ref={containerRef}
                whileTap={{ cursor: "grabbing" }}
            >
                <motion.div
                    className={styles.track}
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                >
                    {TRENDING_ITEMS.map((item) => (
                        <motion.div key={item.id} className={styles.item}>
                            <img src={item.img} alt={item.name} />
                            <div className={styles.info}>
                                <h3>{item.name}</h3>
                                <p>{item.price}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
