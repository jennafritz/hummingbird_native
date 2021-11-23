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
        borderWidth: 0.5,
        borderColor: colors.lightPurple,
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
        textAlign: 'center',    
    },
    button: {
        borderRadius: 8,
        backgroundColor: colors.lightBlue,
        margin: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
        borderBottomWidth: Platform.OS === 'android' ? 2 : 0,
        borderColor: 'rgba(156, 156, 156, 0.7)',
        borderRightWidth: 1
    },
    nextButton: {
        borderRadius: 8,
        marginTop: 25,
        width: screen.width * .5,
        backgroundColor: colors.lightPurple,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
        borderBottomWidth: Platform.OS === 'android' ? 2 : 0,
        borderColor: 'rgba(156, 156, 156, 0.7)',
        borderRightWidth: 1
    },
    selectedButton: {
        // borderColor: colors.color,
        // borderWidth: 2,
        // borderStyle: 'solid',
        borderRadius: 8,
        margin: 25,
        backgroundColor: colors.darkBlue,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
        color: colors.color,
        borderBottomWidth: Platform.OS === 'android' ? 2 : 0,
        borderColor: 'rgba(156, 156, 156, 0.7)',
        borderRightWidth: 1
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
        backgroundColor: colors.offWhite,
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
        elevation: 7,
        minWidth: screen.width * .75,
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
        borderRadius: 8,
        backgroundColor:colors.lightBlue,
        margin: 0,
        width: screen.width * 0.75,
        paddingVertical: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
        borderBottomWidth: Platform.OS === 'android' ? 2 : 0,
        borderColor: 'rgba(156, 156, 156, 0.7)',
        borderRightWidth: 1
      },
      iconStyle: {
        color: colors.color,
        padding: 10
      },
    
      iconContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      },

      iconButton: {
        borderRadius: 8,
        backgroundColor: colors.lightBlue,
        margin: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
        borderBottomWidth: Platform.OS === 'android' ? 2 : 0,
        borderColor: 'rgba(156, 156, 156, 0.7)',
        borderRightWidth: 1,


        marginBottom: 0,
        minWidth: screen.width * (1/7),
        minHeight: screen.width * (1/7),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.lightPurple,

      }

})

export default styles