import styles from './SpacedTitle.module.css';

export default function SpacedTitle({ title, subtitle }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}