# Simpli Dashboard

A Dashboard to facilitate Simpli work processes.

## Development Enviroment Setup

### Installing Dependencies

This project uses PNPM as its package manager, so in order to install the dependencies, run the following command in your terminal:

```bash
pnpm i
```

### Start a Development Server:

```bash
pnpm dev
```

Or, if you prefer to start the server and open the app in a new browser tab, use this command:

```bash
pnpm dev --open
```

### Code Formatting

To ensure your code follows the correct format, run the following command:

```sh
pnpm lint
```

To automatically fix the lint errors, run

```sh
pnpm format
```

If you're using a JetBrains IDE, you can set it up to run the lint on save. Go to `File > Settings`, then navigate to `Languages and Frameworks > Javascript > Code Quality Tools > ESLint` and check the option **Run eslint --fix on save**.

## Building

To create a production version of the app, run the following command:

```bash
pnpm build
```

You can preview the production build with `pnpm preview`.

> Note: You may need to install an [adapter](https://kit.svelte.dev/docs/adapters) to deploy your app to your target environment.

## Technologies

This project uses the following technologies:

- [TypeScript](https://www.typescriptlang.org/) as the main language
- [Svelte](https://svelte.dev/) as the frontend library
- [SvelteKit](https://kit.svelte.dev/) as the SSR framework
- [TailwindCSS](https://tailwindcss.com/) as the CSS framework
- [PNPM](https://pnpm.io/) as the package manager
- [Vite](https://vitejs.dev/) as the bundler
- [PostCSS](https://postcss.org/) as the CSS preprocessor
- [ESLint](https://eslint.org/) as the linter
- [Prettier](https://prettier.io/) as the code formatter
- [Husky](https://typicode.github.io/husky/#/) as the pre-commit hook

## Project Structure

The project follows the [SvelteKit project structure](https://kit.svelte.dev/docs/project-structure).

- Components that can be reused on multiple pages are located in `src/lib/components`.
- Components that are only used on a single page are located in `src/routes/<page-name>/<component-name>`.
