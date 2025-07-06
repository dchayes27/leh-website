'use client'; // Required for using hooks like useRouter in Navigation
import '../styles/globals.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

// Metadata can still be defined, but if you need dynamic metadata based on client-side
// rendering or hooks, you might need a different approach or to manage it within components.
// For now, static metadata is fine.
export const metadata = {
  title: 'Linda Hillman Chayes | Poet & Writer',
  description: 'The official website of poet and writer Linda Hillman Chayes',
  // Adding some more specific keywords for potential SEO improvement
  keywords: 'Linda Hillman Chayes, poetry, poet, writer, books, literature',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Updated font weights based on new variables.css */}
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&family=Inter:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navigation />
        {/* Added a main-container class for consistent content width and padding */}
        <main className="main-container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}