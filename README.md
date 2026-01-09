# README

Built using Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

## Project Structure

```text
/
├── public/
├── src/
│   ├── components/
│   ├── layouts/
│   └── pages/
|   		├── posts/
│       └── index.astro
│   ├── scripts/
│   └── styles/
└── package.json
```

- Astro looks for .astro or .md files in the src/pages/ directory. Each page is exposed as a route based on its file name.

## Terminal Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Quick Links

- [Astro docs](https://docs.astro.build)
