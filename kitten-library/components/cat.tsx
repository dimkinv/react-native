import * as React from 'react';
import { StyleSheet, Text, View, Image, ImageURISource } from 'react-native';

export default class Cat extends React.Component<{ source: ImageURISource }> {
    render() {
        return (<Image source={this.props.source } />)
    }
}