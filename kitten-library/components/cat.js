import * as React from 'react';
import { Image } from 'react-native';
export default class Cat extends React.Component {
    render() {
        return (React.createElement(Image, { style: { width: 300, height: 300, alignSelf: 'stretch' }, resizeMode: "contain", source: this.props.source }));
    }
}
