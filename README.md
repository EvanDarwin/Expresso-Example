# Expresso Demo Application

### Welcome to the Expresso framework!

Expresso is made up of the following components:
  * Express
  * TypeORM
  * Preact & jsx-xml
  * dotenv

## Configuring

### `.env`
First, you will want to modify your `.env` file and set a proper `APP_SECRET`, as well
as add or configure any additional environment variables you may want.

### `ormconfig.json`
If you opt to use TypeORM, then you will want to configure `ormconfig.json` to the proper details
as well install any necessary drivers.

**Documentation:**
* [Configuring ormconfig.json](https://github.com/typeorm/typeorm/blob/master/docs/using-ormconfig.md)

## To Run
Running the application in development (watch) mode, is as easy as configuring the applciation as described
above, then running the following commands:
```
yarn
yarn watch
```
