import React from 'react';
import { connect } from 'react-redux';
import {
  Content, Form,
  Item, Label, Picker
} from 'native-base';

import { regions } from '../agencyList';

const RegionPickerView = (props) => (
  <Item fixedLabel picker last>
    <Label>Region</Label>
    <Picker
      placeholder="Pick your region"
      onValueChange={title => props.setRegion(title)}
      selectedValue={props.region}>

    { regions.map(title => (
      <Picker.Item key={title} label={title} value={title} />
    ))}
    </Picker>
  </Item>
)

const mapState = state => ({
  region: state.region
})

const mapDispatch = dispatch => ({
  setRegion: (title) => dispatch.region.set(title)
})

const RegionPicker = connect(mapState, mapDispatch)(RegionPickerView)

export default function (props) {
  return (
    <Content>
      <Form>
        <RegionPicker />
      </Form>
    </Content>
  )
}
