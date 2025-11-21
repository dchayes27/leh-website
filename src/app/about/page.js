import SpacedTitle from '../../components/SpacedTitle';
import styles from './about.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <SpacedTitle title="About" />
      
      <div className={styles.content}>
        <div className={styles.photo}>
          {/* Replace with Linda's actual photo when available */}
          <div className={styles.placeholderPhoto}>
            <div className={styles.photoText}>Photo Coming Soon</div>
          </div>
        </div>
        
        <div className={styles.bio}>
          <p>
            [Linda Hillman Chayes is a poet and writer whose work explores themes of memory, nature, and human relationships. Her poetry has appeared in numerous journals and anthologies.]
          </p>
          <p>
            [Born and raised in New York City, Linda draws inspiration from...]
          </p>
          <p>
            [She is the author of the collection...]
          </p>
          <p className={styles.note}>
            * Please provide a biography to replace this placeholder text.
          </p>
        </div>
      </div>
    </div>
  );
}