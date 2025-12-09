"use client";
import React from 'react';
import styles from './ProductCard.module.scss';
import { motion } from 'framer-motion';

export default function ProductCard({ product, onQuickView }) {
    return (
        <motion.div
            className={styles.card}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onClick={() => onQuickView(product)}
        >
            <div className={styles.imageContainer}>
                {/* Placeholder for actual image */}
                <img src={product.image} alt={product.name} />
                <div className={styles.quickView}>
                    Quick View
                </div>
            </div>
            <div className={styles.details}>
                <h3 className={styles.name}>{product.name}</h3>
                <p className={styles.price}>${product.price}</p>
            </div>
        </motion.div>
    );
}
