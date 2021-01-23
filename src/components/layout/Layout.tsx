import {Component, h, VNode} from "preact";

interface Props {
    title?: string;
    titleSuffix?: string;
}

export class Layout extends Component<Props> {
    render(): VNode {
        const {title, titleSuffix = "Expresso Framework"} = this.props;
        return <html lang="en">
        <head>
            <title>{title ? title + ` | ` : ''}{titleSuffix}</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="description" content="Welcome to the demo of the expresso framework"/>
        </head>
        <body style={{backgroundColor: '#333', color: '#fff'}}>{this.props.children}</body>
        </html>
    }
}
