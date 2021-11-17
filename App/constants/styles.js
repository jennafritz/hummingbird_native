import { StyleSheet } from "react-native"
import { color } from "react-native-reanimated"
import colors from "./colors"
import { Dimensions } from "react-native"

const screen = Dimensions.get("window")

const styles = StyleSheet.create({
    logo: {
        resizeMode: 'contain',
        height: '20%',
        marginTop: 75,
        marginBottom: 50
    },
    titleText: {
        fontSize: 40,
        color: colors.color,
        marginTop: 40,
        marginBottom: 20,
        textAlign: 'center'
    },
    subHeaderText: {
        fontSize: 35,
        color: colors.color,
        marginTop: 40,
        marginBottom: 20,
        textAlign: 'center'
    },
    pageHeaderText: {
        fontSize: 30,
        color: colors.color,
        textAlign: 'center',
        marginBottom: screen.height * .025
    },
    pageSubHeaderText: {
        fontSize: 25,
        color: colors.color,
        textAlign: 'center',
    },
    text: {
        color: colors.color
    },
    input: {
        padding: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: colors.color,
        borderRadius: 8,
        margin: 5,
        color: colors.color,
        width: 270,
        textAlign: 'center'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.backgroundColor
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: screen.height * .1
    },
    buttonText: {
        fontSize: 25,
        color: colors.color,
        padding: 5,
        textAlign: 'center',    },
    button: {
        borderColor: colors.color,
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 8,
        margin: 25
    },
    nextButton: {
        borderColor: colors.color,
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 8,
        marginTop: 25,
        width: screen.width * .5
    },
    selectedButton: {
        borderColor: colors.color,
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 8,
        margin: 25,
        backgroundColor: colors.color,
    }, 
    selectedButtonText: {
        fontSize: 25,
        color: colors.backgroundColor,
        padding: 5,
        textAlign: 'center'
    },
    mainContentContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: screen.height * .025,
        // borderColor: colors.color,
        // borderWidth: 2,
        // borderStyle: 'solid',
    },
    loginOrRegister: {
        display: 'flex',
        flexDirection: 'row'
    },
    modalView: {
        margin: 20,
        backgroundColor: "#e6eeff",
        borderRadius: 10,
        paddingVertical: 35,
        paddingHorizontal: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        minWidth: screen.width * .75
      },
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      playerComponentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.backgroundColor,
        width: screen.width * .5,
        margin: 5
      },
      songOptionButton: {
        borderColor: colors.color,
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 8,
        margin: 0,
        width: screen.width * 0.75,
        // maxHeight: screen.height * 0.15,
        // overflow: 'scroll',
        paddingVertical: 3
      }

})

export default styles