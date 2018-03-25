"use strict";
import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';
import Cat from './components/cat';
export default class App extends React.Component {
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(Text, { style: styles.header }, "Kitten Library"),
            React.createElement(ImageBackground, { style: styles.container, source: require('./assets/main-screen-logo.jpg'), imageStyle: { opacity: 0.2 } },
                React.createElement(ScrollView, { contentContainerStyle: styles.contentContainer }, catsUrls.map((url, i) => (React.createElement(View, { style: styles.viewItem, key: i },
                    React.createElement(Cat, { url: url }))))))));
    }
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingTop: 30
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    contentContainer: {
        paddingVertical: 20,
    },
    viewItem: {
        padding: 10,
        width: 200,
        height: 200
    },
});
const catsUrls = [
    require("./assets/images/a1.jpg"),
    require("./assets/images/a2.jpg"),
    require("./assets/images/a3.jpg"),
    require("./assets/images/a4.jpg"),
    require("./assets/images/a5.jpg"),
    require("./assets/images/a6.jpg"),
    require("./assets/images/a7.jpg"),
    require("./assets/images/a8.jpg"),
    require("./assets/images/a9.jpg"),
    require("./assets/images/a10.jpg"),
    require("./assets/images/a11.jpg"),
    require("./assets/images/a12.jpg"),
    require("./assets/images/a13.jpg"),
    require("./assets/images/a14.jpg"),
    require("./assets/images/a15.jpg"),
    require("./assets/images/a16.jpg"),
    require("./assets/images/a17.jpg"),
    require("./assets/images/a18.jpg")
];
