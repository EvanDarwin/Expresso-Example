import {Component, h} from "preact";
import {DemoLayout} from "../layout/DemoLayout";

export class DemoHomepage extends Component {
    render() {
        return <DemoLayout>
            <style>{"h1 { font-weight: bold; }"}</style>
            <div class="container">
                <div class="columns is-centered">
                    <div class="column is-two-thirds is-full-mobile">
                        <div class="mt-5 box">
                            <section class="section p-4">
                                <div class="has-text-centered">
                                    <h1 class="is-size-2">Expresso Example App</h1>
                                    <p>Congrats, you've got an expresso app up and running!</p>
                                </div>
                                <hr/>
                                <label class="label">Get Started With:</label>
                                <ul>
                                    <li>Preact and XML server-side rendering</li>
                                    <li>Asynchronous request handlers</li>
                                    <li>A flexible database ORM</li>
                                </ul>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </DemoLayout>
    }
}
