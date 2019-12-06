import React, { Component } from 'react';
import { TextInput, Button, View, AsyncStorage, SafeAreaView, Text, StyleSheet, Platform , FlatList} from 'react-native';
import NewsService from '../service/NewsService';
import CheckBox from 'react-native-checkbox';

export default class SettingsScreen extends Component {
    static navigationOptions = (e) => {
        return {
            title: 'Pick your favorite topics'
        }
    }


    serviceNews = new NewsService();

    state = { categories : [], all_categories : [] }

    componentDidMount(){
    
        this.getCategories2()
        console.log(this.state.categories)
   
    }


    onChangeCB = (checked, category) => {
        console.log('Onchange' + checked + category)
        if (checked){
            categories = this.state.categories
            categories.push(category)
            this.setState({categories: categories})
            this.saveCategories2()
        }else{
            // this.getCategories2()
            // categories = this.state.categories
            // if (categories.include(category)){
            //     index = categories.indexOf(category);
            //     if (index > -1) {
            //         categories.splice(index, 1);
            //     }
            // }
            // this.setState({ categories: categories });
            // this.saveCategories2()
        }
        
        
        
    }

    saveNews2 = async () => {
        news = this.state.read_news
        if (news != null) {
            let data = await AsyncStorage.getItem('READ_NEWS');
            let tab = [];
            if (data != null) {
                tab = JSON.parse(data);
            }
            tab.push(news);
            await AsyncStorage.setItem('READ_NEWS', JSON.stringify(tab));
            //this.props.navigation.goBack();
        } else {
            alert(`Error`);
        }
    }

    saveCategories2 = async () => {
        categories = this.state.categories
        if (categories != null) {
            let tab = [];
            tab.push(categories);
            await AsyncStorage.setItem('CATEGORIES', JSON.stringify(tab));
        } else {
            alert(`Error`);
        }
    }

    
    getCategories2 = async () => {
        let data = await AsyncStorage.getItem('CATEGORIES');
        let tab = [];
        if (data != null) {
            tab = JSON.parse(data);
        }
        this.setState({categories: tab})
    
    }
    getNews2 = async () => {
        let data = await AsyncStorage.getItem('READ_NEWS');
        let tab = [];
        if (data != null) {
            tab = JSON.parse(data);
        }
        this.setState({read_news: tab})
    }
    

    


    render(){
        return (
            <SafeAreaView>
                <Text>  </Text>
                <Text>  </Text>
                <CheckBox label='Business' onChange={(checked) => this.onChangeCB(checked, 'business')}/>
                <CheckBox label='Entertainment' onChange={(checked) => this.onChangeCB(checked, 'entertainment')}/>
                <CheckBox label='Health' onChange={(checked) => this.onChangeCB(checked, 'health')}/>
                <CheckBox label='Sports' onChange={(checked) => this.onChangeCB(checked, 'sports')}/>
                <CheckBox label='General' onChange={(checked) => this.onChangeCB(checked, 'general')}/>
                <CheckBox label='Technology' onChange={(checked) => this.onChangeCB(checked, 'technology')}/>
                <CheckBox label='Science' onChange={(checked) => this.onChangeCB(checked, 'science')}/>
                
            </SafeAreaView>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? 25 : 0,
    },
    center: {
    },

});