import React from 'react';
import { Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { Header, Icon, Divider, Card, ListItem, Button } from "react-native-elements";



const _goBack = () => console.log('Went back');

const _handleSearch = () => console.log('Searching');

const _handleMore = () => console.log('Shown more');



function LinkScreen() {
    return (
        <>
       <Header
                placement="left"   
                leftComponent={{ icon: 'menu', color: 'black' }}
                centerComponent={{ text: '해외', style: { color: 'black' } }}
                rightComponent={{ icon: 'refresh', color: 'black' }}
            />
            <Divider style={{ height: 1, backgroundColor: "#dddddd" }} />
        



        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Link!</Text>
        </View>





        </>
    );
}
 
export default LinkScreen
 
 

