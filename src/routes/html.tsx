import {document, Expresso} from "expresso";
import {h} from "preact";

export const htmlRoutes = (app: Expresso) => {
    app.get('/html', (req, res) => {
        document(res, <div><h1>Easy HTML5 SSR!</h1></div>)
    })
}
