import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App(){
    return (
        <section className="App">
            <TwitterFollowCard
                userName="esthermn04"
                name="esthermarquez_"
            />

            <TwitterFollowCard
                userName="Alex__Fearnley"
                name="Aleeee"
            />

            <TwitterFollowCard
                userName="FerlainL"
                name="ferlain"
            />
        </section>
    )
}