import AsyncStorage from "@react-native-async-storage/async-storage"

const deviceStorage = {

  async storeData (key, value) {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (e) {
      console.log(e)
    }
  }

  // const getToken = async () => {
  //     try {
  //       const value = await AsyncStorage.getItem('token')
  //       if(value !== null) {
  //         return value
  //       }
  //     } catch(e) {
  //         // tbd
  //     }
  // }

}


export default getToken