import React, { Component } from 'react'
import NewsService from '../service/NewsService'
import { StyleSheet, Text, View, SafeAreaView, Platform, Image, FlatList } from 'react-native'
import {AsyncStorage} from 'react-native'
import Loading from '../components/Loading'
import ItemNews from '../components/ItemNews'


export default class HomeScreen extends Component {

    serv = new NewsService()
    state = {data:null}


    componentDidMount(){
        const t = this.serv.getLastNewsbyCategoryAndCountry("business", "fr").then(resp => {
            this.setState({data: resp})
            console.log(this.state.data)
        })
    }
    
    
    render() {        
        return (
            <View style={{ flex: 1 }}>
                {this.state.data ? (
                    <>
                        <FlatList
                            data={this.state.data.articles}
                            keyExtractor={(item) => item.title}
                            renderItem={({ item }) => <ItemNews news={item} displayDetailForNews={this._displayDetailForNews} />}
                        />
                    </>
                ) : (<Loading displayColor="orange">
                    <Image style={{ width: 80, height: 80 }} source={{ uri: `http://openweathermap.org/img/wn/09d.icon}@2x.png` }} />
                </Loading>)
                }
            </View>

        )
    }
}

const matchStyles = StyleSheet.create({
    W: {
        backgroundColor: 'lightgreen',
    },
    D: {
        backgroundColor: 'moccasin',
    },
    L: {
        backgroundColor: 'tomato',
    }
});