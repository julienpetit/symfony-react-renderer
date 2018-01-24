import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import { NavLink } from 'react-router-dom';
import {required, length} from 'redux-form-validators';
import {createRequest} from '../../actions';

class ReviewAdd extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        this.props.createRequest(values);
    }

    renderField({input, label, type, meta: {touched, error, warning}}) {
        return (
            <div className='form-group'>
                <label>
                    {label}
                </label>
                <div>
                    <input {...input}
                           placeholder={label}
                           type={type}
                           className={`form-control ${touched && error ? 'is-invalid' : ''}`}/>
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
                            <NavLink to='/reviews'>{Translator.trans('review.form.reviews.link')}</NavLink>
                            <h1>{Translator.trans('review.form.title')}</h1>
                            <form onSubmit={handleSubmit(this.handleSubmit)}>
                                <div>
                                    <Field name="firstname"
                                           component={this.renderField}
                                           label={Translator.trans('review.form.firstname.label')}
                                           validate={[required(), length({minimum: 2})]}/>
                                </div>
                                <div>
                                    <Field name="lastname"
                                           component={this.renderField}
                                           label={Translator.trans('review.form.lastname.label')}
                                           validate={[required(), length({minimum: 2})]}/>
                                </div>
                                <div>
                                    <Field name="note"
                                           component={this.renderField}
                                           label={Translator.trans('review.form.note.label')}
                                           validate={[required(), length({minimum: 2})]}/>
                                </div>
                                <div>
                                    <Field name="description"
                                           component={this.renderField}
                                           label={Translator.trans('review.form.description.label')}
                                           className='form-control'
                                           validate={[required(), length({minimum: 2})]}/>
                                </div>
                                <hr/>
                                <div>
                                    <button type="submit" disabled={pristine || submitting} className='btn btn-success'>
                                        {Translator.trans('review.form.submit.label')}
                                    </button>
                                    <button type="button" disabled={pristine || submitting} onClick={reset}
                                            className='btn btn-default'>
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

const mapStateToProps = ({auth, reviews}) => ({
    isLoading: reviews.add.isLoading,
    initialValues: reviews.add.user,
});

const form = reduxForm({
    form: 'review',
})(ReviewAdd);

export default connect(mapStateToProps, {createRequest})(form);
