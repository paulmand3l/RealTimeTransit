import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

class Main extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text>Main</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Settings')}
          title="Settings"
        />
      </View>
    )
  }
}

export default Main;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
