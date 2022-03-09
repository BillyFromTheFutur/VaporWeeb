import { Text, View } from 'react-native'
import React, { Component, useState } from 'react'
import { AppBar, Button } from 'react95-native';



const MyTabBar = ({ navigation }) => {

    const [activeTab, SetActiveTab] = useState(0)

    return (
        //@ts-ignore
        <AppBar style={{ width: '100%', flex: 1, justifyContent: 'space-evenly', maxHeight: 50 }}>

            {/*@ts-ignore*/}
            <Button primary style={{ width: '30%' }} onPress={() => (navigation.navigate('Home'), SetActiveTab(0))} disabled={activeTab == 0}>Home</Button>
            {/*@ts-ignore*/}
            <Button primary style={{ width: '30%' }} onPress={() => (navigation.navigate('Settings'), SetActiveTab(1))} disabled={activeTab == 1}>Setting</Button>
            {/*@ts-ignore*/}
            <Button primary style={{ width: '30%' }} onPress={() => (navigation.navigate('Settings'), SetActiveTab(2))} disabled={activeTab == 2}>Account</Button>
        </AppBar>



    );
}

export default MyTabBar