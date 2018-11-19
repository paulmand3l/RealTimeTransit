import React from 'react';
import { Picker } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { regions, agenciesByRegion } from './agencyList';

class SettingsScreen extends React.PureComponent {
  render() {
    const pickerItems = regions.map(regionTitle => {
      return (
        <Picker.Item key={regionTitle} label={regionTitle} value={regionTitle} />
      );
    })

    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Settings</Title>
          </Body>
          <Right>
            <Icon name="ios-close" />
          </Right>
        </Header>
        <Picker prompt="Region">
          { pickerItems }
        </Picker>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </Container>
    );
  }
}

export default SettingsScreen
