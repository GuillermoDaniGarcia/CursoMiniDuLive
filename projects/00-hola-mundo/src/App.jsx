import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App(){
    return (
        <section className="App">
            <TwitterFollowCard
                isFollowing
                userName="esthermn04"
                name="esthermarquez_"
            />

            <TwitterFollowCard
                isFollowing = {false}
                userName="Alex__Fearnley"
                name="Aleeee"
            />

            <TwitterFollowCard
                isFollowing
                userName="FerlainL"
                name="ferlain"
            />
        </section>
    )
}