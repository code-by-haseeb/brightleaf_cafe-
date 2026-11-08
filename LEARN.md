# Learning guide: how this project is organized

This is a small café website built with React and Vite.
It uses a component-based folder structure similar to the ones used in real projects.

## Run it

```bash
npm install     # first time only
npm run dev     # start the dev server, open the link it prints
npm run build   # make a production build in /dist
```

## Folder map

```
src/
├── main.jsx                 Entry point. Puts <App /> on the page.
├── App.jsx                  Root component. Wraps the page in the layout.
│
├── pages/
│   └── HomePage.jsx         A page = a list of sections.
│
├── sections/                Big blocks of the page. Each has its own folder.
│   ├── Hero/                  Hero.jsx + Hero.css
│   ├── About/
│   ├── Menu/                  Menu.jsx + MenuItem.jsx (child) + Menu.css
│   ├── Gallery/
│   ├── Reviews/
│   └── Contact/
│
├── components/
│   ├── layout/              Parts that appear on every page
│   │   ├── MainLayout/        Navbar + page content + Footer
│   │   ├── Navbar/
│   │   └── Footer/
│   └── ui/                  Small reusable building blocks
│       ├── Button/
│       ├── Card/
│       └── SectionTitle/
│
├── assets/images/           Photos. Import them in JS to get their URL.
├── data/                    The content (text, menu items, reviews, photos).
├── hooks/                   Custom hooks (reusable logic with state).
├── utils/                   Plain helper functions (no React).
└── styles/global.css        Colors, fonts and shared layout classes.
```

**Rule of thumb:** each component has its own folder with its `.jsx` and `.css` files side by side.

## How the pieces connect

```
main.jsx
└── App
    └── MainLayout
        ├── Navbar
        ├── HomePage
        │   ├── Hero
        │   ├── About     (uses Card, SectionTitle)
        │   ├── Menu      (uses MenuItem, SectionTitle)
        │   ├── Gallery   (uses SectionTitle)
        │   ├── Reviews   (uses Card, SectionTitle)
        │   └── Contact   (uses Card, Button, useContactForm hook)
        └── Footer
```

## React ideas you can find in this project

| Idea | Where to look |
| --- | --- |
| **Component**: a function that returns JSX | Any `.jsx` file, e.g. `components/ui/Card/Card.jsx` |
| **Props**: passing data into a component | `sections/Menu/MenuItem.jsx` receives `name`, `text`, `price` |
| **children**: putting content between tags | `components/layout/MainLayout/MainLayout.jsx` |
| **useState**: a value that can change | `components/layout/Navbar/Navbar.jsx` (mobile menu open or closed) |
| **Rendering lists with `.map()` and `key`** | `sections/About/About.jsx` |
| **Filtering data** | `sections/Menu/Menu.jsx` (category tabs) |
| **Conditional rendering with `&&`** | `sections/Contact/Contact.jsx` (error and success messages) |
| **Controlled form inputs** | `sections/Contact/Contact.jsx` |
| **Custom hook**: logic moved out of a component | `hooks/useContactForm.js` |
| **Separating data from UI** | `data/` folder |
| **Importing images** | `data/menu.js` imports photos, `MenuItem.jsx` shows them with `<img>` |

## Practice exercises (easy → harder)

1. Change the café name in `data/site.js` and watch the navbar and footer update.
2. Add a new drink to `data/menu.js`.
3. Add a new link to `data/navigation.js`.
4. Change the main color: edit `--accent` in `styles/global.css`.
5. Add a `variant="ghost"` style to the `Button` component.
6. Add a photo to the gallery: put a `.jpg` in `assets/images/`, then add it to `data/gallery.js`.
7. Build a new section, like `sections/Team/`, and add it to `HomePage.jsx`.
8. Add a "Clear" button to the contact form, inside `useContactForm`.
9. Install `react-router-dom` and add a second page, like `pages/AboutPage.jsx`.
