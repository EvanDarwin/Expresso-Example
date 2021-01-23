import expresso, {connect, middleware} from "expresso";
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
    app.get('/', async (req, res) => res.send(<DemoHomepage req={req}/>))

    app.use(middleware.static('./public'))
    app.use(middleware.notFound())
    app.use(middleware.error())
    app.listen(3000, () => console.log("Server listening..."))
})
