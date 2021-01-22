import expresso, {connect, document, middleware} from "expresso";
import {h} from "preact";
import {DemoHomepage} from "./components/demo";

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

    // demo homepage
    app.get('/', async (req, res) =>
        document(res, <DemoHomepage/>)
    )

    app.use(middleware.static('./public'))
    app.use(middleware.simpleError())
    app.listen(3000, () => console.log("Server listening..."))
})
