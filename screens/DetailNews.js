import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import React, { Component } from 'react';


class DetailNews extends Component {

    render() {
        console.log(this.props)
        return (
            <View style={styles.view}>
                <ScrollView style={styles.scrollview}>
                    <Image
                        style={styles.image}
                        source={{ uri: this.props.navigation.state.params.news.urlToImage }}
                    />
                    <Text style={styles.title}>{this.props.navigation.state.params.news.title}</Text>
                    <Text style={styles.description}>{this.props.navigation.state.params.news.description}</Text>
                    <Text style={styles.default}>{this.props.navigation.state.params.news.content}</Text>
                    <Image
                        style={styles.image}
                        source={{ uri: this.props.navigation.state.params.news.urlToImage }}
                    />

                </ScrollView>
            </View>
        )
    }
}

export default DetailNews;

const styles = StyleSheet.create({
    view: {
        flex: 1,
    },
    scrollview: {
        flex: 1
    },
    image: {
        height: 120,
        margin: 5
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        flexWrap: 'wrap',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 10,
        color: '#000000',
        textAlign: 'center'
    },
    description: {
        fontStyle: 'italic',
        color: '#666666',
        margin: 5,
        marginBottom: 15,
        textAlign: 'center'
    },
    default: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        textAlign: 'center'
    }
})
