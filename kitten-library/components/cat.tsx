import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Cat extends React.Component<{ url: string }> {
    render() {
        return (<Image source={{ uri: this.props.url }} />)
    }
}