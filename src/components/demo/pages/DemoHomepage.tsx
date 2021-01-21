import {Component, h} from "preact";
import {DemoLayout} from "../layout/DemoLayout";

export class DemoHomepage extends Component {
    render() {
        return <DemoLayout>
            <style>{"h1 { font-weight: bold; }"}</style>
            <div class="container">
                <div class="columns is-centered">
                    <div class="column is-half is-full-mobile">
                        <div class="mt-5 box has-text-centered">
                            <h1 class="is-size-1">Expresso Example App</h1>
                            <p>Congrats, you've got an expresso app up and running!</p>
                        </div>
                    </div>
                </div>
            </div>
        </DemoLayout>
    }
}
