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
                                    <br/>
                                    <svg width={128} height={128} style="enable-background:new 0 0 256 256;" version="1.1"
                                         viewBox="0 0 256 256" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"
                                         xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <style type="text/css">{`.st0{fill:none;stroke:#FF0000;stroke-miterlimit:10;}`}</style>
                                        <g>
                                            <path d="M240,88V48c0-17.7-14.3-32-32-32H48c-17.7,0-32,14.3-32,32v40c0,17.7,14.3,32,32,32h8.5c0,0.3,0,0.6,0.1,1l23.3,95H24   c-4.4,0-8,3.6-8,8v12c0,2.2,1.8,4,4,4h216c2.2,0,4-1.8,4-4v-12c0-4.4-3.6-8-8-8h-55.9l23.8-95c0.1-0.3,0.1-0.6,0.1-1h8   C225.7,120,240,105.7,240,88z M24,88V48c0-13.2,10.8-24,24-24h160c13.2,0,24,10.8,24,24v40c0,13.2-10.8,24-24,24h-46H94H48   C34.8,112,24,101.2,24,88z M144,141.4l-10,0.6c-3.3,0-6,2.7-6,6s2.7,6,6,6l10,0.6v5.4h-32v-24h32V141.4z M170,144   c0.7,0.3,2,2.4,2,4s-1.3,3.7-2,4l-35.7-2l-0.1,0H134c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2h0.1l0.1,0L170,144z M144,128h-32H98v-8h60v8   H144z M232,232H24v-8h208V232z M168.1,215c-0.1,0.3-0.1,0.6-0.1,1H88c0-0.3,0-0.6-0.1-1l-23.3-95H90v12c0,2.2,1.8,4,4,4h10v24   c0,4.4,3.6,8,8,8h32c4.4,0,8-3.6,8-8v-5l18,1c3.3,0,6-4.7,6-8s-2.7-8-6-8l-18,1v-5h10c2.2,0,4-1.8,4-4v-12h25.9L168.1,215z"/>
                                            <path d="M128,104c17.7,0,32-14.3,32-32c0-17.7-14.3-32-32-32c-17.7,0-32,14.3-32,32C96,89.7,110.3,104,128,104z M128,48   c13.2,0,24,10.8,24,24s-10.8,24-24,24s-24-10.8-24-24S114.8,48,128,48z"/>
                                            <path d="M128,63c1.1,0,2-0.9,2-2v-4c0-1.1-0.9-2-2-2s-2,0.9-2,2v4C126,62.1,126.9,63,128,63z"/>
                                            <path d="M137,72c0,1.1,0.9,2,2,2h4c1.1,0,2-0.9,2-2s-0.9-2-2-2h-4C137.9,70,137,70.9,137,72z"/>
                                            <path d="M113,74h4c1.1,0,2-0.9,2-2s-0.9-2-2-2h-4c-1.1,0-2,0.9-2,2S111.9,74,113,74z"/>
                                            <path d="M118.6,65.5c0.4,0.4,0.9,0.6,1.4,0.6s1-0.2,1.4-0.6c0.8-0.8,0.8-2,0-2.8l-2.8-2.8c-0.8-0.8-2-0.8-2.8,0   c-0.8,0.8-0.8,2,0,2.8L118.6,65.5z"/>
                                            <path d="M137.4,78.5c-0.8-0.8-2-0.8-2.8,0c-0.8,0.8-0.8,2,0,2.8l2.8,2.8c0.4,0.4,0.9,0.6,1.4,0.6s1-0.2,1.4-0.6   c0.8-0.8,0.8-2,0-2.8L137.4,78.5z"/>
                                            <path d="M118.6,78.5l-2.8,2.8c-0.8,0.8-0.8,2,0,2.8c0.4,0.4,0.9,0.6,1.4,0.6s1-0.2,1.4-0.6l2.8-2.8c0.8-0.8,0.8-2,0-2.8   C120.7,77.8,119.4,77.8,118.6,78.5z"/>
                                            <path d="M128,76c2.2,0,4-1.8,4-4c0-0.4-0.1-0.7-0.1-1l8.3-8.3c0.8-0.8,0.8-2,0-2.8c-0.8-0.8-2-0.8-2.8,0l-8.3,8.3   c-0.3-0.1-0.7-0.1-1-0.1c-2.2,0-4,1.8-4,4C124,74.2,125.8,76,128,76z"/>
                                            <path d="M180,80h8c2.2,0,4-1.8,4-4v-8c0-2.2-1.8-4-4-4h-8c-2.2,0-4,1.8-4,4v8C176,78.2,177.8,80,180,80z M180,72h8v4h-8V72z"/>
                                            <path d="M204,80h8c2.2,0,4-1.8,4-4v-8c0-2.2-1.8-4-4-4h-8c-2.2,0-4,1.8-4,4v8C200,78.2,201.8,80,204,80z M204,68h8v4h-8V68z"/>
                                            <path d="M128,176c0,0-8,7.6-8,12s3.6,8,8,8s8-3.6,8-8S128,176,128,176z"/>
                                        </g>
                                    </svg>
                                    <br/>
                                    <small>Icon by <a href="#" rel="nofollow">Oliver Pitsch</a></small>
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
        </DemoLayout>
    }
}
