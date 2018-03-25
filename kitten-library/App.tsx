import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, FlatList } from 'react-native';

import Cat from './components/cat';
export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Kitten Library</Text>
        <ImageBackground style={styles.container} source={require('./assets/main-screen-logo.jpg')} imageStyle={{ opacity: 0.2 }}>
          <FlatList
            data={catsSources}
            renderItem={({ item }) => <Cat source={item} />}
            keyExtractor={keyExtractor}
          />
          </ ImageBackground >
      </View>
        );
      }
    
    }
    
    const keyExtractor = () => Math.random().toString();
const styles = StyleSheet.create({
          container: {
          display: 'flex',
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
    
    const catsSources = [
      require("./assets/images/a1-min.jpg"),
      require("./assets/images/a2-min.jpg"),
      require("./assets/images/a3-min.jpg"),
      require("./assets/images/a4-min.jpg"),
      require("./assets/images/a5-min.jpg"),
      require("./assets/images/a6-min.jpg"),
      require("./assets/images/a7-min.jpg"),
      require("./assets/images/a8-min.jpg"),
      require("./assets/images/a9-min.jpg"),
      require("./assets/images/a10-min.jpg"),
      require("./assets/images/a11-min.jpg"),
      require("./assets/images/a12-min.jpg"),
      require("./assets/images/a13-min.jpg"),
      require("./assets/images/a14-min.jpg"),
      require("./assets/images/a15-min.jpg"),
      require("./assets/images/a16-min.jpg"),
      require("./assets/images/a17-min.jpg"),
      require("./assets/images/a18-min.jpg")
    ]
