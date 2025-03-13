import styles from './PoetryItem.module.css';

export default function PoetryItem({ title, publication, year, link }) {
  return (
    <div className={styles.item}>
      <h3 className={styles.title}>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">"{title}"</a>
        ) : (
          `"${title}"`
        )}
      </h3>
      <p className={styles.metadata}>
        <span className={styles.publication}>{publication}</span>
        {year && <span className={styles.year}>{year}</span>}
      </p>
    </div>
  );
}