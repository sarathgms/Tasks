import React, { useState } from 'react';
import PropTypes from 'prop-types';
// native-base
import { Item, Input, Label, Form, Textarea, Content, Text } from 'native-base';
// common
import { FieldLevelValidation } from './../validation/FieldLevelValidation';
import inputStyle from './InputFieldStyle.js';

const InputField = ({ big, autoFocus, minLength, name, validate, value, label, placeholder, onChangeText, onBlur, rowspan, secureTextEntry, type, maxLength}) => {
    let required = '';

    if (validate && validate.length > 0) {
        required = validate.some(item => item === 'required') ? 'required' : '';
    }

    const [error, setError] = useState([]);
    const [showError, setShowError] = useState(true);
    
    const handleValidation = (name, data) => {
        let error = FieldLevelValidation(validate, data);
        let temp = error.filter(val => val !== undefined);
        onChangeText(name, data, temp.length > 0);
        setError(temp);
        setShowError(false);
    };

    const onShowError = () => {
        onBlur();
        let error = FieldLevelValidation(validate, value);
        let temp = error.filter(val => val !== undefined);
        setError(temp);
        setShowError(true);
    }


    return (
        <Form style={inputStyle.inputField}>
            {!big &&
                <Label style={inputStyle.label}>
                    {label}
                    {validate && validate.length > 0 && validate.includes('required') && <Text style={inputStyle.astricks}> *</Text>}
                </Label>
            }
            <Item stackedLabel regular style={[inputStyle.inputItem, inputStyle.fieldBorder, big ? inputStyle.singleBdr : null]}>
                <Input
                    keyboardType={type}
                    style={[inputStyle.fieldFont, big ? inputStyle.bigFont : null]}
                    name={name}
                    value={value}
                    autoFocus={autoFocus}
                    placeholder={placeholder}
                    placeholderTextColor='rgba(0,0,0,0.2)'
                    onChangeText={(value) => handleValidation(name, value)} 
                    onBlur={onShowError}
                    secureTextEntry={secureTextEntry}
                    maxLength={maxLength}
                    minLength={minLength}
                />
            </Item>
            {big &&
                <Label style={[inputStyle.label, inputStyle.center]}>
                    {label}
                    {validate && validate.length > 0 && validate.includes('required') && <Text style={inputStyle.astricks}> *</Text>}
                </Label>
            }
            {showError && error.length > 0 && (
                <React.Fragment>
                    {error[0] && <Text style={inputStyle.errorMsg}>{error[0]}</Text>}
                </React.Fragment>
            )}
        </Form>
    );
}

InputField.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    onChangeText: PropTypes.func,
    onBlur: PropTypes.func,
    textarea: PropTypes.bool,
    rowspan: PropTypes.number,
    secureTextEntry: PropTypes.bool,
    type: PropTypes.string,
    maxLength: PropTypes.number,
    big: PropTypes.bool,
    autoFocus: PropTypes.bool,
    validate: PropTypes.instanceOf(Array),
    minLength: PropTypes.number
};

InputField.defaultProps = {
    name:'',
    value:'',
    label: '',
    placeholder: '',
    onChangeText: () => {},
    onBlur: () => {},
    textarea: false,
    rowspan: 4,
    secureTextEntry: false,
    type: null,
    maxLength: null,
    big: false,
    autoFocus: false,
    validate: [],
    minLength: null
};

export default InputField;