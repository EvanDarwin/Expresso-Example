import expresso, {connect, middleware} from "expresso";
import routes from "./routes";

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

    routes(app)

    app.use(middleware.static('./public'))
    app.listen(3000, () => console.log("Server listening..."))
})
