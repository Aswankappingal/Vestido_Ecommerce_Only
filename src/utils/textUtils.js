"use client";
import { motion } from 'framer-motion';

export const splitString = (str) => {
    return str.split("").map((char, index) => (
        <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.03, ease: "easeOut" }}
            style={{ display: "inline-block", minWidth: char === " " ? "0.5em" : "auto" }}
        >
            {char}
        </motion.span>
    ));
};
