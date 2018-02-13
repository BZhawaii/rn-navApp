import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>
          onPress = { () => navigate('Profile') }> Navigate to Profile
        </Text>
      </View>
    )
  }
}

class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'Profile',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>
          onPress = { () => navigate('Home') }> Navigate to Home
        </Text>
      </View>
    )
  }
}

const NavigationApp = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <NavigationApp />;
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center'
  },
});
