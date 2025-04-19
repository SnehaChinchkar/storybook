# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```





## Tech Stack
- React + TypeScript
- TailwindCSS / styled-components
- Storybook
- Vite

## Objective
Build a scalable and accessible design system that includes:

- A robust **Typography system** with support for headings, paragraphs, captions, and labels, following brand tokens and accessibility best practices.
- **Data Entry components** including:
  - `TextInput` supporting states (default, hover, focus, error, disabled), icons, and ARIA attributes.
  - `ToggleSwitch` for binary input with full keyboard navigation and theming.
- **Feedback components** including:
  - `Toast` for user notifications (info, success, warning, error) with mount/unmount behavior.
  - `ModalDialog` for confirmations with support for focus trapping, escape key closing, and accessible roles.

The design system will be responsive, themeable (light/dark mode), and documented using **Storybook**, with an emphasis on usability, accessibility, and reusability in enterprise-grade applications.


## Project Structuresrc/
├── components/
│   ├── Typography/
│   │   ├── Heading.tsx
│   │   └── Heading.stories.tsx
│   ├── DataEntry/
│   │   └── TextInput.tsx
│   ├── Feedback/
│   │   └── Toast.tsx
├── theme/
│   └── tokens.ts


### Typography
- Heading (H1–H6)
- Paragraph
- Caption
- Label

### Data Entry
- Text Input (with states, icons, ARIA support)
- Toggle Switch (accessible, responsive)

### Feedback
- Toast / Snackbar (info, success, warning, error)
- Modal Dialog (with confirmation, ARIA roles, theming)


## Installation & Setup

### 1. Clone the Repository

git clone 
cd design-system

### 2. Install the dependencies

npm install

### 3. TailwindCSS Setup

npm install tailwindcss @tailwindcss/vite

### 4. Run the Development Server

npm run dev

## Install and Setup Storybook

npm run storybook
