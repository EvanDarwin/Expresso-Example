import {document, Expresso} from "expresso";
import {h} from "preact";
import {jsonRoutes} from "./json";
import {htmlRoutes} from "./html";
import {xmlRoutes} from "./xml";

export default (app: Expresso) => {
    app.get('/', (req, res) => {
        document(res, <ul>
            <li><a href="/html">HTML Example</a></li>
            <li><a href="/xml">XML Example</a></li>
            <li><a href="/json">JSON Example</a></li>
        </ul>)
    })

    htmlRoutes(app)
    xmlRoutes(app)
    jsonRoutes(app)
}
