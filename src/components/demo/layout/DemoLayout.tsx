import {Component, h} from "preact";

export class DemoLayout extends Component {
    render() {
        return <html lang="en">
        <head>
            <title>Expresso Example Application</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"/>
        </head>
        <body>{this.props.children}</body>
        </html>
    }
}
