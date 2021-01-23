import {ExpressoRequest} from "expresso";
import {Component, h} from "preact";
import {DemoLayout} from "../layout/DemoLayout";

export class DemoHomepage extends Component<{ req: ExpressoRequest }> {
    render() {
        const {req} = this.props;
        return <DemoLayout>
            <style>{"h1 { font-weight: bold; }"}</style>
            <div class="container">
                <div class="columns is-centered">
                    <div class="column is-two-thirds is-full-mobile">
                        <div class="mt-5 box">
                            <section class="section p-4">
                                <div class="has-text-centered">
                                    <h1 class="is-size-2">Expresso Example App</h1>
                                    <p>🎉 Congrats &mdash; your Expresso app is running! ✨</p>
                                    <hr/>

                                    <label class="label">Start leveraging the power of...</label>
                                    <div class="columns is-multiline">
                                        {[
                                            "Express",
                                            "TypeScript",
                                            "TypeORM",
                                            "...and more!"
                                        ].map(s => <div class="column is-3 is-6 mobile">
                                            <div class="box"><strong class="is-size-4">{s}</strong></div>
                                        </div>)}
                                    </div>

                                    <hr/>
                                    <small>Rendered this page in {(+(new Date) - +req.at)}ms</small>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </DemoLayout>
    }
}
