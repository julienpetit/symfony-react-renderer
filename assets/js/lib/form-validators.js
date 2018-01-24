import Validators from 'redux-form-validators';

Object.assign(Validators.messages, {
  email: Translator.trans('validation.form.email'),
  presence: Translator.trans('validation.form.required'),
  tooShort: Translator.trans('validation.form.too_short'),
});
