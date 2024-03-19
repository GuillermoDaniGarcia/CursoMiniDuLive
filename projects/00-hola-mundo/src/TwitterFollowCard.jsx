import {useState} from 'react'
/* eslint-disable no-unused-vars */
import './App.css'
// eslint-disable-next-line react/prop-types, no-unused-vars
export function TwitterFollowCard ({userName, name}){
    const [isFollowing, setIsFollowing]= useState(false)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }
    console.log(isFollowing)
    const imageSrc = `https://unavatar.io/${userName}`
    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-img' alt="El avatar" src={imageSrc} />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}