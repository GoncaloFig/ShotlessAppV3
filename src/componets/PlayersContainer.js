import React from 'react'
import PlayerBadge from './PlayerBadge';
import { useSelector } from 'react-redux';
import styles from '../styles/PlayersContainer.module.scss'

const PlayersContainer = ({handleOpenEditPlayers}) => {

    const players = useSelector(state => state.player.players);
    //const [players, setPlayers] = useState(props.players)

    const handleLoadPlayers = players.map((playerItem, index) =>
        <PlayerBadge data-key={playerItem.id} value={playerItem.name}/>
    );

    return (
        <div className={styles.playersContainer}>
            <div className={styles.playersListContainer}>
                <div className={styles.playersListOverflow}>
                    {/* <PlayerBtn/> */}
                    {players.length > 0 ? (
                        handleLoadPlayers
                    ) : (
                    <div className={styles.noPlayersDiv}>
                        <p>You need to add some players</p>
                    </div>
                    )}
                </div>
            </div>
            <div className={styles.addPlayerContainer}>
                {/* <button onClick={function(){ openEditPlayers()}} className={styles.addPlayerBtn}><FaPlus/></button> */}
                <button onClick={function(){ handleOpenEditPlayers()}} className={styles.addPlayerBtn}>Add</button>
            </div>
        </div>
    )
}

export default PlayersContainer
