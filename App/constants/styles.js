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
    text: {
        color: colors.color
    },
    input: {
        padding: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: colors.color,
        margin: 5,
        color: colors.color
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.backgroundColor
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: screen.height * .1
    },
    buttonText: {
        fontSize: 25,
        color: colors.color,
        padding: 5,
        textAlign: 'center'
    },
    button: {
        borderColor: colors.color,
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 8,
        margin: 25
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
    }

})

export default styles