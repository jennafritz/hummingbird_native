import { View, Text, TouchableOpacity, TextInput, Modal, Dimensions} from 'react-native'
import React from 'react'
import styles from '../constants/styles'
import { useState } from 'react'
import { createGame, savePassStyle, saveTurnStyle, saveTurnCount } from '../config/Reducers/GamesReducer'
import { useDispatch, useSelector } from 'react-redux'
import { createUserGames } from '../config/Reducers/UserGamesReducer'
import TurnForm from '../components/TurnForm'
import { AntDesign } from '@expo/vector-icons'
import colors from '../constants/colors'
import {Feather} from '@expo/vector-icons'


const screen = Dimensions.get("window")

const gameStyleButton = {
    ...styles.button,
    width: screen.width * 0.6,
    margin: screen.height * .02
}

const gameStyleButtonText = {
    ...styles.buttonText,
    fontSize: 20
}

const selectedGameStyleButton = {
    ...styles.selectedButton,
    width: screen.width * 0.6,
    margin: screen.height * .02
}

const selectedGameStyleButtonText = {
    ...styles.selectedButtonText,
    fontSize: 20,
    color: "#e6eeff"
}

const gameNameInputStyle = {
    ...styles.input,
    // borderWidth: 2,
    width: screen.width * 0.6,
    margin: screen.height * .02,
    backgroundColor: colors.offWhite
}

const sectionViewStyle = {
    marginVertical: screen.height * 0.015,
    width: '100%',
    display: 'flex',
    alignItems: 'center'
}

const questionStyle = {
    position: 'absolute',
    bottom: 5,
    right: -30,
    color: colors.color
}

const xStyle = {
    position: 'absolute',
    top: 2,
    right: 2,
    paddingTop: 2,
    paddingRight: 2,
    zIndex: 1,
    color: colors.color
}

export default function GameStyleSetupScreen({ navigation }) {
    
    
    const dispatch = useDispatch()
    const [gameName, setGameName] = useState("")
    const [turnInput, setTurnInput] = useState(undefined)
    const [passStyle, setPassStyle] = useState(undefined)
    const [turnStyle, setTurnStyle] = useState(undefined)
    const [showPassingOptions, setShowPassingOptions] = useState(false)
    const [showTurnOptions, setShowTurnOptions] = useState(false)
    const [showInfo, setShowInfo] = useState(false)
    const [modalInfo, setModalInfo] = useState(undefined)

    const players = useSelector(state => state.players.currentPlayers)

    const passOptions = {
        "winner":`The Winner\nIt Takes All`,
        "circle":`What Goes Around...\nComes Around`
    }

    const turnOptions = {
        "countdown":`The Final\nCountdown`,
        "pointLimit":`Point\nLimit`,
        "zen":`Zen\nMode`
    }

    const modalTextOptions = {
        "pass": "Passing Options Explanation",
        "turn": "Game Duration Options Explanation"
    }

    // create function that takes in setPassStyle or SetTurnStyle, a style option, and either setShowPassingOptions or setShowTurnOptions -> call on every onPress and pass in correct parameters

    return (
        <View style = {styles.container}>
            <View style={{...styles.contentContainer, width: '100%'}}>
                <Text style = {styles.pageHeaderText}>Set Up Game</Text>

                <View style={sectionViewStyle}>
                        <Text style = {styles.pageSubHeaderText}>Name Your Game</Text>
                        <TextInput placeholder="Name" style={gameNameInputStyle} value={gameName}  onChangeText={setGameName} defaultValue={"Set Game Name"} />
                </View>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showInfo}
                    onRequestClose={() => setShowInfo(false)}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView} >
                        <Feather style={xStyle} name="x" size={20} onPress = {() => setShowInfo(false)} />
                            <Text>{modalInfo ? modalTextOptions[modalInfo] : null}</Text>
                        </View>
                    </View>
                </Modal>

                <View style={sectionViewStyle}>
                    <View style={{width: '100%'}}>
                        <View style={{alignSelf: 'center'}}>
                            <Text style = {styles.pageSubHeaderText}>Choose Passing Style</Text>
                            <AntDesign 
                                name="questioncircleo" 
                                size={20} color="black" 
                                style={questionStyle} 
                                onPress={() => {
                                    setModalInfo("pass")
                                    setShowInfo(true)
                                }}
                            />
                        </View>
                    </View>

                    <TouchableOpacity 
                        onPress= {() => setShowPassingOptions(true)}
                        style={gameStyleButton}
                    >
                        <Text
                            style={gameStyleButtonText}
                        >
                            {passStyle ? passOptions[passStyle] : "Click to\nSelect"}
                        </Text>
                    </TouchableOpacity>
                    
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={showPassingOptions}
                        onRequestClose={() => setShowPassingOptions(false)}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView} >
                                <TouchableOpacity style = {passStyle === "winner" ? selectedGameStyleButton : gameStyleButton} onPress={() => {
                                    setPassStyle("winner")
                                    setShowPassingOptions(false)
                                    }}>
                                    <Text style = {gameStyleButtonText} >{`The Winner\nTakes It All`}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style = {passStyle === "circle" ? selectedGameStyleButton : gameStyleButton} onPress={() => {
                                    setPassStyle("circle")
                                    setShowPassingOptions(false)
                                    }}>
                                    <Text style = {gameStyleButtonText}>{`What Goes Around...\nComes Around`}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </View>                    


                
                <View style={sectionViewStyle}>    
                    <View style={{width: '100%'}}>
                        <View style={{alignSelf: 'center'}}>
                            <Text style = {styles.pageSubHeaderText}>Define Game Duration</Text>
                            <AntDesign 
                            name="questioncircleo" 
                            size={20} 
                            color="black" 
                            style={questionStyle} 
                            onPress={() => {
                                setModalInfo("turn")
                                setShowInfo(true)
                            }}
                            />
                        </View>
                    </View>                

                    <TouchableOpacity 
                        onPress= {() => setShowTurnOptions(true)}
                        style={gameStyleButton}
                    >
                        <Text
                            style={gameStyleButtonText}
                        >
                            {turnStyle ? turnOptions[turnStyle] : "Click to\nSelect"}
                        </Text>
                    </TouchableOpacity>

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={showTurnOptions}
                        onRequestClose={() => setShowTurnOptions(false)}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView} >
                                {turnStyle === "defineCountdown"
                                ? 
                                <TurnForm 
                                    setTurnInput = {setTurnInput}
                                    setTurnStyle = {setTurnStyle}
                                    setShowTurnOptions = {setShowTurnOptions}
                                />
                                :
                                <>
                                    <TouchableOpacity style = {turnStyle === "countdown" ? selectedGameStyleButton : gameStyleButton} onPress={() => {
                                        setTurnStyle("defineCountdown")
                                        }}>
                                        <Text style = {gameStyleButtonText}>{"The Final\nCountdown"}</Text>
                                    </TouchableOpacity>
                                    
                                    <TouchableOpacity style = {turnStyle === "pointLimit" ? selectedGameStyleButton : gameStyleButton} onPress={() => {
                                        setTurnStyle("pointLimit")
                                        setShowTurnOptions(false)
                                        }}>
                                        <Text style = {gameStyleButtonText}>{"Point\nLimit"}</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style = {turnStyle ==="zen" ? selectedGameStyleButton : gameStyleButton} onPress={() => {
                                        setTurnStyle("zen")
                                        setShowTurnOptions(false)
                                        }}>
                                        <Text style = {gameStyleButtonText}>{"Zen\nMode"}</Text>
                                    </TouchableOpacity>
                                </>
                                }
                            </View>
                        </View>
                    </Modal>
                </View>

                <TouchableOpacity style = {styles.nextButton} onPress = {() => {
                    dispatch(savePassStyle(passStyle))
                    dispatch(saveTurnStyle(turnStyle))
                    dispatch(createGame(gameName))
                    .then((response) => {
                        let gameObj = response.payload
                        dispatch(createUserGames({gameId: gameObj.id, playersArray: players}))
                        .then(() => navigation.push("GamePlayPassing"))
                    })
                    dispatch(saveTurnCount(parseInt(turnInput, 10)))
                }}>
                    <Text style = {styles.buttonText}>
                        Start Game
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}