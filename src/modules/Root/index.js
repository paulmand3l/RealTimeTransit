import {
  createAppContainer,
  createStackNavigator
} from 'react-navigation'
import Main from '../Main';
import Settings from '../Settings';

const Root = createStackNavigator({
  Main,
  Settings,
}, {
  mode: 'modal',
  headerMode: 'none',
});

export default createAppContainer(Root);
