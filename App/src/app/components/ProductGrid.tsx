"use client";

import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import { Product } from "../data/products";
import styles from "./ProductGrid.module.css";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className={styles.container}>
      {products.length === 0 ? (
        <div className={styles.noResults}>
          <p>No products match your selected filters.</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {products.map((product, index) => (
            <ProductCard
              key={`${product.id}-${index}`}
              name={product.name}
              description={product.description}
              rating={product.rating}
              reviews={product.reviews}
              price={product.price}
              volume={product.volume}
              image={product.image}
            />
          ))}
        </div>
      )}

      {products.length > 0 && <Pagination currentPage={1} totalPages={1} />}
    </div>
  );
}
