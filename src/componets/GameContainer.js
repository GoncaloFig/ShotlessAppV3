import React from 'react'
import GameBtnContainer from './GameBtnContainer'
import styles from '../styles/GameContainer.module.scss'
import { useState } from 'react'

const GameContainer = () => {

    const [goBtnVisible, setGoBtnVisible] = useState(true);

    return (
        <div className={styles.gameContainer}>
            <h1 className={styles.shotlessTitle}>Shotless</h1>
            <GameBtnContainer goBtnVisible={goBtnVisible} setGoBtnVisible={setGoBtnVisible}/>
        </div>
    )
}

export default GameContainer