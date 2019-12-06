import React, { Component } from 'react';
import { View, Button, StyleSheet, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
//import { SwipeRow } from 'react-native-swipe-list-view';
import { TouchableOpacity } from 'react-native-gesture-handler';

class ItemNews extends Component {
    static propTypes = {
        // onDelete: PropTypes.func.isRequired,
        // city: PropTypes.any.isRequired
        displayDetailForNews: PropTypes.func.isRequired,
        news: PropTypes.any.isRequired
    }

    state = {}


    render() {
        return (
   
            <TouchableOpacity
                style={styles.main_container}
                onPress={() => this.props.displayDetailForNews(this.props.news)}>
                <Image
                    style={styles.image}
                    source={{ uri: this.props.news.urlToImage }}
                />
                <View style={styles.content_container}>
                    <View style={styles.header_container}>
                        <Text style={styles.title_text}>{this.props.news.title}</Text>
                        <Text style={styles.brand_text}>{this.props.news.source.name}</Text>
                    </View>
                    <View style={styles.description_container}>
                        <Text style={styles.description_text} numberOfLines={6}>{this.props.news.description}</Text>
                        {/* La propriété numberOfLines permet de couper un texte si celui-ci est trop long, il suffit de définir un nombre maximum de ligne */}
                    </View>
                    <View style={styles.date_container}>
                        <Text style={styles.date_text}>{this.props.news.publishedAt}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

export default ItemNews;

const styles = StyleSheet.create({
    standaloneRowFront: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        justifyContent: 'center',
        height: 80,
    },
    standaloneRowBack: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    backTextWhite: {
        color: '#FFF',
    },
    main_container: {
        height: 190,
        backgroundColor: '#CCC',
        flexDirection: 'row'
    },
    image: {
        width: 120,
        height: 180,
        margin: 5,
    },
    content_container: {
        flex: 1,
        margin: 5
    },
    header_container: {
        flex: 3,
        flexDirection: 'row'
    },
    title_text: {
        fontWeight: 'normal',
        fontSize: 15,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5
    },
    brand_text: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#666666'
    },
    description_container: {
        flex: 7
    },
    description_text: {
        fontStyle: 'italic',
        color: '#666666'
    },
    date_container: {
        flex: 1
    },
    date_text: {
        textAlign: 'right',
        fontSize: 14
    }
});