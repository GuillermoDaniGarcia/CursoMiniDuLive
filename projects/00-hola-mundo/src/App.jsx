/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'esthermn04',
        name: 'esthermarquez_',
        isFollowing: true
    },
    {
        userName: 'FerlainL',
        name: 'ferlain',
        isFollowing: false
    }
]

export function App(){
    return (
        <section className="App">
            {
                users.map(({ userName, name, isFollowing}) =>(
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            name={name}
                            initialIsFollowing={isFollowing}
                        >
                        </TwitterFollowCard>
                    ))
            }
        </section>
    )
}