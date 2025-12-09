
import React from 'react';
import styles from './Footer.module.scss';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <div className={styles.brand}>
                    <Link href="/" className={styles.logo}>Vesti<span>do</span></Link>
                    <p>
                        Redefining the future of fashion. <br />
                        Antigravity aesthetics for the modern era.
                    </p>
                </div>

                <div className={styles.links}>
                    <div className={styles.column}>
                        <h4>Shop</h4>
                        <ul>
                            <li><Link href="/new">New Arrivals</Link></li>
                            <li><Link href="/men">Men's Collection</Link></li>
                            <li><Link href="/women">Women's Collection</Link></li>
                            <li><Link href="/accessories">Accessories</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>Support</h4>
                        <ul>
                            <li><Link href="/faq">FAQ</Link></li>
                            <li><Link href="/shipping">Shipping & Returns</Link></li>
                            <li><Link href="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.bottom}>
                <p>&copy; 2024 VESTIDO. All rights reserved.</p>
            </div>
        </footer>
    );
}
