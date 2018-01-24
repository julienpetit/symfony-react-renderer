import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { NavLink } from 'react-router-dom';
import { required, length, numericality } from 'redux-form-validators';
import { createRequest } from '../../actions';
import Rate from '../Rate';

class ReviewAdd extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.createRequest(values);
  }

  renderField({
    input, label, type, meta: { touched, error, warning },
  }) {
    return (
      <div className="form-group">
        <label>
          {label}
        </label>
        <div>
          <input
            {...input}
            placeholder={label}
            type={type}
            className={`form-control ${touched && error ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">
            {touched && (
                            (error && <span>{error}</span>) ||
                            (warning && <span>{warning}</span>)
                        )}
          </div>
        </div>
      </div>
    );
  }

  render() {
    const {
      isLoading,
      pristine,
      handleSubmit,
      reset,
      submitting,
    } = this.props;

    return (
      <div>
        {isLoading && (
        <p>Loading...</p>
                )}

        <div className="container p-3">
          <div className="row justify-content-md-center">
            <div className="col-md-6">
              <NavLink to="/reviews">{Translator.trans('review.form.reviews.link')}</NavLink>
              <h1>{Translator.trans('review.form.title')}</h1>
              <form onSubmit={handleSubmit(this.handleSubmit)}>
                <Field
                  name="firstname"
                  component={this.renderField}
                  label={Translator.trans('review.form.firstname.label')}
                  validate={[required(), length({ minimum: 2 })]}
                />

                <Field
                  name="lastname"
                  component={this.renderField}
                  label={Translator.trans('review.form.lastname.label')}
                  validate={[required(), length({ minimum: 2 })]}
                />

                <Field
                  name="note"
                  component={Rate}
                  label={Translator.trans('review.form.note.label')}
                  validate={[required(), numericality({ '>=': 0, '<=': 5 })]}
                />

                <Field
                  name="description"
                  component={this.renderField}
                  label={Translator.trans('review.form.description.label')}
                  className="form-control"
                  validate={[required(), length({ minimum: 2 })]}
                />
                <hr />
                <div>
                  <button type="submit"
                          disabled={pristine || submitting}
                          className="btn btn-success">
                    {Translator.trans('review.form.submit.label')}
                  </button>
                  <button
                    type="button"
                    disabled={pristine || submitting}
                    onClick={reset}
                    className="btn btn-default"
                  >
                    {Translator.trans('review.form.reset.label')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReviewAdd.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  createRequest: PropTypes.func.isRequired,
};

const mapStateToProps = ({ reviews }) => ({
  isLoading: reviews.add.isLoading,
  initialValues: reviews.add.user,
});

const form = reduxForm({
  form: 'review',
})(ReviewAdd);

export default connect(mapStateToProps, { createRequest })(form);
