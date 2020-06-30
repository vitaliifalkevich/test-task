import React, { useState } from 'react'
import TitleStyled from '../styledContainers/TitleStyled'
import Title from './layouts/Title'
import TextInput from './layouts/inputs/TextInput'
import SelectInput from './layouts/inputs/SelectInput'
import InputsStyled from '../styledContainers/InputsStyled'
import SelectStyled from '../styledContainers/SelectStyled'
import { availableCountries } from '../constants'
import RadioStyled from '../styledContainers/RadioStyled'
import RadioInput from './layouts/inputs/RadioInput'
import CheckboxStyled from '../styledContainers/CheckboxStyled'
import CheckInput from './layouts/inputs/CheckInput'
import BtnStyled from '../styledContainers/BtnStyled'
import Btn from './layouts/inputs/Btn'
import { useFormik } from 'formik'
import SignupSchema from '../validationSchemas/SignupSchema'
import ErrorInputStyles from '../styledContainers/ErrorInputStyled'
import { useMutation } from '@apollo/react-hooks'
import { SIGN_UP } from '../graphql/mutators/signUp'
import Alert from './layouts/Alert'
import AlertStyled from '../styledContainers/AlertStyled'
import generateAlertData from '../helpers/generateAlertData'

const SignUpWindow: React.FC = () => {
  const [alert, setAlert] = useState({
    isAlert: false,
    type: 'success',
    message: ''
  })
  const [signUp] = useMutation(SIGN_UP)
  const formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      password: '',
      chooseCountry: '',
      gender: '',
      agreement: []
    },
    validationSchema: SignupSchema,
    onSubmit: (values, actions) => {
      signUp({
        variables: {
          userName: values.userName,
          email: values.email,
          password: values.password,
          country: values.chooseCountry,
          gender: values.gender
        }
      }).then(res => {
        actions.setSubmitting(false)
        generateAlertData(setAlert, 'success', `user ${values.userName} successfully registered`)
        actions.resetForm({
          values: {
            userName: '',
            email: '',
            password: '',
            chooseCountry: '',
            gender: '',
            agreement: []
          }
        })
      }).catch(err => {
        actions.setSubmitting(false)
        generateAlertData(setAlert, 'warning', err.message)
      })
    }
  })
  return (
    <div>
      <TitleStyled>
        <Title title="Create a new account"/>
      </TitleStyled>
      {alert.isAlert ? (
        <AlertStyled>
          <Alert type={alert.type} message={alert.message}/>
        </AlertStyled>
      ) : null}
      <form action="" onSubmit={formik.handleSubmit} autoComplete="off">
        <InputsStyled>
          <TextInput
            name="userName"
            placeHolder="Enter your name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.userName}/>
          {formik.errors.userName ? (
            <ErrorInputStyles>{formik.errors.userName}</ErrorInputStyles>
          ) : null}
          <TextInput
            name="email"
            placeHolder="Email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}/>
          {formik.errors.email ? (
            <ErrorInputStyles>{formik.errors.email}</ErrorInputStyles>
          ) : null}
          <TextInput
            name="password"
            placeHolder="Password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password ? (
            <ErrorInputStyles>{formik.errors.password}</ErrorInputStyles>
          ) : null}
        </InputsStyled>
        <SelectStyled>
          <SelectInput
            values={availableCountries}
            displayValue="Select country"
            name="chooseCountry"
            currentValue={formik.values.chooseCountry}
            onChange={formik.handleChange}/>
        </SelectStyled>
        {formik.errors.chooseCountry ? (
          <ErrorInputStyles>{formik.errors.chooseCountry}</ErrorInputStyles>
        ) : null}
        <RadioStyled>
          <RadioInput name="gender" labelValue="Male" isChecked={formik.values.gender === 'MALE'} value="MALE" onChange={formik.handleChange}/>
          <RadioInput name="gender" labelValue="Female" isChecked={formik.values.gender === 'FEMALE'} value="FEMALE" onChange={formik.handleChange}/>
        </RadioStyled>
        {formik.errors.gender ? (
          <ErrorInputStyles>{formik.errors.gender}</ErrorInputStyles>
        ) : null}
        <CheckboxStyled>
          <CheckInput
            name="agreement"
            isChecked={formik.values.agreement.length !== 0}
            labelValue={(
              <span>Accept <a href='#terms'>terms</a> and <a href='#conditions'>conditions</a></span>
            )}
            onChange={formik.handleChange}/>
        </CheckboxStyled>
        {formik.errors.agreement ? (
          <ErrorInputStyles>{formik.errors.agreement}</ErrorInputStyles>
        ) : null}
        {!alert.isAlert ? (
          <BtnStyled>
            <Btn title="Sign up" isDisable={!formik.dirty || !formik.isValid || formik.isSubmitting} isSubmiting={formik.isSubmitting} btnType="submit"/>
          </BtnStyled>
        ) : null}
      </form>
    </div>
  )
}

export default SignUpWindow
