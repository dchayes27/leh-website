import PoetryItem from '../../components/PoetryItem';
import SpacedTitle from '../../components/SpacedTitle';
import styles from './poetry.module.css';

export default function Poetry() {
  // These are placeholders. Please replace with actual data.
  const poems = [
    { title: "The Color of Winter", publication: "Poetry Magazine", year: "2023", link: "https://www.poetryfoundation.org/" },
    { title: "Morning at the Reservoir", publication: "The New Yorker", year: "2022", link: "https://www.newyorker.com/magazine/poetry" },
    { title: "Silence in the Garden", publication: "Yale Review", year: "2021", link: "https://yalereview.org/" },
    { title: "Reflections on Water", publication: "The Paris Review", year: "2021", link: "https://www.theparisreview.org/poetry" },
    { title: "Understanding the Light", publication: "Ploughshares", year: "2020", link: "https://www.pshares.org/" },
    { title: "Walking Through Shadows", publication: "Kenyon Review", year: "2019", link: "https://kenyonreview.org/" },
    { title: "The Last Autumn", publication: "Tin House", year: "2018", link: "https://tinhouse.com/" },
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