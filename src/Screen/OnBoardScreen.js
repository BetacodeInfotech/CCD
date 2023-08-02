import React from 'react';
import { View, StyleSheet, Text, ImageBackground, StatusBar, useWindowDimensions } from 'react-native';
import Btn from '../Components/GoogleButton';

// 7.useWindowdimension insead of "height%".

const OnBoardScreen = (props) => {

    // const {height, width, scale, fontScale} = useWindowDimensions();
    return (
        <View style={styles.background}>
            <StatusBar backgroundColor={'transparent'} translucent={true} />
            <ImageBackground source={require("../Assets/Images/screen_background.jpg")} style={styles.backgroundImage} />
            <View style={styles.imagePosition}>
                <Text style={styles.Header}>
                    Coffee so good, your taste buds will love it.
                </Text>
                <Text style={styles.body}>
                    The best grain, the finest roast, the powerful flavor.
                </Text>
                <Btn Press={() => { props.navigation.navigate("HomeScreen") }} />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({

    background: {
        backgroundColor: 'black',
        height: '100%',
    },

    backgroundImage: {
        height: '80%',
    },

    imagePosition: {
        position: 'absolute',
        marginVertical: 400,
    },

    Header: {
        fontWeight: 'bold',
        fontSize: 45,
        color: 'white',
        textAlign: 'center',
        paddingTop: 95,
    },

    body: {
        fontSize: 17,
        marginHorizontal: 30,
        color: '#fffaf0',
        textAlign: 'center',
        paddingLeft: 15,
        paddingTop: 25,
        paddingBottom: 20,
        fontWeight: '200',
    },

    input: {
        height: 55,
        borderRadius: 8,
        borderColor: '#777',
        paddingTop: 10,
        margin: 10,
        width: 370,
        alignContent: 'center',
        backgroundColor: 'white',
        textAlign: 'center',
        fontSize: 25,
    },
    iconStyle: {
        fontSize: 40,
        marginTop: 30,
        color: 'black',
    },
})

export default OnBoardScreen;