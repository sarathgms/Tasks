import React from 'react';
import PropTypes from 'prop-types';
// native-base
import {Button, Text, Fab } from 'native-base';
import btnStyle from './CustomButtonStyle.js';
import Icon from './../icon/Icon';

const CustomButton = ({ title, size, onPress, cancel, iconName, iconOnly, disabled, transparent, direction, position, children, fab}) => {
    if(iconOnly){
        return(
            <Button
                rounded 
                disabled={disabled}
                onPress={onPress}
                transparent={transparent}
                style={btnStyle.iconBtn}
            >
                <Icon name={iconName} size={size} />
            </Button>
        );
    }
    if(fab){
        return(
            <Fab
                style={btnStyle.customFab}
                direction={direction}
                position={position}
                onPress={onPress}
            >
                <Icon name={iconName} color='#fff' size={size} />
            </Fab>  
        );
    }
    return (
        <Button 
            onPress={onPress} 
            disabled={disabled}
            fullWidth
            transparent={transparent}
            style={[transparent ? btnStyle.trsBtn : btnStyle.btn, disabled ? btnStyle.disabled : null, cancel ? btnStyle.cancel : null]}
        >
            {/* {iconName !== '' && <Icon name={iconName} />} */}
            <Text uppercase={!transparent} style={transparent ? btnStyle.trsBtnTxt : btnStyle.btnTxt}>{title}</Text>
        </Button>
    );
}

CustomButton.propTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func,
    iconName: PropTypes.string,
    iconOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    transparent: PropTypes.bool,
    direction: PropTypes.string,
    position: PropTypes.string,
    fab: PropTypes.bool,
    size: PropTypes.number
};

CustomButton.defaultProps = {
    title: '',
    onPress: () => {},
    iconName: '',
    iconOnly: false,
    disabled: false,
    transparent: false,
    direction: 'up',
    position: 'bottomRight',
    fab: false,
    size: 30
};

export default CustomButton;