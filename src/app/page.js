import styles from './page.module.css';
import SpacedTitle from '../components/SpacedTitle';

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <SpacedTitle 
          title="Linda Hillman Chayes" 
          subtitle="Poet & Writer" 
        />
      </section>
      
      <section className={styles.featured}>
        <div className={styles.placeholderFeatured}>
          <p>Featured Poem Coming Soon</p>
        </div>
      </section>
    </div>
  );
}