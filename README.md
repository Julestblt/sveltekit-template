# Svelte kit template

### This is a pre-configured template with: typescript, i18n, Jest and Cypress.

![Svelte](https://img.shields.io/badge/-Svelte-05122A?style=flat&logo=svelte)
![TypeScript](https://img.shields.io/badge/-TypeScript-05122A?style=flat&logo=typescript)
![Jest](https://img.shields.io/badge/-Jest-05122A?style=flat&logo=jest)
![cypress](https://img.shields.io/badge/-Cypress-05122A?style=flat&logo=cypress)
![Tailwindcss](https://img.shields.io/badge/-Tailwindcss-05122A?style=flat&logo=tailwindcss)
![i18n](https://img.shields.io/badge/-i18n-05122A?style=flat)

## Installation

---

### First you will need to clone the repository.

```bash
git clone git@github.com:Julestblt/sveltekit-template.git
```

### Then you need to install dependencies

```bash
npm install
# OR
yarn
```

### Finally you can start the server

```bash
npm run dev
# OR
yarn dev
```

## Testing

---

### Once the installation is complete you can build your project and test your components / integration

<br/>

#### With Jest name your files as `**.test.ts` in the `src/` directory then run :

```bash
npm run test:unit
# OR
yarn test:unit

# Watch option is also available
npm run test:unit:watch
# OR
yarn test:unit:watch
```

#### With Cypress name your files as `**.test.e2e.ts` in the `cypress/integration/` directory then run :

```bash
npm run test:e2e
# OR
yarn test:e2e

# Watch option is also available
npm run test:e2e:watch
# OR
yarn test:e2e:watch
```

## Internationalization

---

### You can setup translations with i18n library

#### By default, we have an en and fr-FR locale configured you can add more by creating a file in `src/lib/i18n/{locale}.json` and add file to `src/lib/i18n/index.ts` example :

```typescript
import locale from './{locale}.json'; // the locale is related to the file you've created

// Add locale to the typescript type
export type Language = 'en' | 'fr-FR' | '{locale}';

// Then add the new locale to the default locales array
const defaultLocales: Locales = {
	en: en,
	'fr-FR': frFR,
	'{locale}': locale
};
```

### Usage of i18n

> Before using i18n make sure the `initI18n()` function is initialized in `src/routes/__layout.svelte`.

```sveltehtml
<script>
  import { t } from '$lib/i18n';
</script>

<!-- {"home": { "title": "Hello world !" }} -->
<h1>{$t("home.title")}</h1> <!-- "Hello world !" -->
```
