# Linda Hillman Chayes - Poetry Website

A professional website for poet and writer Linda Hillman Chayes.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/dchayes27/leh.git
cd leh
```

2. Install dependencies

```bash
npm install
# or
yarn
```

3. Start the development server

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
src/
├── app/                  # Next.js App Router
│   ├── page.js           # Homepage
│   ├── poetry/page.js    # Poetry listing
│   ├── books/page.js     # Books showcase
│   ├── about/page.js     # About page
│   ├── contact/page.js   # Contact form
│   └── layout.js         # Main layout wrapper
├── components/           # Reusable components
│   ├── Navigation.js     # Nav menu
│   ├── Footer.js         # Site footer
│   ├── PoetryItem.js     # Individual poem listing
│   ├── BookDisplay.js    # Book component
│   └── ContactForm.js    # Contact functionality
└── styles/               # Global and component styles
    ├── globals.css       # Global styles 
    └── variables.css     # Design tokens
```

## Customization

### Content

- Update the homepage in `src/app/page.js`
- Add poetry listings in `src/app/poetry/page.js`
- Add books in `src/app/books/page.js`
- Update biography in `src/app/about/page.js`
- Configure contact options in `src/app/contact/page.js`

### Styling

The site uses CSS modules for styling with global variables defined in `src/styles/variables.css`.

To change colors and fonts, edit the CSS variables:

```css
:root {
  /* Colors */
  --color-background: #FAFAF5;
  --color-text: #2A2A2A;
  --color-accent: #607D8B;
  --color-secondary: #C67D63;
  
  /* Typography */
  --font-primary: 'EB Garamond', Georgia, serif;
  --font-secondary: 'Inter', sans-serif; 
  
  /* ... other variables ... */
}
```

## Deployment

This site is designed to be deployed on Vercel. To deploy:

1. Push your changes to GitHub
2. Connect the repository to Vercel
3. Vercel will automatically build and deploy the site

## License

This project is private and intended for Linda Hillman Chayes's personal use.
