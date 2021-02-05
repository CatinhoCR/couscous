# Couscous Game Hub

A game hub centre where I'll be adding some games and random stuff as a personal fun project. Made for practice, fun and showcasing.

- [Couscous Game Hub](#couscous-game-hub)
  - [Dependencies](#dependencies)
  - [Installation and Usage](#installation-and-usage)
  - [Start Dev Server](#start-dev-server)
  - [Build Production Version](#build-production-version)
    - [Branching Strategy](#branching-strategy)
    - [Features](#features)
    - [Project Structure](#project-structure)
    - [SCSS Folder Structure](#scss-folder-structure)
    - [Notes](#notes)
      - [To Do's](#to-dos)

## Dependencies

You will need to have **Node.js** and **Yarn version 1** (not yet upgraded) installed in your local machine/development environment.
If you'd **rather use Node's NPM** for some reason (like not having it installed yet or having version 2), don't worry.. you can do that, just **follow these simple steps**:

1. Delete the `yarn.lock` file in the root folder of the project.
2. Open the **package.json** file and look at the `Scripts` property.
3. Delete the `checkyarn` and `preinstall` scripts.
4. Voila! You can now run `npm install` instead of `yarn install`

## Installation and Usage

Git clone this and navigate to it, then run:

```bash
yarn install
```

Alternatively, run `npm install` if you decided to go that path.

## Start Dev Server

```bash
npm run start
```

## Build Production Version

Production build **not tested and not meant to be used yet**. Added basic one for future reference, didn't even test it.

```bash
npm run build
```

### Branching Strategy

**Default base branch is `origin/dev`**!
Branch `main` is protected and should not really be used. Admins will add approved and finished features to it when so they consider.
**Use `dev` branch** as your base branch, we keep it updated with `main` and it's used as an integration branch. **Always branch off `dev`, and create your Pull Requests** to it. **`dev`! Not `main`**.
If adding a new Feature, name your branch as so `feature/

### Features

- Wepack as build stream, with dev server enabled and hot reloading on file changes.
- ES6 Support via [babel](https://babeljs.io/)
- JavaScript Linting via [eslint-loader](https://github.com/MoOx/eslint-loader)
- SCSS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
- Autoprefixing of browserspecific CSS rules via [postcss](https://postcss.org/) and [autoprefixer](https://github.com/postcss/autoprefixer)
- Style Linting via [stylelint](https://stylelint.io/)

### Project Structure

The JS part will be added later, but it should be simple enough to follow anyway. The `app` folder holds all the HTML and JS files, look around.

### SCSS Folder Structure

The styles folder is in `assets/styles`, the main file being `app.scss` which imports everything else. There are several folders, its using the **7:1 structure** organiation from the official **SASS documentation** and styleguides. A little overview on the folders:

- **Abtracts:** Holds the project's variables, mixins and functions... **Rule of Thumb is this should NOT print a single CSS line** if compiled by itself.
- **Base:** Holds the boilerplate for the project's styles. Just the starting point, utilities and typography.
- **Layout:** Holds the main site's styles for the site's main pieces like: Navigation, Footer, Forms, etc.
- **Blocks:** Blocks refer to specific sections or modules, **rule being blocks would be direct children of the page**. _Things like "Hero Banner", "Products Grid", "FAQs", "Featured Products" would belong here._
- **Components:** Holds the smallest reusable pieces, rule of thumb here being **components are children of the blocks** and can be reused anywhere. _Things like Buttons, Tooltips, Modals, Cards, etc._
- **Pages:** Overrides that apply to a specific page only.
- **Helpers:** This is called `themes` in the traditional `7:1` SASS approach, but we're using this one to manage dynamic assignments to things like colors, spacing, etc.

### Notes

Any feedback or PR's are welcome.

Generated from my [Starter Project](https://github.com/CatinhoCR/fe-webpack-starter)

#### To Do's

This is a lazy place and way to keep track of things I'd like to add, feel free to do a PR for any of these or whatever other game/feature you may think is cool.

**General** Project related stuff:

- [ ] Organize Dashboard and apps pages
- [ ]
- [ ] add new games, make nav better.
- [ ] Clean up helpers, improve and finish them off.
- [ ] Clean styles
- [ ] Add initial custom home
- [ ] Details on folder structure

Finish **Tic Tac Toe** last details:

- [ ] Add Rematch possibility
- [ ] Add and persist scorelines
- [ ] Organize better some function made at the end just to work in a lazy way
- [ ] Prompt users for their nickname (these could be a global feature for all future games too)
- [ ] Add some fancy styling
- [ ] ...
