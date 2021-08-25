import React from 'react'

export const GiftGridItem = ({id,title,gif}) => {

    return (
        <div key={id} className="card animate__animated animate__rotateIn ">
            <img src={gif} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}
