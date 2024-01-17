// import styles from '../styles/GameContainer.module.scss'
import '../styles/GameContainer.scss'
import useShotlessLoser from '../hooks/useShotlessLoser'
import CountDownContainer from './CountDownContainer'
import React from 'react'
import { connect } from 'react-redux'

const GameBtnContainer = ({goBtnVisible, setGoBtnVisible, players}) => {

    const {shotlessLoser, handleDrawName} = useShotlessLoser()

    const handleClickToStartDraw = () => {
        setGoBtnVisible(false)
    }

    const handleClickOnWinner = () => {
        setGoBtnVisible(true)
    }
    

    return (
        <div className="gameBtnContainer">
            {goBtnVisible ? ( <button className={`drawBtn ${players.length === 0 ? "disabledGoButton" : ""}`} disabled={players.length === 0}onClick={() => {handleClickToStartDraw(); handleDrawName()}}>GO</button> ) : <CountDownContainer shotlessLoser={shotlessLoser} handleClickOnWinner={handleClickOnWinner}/>}
        </div>
        // <div className={styles.gameBtnContainer}>
        //     {goBtnVisible ? ( <button className={styles.drawBtn} onClick={() => {handleClickToStartDraw(); handleDrawName()}}>GO</button> ) : <CountDownContainer shotlessLoser={shotlessLoser} handleClickOnWinner={handleClickOnWinner}/>}
        // </div>
    )
}

const mapStateToProps = (state) => {
    return {
        players : state.player.players
    }
}

export default connect(mapStateToProps )(GameBtnContainer)