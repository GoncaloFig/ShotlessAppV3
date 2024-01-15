import React from 'react'
import styles from '../styles/PlayerBadge.module.scss'
const PlayerBadge = (props) => {
    return (
        <button className={styles.playerBadge}>{props.value}</button>
    );
}

export default PlayerBadge