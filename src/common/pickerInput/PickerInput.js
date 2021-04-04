import React from 'react';
import PropTypes from 'prop-types';
// native-base
import { Form, Item, Picker, Label } from 'native-base';
// common
import Icon from './../icon/Icon';
import inputStyle from './PickerInputStyle.js';

const PickerInput = ({ name, value, label, placeholder, onValueChange, children }) => {

    return (
        <Form style={inputStyle.PickerInput}>
            <Label style={inputStyle.label}>{label.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</Label>
            <Item style={inputStyle.fieldBorder} picker>
              <Picker
                mode="dropdown"
                style={inputStyle.fieldFont}
                iosIcon={<Icon name="down_arrow" />}
                placeholder={placeholder}
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor='rgba(0,0,0,0.2)'
                selectedValue={value}
                onValueChange={(value) => onValueChange(name, value)}
              >
                {children}
              </Picker>
            </Item>
        </Form>
    );
}

PickerInput.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    onValueChange: PropTypes.func,
    children: PropTypes.instanceOf(Object)
};

PickerInput.defaultProps = {
    name: '',
    value: '',
    label: '',
    placeholder: '',
    onValueChange: () => {},
    children: {}
};

export default PickerInput;