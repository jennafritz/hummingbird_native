import { StyleSheet } from "react-native"
import { color } from "react-native-reanimated"
import colors from "./colors"


const styles = StyleSheet.create({
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
        alignItems: 'center'
    },
})

export default styles