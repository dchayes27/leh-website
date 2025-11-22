import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.mainWrapper}>
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <div className={styles.fadeWrapper}>
            <h1 className={styles.heroTitle}>Linda Hillman Chayes</h1>
            <p className={styles.heroSubtitle}>Poet & Writer</p>
          </div>
        </div>
      </section>

      <div className={styles.container}>
        <section className={styles.featured}>
          <div className={styles.placeholderFeatured}>
            <p>Featured Poem Coming Soon</p>
          </div>
        </section>
      </div>
    </div>
  );
}