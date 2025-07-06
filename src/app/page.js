import styles from './page.module.css';
import SpacedTitle from '../components/SpacedTitle';

export default function Home() {
  return (
    // Removed styles.container from here to allow hero to be full-width
    // It can be added to specific sections if needed, or use the .main-container from globals.css
    <>
      <section className={styles.hero}>
        <SpacedTitle 
          title="Linda Hillman Chayes" 
          subtitle="Poet & Writer"
          theme="dark" // Pass the theme prop for dark background
          size="large"  // Pass the size prop for larger hero titles
        />
      </section>
      
      {/* Wrap subsequent sections in a container if they need to be constrained */}
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