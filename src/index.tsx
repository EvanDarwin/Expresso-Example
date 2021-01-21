/** @jsx JSXXML */
import expresso, {connect, middleware, xml} from "expresso";
// noinspection ES6UnusedImports
import {JSXXML} from "jsx-xml";

// connect() loads the database connection
connect().then(() => {
    const app = expresso({
        env: {
            CUSTOM_TEST: {
                default: "environment variable!",
                required: true,
            }
        }
    });

    app.use(middleware.helmet())
    app.use(middleware.parsers.raw())
    app.use(middleware.parsers.json())

    app.get('/', (req, res) => {
        xml(res, <config>{app.env('CUSTOM_TEST')}</config>)
    })

    app.use(middleware.static('./public'))
    app.listen(3000, () => console.log("Server listening..."))
})
