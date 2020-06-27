import styled from "styled-components";
import emailIcon from '../assets/img/email-icon.svg';
import passIcon from '../assets/img/pass-icon.svg';

const InputsStyled = styled.div`
  input[type=text], input[type=email], input[type=password]   {
    background: #F5F8FA;
    border-radius: 8px;
    height: 50px;
    margin-top: 21px;
    width: 100%;
    border-radius: 8px;
    border: 0;
    padding: 17px 18px 16px;
    box-sizing: border-box;
    font-size: 14px;
    border: 2px solid #F5F8FA;
    &.email {
      background: #F5F8FA url(${emailIcon}) no-repeat; 
      background-position: 18px 16px;
      padding-left: 47px;   
    }
    &.password {
      background: #F5F8FA url(${passIcon}) no-repeat; 
      background-position: 18px 12px;
      padding-left: 47px;   
    }
    &:focus {
    outline: none;
    border: 2px solid #eaeaea;
  }
`;

export default InputsStyled;