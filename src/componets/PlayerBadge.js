import React from 'react'
// import styles from '../styles/PlayerBadge.module.scss'
import '../styles/PlayerBadge.scss'
const PlayerBadge = (props) => {
    return (
        <button className="playerBadge">{props.value}</button>
    );
}

export default PlayerBadge