import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RateStars from '../RateStars';

class RateForm extends PureComponent {
  constructor(props) {
    super(props);

    this.renderStar = this.renderStar.bind(this);
  }

  renderStar(value, currentValue) {
    const { input: { onChange } } = this.props;

    return (
      <span key={`rate-${value}`} onClick={() => onChange(value)}>
        <span
          className="oi"
          style={{ fontSize: '30px', color: (value <= currentValue ? '#ff9d00' : '#EEE') }}
          data-glyph="star"
        />
      </span>
    );
  }

  render() {
    const { label, input: { value, onChange }, meta: { touched, error, warning } } = this.props;

    return (
      <div className="form-group">
        <label>
          {label}
        </label>
        <div>
          <RateStars value={value} onChange={onChange} />
        </div>
        <div className={`${touched && error ? 'is-invalid' : ''}`}>
          {value && (
          <span>{value} / 5</span>
                    )}
        </div>
        <div className="invalid-feedback d-block">
          {touched && (
                        (error && <span>{error}</span>) ||
                        (warning && <span>{warning}</span>)
                    )}
        </div>
      </div>
    );
  }
}

RateForm.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    value: PropTypes.number.string,
  }),
  label: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
    warning: PropTypes.string,
  }),
};

export default RateForm;
