import {Component, h} from "preact";

export class DemoLayout extends Component {
    render() {
        throw new Error("yikes");
        return <html lang="en">
        <head>
            <title>Expresso Example Application</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="description" content="Welcome to the demo of the expresso framework"/>
        </head>
        <body>{this.props.children}</body>
        </html>
    }
}
