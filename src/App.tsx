import React from 'react';

import {Platform, StatusBar, StyleSheet, Text, View} from 'react-native';

export class App extends React.PureComponent {
  public render(): React.ReactNode {
    return (
      <>
        {['ios', 'android'].includes(Platform.OS) ? (
          <StatusBar barStyle="dark-content" />
        ) : null}
        <View style={styles.view}>
          <Text style={styles.text}>Hello, World!</Text>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  text: {
    color: '#000',
    fontSize: 37,
    textAlign: 'center',
  },
});

export default App;
