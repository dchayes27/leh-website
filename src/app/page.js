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
        {/* This can be replaced with a featured poem or quote from Linda */}
        <blockquote className={styles.quote}>
          <p>"Poetry is not a turning loose of emotion, but an escape from emotion; it is not the expression of personality, but an escape from personality."</p>
          <cite>— T.S. Eliot</cite>
        </blockquote>
      </section>
    </div>
  );
}