import styles from '../styles/GameContainer.module.scss'
import useShotlessLoser from '../hooks/useShotlessLoser'
import CountDownContainer from './CountDownContainer'

const GameBtnContainer = ({goBtnVisible, setGoBtnVisible}) => {

    const {shotlessLoser, handleDrawName} = useShotlessLoser()

    const handleClickToStartDraw = () => {
        setGoBtnVisible(false)
    }

    const handleClickOnWinner = () => {
        setGoBtnVisible(true)
    }
    

    return (
        <div className={styles.gameBtnContainer}>
            {goBtnVisible ? ( <button className={styles.drawBtn} onClick={() => {handleClickToStartDraw(); handleDrawName()}}>GO</button> ) : <CountDownContainer shotlessLoser={shotlessLoser} handleClickOnWinner={handleClickOnWinner}/>}
        </div>
    )
}

export default GameBtnContainer