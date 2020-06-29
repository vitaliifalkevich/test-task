import React from 'react'
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

const SignUpWindow: React.FC = () => {
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
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        actions.setSubmitting(false)
      }, 2000)
    }
  })
  return (
    <div>
      <TitleStyled>
        <Title title="Create a new account"/>
      </TitleStyled>
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
            onChange={formik.handleChange}/>
        </SelectStyled>
        {formik.errors.chooseCountry ? (
          <ErrorInputStyles>{formik.errors.chooseCountry}</ErrorInputStyles>
        ) : null}
        <RadioStyled>
          <RadioInput name="gender" labelValue="Male" onChange={formik.handleChange}/>
          <RadioInput name="gender" labelValue="Female" onChange={formik.handleChange}/>
        </RadioStyled>
        {formik.errors.gender ? (
          <ErrorInputStyles>{formik.errors.gender}</ErrorInputStyles>
        ) : null}
        <CheckboxStyled>
          <CheckInput
            name="agreement"
            labelValue={(
              <span>Accept <a href='#terms'>terms</a> and <a href='#conditions'>conditions</a></span>
            )}
            onChange={formik.handleChange}/>
        </CheckboxStyled>
        {formik.errors.agreement ? (
          <ErrorInputStyles>{formik.errors.agreement}</ErrorInputStyles>
        ) : null}
        <BtnStyled>
          <Btn title="Sign up" isDisable={!formik.dirty || !formik.isValid || formik.isSubmitting} isSubmiting={formik.isSubmitting} btnType="submit"/>
        </BtnStyled>
      </form>
    </div>
  )
}

export default SignUpWindow
