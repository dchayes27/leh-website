import PoetryItem from '../../components/PoetryItem';
import SpacedTitle from '../../components/SpacedTitle';
import styles from './poetry.module.css';

export default function Poetry() {
  // This will be replaced with actual data from Linda
  const poems = [
    { title: "Sample Poem Title", publication: "Poetry Magazine", year: "2023", link: "#" },
    { title: "Another Example", publication: "The New Yorker", year: "2022", link: "#" },
    { title: "Third Sample", publication: "Yale Review", year: "2021", link: "#" },
  ];

  return (
    <div className={styles.container}>
      <SpacedTitle title="Poetry" />
      
      <div className={styles.poemsList}>
        {poems.map((poem, index) => (
          <PoetryItem
            key={index}
            title={poem.title}
            publication={poem.publication}
            year={poem.year}
            link={poem.link}
          />
        ))}
      </div>
    </div>
  );
}