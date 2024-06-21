# Vial BackEnd API

This is built with a template for [Next.js](https://nextjs.org/) app router + [Mantine](https://mantine.dev/).
It uses the following:

- Node v20.12.2
- Express
- [TypeScript](https://www.typescriptlang.org/)

## how-to run
- Clone API app https://github.com/wdonet/vialapi
  - Go to the cloned folder and run `npm i`
  - ~~Create a DB/Table as `vial` (DB) and `subjects` with structure at `./db.sql`, then insert some data~~
  - Run `npm start`
  - Can try directly http://localhost:4000/subjects or you might import `postman_collection.json` to your Postman

### Assumptions and design decisions no the API
- Tried to keep code organized by layers:
  - Routers
  - Middlewares
  - Controllers
  - Services
- I started to work with `demoData.ts`
- There are chances of improvement on testing, security, data validations, etc
- Also did not complete the Postgress task yet but works with the mentioned demo data

