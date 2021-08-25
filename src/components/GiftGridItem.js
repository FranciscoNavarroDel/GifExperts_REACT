import React from 'react'
import PropTypes from 'prop-types'

export const GiftGridItem = ({id,title,gif}) => {

    return (
        <div key={id} className="card animate__animated animate__rotateIn ">
            <img src={gif} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}

GiftGridItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
}
