import React from 'react';
import { withNavigation } from 'react-navigation';
import {
  Header,
  Left, Body, Right,
  Button, Icon, Title
} from 'native-base';

const HeaderView = (props) => (
  <Header>
    <Left />
    <Body>
      <Title>Settings</Title>
    </Body>
    <Right>
      <Button transparent onPress={() => props.navigation.goBack()}>
        <Icon name="ios-close" />
      </Button>
    </Right>
  </Header>
)

export default withNavigation(HeaderView)
