"use client";
import React from 'react';
import styles from './QuickViewModal.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function QuickViewModal({ product, isOpen, onClose }) {
    if (!isOpen || !product) return null;

    return (
        <AnimatePresence>
            <motion.div
                className={styles.modalOverlay}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className={styles.modalContent}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button className={styles.closeBtn} onClick={onClose}>
                        <X size={18} />
                    </button>

                    <div className={styles.imageSection}>
                        <img src={product.image} alt={product.name} />
                    </div>

                    <div className={styles.infoSection}>
                        <h2>{product.name}</h2>
                        <p className={styles.price}>${product.price}</p>

                        <p className={styles.description}>
                            Premium quality futuristic streetwear designed for the modern urban explorer.
                            Features high-tech fabrics and ergonomic cuts for maximum comfort and style.
                        </p>

                        <div className={styles.actions}>
                            <button className={styles.addToCart}>Add to Cart</button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
