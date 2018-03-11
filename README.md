# andrsn.uk

This is the source code for [andrsn.uk](), setup with [robb-j/node-base](https://github.com/robb-j/node-base/).

#### Built with

* [Pug](https://pugjs.org/api/getting-started.html)
* [Sass](https://sass-lang.com/)
* [Parcel](https://parceljs.org/)
* [Bulma](https://bulma.io/)
* [Fontawesome](https://fontawesome.com)


## Dev Commands

```bash
# Run the dev
npm run dev

# Build the assets
npm run build

# Update version (builds & pushes a new docker image)
# -> it uses the REGISTRY file & the npm version to tag the new image
npm version # (major|minor|patch) --help

# Lint the web & test directories
npm run lint
```
