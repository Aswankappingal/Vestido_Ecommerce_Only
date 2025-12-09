"use client";
import React, { useState } from 'react';
import styles from './ProductGrid.module.scss';
import ProductCard from '../ProductCard/ProductCard';
import QuickViewModal from '../QuickViewModal/QuickViewModal';

const SAMPLE_PRODUCTS = [
    { id: 1, name: "Neon Runner Jacket", price: 120, category: "Jackets", image: "/Jacket.jpg" },
    { id: 2, name: "Cyberpunk Hoodie", price: 85, category: "Hoodies", image: "/CyberPunk.jpg" },
    { id: 3, name: "Stealth Cargo Pants", price: 95, category: "Pants", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80" },
    { id: 4, name: "Void Black Tee", price: 45, category: "T-Shirts", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80" },
    { id: 5, name: "Techwear Vest", price: 150, category: "Jackets", image: "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=800&q=80" },
    { id: 6, name: "Reflective Joggers", price: 70, category: "Pants", image: "/Joggers.jpg" },
];

export default function ProductGrid() {
    const [filter, setFilter] = useState('All');
    const [sort, setSort] = useState('newest');
    const [selectedProduct, setSelectedProduct] = useState(null);

    const filteredProducts = SAMPLE_PRODUCTS.filter(p =>
        filter === 'All' ? true : p.category === filter
    );

    return (
        <section className={styles.gridSection}>
            <div className="container">
                <div className={styles.header}>
                    <h2>Latest Drops</h2>
                    <div className={styles.controls}>
                        <select onChange={(e) => setFilter(e.target.value)}>
                            <option value="All">All Items</option>
                            <option value="Jackets">Jackets</option>
                            <option value="Hoodies">Hoodies</option>
                            <option value="Pants">Pants</option>
                        </select>
                        <select onChange={(e) => setSort(e.target.value)}>
                            <option value="newest">Newest</option>
                            <option value="price-asc">Price: Low to High</option>
                            <option value="price-desc">Price: High to Low</option>
                        </select>
                    </div>
                </div>

                <div className={styles.grid}>
                    {filteredProducts.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onQuickView={setSelectedProduct}
                        />
                    ))}
                </div>
            </div>

            <QuickViewModal
                product={selectedProduct}
                isOpen={!!selectedProduct}
                onClose={() => setSelectedProduct(null)}
            />
        </section>
    );
}
