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
          {/* Replace with Linda's actual bio */}
          <p>
            Linda Hillman Chayes is a poet and writer whose work explores themes of memory, nature, and human relationships. Her poetry has appeared in numerous journals and anthologies.
          </p>
          <p>
            Born and raised in [Location], Linda draws inspiration from both urban and natural landscapes. Her writing has been recognized with several awards, including [Awards if applicable].
          </p>
          <p>
            Linda is the author of [Book Titles]. She currently lives in [Location] where she teaches creative writing and participates in local literary events.
          </p>
        </div>
      </div>
    </div>
  );
}