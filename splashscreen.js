import React, {useEffect,useState} from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const image = require('../images/splash.png');

export default function SplashScreen({ navigation }){

    const [value, setValue] = useState('value');
        const keyAsync = 'UserData'; // name async
        useEffect(() => {
            getSession();
        }, []);
        const getSession = () => {
            try {
                AsyncStorage.getItem(keyAsync)
                    .then(value => {
                        if (value != null) {
                            const refreshIntervalId  = setInterval(() => {
                                navigation.replace("HOME");
                                clearInterval(refreshIntervalId)
                            }, 1800);
                        }else{
                            const refreshIntervalId  = setInterval(() => {
                                navigation.replace("LOGIN");
                                clearInterval(refreshIntervalId)
                            }, 1800);
                        }
                    })
            } catch (error) {
                console.log(error);
            }
        }
    return(
    <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}/>
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});


