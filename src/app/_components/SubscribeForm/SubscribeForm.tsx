'use client';
import React, { ChangeEventHandler, FormEventHandler, useState } from 'react';
import styles from './SubscribeForm.module.scss';

const validateEmail: (email:string) => boolean = (email) => {
  const regExp = /^[a-zA-Z0-9]+@[a-zA-z]+\.[a-z]{2,}$/
  return regExp.test(email)
}

type IFormValues = {
  fio: string,
  email: string,
  comment: string,
  consentPersonalData: boolean,
}
type IFormErrors = {
  fio: boolean,
  email: boolean,
  comment: boolean,
  consentPersonalData: boolean,
}

const initialFormValues: IFormValues = {
  fio: '',
  email: '',
  comment: '',
  consentPersonalData: false,
}

const initialFormErrors:IFormErrors = {
  fio: false,
  email: false,
  comment: false,
  consentPersonalData: false,
}

const SubscribeForm = () => {
  const [ formValues, setFormValues ] = useState(initialFormValues);
  const [ formErrors, setFormErrors ] = useState(initialFormErrors);

  const handleSubmit:FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const errors:IFormErrors = {
      fio: !formValues.fio,
      email: !formValues.email || !validateEmail(formValues.email), //валидация имейла
      comment: !formValues.comment,
      consentPersonalData: !formValues.consentPersonalData,
    }
    setFormErrors(errors);
    const hasErrors = Object.values(errors).some(error => error);
    if(!hasErrors) {
      alert('Форма отправлена');
    }
  }

  const handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    if(e.target.value) {
      setFormErrors(prev => ({...prev, [e.target.name]: false}));
    }
    setFormValues(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleCheck: ChangeEventHandler<HTMLInputElement> = (e) => {
    if(e.target.checked) {
      setFormErrors(prev => ({...prev, [e.target.name]: false}));
    }
    setFormValues(prev => ({...prev, [e.target.name]: e.target.checked}))
  }

  return (
    <div
      className={styles['subscribe-form']}
    >
      <h2 className={styles['subscribe-form__title']}>Подпишитесь на рассылку</h2>
      <form
        className={styles['subscribe-form__form']}
        onSubmit={handleSubmit}
      >
        <div style={{}}>
          <label htmlFor="fio" className="sr-only">ФИО</label>
          <input
            className={`focusable ${styles['subscribe-form__input']}  ${formErrors.fio ? styles['subscribe-form__input_invalid'] : '' } `}
            name='fio'
            placeholder='ФИО'
            aria-invalid={formErrors.fio}
            value={formValues.fio}
            onChange={handleChange}
          />
          {formErrors.fio ? <span style={{color: '#DF3735', fontSize:"11px"}}>Поле заполнено некорректно</span> : null}
        </div>
        <div>
          <label htmlFor="fio" className="sr-only">E-mail</label>
          <input
            className={`${styles['subscribe-form__input']} focusable ${formErrors.email ? styles['subscribe-form__input_invalid'] : ''}`}
            name='email'
            placeholder='E-mail'
            aria-invalid={formErrors.email}
            value={formValues.email}
            onChange={handleChange}
          />
          {formErrors.email ? <span style={{color: '#DF3735', fontSize:"11px"}}>Поле заполнено некорректно</span> : null}
        </div>
        <div>
          <label htmlFor="fio" className="sr-only">Примечание</label>
          <textarea
            className={`${styles['subscribe-form__textarea']} focusable ${formErrors.comment ? styles['subscribe-form__textarea_invalid'] : ''}`}
            rows={4}
            name='comment'
            placeholder='Примечание'
            aria-invalid={formErrors.comment}
            value={formValues.comment}
            onChange={handleChange}
          />
          {formErrors.comment ? <span style={{color: '#DF3735', fontSize:"11px"}}>Поле заполнено некорректно</span> : null}
        </div>
        <div
          className={`${styles['subscribe-form__check']} ${formErrors.consentPersonalData ? styles['subscribe-form__check_invalid'] : ''}`}
        >
          <input
            className='focusable'
            id='consentPersonalData'
            name='consentPersonalData'
            type='checkbox'
            aria-invalid={formErrors.consentPersonalData}
            checked={formValues.consentPersonalData}
            onChange={handleCheck}
          />
          <label
            htmlFor='consentPersonalData'
          >
            Я даю согласие на обработку персональных данных в соответсвии с <a className='focusable'>политекой обработки персональных данных</a>.
          </label>
        </div>
        <button type="submit" className='focusable'>Подписатсья</button>
      </form>
    </div>
  );
};

export default SubscribeForm;