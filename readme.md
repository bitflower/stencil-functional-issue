# Stencil: Consume FunctionalComponent of child package

## Steps to repdoruce

```terminal
cd packages/design-system
npm i
npm run build
npm link
cd ..
cd ..
cd packages/app
npm i
npm link design-system
npm start:prod
```

## Things to try:

- [ ] use exact same plugins
- [ ] is `lerna` the reason? => try `npm link`
