import React from 'react'
import TitleStyled from '../../styledContainers/TitleStyled'
import Title from './Title'
import TextInput from './inputs/TextInput'
import SelectInput from './inputs/SelectInput'
import InputsStyled from '../../styledContainers/InputsStyled'
import SelectStyled from '../../styledContainers/SelectStyled'
import { availableCountries } from '../../constants'
import RadioStyled from '../../styledContainers/RadioStyled'
import RadioInput from './inputs/RadioInput'
import CheckboxStyled from '../../styledContainers/CheckboxStyled'
import CheckInput from './inputs/CheckInput'
import BtnStyled from '../../styledContainers/BtnStyled'
import Btn from './inputs/Btn'

const SignUpWindow = () => {
  return (
    <div>
      <TitleStyled>
        <Title title="Create a new account"/>
      </TitleStyled>
      <form action="">
        <InputsStyled>
          <TextInput name="userName" placeHolder="Enter your name" type="text"/>
          <TextInput name="email" placeHolder="Email" type="email"/>
          <TextInput name="password" placeHolder="Password" type="password"/>
        </InputsStyled>
        <SelectStyled>
          <SelectInput values={availableCountries}
            displayValue="Select country" name="chooseCountry"/>
        </SelectStyled>
        <RadioStyled>
          <RadioInput name="gender" labelValue="Male"/>
          <RadioInput name="gender" labelValue="Female"/>
        </RadioStyled>
        <CheckboxStyled>
          <CheckInput name="aggrement" labelValue={(
            <span>Accept <a href='#'>terms</a> and <a href='#'>conditions</a></span>
          )}/>
        </CheckboxStyled>
        <BtnStyled>
          <Btn title="Sign up" isDisable={true}/>
        </BtnStyled>
      </form>
    </div>
  )
}

export default SignUpWindow
