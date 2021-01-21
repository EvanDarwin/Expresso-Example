import {Expresso, json} from "expresso";

export const jsonRoutes = (app: Expresso) => {
    app.get('/json', (req, res) => {
        json(res, {
            example: "data",
            test: [1, 2, 3, "a", true, false],
        })
    })
}
