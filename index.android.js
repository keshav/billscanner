/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, Button, StyleSheet, Text, View} from 'react-native';
import Camera from 'react-native-camera';


export default class BillScanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCamera: false
    };
    this.captureClick = this.captureClick.bind(this);
  }

  captureClick() {
    this.setState({showCamera: true});
  }

  render() {
    return (
      <View style={{height: 600, width: 400}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.welcome}>
            Bill Scanner
          </Text>
          <Button onPress={this.captureClick} title='Capture Bill'/>
        </View>


        <View style={styles.container}>
          {
            this.state.showCamera ?
              <Camera
                ref={(cam) => {
                  this.camera = cam;
                }}
                style={styles.preview}
                aspect={Camera.constants.Aspect.fill}>
                <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
              </Camera>
              : null
          }
        </View>

      </View>
    );
  }

  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#F5FCFF',
  // },
  // welcome: {
  //   fontSize: 20,
  //   textAlign: 'center',
  //   margin: 10,
  // },
  // instructions: {
  //   textAlign: 'center',
  //   color: '#333333',
  //   marginBottom: 5,
  // },
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 400,
    width: 400,
  },

  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

AppRegistry.registerComponent('BillScanner', () => BillScanner);
