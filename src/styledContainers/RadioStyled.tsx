import styled from "styled-components";


const RadioStyled = styled.div`
  margin-top: 29px;
  label {
   font-size: 14px;
  }
  display: flex;
   justify-content: space-between;
    width: 140px;
  div {
    display: flex;
  }
  input[type='radio'] {
  margin-right: 7px;
  position: relative;
  display: block;
  margin-top: 1px;
  height: 14px;
  width: 14px;
  &:after {
    width: 14px;
    height: 14px;
    border-radius: 15px;
    box-sizing:border-box;
    position: relative;
    background: #ffffff;
    content: '';
    display: inline-block;
    visibility: visible;
    border: 1px solid #0094FF;
  }
  &:checked {
    &:after {
      width: 12px;
      height: 12px;
      border-radius: 15px;
      top: 1px;
      left: 1px;
      position: absolute;
      background-color: #0094FF;
      content: '';
      display: inline-block;
      visibility: visible;
      border: 2px solid white;
      box-sizing: border-box;
    }
    &:before {
      width: 14px;
      height: 14px;
      position: absolute;
      content: '';
      border: 4px solid #0094FF;
      box-sizing: border-box;
      border-radius: 15px;
      top: 0.1px;
    }
  }
}
`;

export default RadioStyled;