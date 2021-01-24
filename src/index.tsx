import expresso, {ExpressoRequest, ExpressoResponse, middleware} from "expresso";
import {h} from "preact";
import {Homepage} from "./components";

/**
 * To begin using TypeORM and loading the database connection, first ensure that
 * you have configured your `ormconfig.json` properly in the root of your project.
 *
 * Next, uncomment the `connect()` and matching line at the end to wrap the application
 * in the TypeORM connection.
 */

// connect().then(() => {
(() => {
    const app = expresso();
    app.use(middleware.parsers.urlencoded({extended: false}))
    app.use(middleware.helmet())

    // demo homepage
    app.get('/', async (req: ExpressoRequest, res: ExpressoResponse) => {
        res.send(<Homepage req={req}/>)
    })

    app.use(middleware.static('./static'))
    app.use(middleware.notFound())
    app.use(middleware.error())
    app.listen(3000, () => console.log("Expresso application is ready!"))
})()
// })
