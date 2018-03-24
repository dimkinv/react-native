import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
export default class App extends React.Component {
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(Text, { style: styles.header }, "Kitten Library"),
            React.createElement(ImageBackground, { style: styles.container, source: require('./assets/main-screen-logo.jpg'), imageStyle: { opacity: 0.2 } },
                React.createElement(View, { style: styles.view },
                    React.createElement(Text, null, "test")),
                React.createElement(View, null,
                    React.createElement(Text, null, "test")),
                React.createElement(View, null,
                    React.createElement(Text, null, "test")),
                React.createElement(View, null,
                    React.createElement(Text, null, "test")))));
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
    view: {
        display: 'flex'
    }
});
