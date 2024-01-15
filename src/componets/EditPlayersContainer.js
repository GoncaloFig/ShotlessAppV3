import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {addPlayer, removePlayer, changePlayerName} from '../redux'
import { v4 as uuidv4 } from 'uuid'
import styles from '../styles/EditPlayersContainer.module.scss'
import { ImCross, ImArrowLeft2, ImPencil2, ImFloppyDisk  } from "react-icons/im";

const EditPlayersContainer = (props) => {

    const [players, setPlayers] = useState(props.players)
    const [newPlayer, setNewPlayer] = useState({id: null, name: ""})

    const [playerNameInputEnable, setPlayerNameInputEnable] = useState(false);

    const [playerNameChanged, setPlayerNameChanged] = useState("")
    const [isEditingPlayer, setisEditingPlayer] = useState(false)
    
    const handleAddPlayer = () => {
        if(newPlayer.name && newPlayer.name.trim() !== ""){
            const playerToAdd = {...newPlayer, id: uuidv4()}
            console.log(playerToAdd)
            props.onAddPlayer(playerToAdd)
            setNewPlayer({})
            setPlayerNameInputEnable(false)
        }
    }

    const handleRemovePlayer = (playerId) => {
        //console.log(playerId)
        props.onRemovePlayer(playerId)
    }

    const handleInputNameChange = (e) => {
        if(e.target.value.length > 0 ?  setPlayerNameInputEnable(true) : setPlayerNameInputEnable(false));
        setNewPlayer({...newPlayer, name: e.target.value})
    }

    const handleChangeCurrentPlayerName = (playerId) => {
        // to do
        const newName = playerNameChanged
        props.onChangePlayerName(playerId, newName)
        setisEditingPlayer(false)
    }

    const handleClickEditPlayer = () => {
        setisEditingPlayer(true)
    }

    const handleLoadCurrentPlayers = players.length > 0 ? (
        players.map((player) =>
            <div className={styles.playersInputContainer}>
                <input type="text" key={player.id} defaultValue={player.name} onChange={(e) => setPlayerNameChanged(e.target.value)} disabled={!isEditingPlayer}/>
                {!isEditingPlayer ? 
                    <ImPencil2 className={styles.editPlayerIcon} data-key={player.id} onClick={handleClickEditPlayer}/>
                    :
                    <ImFloppyDisk className={styles.saveEditPlayerIcon} data-key={player.id} onClick={() => handleChangeCurrentPlayerName(player.id)}/>
                }
                <ImCross className={styles.deletePlayerIcon} data-key={player.id} onClick={() => handleRemovePlayer(player.id)}/>
            </div>
        ) 
    ) : (
    <div className={styles.noPlayersDiv}>
        <p>You need to add some players</p>
    </div>
    )
    

    useEffect(() => {
        setPlayers(props.players)
    },[props.players])

    return (
        <div className={styles.playersEditContainer}>
            <div className={styles.editTitleContainer}>
                <ImArrowLeft2 className={styles.goBackFromPlayers} onClick={function(){ props.handleOpenEditPlayers()}}/>
                <h1 className={styles.editPlayersTitle}>Edit Players</h1>
            </div>
            <div className={styles.playersEditListContainer}>
                <div className={styles.playersEditListOverflow}>
                    {handleLoadCurrentPlayers}
                    {/* <button onClick={handleAddPlayer}>Add</button> */}
                </div>
                <h3 className={styles.newPlayerTitle}>New Player</h3>
                    <div className={styles.playersNewInputContainer}>
                        <input type="text" maxlength="25" value={newPlayer.name || ''} onChange={handleInputNameChange}/>
                        {/* <input type='text' value={newPlayer.name || ''} onChange={handleInputChange}></input> */}
                        <button className={`${playerNameInputEnable ? styles.savaPlayerBtn : `${styles.savaPlayerBtn} ${styles.disabledButton}`} `} onClick={handleAddPlayer} >Add</button>
                    </div>
                    <br/>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        players : state.player.players
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddPlayer : (value) => {
            dispatch(addPlayer(value))
        },
        onRemovePlayer : (value) => {
            dispatch(removePlayer(value))
        },
        onChangePlayerName : (valueId, valueName) => {
            dispatch(changePlayerName(valueId, valueName))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (EditPlayersContainer)
