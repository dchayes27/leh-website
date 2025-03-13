import BookDisplay from '../../components/BookDisplay';
import SpacedTitle from '../../components/SpacedTitle';
import styles from './books.module.css';

export default function Books() {
  // This will be replaced with actual book data
  const books = [
    {
      title: "Sample Poetry Collection",
      coverImage: "/images/placeholder-cover.svg", 
      description: "A collection of poems exploring themes of nature, identity, and human connection.",
      purchaseLinks: [
        { label: "Publisher", url: "#" },
        { label: "Amazon", url: "#" }
      ]
    }
  ];

  return (
    <div className={styles.container}>
      <SpacedTitle title="Books" />
      <div className={styles.booksList}>
        {books.map((book, index) => (
          <BookDisplay
            key={index}
            title={book.title}
            coverImage={book.coverImage}
            description={book.description}
            purchaseLinks={book.purchaseLinks}
          />
        ))}
      </div>
    </div>
  );
}