import styles from './SpacedTitle.module.css';

export default function SpacedTitle({ title, subtitle, theme, size }) {
  const titleClasses = `
    ${styles.title}
    ${theme === 'dark' ? styles.dark : ''}
    ${size === 'large' ? styles.large : ''}
  `;
  const subtitleClasses = `
    ${styles.subtitle}
    ${theme === 'dark' ? styles.dark : ''}
    ${size === 'large' ? styles.large : ''}
  `;

  // The main container's margin might also need to be adjusted based on context (e.g., less margin in hero)
  // For now, we keep it as is, but it's a consideration for further refinement.
  return (
    <div className={styles.container}>
      <h1 className={titleClasses.trim()}>{title}</h1>
      {subtitle && <p className={subtitleClasses.trim()}>{subtitle}</p>}
    </div>
  );
}