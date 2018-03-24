import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Kitten Library</Text>
        <ImageBackground style={styles.container} source={require('./assets/main-screen-logo.jpg')} imageStyle={{ opacity: 0.2 }}>

          <View style={styles.view}>
            <Text>test</Text>
          </View>
          <View>
            <Text>test</Text>
          </View>
          <View>
            <Text>test</Text>
          </View>
          <View>
            <Text>test</Text>
          </View>
        </ImageBackground>
      </View>
    );
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
