# AGENTS.md

## base tech stack

vite, typescript, react, react-router, react-hook-form, @hookform/resolvers, material-ui, @mui/icons-material, redux toolkit, redux toolkit query, zod, react-i18next, i18next-cli

## router

react-router in Data Mode for routing

## redux toolkit

always use useAppDispatch, useAppSelector and useAppStore located at src/hooks.ts
instead of their base redux toolkit versions

## internationalization

uses react-i18next and i18next-cli for translations.

if you edit or add to `/public/locales/`, run this to sync types:

```bash
npm run i18n:extract
```

always import translations as an array and use the full name:

```typescript
const { t } = useTranslation(["common"]);
```

`{t("common:some")}`
