/** @jsx JSXXML */
import {Expresso, xml} from "expresso";
// noinspection ES6UnusedImports
import {JSXXML} from "jsx-xml";

export const xmlRoutes = (app: Expresso) => {
    app.get('/xml', (req, res) => {
        xml(res, <document>
            <example data="test">
                <name>Jilly Bean</name>
            </example>
        </document>)
    })
}
