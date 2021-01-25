# Expresso Demo Application

### Welcome to the Expresso framework!

#### [Documentation](https://expresso.evan.guru/)

This example application is an easy way to getting started with a new Expresso application.

By default, this project includes:
  * TypeScript 4.1
  * Framework
    * [Expresso](https://gitlab.com/Evan_Darwin/expresso) & [Preact](https://preactjs.com/)
    * [TypeORM](https://typeorm.io/)
    * Postgres driver (however, you can use [any DB you want](https://github.com/typeorm/typeorm/blob/master/docs/connection-options.md))
    * `.env` configuration
  * Development & Testing
    * `nodemon` (for file changes)
    * `mocha` (for testing your application)
    * `eslint` (with TypeScript support and SAST rules)

Expresso is supported on Node.js 10.x, and >=12. _11.x is not supported._

## Configuring

#### `.env`
First, you will want to modify your `.env` file and set a proper `APP_SECRET`, as well
as add or configure any additional environment variables you may want. The `.env` file included in this repository includes comments and sensible defaults.

> **Setting `APP_SECRET` with a reasonably strong value is _REQUIRED_!**
> Low entropy secrets will result in an error.

#### `ormconfig.json`
If you opt to use TypeORM, then you will want to configure `ormconfig.json` with the proper details
as well install any necessary drivers.

> **For more information about configuring TypeORM:**
> * [Configuring ormconfig.json](https://github.com/typeorm/typeorm/blob/master/docs/using-ormconfig.md)

## Running
Running the application in development (watch) mode, is as easy as configuring the applciation as described
above, then running the following commands:

#### Yarn
> `yarn ; yarn watch`

#### npm
> `npm i ; npm run watch`
