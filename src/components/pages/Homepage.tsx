import {ExpressoRequest} from "expresso";
import {Component, h, VNode} from "preact";
import {Layout} from "../layout/Layout";

export class Homepage extends Component<{ req: ExpressoRequest }> {
    render(): VNode {
        const {req} = this.props;
        return <Layout>
            <div class="container">
                <div class="columns is-centered">
                    <div class="column is-two-thirds is-full-mobile">
                        <div class="mt-5 box">
                            <section class="section p-4">
                                <div class="has-text-centered">
                                    <h1 style={{fontWeight: 'bold'}} class="is-size-2">Expresso Example App</h1>
                                    <p>🎉 Congrats &mdash; your Expresso app is running! ✨</p>
                                    <br/>
                                    <img src="/img/logo.svg" width={128} height={128} alt="Expresso Logo"/>
                                    <br/>
                                    <small>Icon by <a
                                        href="https://www.iconfinder.com/icons/889361/barista_cafe_coffee_cup_espresso_espresso_machine_machine_icon"
                                        rel="nofollow">Oliver Pitsch</a></small>
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
                                    <small>Rendered this page in {req.currentMs}ms</small>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    }
}
