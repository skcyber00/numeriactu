# Je suis blogger pour un site d'actualité, j'écris des articles destiné à un publique de gamer. J'ai besoin d'un article long sur "Les sorties de jeux vidéo les plus attendues en 2024", avec :

- 1 titre
- aux moins 7 intertitres
- 1 conclusion
- 1 titre engagent optimisé SEO de 80 caractères maximum
- 1 description courte de 170 caractères maximum
- 1 url optimisé

# proxy: {

    options: {
      target: 'https://my-backend.herokuapp.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api/mediaupload/': '/api/mediaupload/',
      },
      pathFilter: [
        '/api/mediaupload/',
      ]
    }

},

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
