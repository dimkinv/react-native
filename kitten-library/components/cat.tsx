import * as React from 'react';
import { StyleSheet, Text, View, Image, ImageURISource } from 'react-native';

export default class Cat extends React.Component<{ source: ImageURISource }> {
    render() {
        return (<Image style={{width: 300, height:300, alignSelf: 'stretch'}} resizeMode="contain" source={this.props.source } />)
    }
}