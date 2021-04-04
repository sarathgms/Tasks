import React from 'react';
import PropTypes from 'prop-types';
import Icons from 'react-native-vector-icons/FontAwesome';

const Icon = ({ name, size, color }) => (
    <Icons name={name} size={size} color={color} />
);

Icon.propTypes = {
    name: PropTypes.string,
    size: PropTypes.number,
    color: PropTypes.string
};

Icon.defaultProps = {
    name: '',
    size: 16,
    color: '#000'
};

export default Icon;