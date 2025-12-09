"use client";
import React from 'react';
import styles from './Marquee.module.scss';

export default function Marquee() {
    const items = [
        "FREE SHIPPING WORLDWIDE",
        "NEW COLLECTION DROPPING SOON",
        "USE CODE: VESTIDO20 FOR 20% OFF",
        "JOIN THE CULT",
        "FUTURE OF FASHION"
    ];

    // Duplicate items to create infinite loop effect
    const content = [...items, ...items, ...items, ...items].map((item, index) => (
        <div key={index}>{item}</div>
    ));

    return (
        <div className={styles.marquee}>
            <div className={styles.track}>
                {content}
            </div>
        </div>
    );
}
