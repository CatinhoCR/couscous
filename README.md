# FE Starter

A lightweight kickstarter for webpack based Front End projects, includes a basic routing for SPA support and some helpers methods, etc.

## Features

- ES6 Support via [babel](https://babeljs.io/)
- JavaScript Linting via [eslint-loader](https://github.com/MoOx/eslint-loader)
- SCSS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
- Autoprefixing of browserspecific CSS rules via [postcss](https://postcss.org/) and [autoprefixer](https://github.com/postcss/autoprefixer)
- Style Linting via [stylelint](https://stylelint.io/)

## Installation

```bash
yarn install
```

If you'd rather use NPM, simply delete the `yarn.lock` file in the root folder and run `npm install`.

### Start Dev Server

```bash
npm run start
```

### Build Prod Version

```bash
npm run build
```

### To Do's

- [ ] Clean up helpers, improve and finish them off.
- [ ] Clean styles
- [ ] Add initial custom home
- [ ] Details on folder structure

#### Notes

Functional for local prototyping. Production build not really implemented nor tested, any feedback or PR's are welcome.

Originally based & extended from [webpack starter](https://github.com/wbkd/webpack-starter).
