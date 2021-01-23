import expresso, {connect, ExpressoRequest, ExpressoResponse, middleware} from "expresso";
import {h} from "preact";
import {Homepage} from "./components";

// connect() loads the database connection
connect().then(() => {
    const app = expresso();
    app.use(middleware.parsers.urlencoded())
    app.use(middleware.helmet())

    // demo homepage
    app.get('/', async (req: ExpressoRequest, res: ExpressoResponse) => {
        res.send(<Homepage req={req}/>)
    })

    app.use(middleware.static('./static'))
    app.use(middleware.notFound())
    app.use(middleware.error())
    app.listen(3000, () => console.log("Expresso application is ready!"))
})
