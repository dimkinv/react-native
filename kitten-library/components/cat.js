import * as React from 'react';
import { Image } from 'react-native';
export default class Cat extends React.Component {
    render() {
        return (React.createElement(Image, { source: { uri: this.props.url } }));
    }
}
