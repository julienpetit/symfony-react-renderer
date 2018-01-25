import React from 'react';
import PropTypes from 'prop-types';

const renderStar = (value, currentValue, onChange) => (
    <span key={`rate-${value}`} onClick={() => onChange(value)}>
        <span
            className="oi"
            style={{fontSize: '30px', color: (value <= currentValue ? '#ff9d00' : '#EEE')}}
            data-glyph="star"
        />
      </span>
);

const RateStars = ({value, onChange}) => (
    <div>
        {(new Array(5)).fill().map((_, i) => renderStar(i + 1, value, onChange))}
    </div>
);

RateStars.propTypes = {
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func,
};

export default RateStars;
