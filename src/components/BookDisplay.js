"use client";

import Image from 'next/image';
import styles from './BookDisplay.module.css';

export default function BookDisplay({ title, coverImage, description, purchaseLinks }) {
  // Check if the image is an SVG
  const isSvg = coverImage && coverImage.endsWith('.svg');

  return (
    <div className={styles.book}>
      {coverImage && (
        <div className={styles.cover}>
          {isSvg ? (
            // Use regular img tag for SVG
            <img 
              src={coverImage} 
              alt={`${title} book cover`} 
              width={300} 
              height={450}
              className={styles.coverImage}
            />
          ) : (
            // Use Next.js Image for other formats
            <Image 
              src={coverImage} 
              alt={`${title} book cover`} 
              width={300} 
              height={450}
              className={styles.coverImage}
            />
          )}
        </div>
      )}
      <div className={styles.details}>
        <h2 className={styles.title}>{title}</h2>
        {description && <p className={styles.description}>{description}</p>}
        
        {purchaseLinks && purchaseLinks.length > 0 && (
          <div className={styles.links}>
            {purchaseLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                className={styles.purchaseLink}
                target="_blank" 
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}